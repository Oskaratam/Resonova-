import { Component, Input } from '@angular/core';
import { CourseInfo } from '../../core/interfaces/course-info.interface';

@Component({
  selector: 'rn-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({required:true}) info !: CourseInfo;
  
}
