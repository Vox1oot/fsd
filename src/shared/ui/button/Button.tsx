import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {}

export const Button = ({ children }: ButtonProps) => {
    return <button className="btn">{children}</button>;
};
