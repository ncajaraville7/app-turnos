import { useEffect, useState } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import ClientList from "./components/ClientList"

function App() {

  const [turns, setTurns] = useState([]);
  const [turn, setTurn] = useState([]);

  useEffect(() => {
    const getLocalStorage = () => {
      const turnsLocalStorage = JSON.parse(localStorage.getItem('turns')) || [];
      setTurns(turnsLocalStorage);
    }

    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('turns', JSON.stringify( turns ));
  }, [turns])

  const deleteTurn = id => {
    const deleteTurns = turns.filter( turn => turn.id !== id );
    setTurns(deleteTurns);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <main className="mt-12 md:flex">
        <Form
          turns={turns}
          setTurns={setTurns}
          turn={turn}
          setTurn={setTurn}
        />
        <ClientList
          turns={turns}
          setTurn={setTurn}
          deleteTurn={deleteTurn}
        />
      </main>
    </div>
  )
}

export default App
