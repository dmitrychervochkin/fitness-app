import { View, Text } from "react-native";
import { Input } from "../input/Input";

import { Controller, FieldValues } from "react-hook-form";
import { IAuthInput } from "./authInput.interface";
import { styles } from "./authInput.style";

export const AuthInput = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    rules,
    keyboardType = "default",
    secureTextEntry = false,
}: IAuthInput<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <View style={styles.container}>
                    <Text style={styles.label}>{label}</Text>
                    <Input
                        autoCapitalize="none"
                        placeholder={placeholder}
                        value={field.value}
                        onChangeText={field.onChange}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                    />
                    {fieldState.error && (
                        <Text style={styles.error}>
                            {fieldState.error.message}
                        </Text>
                    )}
                </View>
            )}
        />
    );
};
