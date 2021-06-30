//useHistoy - para roteamento utilizando botão
import { useHistory } from 'react-router-dom';
import { FormEvent } from 'react';

//Importar o arquivo e utlizar o a varipavel no HTML
import illustrationIMG from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import { database } from '../services/firebase';

//importar os components
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

//importar o css na página que utilizará
import '../styles/auth.scss'




import { useState } from 'react';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle} = useAuth()
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {   
    if (!user) {
      await signInWithGoogle();
    }

      history.push('/rooms/new');
  }

  async function handleJoinRoom(event:FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('A sala não existe. Tente novamente ou crie uma nova')
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

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
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form onSubmit={ handleJoinRoom } >
              <input 
                type="text"
                placeholder="Digite o código da sala"
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}
                //onChange={event => setRoomCode(event.target.value)}
               // value={roomCode}
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
          </div>
        </main>
    </div>
  )
}