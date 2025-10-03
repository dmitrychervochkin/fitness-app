import { FC, useState } from "react";
import { View, Text } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ISetCard } from "./setCard.interface";
import { CheckSquare, Square } from "lucide-react-native";
import { styles } from "./setCard.style";
import { COLORS } from "@/constants";
import { Input } from "@/components/input/Input";
import { COLUMN_WIDTH } from "../../constants";
import { Icon } from "@/components/icon/Icon";
import { useDispatch } from "react-redux";
import { removeUserExerciseSet } from "@/slices/workoutSlice/workoutSlice";
import { formatTime } from "@/utils";

export const SetCard: FC<ISetCard> = ({
    id,
    prev,
    reps: repsState,
    weight: weightState,
    set,
    exerciseId,
    durationSeconds: durationSecondsState,
}) => {
    const [weight, setWeight] = useState(weightState);
    const [reps, setReps] = useState(repsState);
    const [isChecked, setIsChecked] = useState(false);
    const [durationSeconds, setDurationSeconds] =
        useState(durationSecondsState);

    const dispatch = useDispatch();
    const translateX = useSharedValue(0);
    const threshold = -100;

    // свайп жест
    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            if (e.translationX < 0) {
                translateX.value = e.translationX;
            }
        })
        .onEnd((e) => {
            if (e.translationX < threshold) {
                translateX.value = withTiming(-500, { duration: 200 }, () => {
                    runOnJS(dispatch)(
                        removeUserExerciseSet({ exerciseId, setId: id })
                    );
                    translateX.value = 0;
                });
            } else {
                translateX.value = withSpring(0, { stiffness: 150 });
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View
                style={[
                    styles.container,
                    {
                        backgroundColor: isChecked
                            ? COLORS.gray04
                            : "transparent",
                    },
                    animatedStyle,
                ]}
            >
                {/* Номер сета */}
                <Text
                    style={[
                        styles.cell,
                        styles.center,
                        styles.set,
                        { width: COLUMN_WIDTH.index },
                    ]}
                >
                    {set}
                </Text>

                {/* Предыдущий результат */}
                <Text
                    style={[
                        styles.cell,
                        styles.center,
                        { width: COLUMN_WIDTH.previous },
                    ]}
                >
                    {prev || "-"}
                </Text>

                {/* Вес */}
                <View style={[styles.cell, { width: COLUMN_WIDTH.weight }]}>
                    <Input
                        size="small"
                        placeholder="Вес"
                        value={weight}
                        onChangeText={(t) =>
                            setWeight(t.replace(/[^0-9]/g, ""))
                        }
                        keyboardType="numeric"
                    />
                </View>

                {/* Повторы */}
                <View style={[styles.cell, { width: COLUMN_WIDTH.reps }]}>
                    <Input
                        size="small"
                        placeholder="Кол-во"
                        value={reps}
                        onChangeText={(t) => setReps(t.replace(/[^0-9]/g, ""))}
                        keyboardType="numeric"
                    />
                </View>

                {/* Чекбокс */}
                <View
                    style={[
                        styles.cell,
                        styles.iconCell,
                        { width: COLUMN_WIDTH.check },
                    ]}
                >
                    {isChecked ? (
                        <Icon
                            Icon={CheckSquare}
                            size={25}
                            color={COLORS.primary}
                            onPress={() => setIsChecked(false)}
                        />
                    ) : (
                        <Icon
                            Icon={Square}
                            size={25}
                            color={COLORS.gray04}
                            onPress={() => setIsChecked(true)}
                        />
                    )}
                </View>

                {/* Анимация длительности */}
                <View style={styles.durationContainer}>
                    <View
                        style={[
                            styles.durationLine,
                            styles.durationTimelineBack,
                        ]}
                    />
                    {isChecked && (
                        <Animated.View
                            style={[
                                styles.durationLine,
                                styles.durationTimeline,
                                {
                                    width: `${
                                        (1 - Number(durationSeconds) / 60) * 100
                                    }%`,
                                },
                            ]}
                        />
                    )}
                    <Animated.Text
                        style={[
                            styles.durationTimeText,
                            {
                                color: isChecked
                                    ? COLORS.primary
                                    : COLORS.gray04,
                            },
                        ]}
                    >
                        {formatTime(durationSeconds)}
                    </Animated.Text>
                </View>
            </Animated.View>
        </GestureDetector>
    );
};
