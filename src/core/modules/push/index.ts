/* eslint-disable react-hooks/rules-of-hooks */
import { user } from '@/core/app';
import { UserAuthStatus } from '@/core/repositories/user-state/types';
import { UserStateService } from '@/core/services/user-state/types';
import PushService from '@/view/mobile/shared/api-services/push-service';
import { Dependencies, Module } from '@/shared/clear';
import { info } from '@/view/mobile/shared/lib/info';
import { useEffect } from 'react';

export interface PushModuleDeps extends Dependencies {
    userService: UserStateService;
}

export class PushModule extends Module<PushModuleDeps> {
    private ERRORS = {
        ServiceWorkerNotSupported: 'ServiceWorkerNotSupported',
        PushManagerNotSupported: 'PushManagerNotSupported',
        PushManagerUnavailable: 'PushManagerUnavailable',
        ExistingSubscription: 'ExistingSubscription',
        Unknown: 'Unknown',
    };
    private PUBLIC_KEY =
        'BLpOhkXw2ZdEAAc16w-oJV3E4QoztmsKl-awkf6-bA4DYcjgXDBU2zLPE8lMqcw6P2ihgmovm-cpGW8uBirzKqg';
    private subscribed = false;

    usePush() {
        const authStatus = user.useUserAuthStatus();

        info.log('usePush');

        useEffect(() => {
            info.log('authStatus', authStatus);

            const onUserAction = async () => {
                info.log('onUserAction', this.subscribed, 'authStatus', authStatus);

                if (this.subscribed) {
                    clearListener();
                    return;
                }

                if (authStatus === UserAuthStatus.SIGN_IN) {
                    await this.subscribe();
                    clearListener();
                }
            };

            const clearListener = () => {
                info.log('clearListener');
                document.removeEventListener('click', onUserAction);
            };

            document.addEventListener('click', onUserAction);

            return () => {
                clearListener();
            };
        }, [authStatus]);

        useEffect(() => {
            info.log('mount');

            return () => {
                info.log('unmount');
            };
        }, []);
    }

    async subscribe() {
        info.log('subscribe');

        try {
            const subscription = await this.getSubscription();
            const deviceId = subscription.endpoint;

            info.log('subscribe data:', String(subscription), deviceId);

            await PushService.subscribe({
                subscription: subscription,
                deviceId: deviceId,
            });

            this.subscribed = true;
        } catch (e) {
            info.log('subscribe warn', String(e));
            console.warn(e);
        }
    }

    async getSubscription(): Promise<PushSubscription> {
        if (!('serviceWorker' in navigator)) {
            throw new Error(this.ERRORS.ServiceWorkerNotSupported);
        }

        if (!('PushManager' in window)) {
            throw new Error(this.ERRORS.PushManagerNotSupported);
        }

        const registration = await navigator.serviceWorker.ready;

        if (!registration.pushManager) {
            throw new Error(this.ERRORS.PushManagerUnavailable);
        }

        const existingSubscription = await registration.pushManager.getSubscription();

        if (existingSubscription) {
            return existingSubscription;
        }

        const convertedVapidKey = this.urlBase64ToUint8Array(this.PUBLIC_KEY);

        return await registration.pushManager.subscribe({
            applicationServerKey: convertedVapidKey,
            userVisibleOnly: true,
        });
    }

    private urlBase64ToUint8Array(base64String: string): Uint8Array {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
    }

    async askPermission() {
        const permissionResult_1 = await new Promise(function (resolve, reject) {
            const permissionResult = Notification.requestPermission(function (result) {
                resolve(result);
            });

            if (permissionResult) {
                permissionResult.then(resolve, reject);
            }
        });
        if (permissionResult_1 !== 'granted') {
            throw new Error("We weren't granted permission.");
        }
    }
}
