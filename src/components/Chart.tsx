import { AreaChart, Area, CartesianGrid, XAxis,YAxis, Tooltip, Legend} from "recharts"
import getData from "./datas"
import { useEffect, useState } from "react";

interface Props{
  type: string
  width: number,
  height: number,
}
type Transformable = {
  [key: string]: any;
};
interface Data{
  station: string
}
function minMax(data:Transformable, ref:string){
  const items = data.map((x:Transformable)=>{
    return (x[ref]);
  })
  return{
    min:parseFloat(Math.min(...items).toFixed(2)),
    max:parseFloat(Math.max(...items).toFixed(2))
  }
}
export default function Chart({type, width, height}:Props) {
  const [data,setData] = useState<Data[]>([]);

  useEffect(()=>{
    const fetchData= async()=>{
      const datas= await getData(type);
     
      setData(datas);
    }
    fetchData()
  },[])
  
  let xKey:string= "";
  if (data && data.length > 0) {
    const inData = data[0];
    xKey= Object.keys(inData)[0]
  }
  let yKey:string= "";
  if (data && data.length > 0) {
    const inData = data[0];
    yKey= Object.keys(inData)[1]
  }
  let zKey:string= "";
  if (data && data.length > 0) {
    const inData = data[0];
    zKey= Object.keys(inData)[2]
  }
  const min:number = minMax(data,zKey).min;
  const max:number = minMax(data,zKey).max;
  console.log(data)
  return (
    <>
    <br />
    <h1 className="capitalize">{type}</h1>
    <br />
      <AreaChart width={width} height={height} data={data}>
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
        <Area type="monotone" dataKey={zKey} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <CartesianGrid stroke="#CCCCCC"/>
        <XAxis dataKey={xKey}/>
        <YAxis dataKey={yKey} type={"number"} domain={[min,max]} />
        <Tooltip content={<CustomTooltip />}/>
      </AreaChart>
    </>
  )
}
const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-200 p-5 rounded-3xl opacity-90">
        <p className="label">{`${label} : ${payload[0].value}°`}</p>
      </div>
    );
  }

  return null;
};