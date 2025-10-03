import { RootState } from "@/store";
import { createSlice, nanoid } from "@reduxjs/toolkit";

interface IUserExerciseSet {
    id: string;
    prev: string;
    reps: string;
    weight: string;
    set: number;
    durationSeconds: string;
    rpe: number | null;
}

interface IUserExercise {
    id: string;
    exerciseId: string;
    orderIndex: number;
    sets: IUserExerciseSet[];
}

interface ICurrentWorkoutState {
    name: string;
    notes: string;
    userExercises: IUserExercise[];
}

const initialState: ICurrentWorkoutState = {
    name: "",
    notes: "",
    userExercises: [],
};

const workoutSlice = createSlice({
    name: "workout",
    initialState,
    reducers: {
        setWorkout: (state, action) => {
            return { ...state, ...action.payload };
        },
        addUserExercise: (state, action) => {
            const id = nanoid(10);
            state.userExercises.push({ id, ...action.payload });
        },
        updateUserExercise: (state, action) => {
            const { id, data } = action.payload;
            const exercise = state.userExercises.find((e) => e.id === id);
            if (exercise) Object.assign(exercise, data);
        },
        removeUserExercise: (state, action) => {
            state.userExercises = state.userExercises.filter(
                (e) => e.id !== action.payload
            );
        },
        addUserExerciseSet: (state, action) => {
            const { exerciseId, set } = action.payload;
            const id = nanoid(10);
            const exercise = state.userExercises.find(
                (e) => e.id === exerciseId
            );

            console.log(exercise);
            if (exercise) exercise.sets.push({ id, ...set });
        },
        updateUserExerciseSet: (state, action) => {
            const { exerciseId, setId, data } = action.payload;
            const exercise = state.userExercises.find(
                (e) => e.id === exerciseId
            );
            if (exercise) {
                const set = exercise.sets.find((s) => s.id === setId);
                if (set) Object.assign(set, data);
            }
        },
        removeUserExerciseSet: (state, action) => {
            const { exerciseId, setId } = action.payload;
            const exercise = state.userExercises.find(
                (e) => e.id === exerciseId
            );
            if (exercise) {
                exercise.sets = exercise.sets.filter((s) => s.id !== setId);
            }
        },
        resetWorkout: () => initialState,
    },
});

export const {
    setWorkout,
    resetWorkout,
    addUserExercise,
    removeUserExercise,
    addUserExerciseSet,
    removeUserExerciseSet,
} = workoutSlice.actions;

export const selectUserExercises = (state: RootState) =>
    state.workout.userExercises;

export const selectUserExerciseSets =
    (exerciseId: string) => (state: RootState) => {
        const exercise = state.workout.userExercises.find(
            (e) => e.id === exerciseId
        );
        return exercise?.sets ?? [];
    };

export default workoutSlice.reducer;
