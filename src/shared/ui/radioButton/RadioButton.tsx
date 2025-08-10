import React from 'react';

interface RadioButtonProps extends React.PropsWithChildren {}

export const RadioButton = ({ children }: RadioButtonProps) => {
    return <input type="radio">{children}</input>;
};
