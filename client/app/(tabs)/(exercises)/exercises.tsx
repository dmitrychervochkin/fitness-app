import { Background, Container } from "@/components";
import { COLORS } from "@/constants";
import { FC } from "react";
import { StyleSheet, Text } from "react-native";

const ExercisesScreen: FC = () => {
    return (
        <Background style={styles.container}>
            <Container>
                <Text style={styles.text}>
                    {`Экран "Упражнения" в разработке`}!
                </Text>
                <Text style={styles.description}>
                    Следите за будущими обновлениями, скоро появится много новых
                    фич!
                </Text>
            </Container>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: COLORS.text,
        textAlign: "center",
    },
    description: {
        fontSize: 15,
        color: COLORS.gray05,
        textAlign: "center",
    },
});

export default ExercisesScreen;
