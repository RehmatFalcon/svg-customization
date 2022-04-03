type SvgIconProps = React.FC<SvgProps & {
    fillSecondary? : string,
    fillText? : string
}>;
declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: SvgIconProps;
    export default content;
}