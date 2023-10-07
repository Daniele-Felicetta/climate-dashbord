import { LineChart, Line, CartesianGrid, XAxis,YAxis, Tooltip, Legend} from "recharts"
import getData from "./datas"

interface Props{
  width: number,
  height: number
}
const datas= getData("");
export default function Chart({width, height}:Props) {
  
  return (
    <>
    <br />
      <LineChart width={width} height={height} data={[]}>
        <Line type="monotone" dataKey="Temperature" stroke="#FF2E22" strokeWidth={3}/>
        <Line type="monotone" dataKey="CO2" stroke="#128C66" strokeWidth={3}/>
        <Line type="monotone" dataKey="Metano" stroke="#2244AA" strokeWidth={3}/>
        <Line type="monotone" dataKey="NO2" stroke="#2244AA" strokeWidth={3}/>
        <Line type="monotone" dataKey="Ghiaccio Polare" stroke="#2244AA" strokeWidth={3}/>
        <CartesianGrid stroke="#CCCCCC"/>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  )
}
