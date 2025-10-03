export interface IInput {
    placeholder?: string;
    value?: string;
    size?: "medium" | "small";
    onChangeText?: (text: string) => void;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
}
