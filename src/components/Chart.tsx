import { AreaChart, Area, CartesianGrid, XAxis,YAxis, Tooltip, Legend} from "recharts"
import getData from "./datas"
import { useEffect, useState } from "react";

interface Props{
  width: number,
  height: number
}
export default function Chart({width, height}:Props) {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData= async()=>{
      const datas= await getData();
      setData(datas);
    }
    fetchData()
  },[])
  return (
    <>
    <br />
      <AreaChart width={width} height={600} data={data}>
       
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="station" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <CartesianGrid stroke="#CCCCCC"/>
        <XAxis dataKey={"time"}/>
        <YAxis dataKey="station" type={"number"} domain={[-1.5,1]} />
        <Tooltip formatter={(value, name, props) => `${name}: ${value} `}/>
      </AreaChart>
    </>
  )
}
