import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeaturesSectionData } from 'src/models/feacture-section-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() public dataFeatures!: FeaturesSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
}
