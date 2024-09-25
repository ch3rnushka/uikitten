import React from "react";
type ButtonProps = {
    size: 'small' | 'large';
    label: string;
    onClick?: () => void;
};
declare const GreenButton: React.FC<ButtonProps>;
export default GreenButton;
