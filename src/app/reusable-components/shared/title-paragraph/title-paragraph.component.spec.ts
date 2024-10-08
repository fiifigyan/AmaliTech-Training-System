import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleParagraphComponent } from './title-paragraph.component';

describe('TitleParagraphComponent', () => {
  let component: TitleParagraphComponent;
  let fixture: ComponentFixture<TitleParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleParagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
