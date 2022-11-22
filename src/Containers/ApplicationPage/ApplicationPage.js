import React, {Component} from 'react'
import styles from './ApplicationPage.module.css'
import FormSetup from './formSetup.json'
import Form from '../../Components/ApplicationPage/Form'


class Applicationpage extends Component{
    
    state = {
        formSetup: FormSetup.formSetup
    }


    render(){
   
        return(
            <div className = {styles.ApplicationPage}>
                <h1 className = {styles.Title}>JEME - Spring 2023</h1>
                <Form setup = {this.state.formSetup}/>
            </div>
        )
    }
}

export default Applicationpage 