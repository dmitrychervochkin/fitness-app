import { Edit, Menu, Pencil, X } from "lucide-react-native";
import { FC, useRef, useState } from "react";
import { LayoutRectangle, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "../icon/Icon";
import { ITemplateCard } from "./templateCard.interface";
import { styles } from "./templateCard.style";
import { Popover } from "../popover/Popover";
import { COLORS } from "@/constants";

export const TemplateCard: FC<ITemplateCard> = ({
    name,
    description,
    exerciseCount,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iconLayout, setIconLayout] = useState<LayoutRectangle | null>(null);
    const templateIconRef = useRef<View>(null);

    const toggleModal = () => {
        if (templateIconRef.current) {
            templateIconRef.current.measure(
                (x, y, width, height, pageX, pageY) => {
                    setIconLayout({ x: pageX, y: pageY, width, height });
                    setIsModalOpen(!isModalOpen);
                }
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{name}</Text>
                    <View ref={templateIconRef}>
                        <Icon Icon={Menu} size={20} onPress={toggleModal} />
                    </View>
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>

            <Popover
                iconLayout={iconLayout}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <TouchableOpacity
                    style={styles.popoverItem}
                    onPress={() => setIsModalOpen(false)}
                >
                    <Text style={styles.popovertext}>Переименовать</Text>
                    <Pencil color={COLORS.gray05} size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.popoverItem}
                    onPress={() => setIsModalOpen(false)}
                >
                    <Text style={styles.popovertext}>Редактировать</Text>
                    <Edit color={COLORS.gray05} size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.popoverItem}
                    onPress={() => setIsModalOpen(false)}
                >
                    <Text style={styles.popovertext}>Удалить</Text>
                    <X color={COLORS.gray05} size={20} />
                </TouchableOpacity>
            </Popover>

            {exerciseCount !== undefined && (
                <Text style={styles.exercisesCount}>
                    Упражнений: {exerciseCount}
                </Text>
            )}
        </View>
    );
};
