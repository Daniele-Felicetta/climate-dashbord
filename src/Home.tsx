import getData from "./components/datas"

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
    <div className="home h-[calc(100vh-80px)] flex justify-evenly items-center ">
        <section className="lg:-mt-32 p-5 w-5/6 h-[28rem] sm:h-96 md:w-4/6 md:h-88 lg:w-3/6 xl:h-80 bg-slate-200 rounded-xl opacity-90">
          <h1 className="text-4xl text-center font-semibold ">Climate Dashboard</h1>
          <p className=" md:mt-10 xs:text-2xl text-lg mt-5 ">
          This site was made to show what is the climate impact that is changing the world.
          Climate is a topic that has been talked about a lot lately, as it directly and indirectly affects our lives.
          This site collects data from <a href="https://global-warming.org" target="_blank" rel="noopener noreferrer" >global-warming.org</a> in reference to various anomalies on a decadal and even secular basis
          </p>
        </section>
    </div>
  )
}
