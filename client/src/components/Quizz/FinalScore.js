import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { addUserInfo } from '../../helpers/AddUser';
import { useNavigate } from 'react-router-dom'

export const FinalScore = ({ score }) => {
  const { user, email } = useContext(UserContext);
  const redirect = useNavigate();
  useEffect(() => {
    addUserInfo(user, email, score);
  }, [])

  const continuar = () => {
    console.log("Entra en continuar");
    redirect('/')
  }

  return (
    <div className='final-score'>
      <h2>¡{user}!</h2>
      {score === 0 &&
        (<div>
          <h3>¡Fatal! Ni una sola respuesta</h3>
        </div>)
      }
      {score > 0 && score < 4 &&
        (<div>
          <h3>¡Mal! Ni siquiera 4.</h3>
        </div>)
      }
      {score >= 4 && score < 7 &&
        (<div>
          <h3>¡Bien! Te damos el aprobado</h3>
        </div>)
      }
      {score >= 7 && score < 10 &&
        (<div>
          <h3>¡Olé! Conmigo siempre en el trivial</h3>
        </div>)
      }
      {score === 10 &&
        (<div>
          <h3>¡Oué crack! Pero deja de mirar el LocalStorage</h3>
        </div>)
      }
      <h4>Score final: {score}</h4>
      <button onClick={continuar}>continuar</button>
    </div>
  )
}
