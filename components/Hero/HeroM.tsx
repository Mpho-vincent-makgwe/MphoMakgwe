import theme from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={theme.hero}>
      <div className={theme.image}>
        <Image alt='Mpho Vincent Makgwe' src="/images/Mpho/1a_361A4982.jpg" width={300} height={300} />
      </div>
      <br />
      <h1>Hi, I&apos;m Vincent</h1>
      <br />
      <p>
        I blog about web development, especially frontend frameworks like React and backend frameworks like Next.js.
      </p>
    </section>
  );
};

export default Hero;
