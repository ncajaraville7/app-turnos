const Error = ({message}) => {
  return (
    <div className='bg-red-700 p-3 text-white uppercase font-bold mb-3 text-center '>
        <p>{message}</p>
    </div>
  );
}

export default Error;
