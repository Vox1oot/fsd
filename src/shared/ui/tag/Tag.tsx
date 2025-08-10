import React from 'react';

interface TagProps extends React.PropsWithChildren {}

export const Tag = ({ children }: TagProps) => {
    return <div>{children}</div>;
};
