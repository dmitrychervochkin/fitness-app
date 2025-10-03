import { HWorkoutExercise } from "@/types";

export interface IHistoryCard {
    notes?: string | undefined; // название тренировки
    date: Date | string; // дата тренировки
    duration: number; // длительность в секундах
    totalWeight: number; // общий поднятый вес
    templateName?: string;
    templateId?: string;
    exercises: HWorkoutExercise[];
}
