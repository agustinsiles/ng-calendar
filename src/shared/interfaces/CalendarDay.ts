import Reminder from "../classes/Reminder";

export default interface CalendarDayInterface {
    day: number,
    date: number,
    month: number,
    year: number,
    fromCurrentMonth: boolean,
    reminders?: Reminder[]
}