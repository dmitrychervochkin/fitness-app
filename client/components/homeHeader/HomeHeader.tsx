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
    complete: boolean | null;
};

const WEEKS_MOCK: WeekType[] = [
    { day: 1, complete: null },
    { day: 2, complete: null },
    { day: 3, complete: null },
    { day: 4, complete: null },
    { day: 5, complete: null },
    { day: 6, complete: null },
    { day: 7, complete: null },
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
    const today = new Date().getDay();
    const todayIndex = today === 0 ? 7 : today;

    useEffect(() => {
        const loadWeek = async () => {
            const today = new Date();
            const currentDay = today.getDay() === 0 ? 7 : today.getDay(); // 1..7

            // Получаем сохранённую неделю
            const savedWeekStr = await AsyncStorage.getItem("weekProgress");
            let newWeek: WeekType[] = WEEKS_MOCK.map((w) => ({ ...w }));

            if (savedWeekStr) {
                const savedWeek: WeekType[] = JSON.parse(savedWeekStr);

                // Обновляем статусы дней с учётом нового дня
                newWeek = savedWeek.map((w) => {
                    if (w.day < currentDay && w.complete === null) {
                        // День прошёл, но не отмечен
                        return { ...w, complete: false };
                    }
                    if (w.day === currentDay) {
                        // Сегодняшний день
                        return { ...w, complete: true };
                    }
                    if (w.day > currentDay) {
                        // День ещё не наступил
                        return { ...w, complete: null };
                    }
                    return w; // уже установлен true/false
                });
            } else {
                // Если данных нет, создаём с сегодняшним днём
                newWeek = newWeek.map((w) => {
                    if (w.day < currentDay) return { ...w, complete: false };
                    if (w.day === currentDay) return { ...w, complete: true };
                    return { ...w, complete: null };
                });
            }

            setWeek(newWeek);

            // Сохраняем в AsyncStorage
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
                                            borderColor:
                                                complete === true
                                                    ? COLORS.primary
                                                    : complete === false
                                                    ? COLORS.error
                                                    : COLORS.gray04, // null
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.day,
                                            {
                                                color:
                                                    complete === true
                                                        ? COLORS.primary
                                                        : complete === false
                                                        ? COLORS.error
                                                        : COLORS.text, // null
                                            },
                                        ]}
                                    >
                                        {day}
                                    </Text>
                                    {day === todayIndex && (
                                        <View style={styles.todayDot}></View>
                                    )}
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
