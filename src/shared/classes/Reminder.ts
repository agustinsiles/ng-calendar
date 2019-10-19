import ReminderInterface from './../interfaces/ReminderInterface';
export default class Reminder {
    city: string;
    color: string;
    text: string;
    time: string;
    date: Date;
    weather: string;

    constructor(reminder: ReminderInterface) {
        this.city = reminder.city;
        this.color = reminder.color;
        this.text = reminder.text;
        this.date = reminder.date;
        this.time = reminder.time;
        this.weather = reminder.weather;
    }
}