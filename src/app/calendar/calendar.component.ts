import { Component } from '@angular/core';
import CalendarDay from 'src/shared/classes/Day';

@Component({
    selector: 'my-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
    calendarGrid: any[] = [];
    calendarRow: CalendarDay[] = [];
    currentMonth: number = new Date().getMonth();
    daysInMonth: number;
    months: any = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };
    selectedDate: number[];
    selectedReminder: any;
    showAddReminder: boolean = false;

    ngOnInit(): void {
        const today: Date = new Date();
        const currentYear: number = today.getFullYear();
        const currentMonth: number = today.getMonth();
        const firstDayOfMonth: Date = new Date(currentYear, currentMonth, 1);
        const lastDayInMonth: Date = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth: number = lastDayInMonth.getDate();

        if (firstDayOfMonth.getDay() < 7) {
            const isJanuary: boolean = currentMonth === 0;
            const previousMonthYear: number = isJanuary ? currentYear - 1 : currentYear;
            const previousMonthNumber: number = isJanuary ? 11 : currentMonth - 1;
            const previousMonthDaysQty: number = new Date(previousMonthYear, currentMonth === 1 ? 12 : currentMonth, 0).getDate();
            const daysFromPreviousMonth: CalendarDay[] = [];
            for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
                const day = new Date(previousMonthYear, previousMonthNumber, previousMonthDaysQty - i);
                daysFromPreviousMonth.push(new CalendarDay({
                    day: day.getDay(),
                    date: day.getDate(),
                    month: day.getMonth(),
                    year: day.getFullYear(),
                    fromCurrentMonth: false
                }));
            }
            this.calendarRow.push(...daysFromPreviousMonth.reverse());
        }

        this.calendarRow.push(new CalendarDay({
            day: firstDayOfMonth.getDay(),
            date: firstDayOfMonth.getDate(),
            month: firstDayOfMonth.getMonth(),
            year: firstDayOfMonth.getFullYear(),
            fromCurrentMonth: true
        }));

        for (let i = firstDayOfMonth.getDate() + 1; i <= daysInMonth; i++) {
            const day = new Date(currentYear, currentMonth, i);
            this.calendarRow.push(new CalendarDay({
                day: day.getDay(),
                date: day.getDate(),
                month: day.getMonth(),
                year: day.getFullYear(),
                fromCurrentMonth: true
            }));
        }

        if (lastDayInMonth.getDay() < 6) {
            const isDecember: boolean = currentMonth === 11;
            const nextMonthYear: number = isDecember ? currentYear + 1 : currentYear;
            const nextMonthNumber: number = isDecember ? 0 : currentMonth + 1;
            const remainingDaysInRow: number = 6 - lastDayInMonth.getDay();

            for (let i = 1; i <= remainingDaysInRow; i++) {
                const day: Date = new Date(nextMonthYear, nextMonthNumber, i);
                this.calendarRow.push(new CalendarDay({
                    day: day.getDay(),
                    date: day.getDate(),
                    month: day.getMonth(),
                    year: day.getFullYear(),
                    fromCurrentMonth: false
                }));
            }
        }

        do  this.calendarGrid.push(this.calendarRow.splice(0, 7));    
        while (this.calendarRow.length);        
    }

    showReminderForm(week: number, day: number, reminder = null): void {
        if (reminder !== null) {
            const selectedReminder = this.calendarGrid[week][day].reminders[reminder];
            this.selectedReminder = {
                ...selectedReminder,
                index: reminder
            };
        }

        this.showAddReminder = true;
        this.selectedDate = [week, day];
    }

    saveReminder(evt: any): void {
        const { text, city, time, color } = evt;
        const [ week, day ] = this.selectedDate;
        const reminder = { text, city, time, color };

        if (this.selectedReminder) {
            this.calendarGrid[week][day].reminders[this.selectedReminder.index] = reminder;
        } else {
            this.calendarGrid[week][day].addReminder(reminder);
        }

        this.showAddReminder = false;
        this.selectedReminder = null;
    }
}
