import { useEffect, useState } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import ClientList from "./components/ClientList"

function App() {

  const [turns, setTurns] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <main className="mt-12 md:flex">
        <Form
          turns={turns}
          setTurns={setTurns}
        />
        <ClientList/>
      </main>
    </div>
  )
}

export default App
