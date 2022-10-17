import { useLoaderData } from "react-router-dom"
import Customer from "../components/Customer";
import { getCustomers } from "../api/customers";

export function loader(){
const cusotmer = getCustomers();
return cusotmer
}


function Index() {

  const customers = useLoaderData()

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900"> Customers</h1>
    <p className="mt-3"> Manage your cutomers </p>

    { customers.length ? (

      <table className="w-full bg-white shdow mt-5 table-auto">

      <thead>
        <tr>
          <th className="p-2"> Customer</th>
          <th className="p-2"> Contact</th>
          <th className="p-2"> Actions</th>

        </tr>

      </thead>

      <tbody>
        {customers.map((customer) => (
          <Customer customer={customer} key={customer.id} />
        ))}
      </tbody>



      </table>





    ) : (

      <p className="text-center mt-10">
        No Customers Yet
      </p>

    )




    }


    </>
  )
}

export default Index