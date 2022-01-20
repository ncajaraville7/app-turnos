const Turn = ({ turn }) => {
    return (
        <div className="mx-5 mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                <span className="font-normal normal-case"> {turn.name}</span> 
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Apellido:
                <span className="font-normal normal-case"> {turn.surname}</span> 
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Teléfono:
                <span className="font-normal normal-case"> {turn.number}</span> 
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha del Turno:
                <span className="font-normal normal-case"> {turn.date}</span> 
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Hora del turno:
                <span className="font-normal normal-case"> {turn.hour}</span> 
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Descripción:
                <span className="font-normal normal-case"> {turn.detail}</span> 
            </p>
      </div>
    );
}

export default Turn;