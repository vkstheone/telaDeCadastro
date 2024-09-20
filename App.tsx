import { useState } from "react"

function App() {
  
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("") 
  
 

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;  
    console.log(value)
    setName(value)
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;  
    console.log(value)
    setEmail(value)
  }

  return (
      <div className="tela">
        
        <div className="tela-logo">
          <div className="logo">
            <img src="src/assets/skambo3 1.png" alt="" />
            <h3>Seja bem Vindo</h3>
            <p>Acesse sua conta </p>
            <p>agora mesmo</p>
          </div>

          <div className="button">
            <button>ENTRAR</button>
            <a href="#"> Esqueci minha senha</a>
          </div>
        </div>
        <div className="form">
              <div className="form-text">
              <h3>Crie sua conta </h3>
              <p>Preencha  o formulario</p>
              </div>
              <input type="text" placeholder="Nome" value={name} onChange={handleName}/>

              <input type="email" placeholder="Email" value={email} onChange={handleEmail}/>

              <input type="password" placeholder="Senha"/>

              <button>CADASTRAR</button>
        </div>
      </div>
  )
}

export default App
