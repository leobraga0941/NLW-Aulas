import { Link, useHistory } from 'react-router-dom';
import { FormEvent } from 'react';

//Importar o arquivo e utlizar o a varipavel no HTML
import illustrationIMG from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

//importar os components
import { Button } from '../components/Button';
//import { useAuth } from '../hooks/useAuth';

//importar o css na página que utilizará
import '../styles/auth.scss'
import { useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
 const { user } = useAuth();
 const history = useHistory();
 const [newRoom, setNewRoom] = useState('');

 async function handelCreateRoom(event: FormEvent) {
  event.preventDefault();

  if(newRoom.trim() === ''){
    return;
  }

  const roomRef = database.ref('rooms');

  const firebaseRoom = await roomRef.push({
    title: newRoom,
    authorId: user?.id,
  })

  history.push(`/admin/rooms/${firebaseRoom.key}`)

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
            <h2>Criar nova sala</h2>
            <form onSubmit={handelCreateRoom}>
              <input 
                type="text"
                placeholder="Nome da sala"
                onChange={event => setNewRoom(event.target.value)}
                value={newRoom} 
              />
              <Button type={"submit"}>
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