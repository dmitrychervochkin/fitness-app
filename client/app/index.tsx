import { Redirect } from "expo-router";

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    Quiz: undefined;
    Tabs: undefined;
    Auth: { type?: "login" | "register" | "reset" };
};

export default function Index() {
    return <Redirect href="/(splash)/splash" />;
}
