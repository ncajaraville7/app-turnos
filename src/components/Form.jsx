const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-purple-500 text-3xl text-center">Seguimiento Cliente</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Clientes y administralos</p>

      <form className="mb-10 bg-white shadow-md rounded py-10 px-5">

        <div className="mb-5">
          <label htmlFor="name" className="block text-gray uppercase font-bold">
            Nombre Cliente
          </label>

          <input
            id="name" 
            type="text"
            placeholder="Nombre del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
          />
        </div>

        <div className="mb-5">
          <label htmlFor="detail" className="block text-gray uppercase font-bold">
            Descripción
          </label>

          <textarea 
            id="detail"
            placeholder="Ingrese una descripción"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">  
          </textarea>
        </div>

        <input 
          type="submit"
          className="bg-purple-500 w-full p-3 text-white font-bold uppercase hover:bg-purple-600 cursor-pointer transition-all"
          value="Confirmar Turno"
        />

      </form>
    </div>
  );
}

export default Form;
