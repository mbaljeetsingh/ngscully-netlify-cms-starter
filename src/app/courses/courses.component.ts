import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  udemyCourses = this.dataService.getUdemyCourses();
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getUdemyCourses().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
