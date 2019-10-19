import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reminders-manager',
  templateUrl: './reminders-manager.component.html',
  styleUrls: ['./reminders-manager.component.scss']
})
export class RemindersManagerComponent {
    reminderForm;
    @Input() selectedReminder: any = {};
    @Output() onReminderSave: EventEmitter<any> = new EventEmitter();
    
    constructor(private fb: FormBuilder) {}

    ngOnChanges(): void {
        this.reminderForm = this.fb.group({
            color: [this.selectedReminder && this.selectedReminder.color],
            city: [this.selectedReminder && this.selectedReminder.city, Validators.required],
            text: [this.selectedReminder && this.selectedReminder.text, [Validators.required, Validators.maxLength(30)]],
            time: [this.selectedReminder && this.selectedReminder.time, Validators.required]
        });
    }

    onSubmit(): void {
        this.onReminderSave.emit(this.reminderForm.value);
    }
}
