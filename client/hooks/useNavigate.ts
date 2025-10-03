import { RootStackParamList } from "@/app";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useNavigate = () => {
    return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
