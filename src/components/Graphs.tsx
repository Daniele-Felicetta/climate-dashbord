import Chart from './Chart';
import getData from './datas';
import {useState,useEffect} from "react"
import { Link, Route, Routes } from 'react-router-dom'

interface Props{
  height:number,
  width:number
}

export default function Graphs() {
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
