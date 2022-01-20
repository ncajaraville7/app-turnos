import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ turns, setTurns, turn, setTurn }) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [detail, setDetail] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {
    if( Object.keys(turn).length > 0 ) {
      setName(turn.name)
      setSurname(turn.surname)
      setNumber(turn.number)
      setDate(turn.date)
      setHour(turn.hour)
      setDetail(turn.detail)
    }
  }, [turn])

  const generateID = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handleSubmit = e => {
    e.preventDefault();

    if( [ name, surname, number, date, hour, detail ].includes('') ) {
      setError(true);
    } else {
      setError(false);

      const objTurns = {
        name, 
        surname, 
        number, 
        date, 
        hour, 
        detail
      }

      
      if(turn.id) {
        //Edit turn
        objTurns.id = turn.id
        const updatedShift = turns.map( turnState => turnState.id === turn.id ? objTurns : turnState);
        setTurns(updatedShift);
        setTurn({}) //Clear state

      } else { 
        //Create turn
        objTurns.id = generateID();
        setTurns([...turns, objTurns]);
      }


      //Reset
      setName('');
      setSurname('');
      setNumber('');
      setDate('');
      setHour('');
      setDetail('');
    }

  } 

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-purple-500 text-3xl text-center">Seguimiento Cliente</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Clientes y administralos</p>
      
      <form 
        className="mb-10 bg-white shadow-md rounded py-10 px-5"
        onSubmit={handleSubmit}
        >

        { error && <Error message="Debes completar todos los campos." /> }

        <div className="mb-5">
          <label htmlFor="name" className="block text-gray uppercase font-bold">
            Nombre Cliente
          </label>

          <input
            id="name" 
            type="text"
            placeholder="Nombre del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={ (e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="surname" className="block text-gray uppercase font-bold">
            Apellido Cliente
          </label>

          <input
            id="surname" 
            type="text"
            placeholder="Apellido del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={surname}
            onChange={ (e) => setSurname(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block text-gray uppercase font-bold">
            Teléfono Cliente
          </label>

          <input
            id="phone" 
            type="number"
            placeholder="Teléfono del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={number}
            onChange={ (e) => setNumber(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray uppercase font-bold">
            Fecha Turno
          </label>

          <input
            id="date" 
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={date}
            onChange={ (e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="hour" className="block text-gray uppercase font-bold">
            Horario Turno
          </label>

          <input
            id="hour" 
            type="time"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={hour}
            onChange={ (e) => setHour(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="detail" className="block text-gray uppercase font-bold">
            Descripción
          </label>

          <textarea 
            id="detail"
            placeholder="Ingrese una descripción"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={detail}
            onChange={ (e) => setDetail(e.target.value)}> 
          </textarea>
        </div>

        <input 
          type="submit"
          className="bg-purple-500 w-full p-3 text-white font-bold uppercase hover:bg-purple-600 cursor-pointer transition-all"
          value={ turn.id ? 'Editar Turno' : 'Agregar Turno'}
        />

      </form>
    </div>
  );
}

export default Form;
