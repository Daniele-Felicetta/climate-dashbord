import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Graphs from './Graphs';
import About from './components/About';
import Temperature from './components/charts/Temperature';
import Co2 from './components/charts/Co2';
import Methane from './components/charts/Methane';
import Nitrous from './components/charts/Nitrous';
import Arctic from './components/charts/Arctic';
import Nav from './Nav';

function App() {
   return(
   <div className='min-h-screen flex flex-col'>
      <Nav />
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
   </div>
 )

}

export default App
