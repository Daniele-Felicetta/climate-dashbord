import Chart from './Chart';
import getData from './datas';
import {useState,useEffect} from "react"
export default function Graphs() {

  return (
    <div className='flex justify-center flex-col items-center'>
      <Chart width={1200} height={600}/>
      <h1 className="text-orange-500">Tony Number One</h1>
      <div style={{width: "800px"}}><canvas id="acquisitions"></canvas></div>
      
    </div>
  )
}
