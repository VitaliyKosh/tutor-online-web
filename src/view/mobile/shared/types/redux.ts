import { rootReducer } from '@/app/providers/store/model/root-reducer';
import { setupStore } from '@/app/providers/store/model/store';

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
