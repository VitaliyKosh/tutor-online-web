/**
 * Converts a base64 string to a Uint8Array.
 *
 * @function
 * @param {string} base64String - The base64 encoded string to convert.
 * @returns {Uint8Array} - The converted Uint8Array.
 */
const urlBase64ToUint8Array = (base64String: string): Uint8Array => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
};

/**
 * Enumeration of potential error codes.
 *
 * @enum {string}
 */
export enum Errors {
    ServiceWorkerNotSupported = 'ServiceWorkerNotSupported',
    PushManagerNotSupported = 'PushManagerNotSupported',
    PushManagerUnavailable = 'PushManagerUnavailable',
    ExistingSubscription = 'ExistingSubscription',
    Unknown = 'Unknown',
}

/**
 * Interface for subscription properties.
 *
 * @interface
 */
interface SubscribeProps {
    publicKey: string;
}

/**
 * Custom hook to manage push notifications subscription.
 *
 * @function
 * @param {SubscribeProps} - The public key for the VAPID protocol.
 * @returns {Object} - An object containing the `getSubscription` function.
 */
export const useSubscribe = ({ publicKey }: SubscribeProps) => {
    /**
     * Gets a push subscription for the current user.
     *
     * @async
     * @function
     * @returns {Promise<PushSubscription>} - A promise that resolves to a PushSubscription.
     * @throws {ErrorObject} - An object containing an error code.
     */
    const getSubscription = async (): Promise<PushSubscription> => {
        if (!('serviceWorker' in navigator)) {
            throw new Error(Errors.ServiceWorkerNotSupported);
        }

        if (!('PushManager' in window)) {
            throw new Error(Errors.PushManagerNotSupported);
        }

        const registration = await navigator.serviceWorker.ready;

        if (!registration.pushManager) {
            throw new Error(Errors.PushManagerUnavailable);
        }

        // const existingSubscription = await registration.pushManager.getSubscription()

        // if (existingSubscription) {
        //     throw new Error(Errors.ExistingSubscription)
        // }

        const convertedVapidKey = urlBase64ToUint8Array(publicKey);
        return await registration.pushManager.subscribe({
            applicationServerKey: convertedVapidKey,
            userVisibleOnly: true,
        });
    };

    return { getSubscription };
};
