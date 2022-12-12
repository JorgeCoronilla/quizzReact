import React, {useContext} from 'react'
import { UserStatsWindow } from './UserStatsWindow';
import { WindowContext } from '../../providers/WindowProvider';
import { UserContext } from '../../providers/UserProvider';

export const UserStats = () => {
    const {setWindow, setUserReg} = useContext(WindowContext);
    const {setUser} = useContext(UserContext);
    const showStats = () => {
       
        let windowState = document.getElementById('statsWindow').style.visibility
        if (windowState === "visible") {
            document.getElementById('statsWindow').style.visibility = "hidden";
        } else {
            document.getElementById('statsWindow').style.visibility = "visible"
        };
    }
    const salir = () =>{
       setWindow(false);
       setUserReg(false);
       setUser("");
    }
    return (
        <>
            <div className='score'>
                <button className='statsBtn' onClick={showStats}>Stats</button>
                <button className='statsBtn' onClick={salir}>Salir</button>
            </div>
            <UserStatsWindow />
        </>
    )
}
