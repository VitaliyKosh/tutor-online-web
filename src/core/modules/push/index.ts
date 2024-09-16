/* eslint-disable react-hooks/rules-of-hooks */
import { UserAuthStatus } from '@/core/repositories/user-state/types';
import { UserStateService } from '@/core/services/user-state/types';
import PushService from '@/view/mobile/shared/api-services/push-service';
import { Dependencies, Module } from '@/view/mobile/shared/lib/clear';
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
        const authStatus = this.$deps.userService.useUserAuthStatus();

        useEffect(() => {
            const onUserAction = async () => {
                if (this.subscribed) {
                    return;
                }

                this.subscribe();
            };

            const clearListener = () => {
                document.removeEventListener('click', onUserAction);
            };

            if (authStatus === UserAuthStatus.SIGN_IN) {
                document.addEventListener('click', onUserAction);
                this.subscribe();
            } else {
                clearListener();
            }
        }, [authStatus]);
    }

    async subscribe() {
        try {
            const subscription = await this.getSubscription();
            const deviceId = subscription.endpoint;

            await PushService.subscribe({
                subscription: subscription,
                deviceId: deviceId,
            });

            this.subscribed = true;
        } catch (e) {
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
}
