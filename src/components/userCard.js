import React, {userState, useState} from 'react'
import './styles.css'


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")




const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName,lastName,email,password};
    setHasBeenSubmitted(true)
}

const formMessage = () => {
    if(hasBeenSubmitted){
        return "Thank you for submitting the form!"
    } else {
        return "Welcome, Please submit the form"
    }
}

const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2){
        setFirstNameError("First name must be atleast 2 charaters!");
    } else {
        setFirstNameError("")
    }
}
const handleLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 2){
        setLastNameError("Last name must be atleast 2 charaters!");
    } else {
        setLastNameError("")
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 5){
        setEmailError("Email must be atleast 5 charaters!");
    } else {
        setEmailError("")
    }
}

const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8){
        setPasswordError("Password must be atleast 8 charaters!");
    } else {
        setPasswordError("")
    }
}

const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value !== password){
        setConfirmPasswordError("Passwords must match!");
    } else {
        setConfirmPasswordError("")
    }
}

return(
<div className='App'>
    <form onSubmit={createUser}>
        <h2>{formMessage()}</h2>
        <div className='inputDiv'>
            <label>First Name: </label>
            <input className = 'inputStyle' type="text" onChange={ handleFirstName}/>
            {
                firstNameError ?
                <p className='validation'>{firstNameError}</p> : ''
            }
        </div>
        <div className='inputDiv'>
            <label>Last Name: </label>
            <input className = 'inputStyle' type="text" onChange={ handleLastName }/>
            {
                lastNameError ?
                <p className='validation'>{lastNameError}</p> : ''
            }
        </div>
        <div className='inputDiv'>
            <label>Email: </label>
            <input className = 'inputStyle' type="text" onChange={ handleEmail }/>
            {
                emailError ?
                <p className='validation'>{emailError}</p> : ''
            }
        </div>
        <div className='inputDiv'>
            <label>Password: </label>
            <input className = 'inputStyle' type="password" onChange={ handlePassword }/>
            {
                passwordError ?
                <p className='validation'>{passwordError}</p> : ''
            }
        </div>
        <div className='inputDiv'>
            <label>Confirm Password: </label>
            <input className = 'inputStyle' type="password" onChange={ handleConfirmPassword }/>
            {
                confirmPasswordError ?
                <p className='validation'>{confirmPasswordError}</p> : ''
            }
        </div>
        <button className='btnStyle' type='submit'>Submit</button>
    </form>
</div>
    );
};

export default UserForm;