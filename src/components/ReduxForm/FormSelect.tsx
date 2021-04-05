import React from 'react';
import { Form } from 'antd';

// eslint-disable-next-line react/display-name
const FormSelect = (Component: any) => ({
    meta,
    input,
    hasFeedback,
    label,
    name,
    children,
    rules,
    placeholder,
    onChange,
    ...rest
}: {
    input: any;
    meta: any;
    children: any;
    hasFeedback: any;
    label: any;
    name: any;
    onChange: any;
    placeholder: any;
    rules: any;
}) => {
    const hasError = meta.touched && meta.invalid;
    if (input.value === '') {
        input.value = [];
    }
    return (
        <Form.Item
            name={name}
            label={label}
            validateStatus={hasError ? 'error' : 'success'}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
            rules={rules}
        >
            <Component {...input} {...rest} placeholder={placeholder}>
                {children}
            </Component>
        </Form.Item>
    );
};

export { FormSelect };
