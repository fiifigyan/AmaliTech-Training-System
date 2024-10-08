import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent{
  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() formGroup!: FormGroup;
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() icon: string = '';
  @Input() eyeIcon: string = '';
}
