import {
    Background,
    Button,
    Container,
    HomeHeader,
    Icon,
    Loader,
    TemplateCard,
} from "@/components";
import { MiniHeader } from "@/components/miniHeader/MiniHeader";
import { COLORS } from "@/constants";
import { server } from "@/bff";
import {
    selectIsStartWorkout,
    startWorkout,
} from "@/slices/workoutSlice/workoutSlice";
import { SquarePlus } from "lucide-react-native";
import { FC, useEffect, useRef, useState } from "react";
import {
    Animated,
    FlatList,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IWorkoutTemplate } from "@/types";

const HomeScreen: FC = () => {
    const isStartWorkout = useSelector(selectIsStartWorkout);
    const [showProgress, setShowProgress] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [showMiniHeader, setShowMiniHeader] = useState(false);
    const [workoutTemplates, setWorkoutTemplates] = useState<
        IWorkoutTemplate[] | null
    >([]);
    const [loading, setLoading] = useState(true);
    const translateAnimation = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        server.fetchWorkoutTemplates().then(({ res }) => {
            setWorkoutTemplates(res);
            setLoading(false);
        });
    }, []);

    const handleScroll = (event: any) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        if (yOffset > 40) {
            setShowMiniHeader(true);
        } else {
            setShowMiniHeader(false);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);

        // Симулируем загрузку данных, можно сюда вставить API-запрос
        server.fetchWorkoutTemplates().then(({ res }) => {
            setWorkoutTemplates(res);
            setRefreshing(false);
            console.log("Данные обновлены!");
        });
    };

    useEffect(() => {
        Animated.timing(translateAnimation, {
            toValue: showProgress ? 60 : 0,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, [showProgress]);

    return (
        <Background>
            <MiniHeader title="Главная" show={showMiniHeader} />
            <ScrollView
                contentContainerStyle={{
                    paddingTop: refreshing ? 50 : 0,
                    flexGrow: 1,
                    paddingBottom: showProgress ? 80 : 20,
                    gap: 20,
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={handleScroll}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.primary]}
                        tintColor={COLORS.primary}
                        progressViewOffset={40}
                    />
                }
            >
                <HomeHeader
                    showProgress={showProgress}
                    setShowProgress={setShowProgress}
                />
                <Animated.View
                    style={{
                        transform: [{ translateY: translateAnimation }],
                        gap: 20,
                    }}
                >
                    <Container>
                        <Text style={styles.quickStart}>Быстрый старт</Text>
                        <Button
                            onPress={() => dispatch(startWorkout())}
                            disabled={isStartWorkout}
                        >
                            Начать пустую тренировку
                        </Button>
                    </Container>

                    <Container>
                        <View style={styles.patternsHeader}>
                            <Text style={styles.quickStart}>Шаблоны</Text>
                            <Icon Icon={SquarePlus} size={30} />
                        </View>
                        {loading ? (
                            <Loader />
                        ) : (
                            <FlatList
                                scrollEnabled={false}
                                data={workoutTemplates}
                                renderItem={({ item }) => (
                                    <TemplateCard {...item} />
                                )}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                columnWrapperStyle={{ gap: 10 }}
                                contentContainerStyle={{ gap: 10 }}
                            />
                        )}
                    </Container>
                </Animated.View>
            </ScrollView>
        </Background>
    );
};
const styles = StyleSheet.create({
    patternsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    patterns: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
    },
    quickStart: {
        fontSize: 20,
        color: COLORS.text,
        fontWeight: 600,
    },
});

export default HomeScreen;
