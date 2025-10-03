import { FC, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "@/components/icon/Icon";
import { Plus, X } from "lucide-react-native";
import { COLORS } from "@/constants";
import { styles } from "./exerciseCard.style";
import { SetCard, TableHeader } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
    addUserExerciseSet,
    selectUserExerciseSets,
} from "@/slices/workoutSlice/workoutSlice";

interface IExerciseCard {
    id: string;
    deleteExercise: (id: string) => void;
}

interface IUserExerciseSets {
    id: string;
    prev: string;
    reps: string;
    weight: string;
    set: number;
    durationSeconds: string;
    rpe: number | null;
}

export const ExerciseCard: FC<IExerciseCard> = ({
    id: exerciseId,
    deleteExercise,
}) => {
    const userExerciseSets = useSelector(selectUserExerciseSets(exerciseId));
    const dispatch = useDispatch();

    const addExerciseSet = () => {
        dispatch(
            addUserExerciseSet({
                exerciseId,
                set: {
                    prev: "",
                    reps: "",
                    weight: "",
                    set: userExerciseSets.length + 1,
                    durationSeconds: "120",
                    rpe: null,
                },
            })
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.exercise}>Упражнение №{exerciseId}</Text>
                <Icon
                    Icon={X}
                    size={25}
                    color={COLORS.gray04}
                    onPress={() => deleteExercise(exerciseId)}
                />
            </View>
            <View style={styles.setsContainer}>
                <TableHeader />
                {userExerciseSets.map(
                    ({ id, prev, reps, weight, set, durationSeconds, rpe }) => (
                        <SetCard
                            key={id}
                            id={id}
                            exerciseId={exerciseId}
                            prev={prev}
                            reps={reps}
                            weight={weight}
                            set={set}
                            durationSeconds={durationSeconds}
                            rpe={rpe}
                        />
                    )
                )}
            </View>
            <View style={styles.addBtn}>
                <Icon
                    Icon={Plus}
                    size={22}
                    color={COLORS.gray04}
                    onPress={addExerciseSet}
                />
            </View>
        </View>
    );
};
