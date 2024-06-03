import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../CustomHook/UseAuth";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [roles, setRoles] = useState([])
    
    const toggleNavbar = () => {
        setNav(!nav)
    }
    const {logout, user} = UseAuth()
    useState(() => {
      fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setRoles(data)
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
    }, [])
    const role = roles && roles[1] ? roles[0].role : '';
  return (
    <div className="w-full navbar"><div className="contain flex justify-between items-center py-2 lg:py-3 px-3 lg:px-0">
    {
      user ? 
<div className="w-full flex justify-between items-center py-2 lg:py-3 px-3 lg:px-0 ">
        <Link to={"/"} data-tooltip-id="my-tooltip" data-tooltip-content="AssetFlow"><img src="/src/assets/logo1.png" alt="" className="w-44" /></Link>
    <Tooltip id="my-tooltip" className="z-50"/>
    <ul className="gap-5 items-center text-sm 2xl:text-lg hidden lg:flex"> 
      <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Home</NavLink>
      {role === "admin" && <NavLink to={"/assetlist"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Asset List</NavLink>}
      {role === "admin" && <NavLink to={"/addasset"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Add an Asset</NavLink>}
      {role === "admin" && <NavLink to={"/allrequests"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>All Requests</NavLink>}
      {role === "admin" && <NavLink to={"/customrequestslist"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Custom Requests List</NavLink>}
      {role === "admin" && <NavLink to={"/myemployees"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>My Employees</NavLink>}
      {role === "admin" && <NavLink to={"/addemployee"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Add Employee</NavLink>}
      {role === "admin" && <NavLink to={"/profile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Profile</NavLink>}
      {role === "employee" && <NavLink to={"/myassets"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>My Assets</NavLink>}
      {role === "employee" && <NavLink to={"/myteam"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>My Team</NavLink>}
      {role === "employee" && <NavLink to={"/requestforasset"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Request for an Asset</NavLink>}
      {role === "employee" && <NavLink to={"/profile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Profile</NavLink>}
    </ul>
    <div className="flex gap-4">
    <Tooltip id="my-tooltip2" className="z-50"/>
    {
      user?.email ? <div className="flex justify-end flex-1 lg:flex-none gap-2 lg:mr-0">
        <img src={user.photoURL || "https://i.ibb.co/N6p8fKX/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg"} data-tooltip-id="my-tooltip4" data-tooltip-content={user.displayName}  alt="" className="w-10 h-10 border-2 border-purple rounded-full cursor-pointer justify-self-end" /> <Tooltip id="my-tooltip4" className="z-50"/><Link to={"/"}><button data-tooltip-id="my-tooltip3" data-tooltip-content="Logout Now" onClick={logout} className="bg-purple text-white font-semibold text-lg px-7 py-1 rounded-md hidden lg:block">Logout</button></Link> <Tooltip id="my-tooltip3" className="z-50"/></div> : <div className="hidden lg:flex gap-4">
        <Link to={"/login"}><button className="bg-purple text-white px-7 py-1 rounded-md text-lg font-semibold">Login</button></Link>
      </div>
    }
    </div>
      </div>

      : <div className="w-full flex justify-between items-center py-2 lg:py-3 px-3 lg:px-0">
        <Link to={"/"} data-tooltip-id="my-tooltip" data-tooltip-content="AssetFlow" className="w-44"><img src="/src/assets/logo1.png" alt="" /></Link>
    <Tooltip id="my-tooltip" className="z-50"/>
    <ul className="gap-5 items-center text-xl hidden lg:flex"> 
      <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Home</NavLink>
      <NavLink to={"/joinasemployee"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Join as Employee</NavLink>
      <NavLink to={"/joinasadmin"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"}>Join as HR Manager</NavLink>
    </ul>
    <div className="flex gap-4">
    <Tooltip id="my-tooltip2" className="z-50"/>
    {
      user?.email ? <div className="flex justify-end flex-1 lg:flex-none gap-2 lg:mr-0">
        <img src={user.photoURL || "https://i.ibb.co/N6p8fKX/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg"} data-tooltip-id="my-tooltip4" data-tooltip-content={user.displayName}  alt="" className="w-10 h-10 border-2 border-purple rounded-full cursor-pointer justify-self-end" /> <Tooltip id="my-tooltip4" className="z-50"/><Link to={"/"}><button data-tooltip-id="my-tooltip3" data-tooltip-content="Logout Now" onClick={logout} className="bg-purple text-white font-semibold text-lg px-5 py-1 rounded-md hidden lg:block">Logout</button></Link> <Tooltip id="my-tooltip3" className="z-50"/></div> : <div className="hidden lg:flex gap-4">
        <Link to={"/login"}><button className="bg-purple text-white px-7 py-1 rounded-md text-lg font-semibold">Login</button></Link>
      </div>
    }
    </div>
      </div>
    }
    




    <h1 className="text-[2.2rem] block lg:hidden cursor-pointer ml-2" onClick={toggleNavbar}><GiHamburgerMenu /></h1>
      <div className={`contain bg-white h-screen w-full ${nav ? "fixed" : "hidden"} top-0 left-0 flex flex-col justify-center z-50`}>
          <h1 className="text-[3rem] absolute top-3 right-3 cursor-pointer" onClick={toggleNavbar}><MdOutlineClose /></h1>
          <ul className="gap-5 items-center text-2xl flex flex-col">
          <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"} onClick={toggleNavbar}>Home</NavLink>
          <NavLink to={"/artandcraft"} className={({isActive}) => isActive ? "font-bold cursor-pointer text--700" : "cursor-pointer"} onClick={toggleNavbar}>All Items</NavLink>
      {user && <NavLink to={"/additem"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"} onClick={toggleNavbar}>Add Item</NavLink>}
      {user && <NavLink to={"/mylist"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-purple" : "cursor-pointer"} onClick={toggleNavbar}>My List</NavLink>}
          </ul>
          {
      user?.email ? <div className="flex gap-2 w-full justify-center mt-5">
        <Link to={"/"}><button onClick={logout} className="bg-cyan-700 text-white font-semibold text-xl px-6 py-2 rounded-md mx-">Logout</button></Link></div> : <div className="flex flex-col items-center mt-4 gap-4">
        <Link to={"/login"}><button className="border-cyan-700 border-2 w-40 text-center py-2 rounded-md text-xl font-semibold" onClick={toggleNavbar}>Login</button></Link>
        <Link to={"/register"} className="bg-purple text-white font-semibold text-xl w-40 text-center py-2 rounded-md" onClick={toggleNavbar}>Register</Link>
      </div>
    }
      </div>
  </div></div>
    
  )
}

export default Navbar
