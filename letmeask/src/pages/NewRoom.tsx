//Importar o arquivo e utlizar o a varipavel no HTML
import illustrationIMG from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

//importar os components
import { Button } from '../components/Button';

//importar o css na página que utilizará
import '../styles/auth.scss'


export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationIMG} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiências em tempo real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <h2>Criar nova sala</h2>
            <form>
              <input 
                type="text"
                placeholder="Nome da sala" 
              />
              <Button type="submit">
                Criar na sala
              </Button>
            </form>
            <p>
              Quer entrar em sala existente? <a href="#">clique aqui</a>
            </p>
          </div>
        </main>
    </div>
  )
}