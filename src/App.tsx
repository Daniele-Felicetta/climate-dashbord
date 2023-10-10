import { Link, Route, Routes } from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home';
import Graphs from './components/Graphs';
import About from './components/About';
import Temperature from './components/charts/Temperature';
import Co2 from './components/charts/Co2';
import Methane from './components/charts/Methane';
import Nitrous from './components/charts/Nitrous';
import Arctic from './components/charts/Arctic';
import earthGif from './assets/images/earth.gif';
import earth from './assets/images/earth-1.png';

function App() {
   const [imageSrc, setImageSrc] = useState(earth);
   const classHover="flex justify-evenly items-center text-2xl w-full h-20 font-semibold "
   const linkStyle:string=
      `
         bg-transparent h-full flex-1 flex justify-center items-center 
         text-xl
         border-r border-slate-400  
         hover:bg-slate-200 
      `
   return(
   <>
   <nav 
   className={classHover} 
   onMouseEnter={()=> {setImageSrc(earthGif)}}
   onMouseLeave={()=>{setImageSrc(earth)}}
   >

      <img className="w-20 bg-transparent hue-rotate-60" src={imageSrc} alt="" />
      <Link className={linkStyle} to="/">Home</Link>
      <Link className={linkStyle} to="/graphs">Graphs</Link>
      <Link className={linkStyle} to="/about">About</Link>
      
   </nav>

   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/graphs' element={<Graphs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/temperature' element={<Temperature />}/>
      <Route path='/co2' element={<Co2/>}/>
      <Route path='/methane' element={<Methane/>}/>
      <Route path='/nitrous-oxide' element={<Nitrous/>}/>
      <Route path='/arctic' element={<Arctic/>}/>
   </Routes>
   </>
 )

}

export default App
