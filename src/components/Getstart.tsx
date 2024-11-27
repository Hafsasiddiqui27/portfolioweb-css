import '@/style/getstart.css'
import React from 'react'
import Link from 'next/link'

const Getstart = () => {
  return (
      <section>
      <div className='container'>
      <div className='cont'>
       <h3 className='heading'> Lets Build Something Great Together</h3>
<p className='para'>Ready to start your next project or need an expert to help take your software to the next level? Lets chat and make your ideas a reality.</p>
<div >
        <Link href='/contact'><button className='btn'>Contact Me</button></Link></div>
</div>

     </div>

        </section>
  )
}

export default Getstart
