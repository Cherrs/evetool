export const PriceFormat = (value: number): string => {
    value = value == null ? 0 : value;
    return `${[value.toLocaleString('en-us')]}`;
};
