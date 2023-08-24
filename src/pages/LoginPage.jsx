import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom"
import './styles/loginPage.css'

const LoginPage = () => {

  const {register, reset, handleSubmit} = useForm()
  const {loginUser} = useAuth()

  const submit = (data) => {
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url= `${BASE_URL}/users/login`
    loginUser(url, data)
  }

  return (
    <div className="login__container">
      <div className="loginCard">
        <h2 className="loginCard__welcome">Welcome! Please, enter your email and password to continue.</h2>
        <form className="loginCard__form" onSubmit={handleSubmit(submit)}>
          <div className="loginCard__form__email">
            <label className="loginCard__form__email-label" htmlFor="email">E-mail</label>
            <input className="loginCard__form__email-input" {...register('email')} id="email" type="email" />
          </div>
          <div className="loginCard__form__password">
            <label className="loginCard__form__password-label" htmlFor="password">Password</label>
            <input className="loginCard__form__password-input" {...register('password')} id="password" type="password" />
          </div>
          <button className="loginCard__btn">Login</button>
        </form>
        <p className="loginCard__redirect">Don't have an account? <Link className="loginCard__redirect-link" to='/register'> Sing up</Link></p>
      </div>
    </div>
  )
}

export default LoginPage