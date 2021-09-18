import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from './weather/weatherService'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

const rootReducer = {
  // Add the generated reducer as a specific top-level slice
  [weatherApi.reducerPath]: weatherApi.reducer,
};
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

// export const persistor = persistStore(store)
