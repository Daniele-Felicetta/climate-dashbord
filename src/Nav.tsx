
import { Link } from 'react-router-dom'
import earthGif from './assets/images/earth.gif';
import earth from './assets/images/earth-1.png';
import moon from './assets/images/moon.svg';
import sun from './assets/images/sun.svg';
import {useState,useEffect} from 'react';

export default function Nav() {
    const linkStyle:string=
   `
      bg-transparent h-full flex-1 flex justify-center items-center 
      text-xl
      border-slate-400  
      hover:bg-slate-200 
   `
    const darkLight:string=
   `
      bg-transparent flex justify-center items-center p-2 mr-2
      text-xl
      border-slate-400 rounded-full border
      hover:bg-slate-200  
      sm:p-5 sm:mr-4 sm:border-none
   `
   const getDark=localStorage.getItem("dark")
   const darkParse=getDark && JSON.parse(getDark)
   const [imageSrc, setImageSrc] = useState(earth);
   const [dark, setDark] = useState(darkParse);
   
   useEffect(()=>{
      if (dark) {
         document.body.className = "dark-mode";
      } 
      else {
         document.body.className = "light-mode";
      }
      localStorage.setItem("dark", JSON.stringify(dark))
      },[dark])
  return (  
    <nav 
         className="flex justify-evenly items-center text-2xl w-full h-20 font-semibold "
         onMouseEnter={()=> {setImageSrc(earthGif)}}
         onMouseLeave={()=>{setImageSrc(earth)}}
      >
         <img className="w-0 sm:w-20 bg-transparent hue-rotate-60" src={imageSrc} alt="" />
         <Link className={linkStyle+"border-r"} to="/">Home</Link>
         <Link className={linkStyle+"border-r"} to="/graphs">Graphs</Link>
         <Link className={linkStyle} to="/about">About</Link>
         <button onClick={()=>setDark(!dark)} className={darkLight}>
            <img className="w-[20px] sm:w-[25px]" src={dark ? sun : moon} alt="" />
         </button>
      </nav>
  )
}
