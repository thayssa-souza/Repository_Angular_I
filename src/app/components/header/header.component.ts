import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { InputSearchValues } from 'src/models/input-search-values-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() public inputValues: EventEmitter<InputSearchValues> = new EventEmitter<InputSearchValues>();

  public searchValues: InputSearchValues = {
    inputValues: "",
  }

  public searchValuesSubmit(): void{
    this.inputValues.emit(this.searchValues);
  }

  ngOnInit(): void {
  }
}
