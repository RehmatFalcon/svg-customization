import React, { ReactElement } from "react";
type AppIconProps = {
    Icon: SvgIconProps,
    width?: number,
    height?: number,
    fill?: string,
    fillSecondary?: string,
    fillText?: string
};
export const AppIcon = ({Icon, width = 200, height=200,fill="white",fillSecondary="green", fillText="green"} : AppIconProps) => {
    return <Icon width={width} height={height} fill={fill} fillSecondary={fillSecondary} fillText={fillText}/>;
}