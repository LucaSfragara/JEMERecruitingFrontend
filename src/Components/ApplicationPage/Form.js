import React, {Component} from 'react'
import styles from './Form.module.css'
import FormSection from './FormSection/FormSection'

const Form = (props) => {
    const setup = props.setup

    return(
        <div>
            {setup.sections.map((section) => <FormSection section = {section} inputChangeHandler = {props.inputChangeHandler}/>)}
            <button onClick = {props.submitHandler}> Submit </button>
        </div>
    )
}

export default Form