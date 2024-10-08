import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() styleClass: string = '';
  @Input() backArrow: string = '';
}