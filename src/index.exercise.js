import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { Logo } from 'components/logo'


const App = () => {
    const [openModal, setOpenModal] = useState('none')

    const handleLoginClick = (e) => {
       setOpenModal('login')
    }
    const handleRegisterClick = (e) => {
        setOpenModal('register')
    }

    const handleLoginSubmit = (formData) => {
        console.log('login', formData)
    }

    const handleRegisterSubmit = (formData) => {
        console.log('register', formData)
    }
    // Im a comment

    return (
        <>
        <Logo />
        <h1> Bookshelf</h1>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
        <Dialog aria-label="Modal for login form" isOpen={openModal === 'login'} onDismiss={() => setOpenModal('none')}>
            <h2>Login</h2>
            <LoginForm onSubmit={handleLoginSubmit} buttonText="Login"></LoginForm>
            <button onClick={() => setOpenModal('none')}>Close</button>
        </Dialog>
        <Dialog aria-label="Modal for register form" isOpen={openModal === 'register'} onDismiss={() => setOpenModal('none')}>
            <h2>Register</h2>
            <LoginForm onSubmit={handleRegisterSubmit} buttonText="Register"></LoginForm>
            <button onClick={() => setOpenModal('none')}>Close</button>
        </Dialog>
        </>
    )
}

const LoginForm = ({onSubmit, buttonText}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, password} = e.target.elements

        onSubmit({
            username: username.value,
            password: password.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" name='username' />
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <input type='password' name='password' />
            </div>
            <button type='submit'>{buttonText}</button>
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))