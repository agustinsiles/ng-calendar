import CalendarDayInterface from './../interfaces/CalendarDay';
export default class CalendarDay {
    day: number;
    month: number;
    year: number;
    date: number;
    reminders: any[];
    fromCurrentMonth: boolean;

    constructor(day: CalendarDayInterface) {
        this.day = day.day;
        this.month = day.month;
        this.year = day.year;
        this.date = day.date;
        this.reminders = day.reminders || [];
        this.fromCurrentMonth = day.fromCurrentMonth;
    }

    addReminder(reminder: any): void {
        this.reminders.push(reminder);
    }
}