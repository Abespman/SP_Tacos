import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser = {email: ''};
  items = [];
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    var tempObservable = this._httpService.getCurrentUser();
    tempObservable.subscribe((data: any) => {
      if (data.error) {
        this._router.navigate(['/']);
      } else {
        this.currentUser = data;
      }
    })

    var tempObservable2 = this._httpService.getAllItems();
    tempObservable2.subscribe((data: any) => {
      if (data.error) {
        this._router.navigate(['/']);
      } else {
        this.items = data;
      }
    })
  }

}
