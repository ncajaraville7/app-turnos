import Turn from "./Turn";
import draw from "../../public/img/undraw_Alert_re_j2op.png"

const ClientList = ({ turns, setTurn, deleteTurn }) => {  

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">

      { turns.length != 0 ? (
          <>
            <h2 className="font-black text-purple-500 text-center text-3xl">Listado de Turnos</h2>
            <p className="mt-5 mb-10 text-center text-lg">Administra tus turnos</p>
      
            {turns.map( turn => (
              <Turn
                key={turn.id} 
                turn={turn}
                setTurn={setTurn}
                deleteTurn={deleteTurn}
              />

            ))}
          </>
        ) : (
        <>
            <h2 className="font-black text-purple-500 text-center text-3xl">No hay turnos</h2>
            <p className="mt-5 mb-10 text-center text-lg">Comienza agregando turnos</p>
            <img src={draw} alt="illustration" className="w-4/5 mx-auto" />
        </>
      )}

    </div>
  );
}

export default ClientList;
