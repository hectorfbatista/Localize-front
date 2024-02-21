import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNav: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscribeToNavigationEndEvents();
  }

  private subscribeToNavigationEndEvents() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: any) => {
        this.showNav = !route.url.includes('/login');
      });
  }
}
