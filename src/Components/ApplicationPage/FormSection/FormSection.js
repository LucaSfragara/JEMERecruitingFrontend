import React, {Component} from 'react'
import { defer } from 'react-router'
import styles from './FormSection.module.css'

const FormSection = (props) => {

    return(
        <div>
            <h3 className = {styles.SectionTitle} >{props.props.title}</h3>
        </div>
    )
}

export default FormSection