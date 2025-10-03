export type WorkoutHistoryPayload = {
    month: string;
    workouts: HWorkout[];
};

type HWorkout = {
    id: string; // UUID тренировки
    date: string; // ISO date "2025-08-10"
    duration: number; // длительность (минуты)
    total_weight: number; // общий вес за тренировку
    notes?: string; // заметки
    template_id?: string; // UUID шаблона
    template_name?: string;
    exercises: HWorkoutExercise[];
};

type HWorkoutExercise = {
    name: string; // название упражнения
    reps: number; // количество подходов
};
