import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    FlatList,
    Dimensions,
    Modal,
} from "react-native";
import { useRef, useState } from "react";
import { MoveRight, X } from "lucide-react-native";
import { COLORS } from "@/constants";
import { Button, Icon } from "@/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigate } from "@/hooks";

const { width } = Dimensions.get("window");

const SLIDES = [
    {
        img: require("../../assets/images/slide-1.png"),
        title: "💪 Приветствуем!",
        description:
            "MAMONT Group — это не просто тренировки, а полный фитнес-партнёр, который поможет добиться формы мечты без лишней путаницы и стресса.",
    },
    {
        img: require("../../assets/images/slide-2.png"),
        title: "🏋️‍♂️ Начнём с простого",
        description:
            "Укажите свой уровень подготовки и цель, а мы подберём понятный план занятий, который реально впишется в ваш график и образ жизни.",
    },
    {
        img: require("../../assets/images/slide-3.png"),
        title: "⚡ Видимый прогресс",
        description:
            "Всего пару недель регулярных тренировок — и вы заметите, как меняется тело, улучшается самочувствие и появляется дополнительная энергия.",
    },
    {
        img: require("../../assets/images/slide-4.png"),
        title: "📊 Отслеживайте успехи",
        description:
            "Записывайте результаты, фиксируйте рекорды и наблюдайте, как каждая тренировка приближает вас к личной цели шаг за шагом.",
    },
    {
        img: require("../../assets/images/slide-5.png"),
        title: "🚀 Начни сейчас",
        description:
            "Откройте доступ к персональным программам, полезным советам и постоянной поддержке, чтобы быстрее достичь желаемого результата.",
    },
];

export default function QuizScreen() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigate();

    const handleNext = () => {
        if (currentSlide === SLIDES.length - 1) {
            setIsModalVisible(true);
            return;
        }
        const nextIndex =
            currentSlide + 1 < SLIDES.length ? currentSlide + 1 : currentSlide;
        setCurrentSlide(nextIndex);
        flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
        });
    };

    const onDotClicked = (index: number) => {
        setCurrentSlide(index);
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };
    const onRegClicked = () => {
        setIsModalVisible(false);
        navigation.navigate("Auth", { type: "register" });
    };
    const onLoginClicked = () => {
        setIsModalVisible(false);
        navigation.navigate("Auth", { type: "login" });
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={SLIDES}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, i) => i.toString()}
                onMomentumScrollEnd={({ nativeEvent }) => {
                    const slideIndex = Math.round(
                        nativeEvent.contentOffset.x / width
                    );
                    setCurrentSlide(slideIndex);
                }}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        <View style={styles.imageContainer}>
                            <Image source={item.img} style={styles.image} />
                        </View>
                    </View>
                )}
            />

            <View style={styles.slideFooter}>
                <View style={{ gap: 30 }}>
                    <Text style={styles.slideTitle}>
                        {SLIDES[currentSlide].title}
                    </Text>
                    <Text style={styles.slideDescription}>
                        {SLIDES[currentSlide].description}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        flex: 1,
                    }}
                >
                    <View style={styles.dotsContainer}>
                        {SLIDES.map((_, index) => (
                            <Pressable
                                key={index}
                                onPress={() => onDotClicked(index)}
                            >
                                <View
                                    style={[
                                        styles.dot,
                                        currentSlide === index &&
                                            styles.activeDot,
                                    ]}
                                />
                            </Pressable>
                        ))}
                    </View>
                    <Pressable onPress={handleNext}>
                        {({ pressed }) =>
                            currentSlide === SLIDES.length - 1 ? (
                                <Text
                                    style={{
                                        fontSize: 30,
                                        fontWeight: "500",
                                        color: pressed
                                            ? COLORS.primary
                                            : COLORS.text,
                                    }}
                                >
                                    Начать
                                </Text>
                            ) : (
                                <MoveRight
                                    size={50}
                                    color={
                                        pressed ? COLORS.gray05 : COLORS.text
                                    }
                                />
                            )
                        }
                    </Pressable>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(!isModalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalText}>
                                Войти в аккаунт
                            </Text>
                            <Icon
                                Icon={X}
                                onPress={() =>
                                    setIsModalVisible(!isModalVisible)
                                }
                            />
                        </View>
                        <Button onPress={onRegClicked}>Регистрация</Button>
                        <Button btnStyle="outline" onPress={onLoginClicked}>
                            Авторизоваться
                        </Button>
                        <Text style={styles.description}>
                            Чтобы продолжить и получить доступ ко всем функциям
                            приложения, войдите в свой аккаунт или создайте
                            новый за пару минут прямо сейчас!
                        </Text>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray01,
        gap: 20,
    },
    slide: {
        flex: 1,
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: "100%", // теперь контейнер занимает всю высоту слайда
        paddingBottom: 200,
        borderRadius: 30,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: "100%", // растягиваем картинку на весь контейнер
        resizeMode: "cover", // чтобы изображение заполняло контейнер без искажений
    },
    slideFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: COLORS.gray02,
        paddingHorizontal: 20,
        paddingVertical: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 15,
        minHeight: 320,
        boxShadow: "0 0 100px 5px #3eb942",
    },
    slideTitle: {
        fontSize: 30,
        fontWeight: "600",
        color: COLORS.text,
    },
    slideDescription: {
        fontSize: 17,
        color: COLORS.gray05,
    },
    dotsContainer: {
        flexDirection: "row",
        gap: 12,
        // width: "100%",
        justifyContent: "center",
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: COLORS.gray04,
    },
    activeDot: { backgroundColor: COLORS.text },

    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalView: {
        backgroundColor: COLORS.gray02,
        borderRadius: 20,
        padding: 20,
        paddingTop: 30,
        gap: 20,
        height: 400,
        boxShadow: "0 0 100px 100px #393939",
    },
    modalText: {
        fontSize: 30,
        fontWeight: 600,
        color: COLORS.text,
        textAlign: "center",
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    description: {
        color: COLORS.gray04,
    },
});
