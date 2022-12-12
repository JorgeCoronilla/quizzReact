import React, {useContext} from 'react'
import { UserContext } from '../../providers/UserProvider'
import { addUserNew } from '../../helpers/AddUser'

export const Register = ({setUserReg, setWindow}) => {
    const {user, email, setEmail} = useContext(UserContext)
    
    const regUser = e => {
        e.preventDefault();
        setEmail(e.target.email.value)
        addUserNew(user, e.target.email.value);
        console.log("Valor state" + email)
        console.log("Valor input" + e.target.email.value)
        setWindow(true)
        setUserReg(true)
    }
   
  return (
    <div>
    <h1>QUIZZ</h1>

    <div className='welcome'>
        <h4>{user}, parece que no estás registrado.</h4>
        <p>Para completar necesitamos tu email</p>
        <form onSubmit={regUser}>
            <input type="email" name="email" placeholder="Tu email" maxLength={25} required/>
            <input type="submit" value='enviar' name="enviar" />
        </form>
    </div>
</div>
  )
}
