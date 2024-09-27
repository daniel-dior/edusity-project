import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b0820f8e-1ae6-4cd9-bad6-a090d618fa6f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }

    


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a messages</h3>
        <p>Feel free to reach out through contact from or find our contact informations below. Your feedback, questions, and suggestions are impoertant to us as we strive to provide exceptional service to our university community</p>
        <ul>
            <li>diordanny4@gmail.com</li>
            <li>+234 8148657316 </li>
            <li>5 oyedokun str, ijagemo <br /> lagos Nigeria</li>
        </ul>
      </div>
      <div className="contact-col" >
        <form  onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name ' required/>
            <label > Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label >Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message ' required></textarea>
            <button type='submit ' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
