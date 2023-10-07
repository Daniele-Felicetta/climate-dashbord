
interface temperature{
    time: number,
    station: number,
    land:number
  }
export default async function getData(req: any){
   
    const data = await fetch("https://global-warming.org/api/temperature-api");
    const rawTemperature= await data.json();
    const temperatures= rawTemperature.result.map((temperature:temperature)=>{
        return temperature
    })
    if(req in temperatures){
    const response= temperatures.map((temperature:temperature)=>temperature.time)
    }
}