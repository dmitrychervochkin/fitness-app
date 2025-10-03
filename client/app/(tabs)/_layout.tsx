import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    BicepsFlexed,
    Clock,
    Dumbbell,
    Home as HomeIcon,
    User,
} from "lucide-react-native";
import { COLORS } from "@/constants";
import HomeScreen from "./(home)/home";
import ExercisesScreen from "./(exercises)/exercises";
import ProfileScreen from "./(profile)/profile";
import HistoryScreen from "./(history)/history";
import DumbellScreen from "./(dumbell)/dumbell";
import { Workout } from "@/components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "@/slices/authSlice/authSlice";
import { useNavigate } from "@/hooks/useNavigate";
import { Text } from "react-native";
import { selectIsStartWorkout } from "@/slices/workoutSlice/workoutSlice";

export type MainTabParamList = {
    Dumbell: undefined;
    History: undefined;
    Home: undefined;
    Exercises: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function TabsLayout() {
    const token = useSelector(selectToken);
    const isStartWorkout = useSelector(selectIsStartWorkout);
    const navigation = useNavigate();

    useEffect(() => {
        if (!token) {
            return navigation.replace("Splash");
        }
    }, [navigation, token]);

    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.primaryDark,
                    tabBarStyle: {
                        height: 90,
                        backgroundColor: COLORS.gray02,
                        borderTopWidth: 0,
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.7,
                        shadowRadius: 10,
                        elevation: 10,
                        zIndex: 10,
                    },
                    tabBarItemStyle: {
                        paddingVertical: 20,
                    },
                }}
            >
                <Tab.Screen
                    name="Dumbell"
                    component={DumbellScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Dumbbell color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="History"
                    component={HistoryScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Clock color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <HomeIcon color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Exercises"
                    component={ExercisesScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <BicepsFlexed color={color} size={30} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <User color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
            {isStartWorkout && <Workout />}
        </>
    );
}
