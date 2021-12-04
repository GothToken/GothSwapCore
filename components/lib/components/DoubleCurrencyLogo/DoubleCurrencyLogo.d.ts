/// <reference types="react" />
import { Currency } from '@pangolindex/sdk';
export interface DoubleCurrencyLogoProps {
    margin?: boolean;
    size?: number;
    currency0?: Currency;
    currency1?: Currency;
}
declare const DoubleCurrencyLogo: ({ currency0, currency1, size, margin }: DoubleCurrencyLogoProps) => JSX.Element;
export default DoubleCurrencyLogo;
