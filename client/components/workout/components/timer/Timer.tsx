import { useEffect, useState } from "react";
import { ITimer } from "./timer.interface";
import { Animated } from "react-native";
import { useSelector } from "react-redux";
import { selectStartTime } from "@/slices/workoutSlice/workoutSlice";
import { formatTime } from "@/utils";

export const Timer: React.FC<ITimer> = ({ style, animation }) => {
    const startTime = useSelector(selectStartTime);

    const [seconds, setSeconds] = useState(() =>
        startTime ? Math.floor((Date.now() - startTime) / 1000) : 0
    );

    useEffect(() => {
        if (!startTime) return;

        const interval = setInterval(() => {
            setSeconds(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime]);

    return (
        <Animated.Text style={[style, animation ? { opacity: animation } : {}]}>
            {formatTime(seconds)}
        </Animated.Text>
    );
};
