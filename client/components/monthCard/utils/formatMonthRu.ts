export function formatMonthRu(monthStr: string): string {
    // monthStr = "2025-07"
    const [year, month] = monthStr.split("-").map(Number);

    const date = new Date(year, month - 1); // JS месяцы 0-based

    const monthFormatter = new Intl.DateTimeFormat("ru-RU", { month: "long" });
    const monthName = capitalize(monthFormatter.format(date));

    return `${monthName} ${year}`;
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}