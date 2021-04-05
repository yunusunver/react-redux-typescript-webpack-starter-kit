import React from 'react';
import { Form } from 'antd';

// eslint-disable-next-line react/display-name
const FormInput = (Component: any) => ({
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
    return (
        <Form.Item
            name={name}
            label={label}
            validateStatus={hasError ? 'error' : 'success'}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
            rules={rules}
            className={hasError ? 'error' : 'success'}
            {...rest}
        >
            <Component {...input} {...rest} placeholder={placeholder}>
                {children}
            </Component>
            {meta.touched && meta.error && <span className="error">{meta.error}</span>}
        </Form.Item>
    );
};

export { FormInput };
