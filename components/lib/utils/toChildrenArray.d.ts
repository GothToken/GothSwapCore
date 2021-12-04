import React from 'react';
export interface Option {
    keepEmpty?: boolean;
}
declare const toChildrenArray: (children: React.ReactNode, option?: Option) => React.ReactElement[];
export default toChildrenArray;
