import { FC, useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { COLORS } from "@/constants";
import { Eye, EyeOff } from "lucide-react-native"; // или другой пакет иконок
import { IInput } from "./input.interface";
import { styles } from "./input.style";

export const Input: FC<IInput> = ({
    placeholder = "Введите текст",
    value,
    size = "medium",
    onChangeText,
    keyboardType,
    secureTextEntry = false,
    autoCapitalize = "none",
}) => {
    const [internalValue, setInternalValue] = useState(value || "");
    const [hidePassword, setHidePassword] = useState(secureTextEntry);

    const handleChange = (text: string) => {
        setInternalValue(text);
        onChangeText?.(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, styles[size]]}
                placeholder={placeholder}
                value={internalValue}
                onChangeText={handleChange}
                placeholderTextColor={COLORS.gray04}
                keyboardType={keyboardType}
                secureTextEntry={hidePassword}
                autoCapitalize={autoCapitalize}
            />
            {secureTextEntry && (
                <Pressable
                    onPress={() => setHidePassword((prev) => !prev)}
                    style={styles.eyeButton}
                >
                    {hidePassword ? (
                        <Eye color={COLORS.gray05} size={25} />
                    ) : (
                        <EyeOff color={COLORS.gray05} size={25} />
                    )}
                </Pressable>
            )}
        </View>
    );
};
