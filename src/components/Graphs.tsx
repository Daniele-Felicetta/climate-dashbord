import Chart from './Chart';

export default function Graphs() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <Chart />
      <h1 className="text-orange-500">Tony Number One</h1>
      <div style={{width: "800px"}}><canvas id="acquisitions"></canvas></div>
      
    </div>
  )
}
