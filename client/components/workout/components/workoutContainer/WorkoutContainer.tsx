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
import { ConfirmModal } from "@/components/confirmModal/ConfirmModal";
import { finishWorkout } from "@/slices/workoutSlice/workoutSlice";
import { IWorkoutContainer } from "./workoutContainer.interface";


export const WorkoutContainer: FC<IWorkoutContainer> = ({
    setIsHide,
}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
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
                <Button
                    size="small"
                    btnStyle="danger"
                    onPress={() => setIsOpenModal(true)}
                >
                    Отменить тренировку
                </Button>
            </View>
            <ConfirmModal
                visible={isOpenModal}
                title="Отменить тренировку"
                message="Весь несохранённый прогресс потеряется. Вы действительно хотите отменить тренировку?"
                confirmText="Отменить"
                cancelText="Закрыть"
                confirmStyle="danger"
                dismissOnBackdropPress={true}
                onCancel={() => setIsOpenModal(false)}
                onConfirm={() => {
                    setIsOpenModal(false);
                    setIsHide(true);
                    setTimeout(() => {
                        dispatch(finishWorkout());
                        setIsHide(false);
                    }, 200);
                }}
            />
        </View>
    );
};
