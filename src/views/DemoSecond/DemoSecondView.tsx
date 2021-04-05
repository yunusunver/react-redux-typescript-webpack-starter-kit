import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentWrapper from '../../components/Layout/ContentWrapper';

class DemoSecondView extends Component<any, any> {
    render() {
        return (
            <ContentWrapper>
                <h1>Demo Second</h1>
            </ContentWrapper>
        );
    }
}

const mapStateToProps = (state: any) => {
    return state;
};

export default connect(mapStateToProps)(DemoSecondView);
