import { TestStateRepository } from './repository';

export const testStateRepository = new TestStateRepository({
    initialState: {
        test: null,
        activeQuestionIndex: 0,
        answers: {},
        activeTests: [],
        resolvedTests: [],
    },
});
