export default interface CalendarDay {
    day: number,
    date: number,
    month: number,
    year: number,
    fromCurrentMonth: boolean,
    reminders?: any[]
}