
function App() {
  
 

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
              <h3>Crie sua conta </h3>
              <p>Preencha  o formulario</p>

              <input type="text" placeholder="Nome" />

              <input type="email" placeholder="Email"/>

              <input type="password" placeholder="Senha"/>
        </div>
      </div>
  )
}

export default App
