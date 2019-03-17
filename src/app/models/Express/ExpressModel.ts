/**运费配置 */
export interface ExpressFeeOption {
    id: number;
    /**运费单价 */
    unitPrice: number;
    /**体积递增 */
    incrementVolume: number;
    /**体积上下浮动 */
    floatingVolume: number;
    /**免费体积 */
    freeVolume: number;
    /**是否使用保险 */
    isCare: boolean;
    /**保险配置 */
    care: ExpressCareOption;
}
/**保险配置 */
export interface ExpressCareOption {
    id: number;
    /**开始计算保险费用 */
    minPrice: number;
    /**保险比例 */
    ratio: number;

    expressFeeOption: ExpressFeeOption[];
}
/**计算价格请求模型 */
export interface ExpressGetPriceRequest {
    text: string;
    /**体积 */
    volume: number;
    /**价格 */
    price: number;
    feeOption: ExpressFeeOption;
}
/**合同计算返回值 */
export interface GetPostFeeFromGameResult {
    /**吉他卖价 */
    buyPrice: number;
    /**吉他收价 */
    sellPrice: number;
    /**总体积 */
    volume: number;
    /**预估快递费 */
    postFee: number;
    /**预估保险价格 */
    carePrice: number;
}
