import  {Link}  from "react-router-dom"
export default function NavBar({children}:{children: React.ReactNode}) {
    
  return (
    <div className="flex flex-col">
      <nav className="flex justify-evenly text-2xl font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"graphs"}>Graphs</Link>
      </nav>
      {children}
    </div>
  )
}

