import { Component, OnInit, Input } from '@angular/core';
import { PriceFormat } from '../lib/Format';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ExpressFeeOption, ExpressGetPriceRequest, GetPostFeeFromGameResult } from '../models/Express/ExpressModel';
import { ExpressService } from '../service/Express/express.service';
import { ExpressoptionComponent } from '../expressoption/expressoption.component';


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  constructor(private expService: ExpressService) { }
  ExpOption: ExpressFeeOption;
  PostModel: ExpressGetPriceRequest = {
    volume: 0,
    price: 0,
    feeOption: null,
    text: ''
  };
  result: GetPostFeeFromGameResult;
  PriceFormat = PriceFormat;
  ngOnInit() {
    this.GetDefaultExpOption();
  }
    /**
   * 计算快递价格
   */
  CalculatePrice() {
    this.expService.CalculatePriceFromGame(this.PostModel).subscribe(x => this.result = x);
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
