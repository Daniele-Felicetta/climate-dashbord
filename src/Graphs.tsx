import Chart from './components/Chart';
import {useState,useEffect} from "react"
import { Link} from 'react-router-dom'

export default function Graphs() {
    const [winWidth, setWinWidth]= useState(window.innerWidth)
    const [winHeight, setWinHeight]= useState(window.innerHeight)

    useEffect(()=>{
      const handleResize = () => {
        if(window.innerWidth<800){
          setWinWidth(window.innerWidth)
          setWinHeight(window.innerHeight)
        }
      }
      
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    },[winWidth, winHeight]);
    
  let width=500;
  let height=280;
  if(window.innerWidth<800){
    width=winWidth/1.2;
    height=winHeight/6;
  }
  
  return (
      <div className="flex flex-wrap justify-evenly gap-16 mt-10  pb-10">
        <button className=' rounded-2xl'>
          <Link to="/temperature"> 
            <Chart type="temperature" width={width} height={height} icon={true}/>
          </Link>
        </button>
        <button className=' rounded-2xl'>
          <Link to="/co2">
            <Chart type="co2" width={width} height={height} icon={true}/>
          </Link>
        </button>
        <button className='rounded-2xl'>
          <Link to="/methane">
            <Chart type="methane" width={width} height={height} icon={true}/>
          </Link>
        </button>
        <button className='rounded-2xl'>
          <Link to="/nitrous-oxide">
            <Chart type="nitrous-oxide" width={width} height={height} icon={true}/>
          </Link>
        </button>
        <button className='rounded-2xl'>
          <Link to="/arctic">
            <Chart type="arctic" width={width} height={height} icon={true}/> 
          </Link>
        </button>
      </div>
  )
  
}
