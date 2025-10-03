function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateRu(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;

    const dayFormatter = new Intl.DateTimeFormat("ru-RU", { weekday: "long" });
    const dayName = capitalize(dayFormatter.format(d));

    const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "short",
    });
    const dayMonth = dateFormatter.format(d);

    return `${dayName}, ${dayMonth}`;
}
