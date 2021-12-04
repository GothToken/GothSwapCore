import { BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps, TypographyProps } from 'styled-system';
import { Colors } from 'src/theme/styled';
export interface Props {
    color?: keyof Colors;
    bgColor?: keyof Colors;
}
export declare type BoxProps = SpaceProps & LayoutProps & FlexboxProps & TypographyProps & BorderProps & PositionProps;
declare const Box: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & Props, never>;
export default Box;
