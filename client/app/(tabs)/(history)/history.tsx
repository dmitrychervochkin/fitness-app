import {
    Background,
    HistoryHeader,
    Loader,
    MiniHeader,
    MonthCard,
} from "@/components";
import { COLORS } from "@/constants";
import { server } from "@/bff";
import { IWorkoutHistory } from "@/types";
import { FC, useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, Text } from "react-native";

const HistoryScreen: FC = () => {
    const [workoutHistory, setWorkoutHistory] = useState<IWorkoutHistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [showMiniHeader, setShowMiniHeader] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        server.fetchWorkoutHistory().then(({ res }) => {
            setWorkoutHistory(res || []);
            setLoading(false);
        });
    }, []);

    const handleScroll = ({ nativeEvent }: any) => {
        const yOffset = nativeEvent.contentOffset.y;
        setShowMiniHeader(yOffset > 40);
    };

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            console.log("Данные обновлены!");
        }, 1500);
    };

    return (
        <Background>
            <MiniHeader title="История" show={showMiniHeader} />
            <ScrollView
                contentContainerStyle={[
                    styles.scrollContent,
                    {
                        paddingTop: refreshing ? 50 : 0,
                    },
                ]}
                showsVerticalScrollIndicator={true}
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
                <HistoryHeader />
                {loading ? (
                    <Loader />
                ) : (
                    workoutHistory?.map(({ month, workouts }) => (
                        <MonthCard
                            key={month}
                            month={month}
                            workouts={workouts}
                        />
                    ))
                )}
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 20,
        flexGrow: 1,
        width: "100%",
        gap: 20,
    },
});

export default HistoryScreen;
