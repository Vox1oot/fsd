import React from 'react';

interface CheckboxProps extends React.PropsWithChildren {}

export const Checkbox = ({ children }: CheckboxProps) => {
    return <input type="checkbox">{children}</input>;
};
