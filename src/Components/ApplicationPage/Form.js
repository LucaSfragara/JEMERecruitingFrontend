import React, {Component} from 'react'
import styles from './Form.module.css'
import FormSection from './FormSection/FormSection'

const Form = (props) => {
    const setup = props.setup
    console.log(setup.sections.map((section) => section))

    return(
        <div>
            {setup.sections.map((section) => <FormSection props = {section}/>)}
        </div>
    )
}

export default Form