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

    return (
        <>
            <Animated.View
                style={[
                    styles.container,
                    {
                        backgroundColor: isChecked
                            ? COLORS.gray04
                            : "transparent",
                    },
                ]}
            >
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

                <Text
                    style={[
                        styles.cell,
                        styles.center,
                        { width: COLUMN_WIDTH.previous },
                    ]}
                >
                    {prev || "-"}
                </Text>

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

                <View style={[styles.cell, { width: COLUMN_WIDTH.reps }]}>
                    <Input
                        size="small"
                        placeholder="Кол-во"
                        value={reps}
                        onChangeText={(t) => setReps(t.replace(/[^0-9]/g, ""))}
                        keyboardType="numeric"
                    />
                </View>

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
                            size={30}
                            color={COLORS.primary}
                            onPress={() => setIsChecked(false)}
                        />
                    ) : (
                        <Icon
                            Icon={Square}
                            size={30}
                            color={COLORS.gray04}
                            onPress={() => setIsChecked(true)}
                        />
                    )}
                </View>
            </Animated.View>
        </>
    );
};
