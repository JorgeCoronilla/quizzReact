import React, { useState } from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Welcome } from '../components/Welcome'
import { Quiz } from '../components/Quiz'
import { Error } from '../components/Error'
import { UserContext } from '../providers/UserProvider'
import { WindowContext } from '../providers/WindowProvider'
export const RouterMain = () => {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [window, setWindow] = useState(false)
    const [userReg, setUserReg] = useState(false)

    return (
        <BrowserRouter>
            <section>
                <UserContext.Provider value={{ user, setUser, email, setEmail }}>
                    <WindowContext.Provider value={{ window, setWindow, userReg, setUserReg }}>
                        <Routes>
                            <Route path="/" element={<Welcome />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </WindowContext.Provider>
                </UserContext.Provider>
            </section>
        </BrowserRouter>
    )
}