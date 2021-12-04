export declare type CheckboxGroupProps = {
    name?: string;
    /** id **/
    id?: string;
    /** called when state change **/
    onChange?: (values: any) => void;
    /** value of radio button **/
    value?: Array<any>;
    /** size of radio button **/
    size?: number;
    options: Array<{
        label: string;
        value: any;
    }>;
    type: 'horizontal' | 'verticle';
};
