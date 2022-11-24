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
   
        return(
            <div className = {styles.ApplicationPage}>
                <h1 className = {styles.Title}>JEME - Spring 2023</h1>
                <Form setup = {this.state.formSetup} submitHandler = {this.submitHandler} inputChangeHandler = {this.inputChangeHandler}/>
            </div>
        )
    }
}

export default Applicationpage 