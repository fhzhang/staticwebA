import { Component } from '@angular/core';
export class Customer {
  public id: number;
  public name: string;
}
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: Customer[] = [{ id: 1, name: 'john' }];
  message = 'Hello, Angular!';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => {
        console.log(resp);
        this.message = resp.origin;
      });
  }
}
