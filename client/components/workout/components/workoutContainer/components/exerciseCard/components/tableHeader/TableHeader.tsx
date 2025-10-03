import { COLORS } from "@/constants";
import { Check } from "lucide-react-native";
import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./tableHeader.style";
import { COLUMN_WIDTH } from "../../constants";

export const TableHeader: FC = () => {
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.cell,
                    styles.center,
                    { width: COLUMN_WIDTH.index },
                ]}
            >
                #
            </Text>
            <Text
                style={[
                    styles.cell,
                    styles.center,
                    { width: COLUMN_WIDTH.previous },
                ]}
            >
                Предыдущий
            </Text>
            <Text
                style={[
                    styles.cell,
                    styles.center,
                    { width: COLUMN_WIDTH.weight },
                ]}
            >
                Вес
            </Text>
            <Text
                style={[
                    styles.cell,
                    styles.center,
                    { width: COLUMN_WIDTH.reps },
                ]}
            >
                Повторения
            </Text>
            <View
                style={[
                    styles.cell,
                    styles.iconCell,
                    { width: COLUMN_WIDTH.check },
                ]}
            >
                <Check size={20} color={COLORS.gray04} />
            </View>
        </View>
    );
};
