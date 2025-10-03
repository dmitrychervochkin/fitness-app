import { Button } from "@/components/button/Button";
import { FC, useState } from "react";
import { View } from "react-native";
import { styles } from "./workoutContainer.style";
import { ExerciseCard } from "./components";
import {
    selectUserExercises,
    addUserExercise,
    removeUserExercise,
} from "@/slices/workoutSlice/workoutSlice";
import { useDispatch, useSelector } from "react-redux";

interface IWorkoutContainer {}

export const WorkoutContainer: FC<IWorkoutContainer> = () => {
    const userExercises = useSelector(selectUserExercises);
    const dispatch = useDispatch();

    const addExercise = () => {
        dispatch(addUserExercise({ exerciseId: 1, sets: [] }));
    };
    const deleteExercise = (id: string) => {
        dispatch(removeUserExercise(id));
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardsContainer}>
                {userExercises.map(({ id }) => (
                    <ExerciseCard
                        key={id}
                        id={id}
                        deleteExercise={deleteExercise}
                    />
                ))}
            </View>
            <View style={styles.actions}>
                <Button size="small" onPress={addExercise}>
                    Добавить упражнение
                </Button>
                <Button size="small" btnStyle="danger">
                    Отменить тренировку
                </Button>
            </View>
        </View>
    );
};
