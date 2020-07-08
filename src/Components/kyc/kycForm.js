import React, { Component } from 'react'
import { reduxForm,Field } from 'redux-form';
class kycForm extends Component {
    render() {
        return (
            <div>
                <Field name='firtName' type='text' component='input' />
            </div>
        )
    }
}

kycForm = reduxForm({form: 'kycForm'})(kycForm);

export default kycForm
