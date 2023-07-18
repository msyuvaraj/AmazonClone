import React , {useEffect,useState,useRef} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideNavContent from './SideNavContent'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {motion} from "framer-motion"

const HeaderBottom = () => {
    const ref =useRef();
    const [sideBar , setSideBar] = useState(false)
    useEffect(()=>{
        document.body.addEventListener("click" , (e)=>(
            (e.target.contains(ref.current)) && setSideBar(false)
        ))
    } , [ref , sideBar])

  return (
    <div className='bg-amazon_light w-full px-4 h-[36px] text-white flex items-center'>
        {/* ============ ListItems Start here ============ */}
        <ul className='flex item-center gap-2 text-sm tracking-wide'>
            <li onClick={()=>(setSideBar(true))} className='headerHover flex items-center gap-1'> <MenuIcon /> All</li>
            <li className='headerHover'>Today's Deals</li>
            <li className='headerHover'>Customer Service</li>
            <li className='headerHover'>Gift Cards</li>
            <li className='headerHover'>Registry</li>
            <li className='headerHover'>Sell</li>      
        </ul>
        {/* ============ ListItems End here ============ */}
        {/* ============ sideNav Start here ============== */}
        
        {sideBar && (
            <div className=' w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue
            bg-opacity-50'
            >
                <div  className='w-full h-full relative'>
                    <motion.div ref={ref}   initial={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} >
                        <div   className='w-[350px] h-full  bg-white border border-black '>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                <AccountCircleIcon />
                                <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                    Hello,Sign In
                                </h3>
                            </div>
                            <SideNavContent
                                title="Digital Content & Devices"
                                one="Amazon Music"
                                two="Kindle E-readers & Books"
                                three="Amazon Appstore"
                            />
                            <SideNavContent
                                title="Shop By Department"
                                one="Electronics"
                                two="Computers"
                                three="Smart Home"
                            />
                            <SideNavContent
                                title="Programs & Features"
                                one="Gift Cards"
                                two="Amazon live"
                                three="International Shopping"
                            />
                            <SideNavContent
                                title="Help & Settings"
                                one="Your Account"
                                two="Customer Service"
                                three="Contact us"
                            />
                            <span onClick={()=>setSideBar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                            <CloseIcon />
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        )


        }
        {/* ============ sideNav End here ============== */}
    </div>
  )
}

export default HeaderBottom