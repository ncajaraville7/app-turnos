import Header from "./components/Header"
import Form from "./components/Form"
import ClientList from "./components/ClientList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <main className="mt-12 md:flex">
        <Form/>
        <ClientList/>
      </main>
    </div>
  )
}

export default App
