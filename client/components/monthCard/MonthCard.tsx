import { FC } from "react";
import { Text } from "react-native";
import { styles } from "./monthCard.style";
import { IMonthCard } from "./monthCard.interface";
import { formatMonthRu } from "./utils";
import { HistoryCard } from "./components";
import { Container } from "../container/Container";

export const MonthCard: FC<IMonthCard> = ({ month, workouts }) => {
    return (
        <Container>
            <Text style={styles.monthTitle}>{formatMonthRu(month)}</Text>
            {workouts.map((workout, idx) => (
                <HistoryCard key={idx} {...workout} />
            ))}
        </Container>
    );
};
