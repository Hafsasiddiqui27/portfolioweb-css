import "@/style/hero.css"
import Image from "next/image"
import HeroPoster from "@/components/image/hero-poster.png"
import Link from "next/link"



const Hero = () => {
  return (
    <div className="hero-main">
    <div className="hero-container">
        {/* <left side img> */}
        <div><Image className="hero-img" src={HeroPoster} alt='hero-poster' width={375} height={350}/></div>

        {/* right side data */}
        <div className='main-rt'>
          <h1 className='heading'>Hello! I am <span className='heading-'> Hafsa Siddiqui </span></h1>
 <h3 className='subheading'>Web Developer | Creative Problem Solver | Passionate Learner</h3>        
        <p className='para'>Are you looking for a sleek, responsive, and high-performing website that stands out in today’s digital world? As a professional web developer, I specialize in creating custom websites that not only look great but also deliver exceptional user experiences. Whether you’re starting from scratch or need an upgrade, I’m here to turn your ideas into a dynamic online presence.</p>
        

        <div >
        <Link href='/contact'><button className='btn'>Contact Me</button></Link></div>
</div>
        </div>
    </div>
  )
}

export default Hero
