import getData from "./datas"

export default function Home() {
  const dataStorage= localStorage.getItem("data")
  if(!dataStorage){
    Promise.all([
      getData("temperature"),
      getData("co2"),
      getData("methane"),
      getData("nitrous-oxide"),
      getData("arctic")
    ]).then(results=>{
      const data={
        temperature:results[0],
        co2:results[1],
        methane:results[2],
        nitrousOxide:results[3],
        arctic:results[4]
      };
      localStorage.setItem("data",JSON.stringify(data));
    }).catch(err=> {
    console.error("Si è verificato un errore nel recuperare i dati:", err);
    })
  }
  
  return (
    <div className="home h-[91.4vh] flex justify-evenly items-center">
        <div className="-mt-30 h-96 w-3/6 bg-slate-200 rounded-xl opacity-90">
          <h1 className="text-4xl text-center text-black">Introduzione</h1>
          <p>
            
          </p>
        </div>
    </div>
  )
}
