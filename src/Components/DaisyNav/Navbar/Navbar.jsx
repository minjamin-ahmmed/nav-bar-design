import { useState } from "react";
import Link from "../../Link/Link";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {

    const [open, setOpen] = useState(false)


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Our Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/profile/:username", name: "User Profile" }
      ];

    return (
        <nav>

            <div className="md:hidden" onClick={() => setOpen(!open)}>

          

                 {
                    open === true ? "X" : <RiMenu2Line className="text-2xl"/>
                    
                 }
                
              

            </div>

           <ul className={`lg:flex ml-5 duration-1000 absolute lg:static bg-purple-500  p-4 rounded-lg text-white 
                ${open? 'top-12' : '-top-60'}
            `}>
         
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
         
           </ul>
        </nav>
    );
};

export default Navbar;