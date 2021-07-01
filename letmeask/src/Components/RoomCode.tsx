import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyTooomCodetoClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyTooomCodetoClipboard}>
      <div>
        <img src={copyImg} alt="Clique aqui para copiar o código da sala" />
      </div>
      <span>sala #{props.code}</span>
    </button>
  )
}