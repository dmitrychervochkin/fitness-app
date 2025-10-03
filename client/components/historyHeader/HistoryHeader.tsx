import { FC } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./historyHeader.style";
import { TextButton } from "../button/TextButton";

interface IHistoryHeader {}

export const HistoryHeader: FC<IHistoryHeader> = () => {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>История</Text>
                <TextButton>Календарь</TextButton>
            </View>
        </SafeAreaView>
    );
};
