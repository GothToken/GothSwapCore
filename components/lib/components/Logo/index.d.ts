/// <reference types="react" />
export interface LogoProps {
    srcs: string[];
    alt?: string;
    className?: string;
    style?: any;
}
declare const Logo: ({ srcs, alt, ...rest }: LogoProps) => JSX.Element;
export default Logo;
