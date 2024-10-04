"use client";
import RegistrationForm from "./managed-form";
import { useState } from "react";

export default function RegistrationPage() {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    if(showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
  }
}

  const toggleForm2 = () => showForm ? setShowForm(false) : setShowForm(true);

  return (
    <main>
      <h1 className="text-3xl text-center mb-3 p-3">Registration</h1>
      {/* {5 > 10 ? <p>something</p> : <p>something else</p>} */}
      <button onClick={toggleForm2}>Toggle Form</button>
      { showForm && <RegistrationForm />}
    </main>
  );
}