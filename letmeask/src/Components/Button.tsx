//criação das propriedades do botão
type ButtonProps = {
  //notação 'variavel: Tipo';
  //inserir '?' na frente das variável deixa essa 'propriedade' opcional
  text?: string;
}

//É Necessário passar o 'props' como parâmetro definindo o tipo declarado anteriormente
export function Button(props: ButtonProps) {
  return (
    //todo JS para inserir no HTML utilizar Chaves
    <button>{props.text || 'Default'}</button>
  )
}