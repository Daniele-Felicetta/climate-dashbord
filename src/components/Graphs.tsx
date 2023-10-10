import Chart from './Chart';
import getData from './datas';
import {useState,useEffect} from "react"
import { Link, Route, Routes } from 'react-router-dom'

interface Props{
  height:number,
  width:number
}

export default function Graphs() {


  // let plusHeight = 800;
  // let plusWidth = 1500;

  // if(window.innerWidth<1200){
  //   plusHeight=400
  //   plusWidth= 150
  // }
  
  // if(window.innerWidth<600){
  //   plusHeight= 500
  //   plusWidth= 100
  // }
  // const [width, setWidth]= useState(window.innerWidth-plusWidth)
  // const [height, setHeight]= useState(window.innerHeight-plusHeight)

  // useEffect(()=>{
  //   const handleResize = () => {
     
  //     setWidth(window.innerWidth-plusWidth)
  //     setHeight(window.innerHeight-plusHeight)
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }
  // },[width, height]);

  // setWidth(600)
  // setHeight(600)

  const width=500;
  const height=300;

  return (

      <div className="flex flex-wrap justify-evenly gap-10 mt-10 ">
        <div className='curse bg-slate-200 rounded-2xl'>
          <Link className='w-full z-50 h-full cursor-pointer' to="/temperature"> 
            <Chart type="temperature" width={width} height={height} icon={true}/>
          </Link>
        </div>
        <div className='bg-slate-200 rounded-2xl cursor-pointer	'>
          <Link to="/co2">
            <Chart type="co2" width={width} height={height} icon={true}/>
          </Link>
        </div>
        <div className='bg-slate-200 rounded-2xl cursor-pointer	'>
          <Link to="/methane">
            <Chart type="methane" width={width} height={height} icon={true}/>
          </Link>
        </div>
        <div className='bg-slate-200 rounded-2xl cursor-pointer'>
          <Link to="/nitrous-oxide">
            <Chart type="nitrous-oxide" width={width} height={height} icon={true}/>
          </Link>
        </div>
        <div className='bg-slate-200 rounded-2xl cursor-pointer	'>
          <Link to="/arctic">
            <Chart type="arctic" width={width} height={height} icon={true}/> 
          </Link>
        </div>
      </div>

  )
  
}
