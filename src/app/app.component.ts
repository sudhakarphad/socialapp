import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <div class="main-wrap">
    <!--h1>{{title}}</h1 -->
    <nav>
      <!--a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a -->
    </nav>
    <div class="device-screen">
    <router-outlet></router-outlet>
    </div>
    <a routerLink="/welcome" routerLinkActive="active" class="home-but">Home</a>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';
}
