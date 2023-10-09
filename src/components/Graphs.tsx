import Chart from './Chart';
import getData from './datas';
import {useState,useEffect} from "react"
export default function Graphs() {

  return (
    <div className='flex justify-center flex-col items-center'>
      <Chart type="temperature" width={1600} height={600}/>
      <Chart type="co2" width={1600} height={600}/>
      <Chart type="methane" width={1600} height={600}/>
      <Chart type="nitrous-oxide" width={1600} height={600}/>
      <Chart type="arctic" width={1600} height={600}/> 
      <div style={{width: "800px"}}><canvas id="acquisitions"></canvas></div>
      
    </div>
  )
}
