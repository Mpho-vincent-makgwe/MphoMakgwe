import type { Metadata } from 'next';
import Hero from '../../components/Hero/Hero';

export const metadata: Metadata = {
  title: 'Welcome to My Portfolio',
  description: 'Explore the work and skills of Mpho Vincent Makgwe',
};

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white">
          <h1 className="text-4xl font-extrabold">Welcome to My Portfolio</h1>
          <p className="text-lg">Discover my work and skills</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <Hero />
        </section>

        {/* About Me Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hello, my name is Mpho Vincent Makgwe, and I am a full-stack
            software engineering student at CodeLab Academy. I have experience
            working with various programming languages and technologies. My
            passion lies in web development, and I'm continuously learning and
            growing in this field.
          </p>
          {/* Add more content about yourself */}
        </section>

        {/* Featured Projects Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          {/* Add featured project cards here */}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Mpho Vincent Makgwe</p>
          {/* Add social media links or contact information */}
        </div>
      </footer>
    </div>
  );
}
