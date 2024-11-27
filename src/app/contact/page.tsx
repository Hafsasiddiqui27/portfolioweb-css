import "@/style/contact.css"

const Contact = () => {
  return (
    <main className='contact-main'>
      <div className="form-container">
      <h2 className='contact-heading'> Contact Us </h2>
    
        <form action={""} className="form">
          <input type="text" placeholder='Enter your Name' />
          <input type="text" placeholder='Enter your Email' />
          <input type="number" placeholder='Enter your Phone Number' />
          <input type="text" placeholder='Enter your City, Country.' />
          <input className="msg" type="text" placeholder='Enter your Message' />
        </form>
        <button className="submit">Submit</button>
        </div>
    </main>
  )
}

export default Contact
