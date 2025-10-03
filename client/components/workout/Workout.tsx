import { finishWorkout, selectIsStartWorkout } from "@/slices/workoutSlice/workoutSlice";
import React, { FC, useEffect, useRef, useState } from "react";
import {
    StatusBar,
    Dimensions,
    Platform,
    Text,
    View,
    TouchableOpacity,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./workout.style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../button/Button";
import { Calendar, Clock } from "lucide-react-native";
import { Icon } from "../icon/Icon";
import { COLORS } from "@/constants";
import { Timer, WorkoutContainer } from "./components";
import { ConfirmModal } from "../confirmModal/ConfirmModal";

export const Workout: FC = () => {
    const isStartWorkout = useSelector(selectIsStartWorkout);
    const dispatch = useDispatch();
    const deviceHeight = Dimensions.get("window").height;
    const insets = useSafeAreaInsets();
    const topInset =
        insets.top ||
        (Platform.OS === "ios" ? 20 : StatusBar.currentHeight || 24);
    const slideAnim = useRef(new Animated.Value(deviceHeight)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isHide, setIsHide] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleScroll = ({ nativeEvent }: any) => {
        const yOffset = nativeEvent.contentOffset.y;
        setShowTime(yOffset > 40);
    };

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: showTime ? 1 : 0,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, [showTime, fadeAnim]);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isHide ? 0 : 100,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, [isHide, slideAnim]);

    if (!isStartWorkout) return null;

    return (
        <>
            <Modal
                isVisible={!isHide}
                swipeDirection="down"
                onSwipeComplete={() => setIsHide(true)}
                backdropOpacity={0.5}
                style={styles.modal}
                scrollOffsetMax={300}
                propagateSwipe
            >
                <View
                    style={[
                        styles.container,
                        styles.mainContainer,
                        { height: deviceHeight - topInset },
                    ]}
                >
                    <View style={styles.line}></View>
                    <View style={styles.headerActions}>
                        <Icon Icon={Clock} color={COLORS.gray04} size={30} />
                        <Timer style={styles.mainTime} animation={fadeAnim} />

                        <Button
                            size="small"
                            onPress={() => {
                                setIsOpenModal(true);
                            }}
                        >
                            Завершить
                        </Button>
                    </View>
                    <ScrollView
                        style={{
                            flexGrow: 1,
                            borderTopWidth: showTime ? 1 : 0,
                            borderTopColor: COLORS.gray03,
                            marginBottom: -20,
                        }}
                        showsVerticalScrollIndicator={false}
                        onScroll={handleScroll}
                    >
                        <TouchableWithoutFeedback
                            onPress={Keyboard.dismiss}
                            accessible={false}
                        >
                            <View>
                                <View style={styles.header}>
                                    <Text style={styles.headerTitle}>
                                        Тренировка
                                    </Text>
                                    <View style={styles.headerRow}>
                                        <Calendar
                                            color={COLORS.gray04}
                                            size={20}
                                        />
                                        <Text style={styles.headerText}>
                                            18 авг. 2025г.
                                        </Text>
                                    </View>
                                    <View style={styles.headerRow}>
                                        <Clock
                                            color={COLORS.gray04}
                                            size={20}
                                        />
                                        <Timer style={styles.headerText} />
                                    </View>
                                    <WorkoutContainer setIsHide={setIsHide} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                    <ConfirmModal
                        visible={isOpenModal}
                        title="Закончить тренировку"
                        message="Вы хотите завершить тренировку?"
                        confirmText="Завершить"
                        cancelText="Отмена"
                        confirmStyle="primary"
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
            </Modal>

            <TouchableOpacity
                onPress={() => setIsHide(false)}
                activeOpacity={1}
            >
                <Animated.View
                    style={[
                        styles.container,
                        styles.hideContainer,
                        { transform: [{ translateY: slideAnim }] },
                    ]}
                >
                    <View style={styles.line}></View>
                    <Timer style={styles.hideTime} />
                </Animated.View>
            </TouchableOpacity>
        </>
    );
};
