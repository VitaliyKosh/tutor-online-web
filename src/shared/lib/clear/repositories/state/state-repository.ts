import { Repository } from '../../repository';
import { Selector, State, Subscription, SubscriptionCallback } from './types';

export class StateRepository<S extends State> extends Repository {
    private subscriptions: Subscription<S>[] = [];
    private _state: S;

    constructor({ initialState }: { initialState: S }) {
        super();
        this._state = initialState;
    }

    get state(): S {
        return this._state;
    }

    private set state(newPartialState: Partial<S>) {
        const oldState = this.state;
        const newState = { ...this.state, ...newPartialState };

        this._state = newState;
        this.emit(oldState, newState);
    }

    setState(setter: ((value: S) => Partial<S>) | Partial<S>) {
        this.state = {
            ...this.state,
            ...(typeof setter === 'function' ? setter(this.state) : setter),
        };
    }

    subscribe<Sel extends Selector<S>>(
        selector: Sel,
        callback: SubscriptionCallback<ReturnType<Sel>>,
    ) {
        const subscription = { selector, callback };
        this.subscriptions.push(subscription);

        return () => {
            this.subscriptions.splice(this.subscriptions.indexOf(subscription));
        };
    }

    private emit(oldState: S, newState: S) {
        this.subscriptions.forEach(({ selector, callback }) => {
            const oldValue = selector(oldState);
            const newValue = selector(newState);

            if (oldValue !== newValue) {
                callback(newValue);
            }
        });
    }
}
