import Turn from "./Turn";

const ClientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      <h2 className="font-black text-purple-500 text-center text-3xl">Listado de clientes</h2>
      <p className="mt-5 mb-10 text-center text-lg">Administra tus turnos</p>

      <Turn />
      <Turn />
      <Turn />
      <Turn />
      <Turn />
      <Turn />
      <Turn />
      <Turn />
    </div>
  );
}

export default ClientList;
