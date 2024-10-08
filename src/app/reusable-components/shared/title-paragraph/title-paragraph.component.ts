import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './title-paragraph.component.html',
  styleUrl: './title-paragraph.component.css'
})
export class TitleParagraphComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
