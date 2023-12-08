import Link from 'next/link';
import Logo from '../Logo';
const NavBar =()=>{

    return(
        <>
        
        <div className='w-full px-0 py-0 bg-gray-500 flex text-black font-medium items-center justify-between pb-10 pt-10' >

            <Link href={`/Resume`} className='text-2l hover:bg-blue-300 rounded'>Resume</Link>
            <Link href={`/About`} className='text-l hover:bg-blue-300 rounded'>About</Link>
            <h1 className=' underline text-opacity-500 text-myColor1 hover:bg-blue-300 rounded'><Logo/></h1>
            <Link href={`/Projects`} className='text-l hover:bg-blue-300 rounded'>Projects</Link>
            <Link href={`/Movies`} className='text-l hover:bg-blue-300 rounded'>Movies</Link>
        </div>
    

        </>
    )};


export default NavBar;