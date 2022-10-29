import Logo from '../../img/logo.png';
import { FaShoppingCart, FaAd, FaTasks} from 'react-icons/fa';
import Avatar from '../../img/Avatar.png'
import {Link} from 'react-router-dom'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {app} from '../firebase.config'
import { useStateValue } from 'components/context/StateProvider';
import { actionType } from 'components/context/reducer';
import { useState } from 'react';

const Header = () => {
    const firebaseAuth = getAuth(app) 
    const provider = new GoogleAuthProvider()
    const [{user}, dispatch] = useStateValue()
    const [isMenu, setIsMenu] = useState(false)
    const login = async () => {
        if(!user) {
      const {user:{refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })
      localStorage.setItem('user',JSON.stringify(providerData[0]))
    }else{
        setIsMenu(!isMenu)
        
    }
    }
    const logout = () => {
        setIsMenu(false)
        localStorage.clear()
        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }
    return (
      <header
       className="fixed z-50 w-screen p-6 px-16 bg-primary"
      >
       <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link className="flex item-center gap-2" to={"/"}>
            <img src={Logo} alt="logo" className='w-8 object-cover'/>
            <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <ul className='flex items-center gap-8 ml-auto'>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>About us</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Service</li>
        </ul>
        <div className='relative flex items-center justify-center'>
        <FaShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/>
        <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
        </div>
        </div>
        <div className='relative' onClick={login}>
        <img src={user? user.photoURL : Avatar} alt='avatar' className='w-10 min-w-[40px] h-10 min-h-[40px] mx-5 rounded-full'/>
        {isMenu && (<div className='w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 flex flex-col px-4 py-2'>
            { user && user.email ==="ktuzova1901@gmail.com" && (
            <Link to={"./createItem"}>
            <p className='px-4 py-2 flex items-center gap-2 text-textColor text-base'>New Item <FaAd/></p>
            </Link>
            )
            }
            <p className='px-4 py-2 flex items-center gap-7  text-textColor text-base' onClick={logout}>Logout<FaTasks/></p>
        </div>)}
        </div>
       </div>
        <div className='flex items-center  justify-between md:hidden w-full h-full'>
         <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo"/>
            <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='relative flex items-center justify-center'>
        <FaShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/>
        <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
        </div>
        </div>
        <div className='relative' onClick={login}>
        <img src={user? user.photoURL : Avatar} alt='avatar' className='w-10 min-w-[40px] h-10 min-h-[40px] mx-5 rounded-full'/>
        {isMenu && (<div className='w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 flex flex-col px-4 py-2'>
            { user && user.email ==="ktuzova1901@gmail.com" && (
            <Link to={"./createItem"}>
            <p className='px-4 py-2 flex items-center gap-2 text-textColor text-base'>New Item <FaAd/></p>
            </Link>
            )
            }
        <div className='relative flex items-center justify-center'>
        <FaShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/>
         </div>
         <ul className='flex  flex-col px-4 py-2'>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>About us</li>
            <li className='text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out'>Service</li>
        </ul>
            <p className='px-4 py-2 flex items-center gap-7  text-textColor text-base' onClick={logout}>Logout<FaTasks/></p>
        </div>)}
        </div>
       </div>
      </header>
    );
  };
  export default Header