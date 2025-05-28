export default function getDurationString(createdAt) {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const duration = currentTime - createdTime;

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 4 * week;
    const year = 12 * month;

    const time = [year, month, week, day, hour, minute, second];
    const timeString = ["년","달","주","일","시간","분","초"];

    for (let i=0; i < time.length; i++) {
        if (duration / time[i] > 1) {
            return (Math.floor(duration / time[i]) + timeString[i]);
        }
    }
    return "방금";
}