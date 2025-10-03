import { FC } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./miniHeader.style";
import { IMiniHeader } from "./miniHeader.interface";

export const MiniHeader: FC<IMiniHeader> = ({ title, show }) => {
    return show ? (
        <SafeAreaView style={styles.miniHeader}>
            <Text style={styles.miniHeaderText}>{title}</Text>
        </SafeAreaView>
    ) : null;
};
