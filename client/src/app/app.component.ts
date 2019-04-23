import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {}

  log() {
    console.log('LOG');
    this.http
      .post(
        'http://localhost:24224',
        {
          body: 'Hello from Angular!',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .subscribe(
        res => console.log('SUCCESS'),
        err => console.log(`ERROR: ${err}`),
      );
  }
}
