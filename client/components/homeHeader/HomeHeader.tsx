import { FC, useEffect, useRef, useState } from "react";
import { Animated, SafeAreaView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextButton } from "../button/TextButton";
import { COLORS } from "@/constants";
import { Icon } from "../icon/Icon";
import { X } from "lucide-react-native";
import { IHomeHeader } from "./homeHeader.interface";

import { NewFeaturesModal } from "../newFeaturesModal/NewFeaturesModal";
import { styles } from "./homeHeader.style";

type WeekType = {
    day: number;
    complete: boolean;
};

const WEEKS_MOCK: WeekType[] = [
    { day: 1, complete: false },
    { day: 2, complete: true },
    { day: 3, complete: true },
    { day: 4, complete: false },
    { day: 5, complete: false },
    { day: 6, complete: false },
    { day: 7, complete: false },
];

export const HomeHeader: FC<IHomeHeader> = ({
    showProgress,
    setShowProgress,
}) => {
    const [week, setWeek] = useState<WeekType[]>([]);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const completedDays = week.filter((item) => item.complete).length;
    const progressAnimation = useRef(new Animated.Value(-200)).current;
    const headerAnimation = useRef(new Animated.Value(0)).current;
    const opacityAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const loadWeek = async () => {
            const today = new Date();
            const currentDay = today.getDay() === 0 ? 7 : today.getDay(); // 1..7

            const savedWeekStr = await AsyncStorage.getItem("weekProgress");

            let newWeek: WeekType[] = WEEKS_MOCK.map((w) => ({
                ...w,
                complete: false,
            }));

            if (savedWeekStr && currentDay !== 1) {
                newWeek = JSON.parse(savedWeekStr);
            }

            // Отмечаем сегодняшний день как complete (если еще не выполнен)
            newWeek = newWeek.map((w) =>
                w.day === currentDay ? { ...w, complete: true } : w
            );

            setWeek(newWeek);

            await AsyncStorage.setItem("currentDay", currentDay.toString());
            await AsyncStorage.setItem("weekProgress", JSON.stringify(newWeek));
        };

        loadWeek();
    }, []);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(progressAnimation, {
                toValue: showProgress ? 90 : -200,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnimation, {
                toValue: showProgress ? 1 : 0,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(headerAnimation, {
                toValue: showProgress ? 60 : 0,
                duration: 400,
                useNativeDriver: false,
            }),
        ]).start();
    }, [showProgress, progressAnimation, headerAnimation, opacityAnimation]);

    return (
        <>
            <SafeAreaView style={styles.header}>
                <Animated.View
                    style={[
                        styles.headerContainer,
                        { marginBottom: headerAnimation },
                    ]}
                >
                    <Text style={styles.headerTitle}>Главная</Text>
                    {!showProgress && (
                        <TextButton onPress={() => setShowProgress(true)}>
                            Прогресс
                        </TextButton>
                    )}
                    <TextButton onPress={() => setIsFeaturesOpen(true)}>
                        New in 1.0
                    </TextButton>
                    <Animated.View
                        style={[
                            styles.progress,
                            { transform: [{ translateY: progressAnimation }] },
                            { opacity: opacityAnimation },
                        ]}
                        pointerEvents="box-none"
                    >
                        <View style={styles.progressHeader}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: 20,
                                    alignItems: "center",
                                }}
                            >
                                <Text style={styles.progressTitle}>
                                    Ваш прогресс
                                </Text>
                                <Text style={styles.headerCompleted}>
                                    {`${completedDays}/${WEEKS_MOCK.length}`}
                                </Text>
                            </View>
                            <Icon
                                Icon={X}
                                size={25}
                                onPress={() => setShowProgress(false)}
                            />
                        </View>
                        <View style={styles.progressWeeks}>
                            {week.map(({ day, complete }) => (
                                <View
                                    key={day}
                                    style={[
                                        styles.dayContainer,
                                        {
                                            borderColor: complete
                                                ? COLORS.primary
                                                : COLORS.gray04,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.day,
                                            {
                                                color: complete
                                                    ? COLORS.primary
                                                    : COLORS.text,
                                            },
                                        ]}
                                    >
                                        {day}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </Animated.View>
                </Animated.View>
            </SafeAreaView>
            <NewFeaturesModal
                isFeaturesOpen={isFeaturesOpen}
                setIsFeaturesOpen={setIsFeaturesOpen}
            />
        </>
    );
};
