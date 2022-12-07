import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AddressData } from 'src/models/address-data.model';
import { AddressSectionData } from 'src/models/address-section-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() public addressData!: AddressSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
}
