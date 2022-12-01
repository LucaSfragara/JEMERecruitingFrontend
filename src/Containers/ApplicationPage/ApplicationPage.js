import React, {Component} from 'react'
import styles from './ApplicationPage.module.css'
import FormSetup from './formSetup.json'
import Form from '../../Components/ApplicationPage/Form'

class Applicationpage extends Component{
    
    state = {
        formSetup: FormSetup.formSetup,
        submissionLoading: false
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({submissionLoading: true})
        
    }

    inputChangeHandler = (event, sectionKey) => {
        
        var updatedState = {...this.state}

        let indexOfSectionToUpdate = this.state.formSetup.sections.findIndex((section) => section.key === sectionKey)
        console.log("Index of section to update: ", indexOfSectionToUpdate)
        
        let indexOfInputToUpdate = this.state.formSetup.sections[indexOfSectionToUpdate].inputs.findIndex((input) => input.key === event.target.name)
        console.log("Index of input to update: ", indexOfInputToUpdate)

        updatedState.formSetup.sections[indexOfSectionToUpdate].inputs[indexOfInputToUpdate].value = event.target.value

        this.setState({...updatedState})

    }

    render(){
        console.log(this.state.formSetup.sections[0].inputs)
        return(
        
        <section className={styles.application_form}>
        
        <div className={styles.big_container}>

            <div className={styles.navbar}>
                <div className={styles.navbar_background}></div>
                <ul className={styles.steps_list}>
                    <li className={styles.steps_item} data-status="enabled">
                        <div className={styles.Circle}>1</div>
                        <div className={styles.navbar_step_title}>Personal Information</div>
                    </li>
                    <li className={styles.steps_item} data-status="disabled">
                        <div className={styles.circle}>2</div>
                        <div className={styles.navbar_step_title}>Education</div>
                    </li>
                    <li className={styles.steps_item} data-status="disabled">
                        <div className={styles.circle}>3</div>
                        <div className={styles.navbar_step_title}>CV & Additional Information</div>
                    </li>
                </ul>
            </div>


            <div className = {styles.personal_information_container + ' ' + styles.step_container}>
                <h2 className={styles.step_label}>Step 1</h2>
                <h1 className={styles.step_title}>{this.state.formSetup.sections[0].title}</h1>
                <h3 className={styles.step_description}>Please, enter your personal information</h3>
                <form>
                    {this.state.formSetup.sections[0].inputs.map((input) => 
                    <div className={styles.form_section}>
                        <label for={input.key}>{input.label}</label>
                        <input type={input.type} name={input.key}/>
                    </div>
                    )}

                 
                </form>
            </div>

        </div>
    </section>
        )
    }
}

export default Applicationpage 