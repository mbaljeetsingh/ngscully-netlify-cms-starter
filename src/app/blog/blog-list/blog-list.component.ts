import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))
    ),
    tap((data) => {
      console.log(data);
    })
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
