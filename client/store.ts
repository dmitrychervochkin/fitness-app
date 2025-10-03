import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/authSlice";
import appReducer from "./slices/appSlice/appSlice";
import workoutReducer from "./slices/workoutSlice/workoutSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        workout: workoutReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
