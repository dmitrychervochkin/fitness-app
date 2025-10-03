import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface AppState {
    isStartWorkout: boolean;
    startTime: number | null;
}

const initialState: AppState = {
    isStartWorkout: false,
    startTime: null,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        startWorkout: (state) => {
            state.isStartWorkout = true;
            state.startTime = Date.now();
        },

        finishWorkout: (state) => {
            state.isStartWorkout = false;
        },
    },
});

export const { startWorkout, finishWorkout } = appSlice.actions;
export const selectIsStartWorkout = (state: RootState) =>
    state.app.isStartWorkout;
export const selectStartTime = (state: RootState) => state.app.startTime;

export default appSlice.reducer;
