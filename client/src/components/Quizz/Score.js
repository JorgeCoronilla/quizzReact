import React, {useContext} from 'react'
import { UserContext } from '../../providers/UserProvider';

export const Score = ({score}) => {
  const {user} = useContext(UserContext);
  return (
    <div className='score'>
      
        <h4>SCORE:{score}</h4>
        <h4>Nombre:{user}</h4>
    </div>
  )
}
