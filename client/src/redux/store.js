import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { membersReducer } from './reducers/membersReducer';
import { productsReducer } from './reducers/productsReducer';
import { shippingReducer } from './reducers/shippingReducer';
import { showsReducer } from './reducers/showsReducer';
import cartReducer from './cartRedux';
import thunk from 'redux-thunk';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({ 
    members: membersReducer,
    shows: showsReducer,
    products: productsReducer,
    shipping: shippingReducer,
    cart: cartReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      immutableCheck: false
    }).concat(thunk),
});

export let persistor = persistStore(store);