import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../share/data.service";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  movieSubscription:Subscription | any;
  currentPageNo: any = 0;
  movie: any = [];

  constructor(private service: DataService) {
    this.movieSubscription=this.service.getEvent().subscribe(()=>{
      this.searchMovieData()
    })
   }

  ngOnInit(): void {
    this.showMovies()
  }

  showMovies() {
    this.service.getData('/movie/popular?api_key=3f1f36e6895ad2e02f54e6b2d5731f8f').subscribe((res: any) => {
      console.log(res);
      this.movie = res.results;
    })
  }

  searchMovieData() {
   this.service.searchData().subscribe((res: any) => {
      console.log(res);
      this.movie = res.results;
    })
  }

 }

