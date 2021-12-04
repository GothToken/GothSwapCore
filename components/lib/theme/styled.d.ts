export declare type Color = string;
export interface Colors {
    white: Color;
    black: Color;
    text1: Color;
    text2: Color;
    text3: Color;
    text4: Color;
    text5: Color;
    text6: Color;
    bg1: Color;
    bg2: Color;
    bg3: Color;
    bg4: Color;
    bg5: Color;
    bg6: Color;
    bg7: Color;
    modalBG: Color;
    advancedBG: Color;
    primary1: Color;
    primary2: Color;
    primary3: Color;
    primary4: Color;
    primary5: Color;
    primary6: Color;
    primaryText1: Color;
    secondary1: Color;
    secondary2: Color;
    secondary3: Color;
    red1: Color;
    red2: Color;
    green1: Color;
    yellow1: Color;
    yellow2: Color;
    blue1: Color;
    avaxRed: Color;
}
export interface Grids {
    sm: number;
    md: number;
    lg: number;
}
declare module 'styled-components' {
    interface DefaultTheme extends Colors {
        grids: Grids;
        shadow1: string;
        mediaWidth: {
            upToExtraSmall: ThemedCssFunction<DefaultTheme>;
            upToSmall: ThemedCssFunction<DefaultTheme>;
            upToMedium: ThemedCssFunction<DefaultTheme>;
            upToLarge: ThemedCssFunction<DefaultTheme>;
        };
        flexColumnNoWrap: FlattenSimpleInterpolation;
        flexRowNoWrap: FlattenSimpleInterpolation;
    }
}
