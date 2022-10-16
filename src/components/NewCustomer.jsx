import { useNavigate , redirect } from "react-router-dom"

import Formulario from "./Formulario"

const NewCustomer = () => {
  return (
    <>
    
        <h1 className="font-black text-4xl text-blue-900"> New Customer</h1>
    <p className="mt-3"> Fill the fields to register a new customer </p>

    <div className="flex justify-end ">
        <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={() => navigate(-1)}>Volver</button>
    </div>
    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <p></p>
    </div>
    </>

  )
}

export default NewCustomer