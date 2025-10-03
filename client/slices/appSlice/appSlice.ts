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
    reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
