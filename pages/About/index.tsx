import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaMailBulk,FaHtml5, FaCss3, FaJava } from "react-icons/fa";
import { MdCode, MdStorage, MdDescription } from "react-icons/md";

const AboutPage = () => {
  return (
    <main className="bg-gray-100 p-4">
      <div className="flex items-center justify-center"><div className="rounded-full mx-auto mb-4">
      <Image
          src="/images/Mpho/2a_361A4985.jpg"
          alt="Example Image"
          width={200}
          height={200}
          className="text-center rounded-md"
        />
      </div></div>

      <h1 className="text-2xl font-bold text-blue-600 text-center mb-2">
        Hi there 👋
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Mpho Vincent Makgwe - Full Stack Software Engineering Student 👨‍💻
      </h2>

      <div className="text-lg text-black mb-6">
        <h3>Introduction 🙋‍♂️</h3>
        <p>
          Hello, my name is Mpho Vincent Makgwe, and I am currently a
          full-stack software engineering student at CodeLab Academy. I have
          experience working with a variety of programming languages, including
          HTML, CSS, JavaScript, PHP, Vue, and Node.js.
        </p>
      </div>

      <div className="text-lg text-gray-700 mb-6">
        <h3 className="font-semibold text-lg mb-2">Skills 🚀</h3>
        <div className="flex">
          <FaHtml5/><FaJava/><FaCss3/>
          <MdDescription /> {/* Material Icons */} {/* JavaScript icon */}
          <MdStorage /> {/* Database icon */}
          <MdDescription /> {/* Document Text icon */}
          <MdCode /> {/* Material Icons */}
          {/* VSCode icon */}
        </div>

      </div>

<div className="text-black bg-gray-500 rounded-md">
<h3>Stats 📊</h3>
      {/* Add your GitHub stats component here */}

      <h3>Repositories 📚</h3>
      <ul>
        <li>
          <Link href="https://github.com/Mpho-vincent-makgwe?tab=repositories">
            CodeLab Projects
          </Link>
          : A collection of small coding projects I completed during my time at
          CodeLab Academy.
        </li>
        <li>
          <Link href="https://github.com/Mpho-vincent-makgwe/JavaScript30-master.git">
            JavaScript30
          </Link>
          : A repository containing my solutions to the 30 Day Vanilla JS
          Challenge.
        </li>
        <li>
          <Link href="#">Portfolio Website</Link>: The code for my personal
          portfolio website, built using HTML, CSS, and JavaScript.
        </li>
        <li>
          <Link href="https://github.com/Mpho-vincent-makgwe/todo-app">
            Kitchen App
          </Link>
          : An order list application built using HTML, CSS, and JavaScript
          that allows users to add, edit, and delete orders.
        </li>
        {/* Add more repositories as needed */}
      </ul>
</div>

      <div className="text-lg text-gray-700 mb-6">
        <h3 className="font-semibold text-lg mb-2">Contact 📫</h3>
      <div className='flex list-disc list-inside justify-between w-1/4 m-1 text-black '>
            <Link className='text-l hover:bg-blue-300 rounded'  href={`mailto:mphomakgwe4@gmail.com`}><strong><FaMailBulk/></strong></Link>
            <Link className='text-l hover:bg-blue-300 rounded' href={`https://twitter.com/youngstoningV`} target={`_blank`} ><FaTwitter/></Link>
            <Link className='text-l hover:bg-blue-300 rounded' href={`https://github.com/Mpho-vincent-makgwe`} target={`_blank`} ><FaGithub/></Link>
            <Link  href={`https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/`} target={`_blank`}  className='text-l hover:bg-blue-300 rounded'><FaLinkedin/></Link>
        </div>
      </div>

      <p className="text-lg text-gray-700 text-center">
        Thank you for taking the time to view my work! 😊
      </p>
    </main>
  );
};

export default AboutPage;
