import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="rounded-full mx-auto mb-4">
        <Image
          src="https://github.com/Mpho-vincent-makgwe/Mpho-Vincent-Makgwe/assets/118048918/36b9e423-5c4b-4544-b006-859056347434"
          alt="Example Image"
          width={200}
          height={200}
        />
      </div>

      <h1 className="text-2xl font-bold text-blue-600 text-center mb-2">
        Hi there 👋
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Mpho Vincent Makgwe - Full Stack Software Engineering Student 👨‍💻
      </h2>

      <div className="text-lg text-gray-700 mb-6">
        <h3>Introduction 🙋‍♂️</h3>
        <p>
          Hello, my name is Mpho Vincent Makgwe, and I am currently a
          full-stack software engineering student at CodeLab Academy. I have
          experience working with a variety of programming languages, including
          HTML, CSS, JavaScript, PHP, Vue, and Node.js.
        </p>

        <p>
          - I am a passionate and driven individual with a strong foundation
          in web development, particularly in HTML, CSS, and JavaScript.
          Currently studying Full Stack Software Development at CodeSpace
          Academy, I am expanding my expertise in programming languages like
          Python and Java, as well as frameworks such as React and Node.js. With
          a deep understanding of software development principles and a keen
          eye for detail, I thrive in problem-solving and strive for excellence
          in delivering scalable and efficient solutions. A collaborative
          mindset and effective communication skills enable me to contribute
          effectively within teams and create innovative software solutions. My
          relentless dedication to continuous learning and growth fuels my
          ambition to become a successful Software Engineer, making a lasting
          impact in the ever-evolving IT industry.
        </p>
      </div>

      <div className="text-lg text-gray-700 mb-6">
        <h3 className="font-semibold text-lg mb-2">Skills 🚀</h3>
        <ul className="list-disc list-inside">
          <li>
            <Image
              src="https://img.shields.io/badge/-HTML-orange?style=flat&logo=html5&logoColor=white"
              alt="HTML"
              className="inline-block w-4 h-4 mr-2"
              height={200}
              width={300}
            />
            HTML
          </li>
          <li>
            <Image
              src="https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=javascript&logoColor=white"
              alt="JavaScript"
              className="inline-block w-4 h-4 mr-2"
              height={200}
              width={300}
            />
            JavaScript
          </li>
          <li>
            <Image
              src="https://img.shields.io/badge/-CSS-blue?style=flat&logo=css3&logoColor=white"
              alt="CSS"
              className="inline-block w-4 h-4 mr-2"
              height={200}
              width={300}
            />
            CSS
          </li>
        </ul>
      </div>

      <h3>Stats 📊</h3>
      {/* Add your GitHub stats component here */}

      <h3>Repositories 📚</h3>
      <ul>
        <li>
          <a href="https://github.com/Mpho-vincent-makgwe?tab=repositories">
            CodeLab Projects
          </a>
          : A collection of small coding projects I completed during my time at
          CodeLab Academy.
        </li>
        <li>
          <a href="https://github.com/Mpho-vincent-makgwe/JavaScript30-master.git">
            JavaScript30
          </a>
          : A repository containing my solutions to the 30 Day Vanilla JS
          Challenge.
        </li>
        <li>
          <a href="#">Portfolio Website</a>: The code for my personal
          portfolio website, built using HTML, CSS, and JavaScript.
        </li>
        <li>
          <a href="https://github.com/Mpho-vincent-makgwe/todo-app">
            Kitchen App
          </a>
          : An order list application built using HTML, CSS, and JavaScript
          that allows users to add, edit, and delete orders.
        </li>
        {/* Add more repositories as needed */}
      </ul>

      <div className="text-lg text-gray-700 mb-6">
        <h3 className="font-semibold text-lg mb-2">Contact 📫</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Email:</strong> mphomakgwe4@gmail.com
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/"
              className="text-blue-500 hover:underline"
            >
              Mpho Vincent Makgwe
            </a>
          </li>
          <li>
            <strong>Twitter:</strong>{" "}
            <Link href="https://twitter.com/youngstoningV">
              <a className="text-blue-500 hover:underline">
                Mpho's Twitter
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 text-center">
        Thank you for taking the time to view my work! 😊
      </p>
    </div>
  );
};

export default AboutPage;
