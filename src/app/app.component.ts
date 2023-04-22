import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  session: any;

  title = 'Angular localstorage ';

  savaData() {
    let data = { id: 1, name: 'localstorage ' };
    localStorage.setItem('session', JSON.stringify(data));
  }
  loadData() {
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data);
    alert(data);
  }
  removeData() {
    localStorage.removeItem('session');
    this.session = null;
  }
}
