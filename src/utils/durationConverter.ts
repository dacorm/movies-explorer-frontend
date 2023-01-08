export const durationConverter = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    let time;
    if (hours > 0) {
        time = `${hours}ч ${minutes}м`;
    } else {
        time = `${minutes}м`;
    }

    return time;
};
