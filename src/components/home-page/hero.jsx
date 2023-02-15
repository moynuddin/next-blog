import Image from "next/image";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/image.jpg"
          alt="Hero image"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I am Moyn</h1>
      <p>I blog about web development - especially angular and react.</p>
    </section>
  );
};

export default Hero;
