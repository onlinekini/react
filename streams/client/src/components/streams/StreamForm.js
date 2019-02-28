import React from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamForm extends React.Component {
    render () {    
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Title"/>
                <Field name="description" component={this.renderInput} label="Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    /* renderInput = (formProps) => {
        return <input  onChange={formProps.input.onChange} value={formProps.input.value}/>
    } */
    
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input  {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    renderError = ({touched, error}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        } else {
            return <div> </div>
        }

    }

}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        // will run only is user puts null title
        errors.title = " You must Enter a title"
    }

    if (!formValues.description) {
        // will run only is user puts null title
        errors.description = " You must Enter a description"
    }

    return errors

}


export default reduxForm({
    form:'streamForm' ,
    validate
  })(StreamForm)

