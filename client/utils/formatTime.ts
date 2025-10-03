export const formatTime = (sec: number | string) => {
    if (typeof sec === "string") {
        sec = Number(sec);
    }

    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
