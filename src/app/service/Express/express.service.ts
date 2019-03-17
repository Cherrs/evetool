import { Injectable } from '@angular/core';
import { ExpressFeeOption, ExpressGetPriceRequest, GetPostFeeFromGameResult } from 'src/app/models/Express/ExpressModel';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExpressService {

  constructor(private http: HttpClient) {
  }
  /**
   * 获取快递配置
   * @param id 请求ID
   * @returns 快递配置
   */
  GetExpOption(id: number): Observable<ExpressFeeOption> {
    const url = 'api/XDKDExpress/GetExpressFeeOption';
    return this.http.get<ExpressFeeOption>(`${url}/?id=${id}`);
  }

  /**
   * 计算价格
   * @param postdata 请求data
   * @returns 价格
   */
  CalculatePrice(postdata: ExpressGetPriceRequest): Observable<number> {
    const url = 'api/XDKDExpress/CalculatePrice';
    return this.http.post<number>(url, postdata);
  }
    /**
   * 计算价格
   * @param postdata 请求data
   * @returns 价格
   */
  CalculatePriceFromGame(postdata: ExpressGetPriceRequest): Observable<GetPostFeeFromGameResult> {
    const url = 'api/XDKDExpress/GetPostFeeFromGame';
    return this.http.post<GetPostFeeFromGameResult>(url, postdata);
  }
}
