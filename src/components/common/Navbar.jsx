import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavbarLinks} from '../../data/navbar-links';
import logo from '../../assets/Logo/Logo-Full-Light.png';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
// import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/apis';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const subLinks = [
    {
        title: "python" ,
        link :"/catalog/python",
        
    },
    {
        title: "webdevelopment" ,
        link :"/catalog/webdevelopment",
        
    }
]

const Navbar = () => {

    const {token} = useSelector( (state) => state.auth);
    const{user} = useSelector( (state) => state.profile);
    const {totalItems} = useSelector( (state) => state.cart);
    // const [subLinks , setSubLinks] =useState([]);
    
    // const fetchSubLinks =   async()=>{
    //     try {
    //         const result = await apiConnector( "GET" , categories.CATEGORIES_API);
    //         console.log("printing sublinks result : " , result);
    //         setSubLinks(result.data.data);
    //     } catch (error) {
    //         console.log("could not fetch the categoires list");
    //     }
    // }
    // useEffect( () =>{
    //     fetchSubLinks()
    // }, []);

    const location = useLocation();
    const matchRoute = (route) =>{
        return matchPath({path:route} , location.pathname);
    }


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-400 '>

        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            {/* {image} */}
            <Link to="/">
                <img src={logo} alt='logo' width={160} height={42} loading='lazy'/>
            </Link>

            {/* {nav links} */}
            <ul className='flex gap-x-6 text-richblack-25'>
                {
                    NavbarLinks.map( (link , index) => (
                        <li key={index}>
                            {
                                link.title ==="Catalog" ? ( 
                                <div className='relative flex items-center gap-2 group'>
                                    <p>{link.title}</p>
                                    <IoIosArrowDropdownCircle />

                                    <div className='invisible absolute left-[50%]
                                    translate-x-[-50%] translate-y-[50%]
                                    top-[50%]
                                    flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                    opacity-0 transition-all duration-200 group-hover:visible
                                    group-hover:opacity-100  lg:w-[300px]'>

                                        
                                    <div className='absolute left-[50%] top-0
                                    translate-x-[80%] 
                                    translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                       

                                    </div>
                                    <div>
                                       {
                                            subLinks.length ? (
                                                
                                                    subLinks.map( (subLink, index) => (
                                                        <Link to={`${subLink.link}`} key={index}>
                                                            <p>{subLink.title}</p>

                                                        </Link>
                                                    ))
                                                
                                            ) : ( <div></div> )
                                        } 
                                       </div>

                                    </div>


                                </div> ) : (
                                    <Link to={link?.path}>
                                        <p className={`${ matchRoute(link?.path) ? "text-yellow-25" :
                                    " text-richblack-25"}`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
            </ul>

            {/* login,signin,dashboard */}
            <div className='flex gap-4 items-center'>
                {
                    user && user?.accountType != "Insutructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <FiShoppingCart />
                            {
                                totalItems > 0 && (
                                    <span>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to="/login">
                            <button className='border border-black-700 bg-richblack-800 px-[12px] py-[8px]
                            text-richblack-100 rounded-md  '>
                                Log in
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to="/signup">
                            <button className='border border-black-700 bg-richblack-800 px-[12px] py-[8px]
                        text-richblack-100 rounded-md  '>
                            Sign Up
                        </button>
                        </Link>
                    )
                }
                 {
                    token !== null && <ProfileDropDown/>
                }
            </div>

        </div>
    </div>
  )
}

export default Navbar;

