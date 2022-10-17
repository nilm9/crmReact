import { useNavigate , useActionData , Form, redirect} from "react-router-dom"
import FormCustomer from "../components/FormCustomer"
import Error from "../components/Error"
import { addCustomer } from "../api/customers"

export async function action({request}){
  const formData = await request.formData()
  // Debug formdata
  // console.log([...formData]);
  const data = Object.fromEntries(formData)

  const email =formData.get('email')

  //Valideate
  const error = []
  if(Object.values(data).includes('')){
    error.push('All the fields are required')
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  if(!regex.test(email)){
    error.push("Invalid email address")
  }



  //Return the data if errror
  if(Object.keys(error).length){
    return error
  }

  await addCustomer(data)
  //Redirect -> action
  ///NAvigate -> button
  return redirect('/')
}

const NewCustomer = ({cliente}) => {

  const errors = useActionData()
  const navigate = useNavigate()

  return (
    <>
    
        <h1 className="font-black text-4xl text-blue-900"> New Customer</h1>
    <p className="mt-3"> Fill the fields to register a new customer </p>

    <div className="flex justify-end ">
        <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={() => navigate(-1)}>Return</button>
    </div>
    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
      {errors?.length && errors.map((error, i)=> 
      <Error key={i}>{error}</Error>      )}
        <Form
        method="post"
        noValidate

        >
        <FormCustomer cliente={cliente} />
        <input type="submit" className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
        value="Register Cusotmer" />
        </Form>
    </div>
    </>

  )
}

export default NewCustomer