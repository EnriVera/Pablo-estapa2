import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Quiero from './controller/quiero/quiero'
import Publicacion from './controller/publicaciones/publicacion'
import { useDispatch, useSelector } from "react-redux";
import { obtenerAllMessage } from '../reducers/message/message.reducers'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const message = useSelector((store) => {return store.message}) || [];
  useEffect(() => {
    console.log(message)
    if (message.length === 0) {
      dispatch(obtenerAllMessage());
    }
  }, [message]);
  return (
    <div className="App">
      <Quiero />
      {
        message.length > 0 && (<>
          {
            message.map((data, i) => (
              <Publicacion key={`messaje ${i}`} text={data.text} date={data.date} tipe={data.tipe}/>
            ))
          }
        </>)
      }
    </div>
  )
}

export default App
