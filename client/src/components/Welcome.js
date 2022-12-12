import React, { useState, useContext } from 'react'
import { Name } from './Welcome/Name';
import { Options } from './Welcome/Options';
import { Register } from '../components/Welcome/Register';
import { WindowContext } from '../providers/WindowProvider';

export const Welcome = () => {

    const {window, setWindow, userReg, setUserReg} = useContext(WindowContext);
    //const [window, setWindow] = useState(false)
    //const [userReg, setUserReg] = useState(false)
    console.log(userReg)

    return (
        <div>
            {!window && !userReg ?
                <Name setWindow={setWindow} userReg={userReg} setUserReg={setUserReg} /> :
                (window && userReg ?
                    <Options setWindow={setWindow} /> :
                    (window && !userReg ? 
                    <Register setWindow={setWindow} setUserReg={setUserReg} />: 
                    <Name setWindow={setWindow} userReg={userReg} setUserReg={setUserReg} />))
            }
        </div>
    )
}


