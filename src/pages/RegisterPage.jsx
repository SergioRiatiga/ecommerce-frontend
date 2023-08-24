import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom"
import './styles/registerPage.css'

const RegisterPage = () => {

  const {register, handleSubmit, reset} = useForm()
  const { createUser } = useAuth()

  const submit =(data) => {
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url = `${BASE_URL}/users`
    createUser(url, data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    })
  }

  return (
    <div className="register__container">
      <div className="registerCard">
        <h2 className="registerCard__title">Sign Up</h2>
        <form className="registerCard__form" onSubmit={handleSubmit(submit)}>
          <div className="registerCard__form-item">
            <label className="registerCard__form-label" htmlFor="firstName">First name</label>
            <input className="registerCard__form-input" {...register('firstName')} id="firstName" type="text" />
          </div>
          <div className="registerCard__form-item">
            <label className="registerCard__form-label" htmlFor="lastName">Last name</label>
            <input className="registerCard__form-input" {...register('lastName')} id="lastName" type="text" />
          </div>
          <div className="registerCard__form-item">
            <label className="registerCard__form-label" htmlFor="email">E-mail</label>
            <input className="registerCard__form-input" {...register('email')} id="email" type="email" />
          </div>
          <div className="registerCard__form-item">
            <label className="registerCard__form-label" htmlFor="password">Password</label>
            <input className="registerCard__form-input" {...register('password')} id="password" type="password" />
          </div>
          <div className="registerCard__form-item">
            <label className="registerCard__form-label" htmlFor="phone">Phone</label>
            <input className="registerCard__form-input" {...register('phone')} id="phone" type="number" />
          </div>
          <button className="registerCard__btn">Sing up</button>
        </form>
        <p className="registerCard__redirect">Already have an account? <Link className="registerCard__redirect-link" to="/login">Login</Link></p>
      </div>
    </div>
    
  )
}

export default RegisterPage