import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Select, Checkbox, Row, Col, Tooltip, Result, message } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from '../../components/ReduxForm/FormInput';
import { FormSelect } from '../../components/ReduxForm/FormSelect';
import { login, signOut } from '../../actions/DemoAction';
import ContentWrapper from '../../components/Layout/ContentWrapper';

const { Option } = Select;

const InputField = FormInput(Input);
const CheckboxField = FormInput(Checkbox);
const SelectField = FormSelect(Select);

class DemoView extends Component<any, any> {
    login = async () => {
        await this.props.login({ email: 'eve.holt@reqres.in', password: 'cityslicka' });

        this.props.state.demo.isAuthenticated ? message.success('Login Success', 2) : null;
    };

    logout = async () => {
        await this.props.signOut();

        !this.props.state.demo.isAuthenticated ? message.warn('Logout Success', 2) : null;
    };

    render() {
        const layout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 24 },
        };
        return (
            <ContentWrapper>
                <Result
                    status="success"
                    title="Successfully! Redux Form Page"
                    subTitle="You can open the console and check your data. Press F12...."
                />
                <Form {...layout} name="nest-messages" layout="vertical">
                    <Row>
                        <Col span={24}>
                            <Field
                                label="Select"
                                name="select"
                                component={SelectField}
                                style={{ width: '100%' }}
                                placeholder="Choose..."
                                onFocus={(e: any) => e.preventDefault()}
                                onBlur={(e: any) => e.preventDefault()}
                            >
                                <Option value="-1" disabled>
                                    Choose...
                                </Option>

                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                <Option value="option4">Option 4</Option>
                            </Field>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Field
                                label="Text"
                                placeholder="Text"
                                suffix={
                                    <Tooltip title="Tooltip area">
                                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                    </Tooltip>
                                }
                                name="text"
                                component={InputField}
                                rules={[{ required: true }]}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={6}>
                            <Field name="checkbox1" component={CheckboxField} type="checkbox">
                                Checkbox 1
                            </Field>
                        </Col>
                        <Col span={6}>
                            <Field name="checkbox2" component={CheckboxField} type="checkbox">
                                Checkbox 2
                            </Field>
                        </Col>
                    </Row>
                    <Button
                        type="primary"
                        htmlType="button"
                        loading={this.props.state.demo.loading}
                        onClick={() => this.login()}
                    >
                        Login
                    </Button>
                    <Button
                        type="primary"
                        danger
                        htmlType="button"
                        onClick={() => this.logout()}
                        style={{ marginLeft: 10 }}
                    >
                        Logout
                    </Button>
                </Form>
            </ContentWrapper>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { state };
};

export default reduxForm({ form: 'demoview' })(connect(mapStateToProps, { login, signOut })(DemoView));
