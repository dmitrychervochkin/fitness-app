import { transformWorkoutExercise } from "@/bff/transformers";

// ====================== MOCK DATA ======================
const WORKOUT_EXERCISES = [
    {
        id: "uuid-wo-ex-1",
        workout_id: "uuid-wo-1",
        exercise_id: "uuid-ex-1",
        order_index: 1,
    },
    {
        id: "uuid-wo-ex-2",
        workout_id: "uuid-wo-2",
        exercise_id: "uuid-ex-2",
        order_index: 2,
    },
    {
        id: "uuid-wo-ex-3",
        workout_id: "uuid-wo-3",
        exercise_id: "uuid-ex-3",
        order_index: 3,
    },
    {
        id: "uuid-wo-ex-4",
        workout_id: "uuid-wo-4",
        exercise_id: "uuid-ex-4",
        order_index: 4,
    },
    {
        id: "uuid-wo-ex-5",
        workout_id: "uuid-wo-5",
        exercise_id: "uuid-ex-1",
        order_index: 5,
    },
    {
        id: "uuid-wo-ex-6",
        workout_id: "uuid-wo-6",
        exercise_id: "uuid-ex-2",
        order_index: 1,
    },
    {
        id: "uuid-wo-ex-7",
        workout_id: "uuid-wo-7",
        exercise_id: "uuid-ex-3",
        order_index: 2,
    },
    {
        id: "uuid-wo-ex-8",
        workout_id: "uuid-wo-8",
        exercise_id: "uuid-ex-4",
        order_index: 3,
    },
    {
        id: "uuid-wo-ex-9",
        workout_id: "uuid-wo-9",
        exercise_id: "uuid-ex-1",
        order_index: 4,
    },
    {
        id: "uuid-wo-ex-10",
        workout_id: "uuid-wo-10",
        exercise_id: "uuid-ex-2",
        order_index: 5,
    },
    {
        id: "uuid-wo-ex-11",
        workout_id: "uuid-wo-1",
        exercise_id: "uuid-ex-3",
        order_index: 1,
    },
    {
        id: "uuid-wo-ex-12",
        workout_id: "uuid-wo-2",
        exercise_id: "uuid-ex-4",
        order_index: 2,
    },
    {
        id: "uuid-wo-ex-13",
        workout_id: "uuid-wo-3",
        exercise_id: "uuid-ex-1",
        order_index: 3,
    },
    {
        id: "uuid-wo-ex-14",
        workout_id: "uuid-wo-4",
        exercise_id: "uuid-ex-2",
        order_index: 4,
    },
    {
        id: "uuid-wo-ex-15",
        workout_id: "uuid-wo-5",
        exercise_id: "uuid-ex-3",
        order_index: 5,
    },
    {
        id: "uuid-wo-ex-16",
        workout_id: "uuid-wo-6",
        exercise_id: "uuid-ex-4",
        order_index: 1,
    },
    {
        id: "uuid-wo-ex-17",
        workout_id: "uuid-wo-7",
        exercise_id: "uuid-ex-1",
        order_index: 2,
    },
    {
        id: "uuid-wo-ex-18",
        workout_id: "uuid-wo-8",
        exercise_id: "uuid-ex-2",
        order_index: 3,
    },
    {
        id: "uuid-wo-ex-19",
        workout_id: "uuid-wo-9",
        exercise_id: "uuid-ex-3",
        order_index: 4,
    },
    {
        id: "uuid-wo-ex-20",
        workout_id: "uuid-wo-10",
        exercise_id: "uuid-ex-4",
        order_index: 5,
    },
];

export const getWorkoutExercises = async () => {
    try {
        const workoutExercises = WORKOUT_EXERCISES.map(
            transformWorkoutExercise
        );

        return { workoutExercises: workoutExercises, message: null };
    } catch (err) {
        return {
            workoutExercises: null,
            message:
                "Ошибка при получении упражнений из тренировки. Попробуйте позже.",
        };
    }
};
