import { Component, OnInit } from '@angular/core';
import { ExpressFeeOption, ExpressGetPriceRequest } from '../models/Express/ExpressModel';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ExpressService } from '../service/Express/express.service';
import { ValueTransformer } from '@angular/compiler/src/util';
import { strictEqual } from 'assert';
import { PriceFormat as format } from '../lib/Format';
import { ExpressoptionComponent } from '../expressoption/expressoption.component';

@Component({
  selector: 'app-xdkd',
  templateUrl: './xdkd.component.html',
  styleUrls: ['./xdkd.component.scss']
})
export class XdkdComponent implements OnInit {

  constructor(private expService: ExpressService) {
  }
  OptionShow = true;
  ExpOption: ExpressFeeOption;
  PostModel: ExpressGetPriceRequest = {
    volume: 0,
    price: 0,
    feeOption: null,
    text: ''
  };
  postfee = 0;
  PriceFormat = format;
  ngOnInit() {
    this.GetDefaultExpOption();
  }
  /**
   * 计算快递价格
   */
  CalculatePrice() {
    this.expService.CalculatePrice(this.PostModel).subscribe(x => this.postfee = x);
  }
  /**
   * 获取配置
   */
  GetDefaultExpOption() {
    this.expService.GetExpOption(1).subscribe(x => {
      this.ExpOption = x;
      this.PostModel.feeOption = x;
    });
  }
}
