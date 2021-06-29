import { Link } from 'react-router-dom';

//Importar o arquivo e utlizar o a varipavel no HTML
import illustrationIMG from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

//importar os components
import { Button } from '../components/Button';
//import { useAuth } from '../hooks/useAuth';

//importar o css na página que utilizará
import '../styles/auth.scss'


export function NewRoom() {
 // const { user } = useAuth();

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
              Quer entrar em sala existente? <Link to="/">clique aqui</Link>
            </p>
          </div>
        </main>
    </div>
  )
}