import { Clock, Menu, Weight, X } from "lucide-react-native";
import { FC, useState, useRef } from "react";
import { Text, View, LayoutRectangle, TouchableOpacity } from "react-native";
import { Icon } from "../../../icon/Icon";
import { COLORS } from "@/constants";
import { IHistoryCard } from "./historyCard.interface";
import { Popover } from "../../../popover/Popover";
import { styles } from "./historyCard.style";
import { formatDateRu, secondsToMinutes } from "./utils";

export const HistoryCard: FC<IHistoryCard> = ({
    date,
    duration,
    totalWeight,
    exercises,
    notes,
    templateName,
    templateId,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iconLayout, setIconLayout] = useState<LayoutRectangle | null>(null);
    const iconRef = useRef<View>(null);

    const toggleModal = () => {
        if (iconRef.current) {
            iconRef.current.measure((x, y, width, height, pageX, pageY) => {
                setIconLayout({ x: pageX, y: pageY, width, height });
                setIsModalOpen(!isModalOpen);
            });
        }
    };

    return (
        <View style={styles.container}>
            {/* Заголовок */}
            <View style={styles.header}>
                <Text style={styles.title}>{templateName}</Text>

                <View ref={iconRef}>
                    <Icon
                        Icon={Menu}
                        size={25}
                        color={COLORS.gray04}
                        onPress={toggleModal}
                    />
                </View>
            </View>
            <View style={styles.notesContainer}>
                <Text style={styles.notes}>{notes}</Text>
            </View>
            {/* Поповер модалка */}
            <Popover
                iconLayout={iconLayout}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <TouchableOpacity
                    style={styles.popoverItem}
                    onPress={() => setIsModalOpen(false)}
                >
                    <Text style={styles.popovertext}>Удалить</Text>
                    <X color={COLORS.text} />
                </TouchableOpacity>
            </Popover>

            {/* Дата */}
            <Text style={styles.date}>{formatDateRu(date)}</Text>

            {/* Иконки */}
            <View style={styles.iconsContainer}>
                <View style={styles.icons}>
                    <Clock size={20} color={COLORS.gray04} />
                    <Text style={styles.iconsText}>
                        {secondsToMinutes(duration)} мин
                    </Text>
                </View>
                <View style={styles.icons}>
                    <Weight size={20} color={COLORS.gray04} />
                    <Text style={styles.iconsText}>{totalWeight} кг</Text>
                </View>
            </View>

            {/* Таблица упражнений */}
            <View style={styles.footer}>
                <View style={styles.footerColumn}>
                    <Text style={styles.footerHeading}>Упражнения</Text>
                    {exercises.map((ex, idx) => (
                        <Text key={idx} style={styles.footerItem}>
                            {ex.reps} × {ex.name}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};
