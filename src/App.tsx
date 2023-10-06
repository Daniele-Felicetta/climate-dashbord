import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Graphs from './components/Graphs';
import About from './components/About';

function App() {
   const linkStyle:string=
      `
         bg-transparent h-full flex-1 flex justify-center items-center 
         border border-slate-800  
         hover:bg-slate-200 
      `
   return(
   <>
   <nav className="flex justify-evenly items-center text-2xl w-full h-20 font-semibold ">
      <Link className={linkStyle} to="/">Home</Link>
      <Link className={linkStyle} to="/graphs">Graphs</Link>
      <Link className={linkStyle} to="/about">About</Link>
   </nav>

   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/graphs' element={<Graphs/>}/>
      <Route path='/about' element={<About/>}/>
   </Routes>
   </>
 )

}

export default App
