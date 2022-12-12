
import React, {useContext} from 'react'
import { UserContext } from '../../providers/UserProvider'
import { userCheck } from '../../helpers/UserCheck';

export const Name = ({ setWindow, userReg, setUserReg }) => {
    const {user, setUser} = useContext(UserContext);
    const print = e => {
        setUser(e.target.value)
    }

    const getName = e => {
        e.preventDefault();
        setUser(e.target.nombre.value)
        setUserReg(userCheck(user))
        console.log("Vuelve, userReg " + userReg)
        setWindow(true)
    }

    return (
        <div>
            <div className='welcome'>
                <h3>¡Bienvenido!</h3>
                <h2>· {user} ·</h2>
                <form onSubmit={getName}>
                    <input type="text" name="nombre" onChange={print} placeholder="Tu nombre" maxLength={15} required/>
                    <input type="submit" value='enviar' name="enviar" />
                </form>
            </div>
        </div>
    )
}
