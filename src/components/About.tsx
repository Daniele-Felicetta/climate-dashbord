import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
export default function About() {
  return (
    <div className="flex justify-evenly items-center flex-col h-[60vh]">   
      <h1 className="text-4xl text-center ">This site is made by</h1>
      <h2 className="text-3xl text-center">Daniele Felicetta</h2>
      <div className='flex w-80 flex-wrap justify-evenly'>
        <a href="https://linkedin.com/in/daniele-felicetta-13a586245">
          <img className="w-20" src={linkedin} alt="" />
        </a>
        <a href="https://github.com/Daniele-Felicetta">
          <img className="w-24" src={github} alt="" />
        </a>
        </div>
    </div>
  )
}