import { Component } from '@angular/core';
import { DataService } from "./share/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'technokartAssignmen';
  constructor(private service: DataService) { }

  ngOnInit(): void {
  }
}
