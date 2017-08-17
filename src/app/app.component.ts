import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a routerLink="home">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a routerLink="form"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a routerLink="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent  {
        name = 'Angular';
}
