import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import './App.css';

function App() {

  //public key (Account - API keys - EmailJs)
  init("QMCLWntsTsiXnk3Ih")

  const form = useRef()

  const handleSubmit = (e) => {

    e.preventDefault();

    //chamada para a função de envio de formulário
    //parâmetros = Service ID, Template ID, formulário atual, Public key
    emailjs.sendForm("service_evynokn", "template_i5l7j5g", form.current, "QMCLWntsTsiXnk3Ih")
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  };

  return (

    <div className="content display">
      <form className="email display" onSubmit={handleSubmit} ref={form}>
        <input className="username display margins" type="text" name="username" placeholder="username" />
        <textarea className="message margins" type="text" name="message" placeholder="message" />
        <button className="btn" type="submit">Sign in</button>
      </form>
    </div>

  );
}

export default App;
