import { RootStackParamList } from "@/app";
import {
    Background,
    Button,
    Container,
    ProfileHeader,
    TextButton,
} from "@/components";
import { COLORS } from "@/constants";
import { useNavigate } from "@/hooks/useNavigate";
import { selectEmail, selectLogin } from "@/slices/authSlice/authSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Book, Moon, Settings } from "lucide-react-native";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const ProfileScreen: FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const login = useSelector(selectLogin);
    const email = useSelector(selectEmail);

    return (
        <Background>
            <ProfileHeader />
            <Container>
                <View style={styles.userInfo}>
                    <Text style={styles.login}>{login}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
                <View style={styles.menuBtn}>
                    <Book />
                    <Text>Гайды</Text>
                </View>
            </Container>
        </Background>
    );
};

const styles = StyleSheet.create({
    userInfo: {
        alignItems: "center",
        gap: 10,
        borderBottomWidth: 2,
        borderColor: COLORS.gray03,
        paddingBottom: 20,
    },
    login: {
        fontSize: 20,
        fontWeight: "600",
        color: COLORS.text,
    },
    email: {
        fontSize: 15,
        color: COLORS.gray05,
    },
    menuBtn: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default ProfileScreen;
