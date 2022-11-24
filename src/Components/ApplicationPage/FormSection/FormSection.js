import React, {Component} from 'react'

import styles from './FormSection.module.css'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';

const FormSection = (props) => {

    return(
        <div>
            <h3 className = {styles.SectionTitle} >{props.section.title}</h3>
            <div>
                {props.section.inputs.map((input) => 
                    <div className = {styles.TextFieldContainer}>
                        <h3>{input.label}</h3>
                        <TextField key = {input.key} name = {input.key} onChange = {event => props.inputChangeHandler(event, props.section.key)} InputLabelProps = {{className: styles.InputLabel }} className = {`${styles.Input}`} label = {input.placeholder} variant = "outlined" type = "text" autoComplete = 'off'></TextField>
                    </div>
                )}
            </div>
           
        </div>
    )
}

export default FormSection