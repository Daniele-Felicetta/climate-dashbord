import { LineChart, Line, CartesianGrid, XAxis,YAxis, Tooltip, Legend} from "recharts"

  const data=[
    { "name": "2017", "react": 32, "angular": 37, "vue": 60 },
    { "name": "2018", "react": 45, "angular": 30, "vue": 70 },
    { "name": "2019", "react": 50, "angular": 28, "vue": 75 },
    { "name": "2020", "react": 55, "angular": 25, "vue": 80 },
    { "name": "2021", "react": 60, "angular": 22, "vue": 85 },
    { "name": "2022", "react": 65, "angular": 20, "vue": 90 }
  ]
export default function Chart() {
  return (
    <>
      <LineChart width={600} height={400} data={data}>
        <Line type="monotone" dataKey="react" stroke="#FF2E22" strokeWidth={3}/>
        <Line type="monotone" dataKey="angular" stroke="#128C66" strokeWidth={3}/>
        <Line type="monotone" dataKey="vue" stroke="#2244AA" strokeWidth={3}/>
        <CartesianGrid stroke="#CCCCCC"/>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  )
}
