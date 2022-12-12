import React, { useContext } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { useNavigate } from 'react-router-dom'
import { getQuestions } from '../../helpers/GetQuestions'
import { UserStats } from './UserStats'

export const Options = ({ setWindow }) => {
  const { user } = useContext(UserContext);
  const redirect = useNavigate();
  const getOptions = e => {
    e.preventDefault();
    getQuestions(e.target.tema.value)

    setWindow(true)
    setTimeout(() => {
      redirect('/quiz')
    }, 1000)

  }
  const showOptions = e => {
    console.log(e.target.innerText)
  }

  return (
    <div>
      <UserStats/>

      <div className='welcome'>
        <h3>¿A qué quieres jugar?</h3>
        <h2>{user}</h2>
        <form onSubmit={getOptions}>
          <select id="categorias" onChange={showOptions} name="tema" >
            <option value="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple">Todas las categorías</option>
            <option value="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple">Cultura General</option>
            <option value="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple">Películas</option>
            <option value="https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple">Libros</option>
            <option value="https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple">Televisión</option>
            <option value="https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple" >Juegos de mesa</option>
          </select>
          <input type="submit" value='enviar' name="PLAY" />
        </form>
      </div>
    </div>
  )
}
