import { FC } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { INewFeaturesModal } from "./newFeatures.interface";
import { styles } from "./newFeatures.style";
import { Button } from "../button/Button";
import { FEATURES } from "./features.data";

export const NewFeaturesModal: FC<INewFeaturesModal> = ({
    isFeaturesOpen,
    setIsFeaturesOpen,
}) => {
    return (
        <Modal
            isVisible={isFeaturesOpen}
            swipeDirection={["down"]} // направления свайпа
            onSwipeComplete={() => setIsFeaturesOpen(false)} // скрыть при свайпе
            onBackdropPress={() => setIsFeaturesOpen(false)} // скрыть при тапе по фону
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.window}>
                    <View style={styles.line}></View>
                    <Text style={styles.headerTitle}>Что нового? 1.0</Text>
                    <View style={styles.featuresList}>
                        {FEATURES.map(({ title, description, icon }) => (
                            <View key={title} style={styles.featureCard}>
                                {icon}
                                <View style={styles.featureText}>
                                    <Text style={styles.title}>{title}</Text>
                                    <Text style={styles.description}>
                                        {description}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <Button
                        btnStyle="primary"
                        style={{ width: "100%" }}
                        onPress={() => setIsFeaturesOpen(false)}
                    >
                        Отлично!
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
