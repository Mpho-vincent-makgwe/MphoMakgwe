import Hero from "@/components/Hero/HeroM"
import Encryption from "@/components/main/Encryption";
import Skills from "@/components/main/Skills"
import Link from "next/link";
// import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
// import ProjectsPage from "./Projects";
const Home=()=> {
  return (
    <main className="h-full w-full">
            <div className="container mx-auto py-8">
            <header className="bg-blue-500 w-full py-4">
        <div className="container mx-auto text-white">
          <h1 className="text-4xl font-extrabold">Welcome to My Portfolio</h1>
          <p className="text-lg">Discover my work and skills</p>
        </div>
      </header>
        <section className="mb-12">
          <Hero />
        </section>

        <section className="bg-zinc-400 font-md shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 break-words">
            Hello, my name is Mpho Vincent Makgwe, and I am a full-stack
            software engineering student at CodeLab Academy. I have experience
            working with various programming languages and technologies. My
            passion lies in web development, and I&apos;m continuously learning and
            growing in this field.
          </p>
          {/* You can add more content about yourself here */}
        </section>
      </div>
      <div className="flex flex-col gap-20">
        <Skills />
        <Encryption />
        {/* <ProjectsPage /> */}
{/* <section>
<div className='flex center justify-between w-1/4 m-1 '>
  <Link className='text-l hover:bg-blue-300 rounded transform scale-110' href={`https://twitter.com/youngstoningV`} target={`_blank`}><FaTwitter/></Link>
  <Link className='text-l hover:bg-blue-300 rounded transform scale-110' href={`https://github.com/Mpho-vincent-makgwe`} target={`_blank`}><FaGithub/></Link>
  <Link className='text-l hover:bg-blue-300 rounded transform scale-110' href={`https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/`} target={`_blank`}><FaLinkedin/></Link>
</div>

</section> */}
      </div> 
    </main>
  )
};
export default Home;