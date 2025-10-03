import { store } from "@/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider, useSelector } from "react-redux";
import QuizScreen from "./(quiz)/quiz";
import AuthScreen from "./(auth)/auth";
import SplashScreen from "./(splash)/splash";
import TabsLayout from "./(tabs)/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { selectToken } from "@/slices/authSlice/authSlice";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar style="light" />
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}
                >
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Auth" component={AuthScreen} />
                    <Stack.Screen name="Quiz" component={QuizScreen} />
                    <Stack.Screen name="Tabs" component={TabsLayout} />
                </Stack.Navigator>
            </GestureHandlerRootView>
        </Provider>
    );
}
