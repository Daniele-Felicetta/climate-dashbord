import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
export default function About() {
  return (
    <div className="flex justify-evenly items-center flex-col h-[60vh]">   
      <h1 className="text-4xl text-center ">This site is made by</h1>
      <h2 className="text-3xl text-center">Daniele Felicetta</h2>
      <div className='flex w-80 flex-wrap justify-evenly'>
        <img className="w-20" src={linkedin} alt="" />
        <img className="w-20" src={github} alt="" />
        </div>
    </div>
  )
}