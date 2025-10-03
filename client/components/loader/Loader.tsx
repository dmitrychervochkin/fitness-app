import { COLORS } from "@/constants";
import { FC, useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { styles } from "./loader.style";

export const Loader: FC<{ flex?: boolean }> = ({ flex = true }) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.linear,
            })
        ).start();
    }, [rotateAnim]);

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const size = 50;
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View
            style={{
                flex: flex ? 1 : undefined,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={styles.container}>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <Svg width={size} height={size}>
                        <Defs>
                            <LinearGradient
                                id="grad"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <Stop offset="0%" stopColor={COLORS.primary} />
                                <Stop
                                    offset="100%"
                                    stopColor={COLORS.primaryDark}
                                />
                            </LinearGradient>
                        </Defs>
                        <Circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            stroke="url(#grad)"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            fill="none"
                            strokeDasharray={`${circumference}`}
                            strokeDashoffset={circumference * 0.25}
                        />
                    </Svg>
                </Animated.View>
            </View>
        </View>
    );
};
