import Link from "next/link";

const Homepage = () => {
  return (
    <div>
       <h1 className='text-5xl mb-8 font-bold'>Home page</h1>
       <Link href="/client" className="btn btn-accent" >
         Get Started
       </Link>
    </div>
  )
}

export default Homepage;