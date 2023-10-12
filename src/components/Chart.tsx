import { AreaChart, Area, CartesianGrid, XAxis,YAxis, Tooltip} from "recharts"
import getData from "./datas"
import { useEffect, useState } from "react";

interface Props{
  type: string
  width?: number,
  height?: number,
  icon?: boolean
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


export default function Chart({type, width, height, icon}:Props) {
  const [data,setData] = useState<Data[]>([]);

  if(!width || !height) {
    let plusHeight = 300;
    let plusWidth = 300;

    if(window.innerWidth<1200){
      plusHeight=300
      plusWidth= 150
    }   
    if(window.innerWidth<600){
      plusHeight= 300
      plusWidth= 50
    }
    if(window.innerHeight<600){
      plusHeight=200;
    }
    if(window.innerHeight<400){
      plusHeight=160
    }
    const [winWidth, setWinWidth]= useState(window.innerWidth-plusWidth)
    const [winHeight, setWinHeight]= useState(window.innerHeight-plusHeight)

    useEffect(()=>{
      const handleResize = () => {
        setWinWidth(window.innerWidth-plusWidth)
        setWinHeight(window.innerHeight-plusHeight)
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    },[winWidth, winHeight]);
    width=winWidth
    height=winHeight;
  }

  
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
  console.log(data);
  return (
    <div>
    <br />
    <h1 className="capitalize text-center text-xl">{type}</h1>
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
        <YAxis hide={icon ? true : false} tickCount={7} dataKey={yKey} type={"number"} domain={[min,max]} />
      {!icon &&
        <>
          <XAxis dataKey={xKey}/>
          <Tooltip content={<CustomTooltip type={type}/>}/>
          <CartesianGrid  stroke="#ccc"/>
        </>
       }

      </AreaChart>
    </div>
  )
}

interface PropsTooltip{
  active: boolean,
  payload: any,
  label: string,
  type: string
}

const CustomTooltip = ({ active, payload, label,type }:any) => {
  if (active && payload && payload.length) {
    function tip(){
      switch(type){
        case "temperature":
          return <p className="label">{`${label} : ${payload[0].value}°`}</p>
        case "arctic":
          return <p className="label">{`${label} : ${payload[0].value}km2`}</p>
        default:
          return <p className="label">{`${label} : ${payload[0].value}ppm`}</p>
      }
    }
    return (
      <div className="tooltip bg-slate-200 p-5 rounded-3xl opacity-90">
        {tip()}
      </div>
    );
  }

  return null;
};