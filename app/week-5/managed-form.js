"use client";
import { useState } from "react";

export default function RegistrationForm() {
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [subscription, setSubscription] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    console.dir(event.target.value);
  }

  const handleEmailChange = (event) => {setEmail(event.target.value);}
  const handleBirthDateChange = (event) => {setBirthDate(event.target.value);}
  const handleSubscriptionChange = (event) => {setSubscription(event.target.value);}
  const handleMessageChange = (event) => {setMessage(event.target.value);}

  const handleSubmit = (event) => {
    event.preventDefault();
   // console.dir(event);

    let registrationObject = {
      fName: fullName,
      mail: email,
      bDate: birthDate,
      sub: subscription,
      msg: message
    };

    alert(
      `Full Name: ${registrationObject.fName}
      Email: ${registrationObject.mail}
      Birth Date: ${registrationObject.bDate}
      Subscription: ${registrationObject.sub}
      Message: ${registrationObject.msg}`
    );
  }



  return(
    <form onSubmit={handleSubmit} className="bg-slate-200 p-5 text-black" method="GET" action="https://www.sait.ca">
      <div className="mb-3">
        <label className='inline-block w-40'>Full Name:</label>
        <input 
          className='px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200'
          type="text" 
          onChange={handleFullNameChange} 
          value={fullName}
        />
      </div>
      <div className="mb-3">
        <label className='inline-block w-40'>Email</label>
        <input className='px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200' type="email" onChange={handleEmailChange} value={email}/>
      </div>
      <div className="mb-3">
        <label className='inline-block w-40'>Birth Date</label>
        <input className='px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200' type="date"  onChange={handleBirthDateChange} value={birthDate}/>
      </div>
      <div className="mb-3">
        <label className='inline-block w-40'>Subscription Type</label>
        <select className='px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200' onChange={handleSubscriptionChange} value={subscription}>
          <option selected disabled value="">--Please select a plan--</option>
          <option value="free">Free Plan</option>
          <option value="basic">Basic Plan</option>
          <option value="premium">Premium Plan</option>
        </select>
      </div>
      <div className="mb-3">
        <label className='inline-block w-40 align-top'>Message</label>
        <textarea className='px-2 py-0.5 rounded border border-teal-400 bg-amber-50 focus:bg-emerald-200' onChange={handleMessageChange} value={message}></textarea>
      </div>

      <div>
        <button className="px-2 py-1 rounded text-white bg-green-700 hover:bg-green-600 active:bg-green-500">Submit Registration</button>
      </div>
    </form>
  )
}

