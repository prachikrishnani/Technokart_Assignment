import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from "../share/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public movieName: any;

  constructor(private service: DataService, private formbuilder: FormBuilder) { }
  
  searchValue: FormGroup=this.formbuilder.group({
    searchMovie: ['']
  });

  ngOnInit(): void {}
  
  searchMovieData() {
    this.movieName = this.searchValue.value.searchMovie;
    console.log(this.movieName);
    this.service.searchMovie=this.movieName
    this.service.sendEvent();
  }
}
