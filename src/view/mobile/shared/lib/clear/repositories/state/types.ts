/* eslint-disable @typescript-eslint/no-explicit-any */

export type Selector<S extends State, V = any> = (s: S) => V;
export type SubscriptionCallback<V> = (value: V) => void;
export type Subscription<S extends State, Sel extends Selector<S> = Selector<S>> = {
    selector: Sel;
    callback: SubscriptionCallback<ReturnType<Sel>>;
};

export type Setter<T> = (currentValue: T) => T;
export type StateValue = string | number | bigint | boolean | object | null | undefined;
export type State = Record<string, any>;
