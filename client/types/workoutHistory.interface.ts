export interface IWorkoutHistory {
    month: string;
    workouts: HWorkout[];
}

export interface HWorkout {
    id: string; // UUID тренировки
    date: string; // ISO date "2025-08-10"
    duration: number; // длительность (минуты)
    totalWeight: number; // общий вес за тренировку
    notes?: string; // заметки
    templateId?: string; // UUID шаблона
    templateName?: string;
    exercises: HWorkoutExercise[];
}

export interface HWorkoutExercise {
    name: string;
    reps: number;
}
