import Chart from './Chart';
import getData from './datas';
import {useState,useEffect} from "react"

interface Props{
  height:number,
  width:number
}

export default function Graphs() {
  let plusHeight = 200;
  let plusWidth = 200;
  if(window.innerWidth<1200){
    plusHeight=400
    plusWidth= 150
  }
  if(window.innerWidth<600){
    plusHeight= 500
    plusWidth= 100
  }
  const [width, setWidth]= useState(window.innerWidth-plusWidth)
  const [height, setHeight]= useState(window.innerHeight-plusHeight)

  useEffect(()=>{
    const handleResize = () => {
     
      setWidth(window.innerWidth-plusWidth)
      setHeight(window.innerHeight-plusHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[width, height]);
  return (
    <div className='flex justify-center flex-col items-center'>
      <Chart type="temperature" width={width} height={height}/>
      <Chart type="co2" width={width} height={height}/>
      <Chart type="methane" width={width} height={height}/>
      <Chart type="nitrous-oxide" width={width} height={height}/>
      <Chart type="arctic" width={width} height={height}/> 
    </div>
  )
}
