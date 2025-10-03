export interface IWorkoutTemplate {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    isPublic: boolean;
    createdAt: string;
    exerciseCount?: undefined | number;
}
