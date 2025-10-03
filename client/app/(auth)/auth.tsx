import { AuthInput, Button, ErrorMessage, Icon, Loader } from "@/components";
import { COLORS } from "@/constants";
import { StackActions, useRoute } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    Keyboard,
    KeyboardAvoidingView,
    LayoutAnimation,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    UIManager,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { server } from "@/bff";
import { useDispatch } from "react-redux";
import { login } from "@/slices/authSlice/authSlice";
import { useNavigate } from "@/hooks";

type FormValues = {
    login: string;
    email: string;
    password: string;
    confirmPassword?: string;
};

const loginRules = {
    required: "Логин обязателен",
    minLength: { value: 3, message: "Минимум 3 символа" },
    maxLength: { value: 20, message: "Максимум 20 символов" },
    pattern: {
        value: /^[a-zA-Z0-9_]+$/, // только латиница, цифры и _
        message: "Только буквы, цифры и _ разрешены",
    },
};

const emailRules = {
    required: "Email обязателен",
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Некорректный Email",
    },
};

const passwordRules = {
    required: "Пароль обязателен",
    minLength: { value: 6, message: "Минимум 6 символов" },
    maxLength: { value: 50, message: "Максимум 50 символов" },
    pattern: {
        // value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/,
        message:
            "Пароль должен содержать заглавную, строчную букву, цифру и спецсимвол",
    },
};
const confirmPasswordRules = (getPasswordValue: () => string) => ({
    required: "Подтверждение пароля обязательно",
    validate: (value: string) =>
        value === getPasswordValue() || "Пароли не совпадают",
    minLength: passwordRules.minLength,
    maxLength: passwordRules.maxLength,
});

type AuthScreenParams = {
    type?: "login" | "register" | "reset";
};

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AuthScreen: FC = () => {
    const navigation = useNavigate();
    const route = useRoute();
    const dispatch = useDispatch();
    const { type: initialType } = route.params as {
        type?: "login" | "register" | "reset";
    };

    const [type, setType] = useState(initialType || "login");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const newType = (route.params as AuthScreenParams)?.type;
        if (newType && newType !== type) {
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
            );
            setType(newType);
        }
    }, [route.params, type]);

    const { control, handleSubmit, watch } = useForm<FormValues>({
        defaultValues: {
            login: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const changeType = (newType: "login" | "register" | "reset") => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setType(newType);
        navigation.setParams({ type: newType });
    };

    const onSubmit = (data: FormValues) => {
        Keyboard.dismiss();
        setIsLoading(true);
        if (type === "login") {
            server
                .authorize(data.email, data.password)
                .then(({ res, error }) => {
                    if (!res || error) {
                        setError(error);
                        setIsLoading(false);
                        return;
                    }

                    dispatch(
                        login({
                            token: res.token,
                            role: res.user.role,
                            login: res.user.login,
                            email: res.user.email,
                            createdAt: res.user.createdAt,
                        })
                    );

                    setTimeout(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Tabs" }],
                        });
                        setIsLoading(false);
                    }, 1000);
                });
        }
        if (type === "register") {
            server
                .register(data.login, data.email, data.password)
                .then(({ res, error }) => {
                    if (!res || error) {
                        setError(error);
                        setIsLoading(false);
                        return;
                    }

                    dispatch(
                        login({
                            token: res.token,
                            role: res.user.role,
                            login: res.user.login,
                            email: res.user.email,
                            createdAt: res.user.createdAt,
                        })
                    );

                    setTimeout(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Tabs" }],
                        });
                        setIsLoading(false);
                    }, 1000);
                });
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLORS.gray02 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                keyboardShouldPersistTaps="handled"
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}
                >
                    <SafeAreaView style={styles.container}>
                        {/* HEADER */}
                        <View style={styles.headerContainer}>
                            <Icon
                                style={{ position: "absolute", left: 0 }}
                                Icon={ChevronLeft}
                                color="white"
                                size={40}
                                onPress={() => navigation.goBack()}
                            />
                            {type === "login" && (
                                <Text style={styles.header}>Войти</Text>
                            )}
                            {type === "register" && (
                                <Text style={styles.header}>Регистрация</Text>
                            )}
                            {type === "reset" && (
                                <Text style={styles.header}>Сброс пароля</Text>
                            )}
                        </View>

                        {/* INPUTS */}
                        <View style={styles.inputs}>
                            {(type === "reset" || type === "register") && (
                                <AuthInput
                                    control={control}
                                    name="login"
                                    label="Логин"
                                    placeholder="Введите логин"
                                    rules={loginRules}
                                />
                            )}

                            <AuthInput
                                control={control}
                                name="email"
                                label="E-mail"
                                placeholder="Введите e-mail"
                                rules={emailRules}
                                keyboardType="email-address"
                            />

                            <AuthInput
                                control={control}
                                name="password"
                                label="Пароль"
                                placeholder="Введите пароль"
                                rules={passwordRules}
                                secureTextEntry={true}
                            />

                            {(type === "reset" || type === "register") && (
                                <AuthInput
                                    control={control}
                                    name="confirmPassword"
                                    label="Повтор пароля"
                                    placeholder="Повторите пароль"
                                    rules={confirmPasswordRules(() =>
                                        watch("password")
                                    )}
                                    secureTextEntry={true}
                                />
                            )}
                        </View>

                        {/* BUTTONS */}
                        <View style={{ marginTop: 10 }}>
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <>
                                    <Button
                                        btnStyle="primary"
                                        onPress={handleSubmit(onSubmit)}
                                    >
                                        {type === "login"
                                            ? "Войти"
                                            : "Продолжить"}
                                    </Button>
                                    <View style={styles.linksContainer}>
                                        {type === "login" && (
                                            <View style={styles.changeTypeRow}>
                                                <Text style={styles.changeType}>
                                                    Нет аккаунта?
                                                </Text>
                                                <Pressable
                                                    onPress={() =>
                                                        changeType("register")
                                                    }
                                                >
                                                    <Text style={styles.link}>
                                                        Регистрация
                                                    </Text>
                                                </Pressable>
                                            </View>
                                        )}

                                        {(type === "register" ||
                                            type === "reset") && (
                                            <View style={styles.changeTypeRow}>
                                                <Text style={styles.changeType}>
                                                    Есть аккаунт?
                                                </Text>
                                                <Pressable
                                                    onPress={() =>
                                                        changeType("login")
                                                    }
                                                >
                                                    <Text style={styles.link}>
                                                        Авторизация
                                                    </Text>
                                                </Pressable>
                                            </View>
                                        )}

                                        {type === "login" && (
                                            <Pressable
                                                onPress={() =>
                                                    changeType("reset")
                                                }
                                            >
                                                <Text
                                                    style={[
                                                        styles.changeType,
                                                        styles.link,
                                                    ]}
                                                >
                                                    Забыли пароль?
                                                </Text>
                                            </Pressable>
                                        )}
                                    </View>
                                </>
                            )}
                        </View>
                        <ErrorMessage error={error} setError={setError} />
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray02,
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 30,
        gap: 50,
        overflow: "hidden",
    },
    header: {
        fontSize: 40,
        color: COLORS.text,
        fontWeight: "600",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        alignItems: "center",
        minHeight: 45,
    },
    inputs: {
        gap: 30,
    },
    linksContainer: {
        marginTop: 20,
        gap: 10,
    },
    changeTypeRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        alignItems: "center",
    },
    changeType: {
        color: COLORS.text,
        fontSize: 16,
    },
    link: {
        color: COLORS.primary,
        fontSize: 16,
        textAlign: "center",
    },
});

export default AuthScreen;
