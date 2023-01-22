import React from 'react';

const Main = () => {

  return (
    <div className='bg-blue-gray-700 p-4 rounded-lg min-h-[80vh]'>
     <h1 className='text-3xl text-center'>Json Web Token</h1>
     <p>Cada 10 segundos se comprueba que el token sea válido. El token expira luego de 10 segundos.
      Si no es valido (porque expiró) se cierra la sesion del usuario automáticamente.
     </p>
    </div>
  )
}
export default Main;