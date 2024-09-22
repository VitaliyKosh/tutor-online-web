/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useLayoutEffect, useState } from 'react';
import { Selector, State, StateRepository, SubscriptionCallback } from '../../repositories/state';
import { Service } from '../../service';

export class StateService<S extends State, R extends StateRepository<S>> extends Service<R> {
    subscribe<Sel extends Selector<S>>(
        selector: Sel,
        callback: SubscriptionCallback<ReturnType<Sel>>,
    ) {
        return this.$repository.subscribe(selector, callback);
    }

    useObservableValue<T>(selector: (s: S) => T, defaultValue: T): T;
    useObservableValue<T>(selector: (s: S) => T, defaultValue?: T): T;

    useObservableValue<T>(selector: (s: S) => T, defaultValue?: T) {
        const [value, setValue] = useState(selector(this.$repository.state) ?? defaultValue);

        useLayoutEffect(() => {
            const unsubscribe = this.subscribe(selector, (v) => setValue(v));

            return () => {
                unsubscribe();
            };
        }, []);

        return value;
    }
}
