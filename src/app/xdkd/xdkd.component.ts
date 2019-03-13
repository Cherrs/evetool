import { Component, OnInit } from '@angular/core';
import{xdkdModel} from '../model/xdkdModel'
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-xdkd',
  templateUrl: './xdkd.component.html',
  styleUrls: ['./xdkd.component.scss']
})
export class XdkdComponent implements OnInit {
  
  constructor() { }
  model:xdkdModel={
    m2:0,
    price:0,
    postfee:0
  }
  ngOnInit() {
  }

}
