import React from 'react'

const Customer = ({customer}) => {
    const {nombre, empresa, email, telefono, id} = customer
  return (
        <tr>
          <td className="p-6">
            <p className='text-2xl text-gray-800'>{nombre}</p>
            <p>Empresa</p>

          </td>
          <td className='p-6'>
            <p className="text-gray-600"><span className='text-gray-800 uppercase font-bold'>Email: </span> {email}</p>
            <p className="text-gray-600"><span className='text-gray-800 uppercase font-bold'>Phone: </span> {telefono}</p> 
          </td>

           <td className='p-6 flex'>
            <button type='button' className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'>
                Editar

            </button>
                
            <button type='button' className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'>
                Eliminar

            </button>    
           </td>

        </tr>

  )
}

export default Customer