import {Outlet, Link , useLocation} from 'react-router-dom'

function Layout() {
    // Returns the current location object, which represents the current URL in web browsers.
    const loaction = useLocation()
  return (

    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10"> 
            <h2 className='text-2xl font-black text-center text-white'>CRM - Customers</h2>

            <nav className='mt-10'>
                <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} to='/'>Customers</Link>
                <Link className={`${location.pathname === '/customers/new' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`}  to='/customers/new' >New customer</Link>
            </nav>
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll '>
            <Outlet />
        </main>
        

    </div>

  )
}

export default Layout