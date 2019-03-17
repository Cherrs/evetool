import { Component, OnInit, Input } from '@angular/core';
import { ExpressFeeOption } from '../models/Express/ExpressModel';
import { PriceFormat } from '../lib/Format';

@Component({
  selector: 'app-expressoption',
  templateUrl: './expressoption.component.html',
  styleUrls: ['./expressoption.component.scss']
})
export class ExpressoptionComponent implements OnInit {
  @Input() ExpOption: ExpressFeeOption;
  constructor() { }
  PriceFormat = PriceFormat;
  ngOnInit() {
  }

}
