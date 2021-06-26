/*
//criação das propriedades do botão
type ButtonProps = {
  //notação 'variavel: Tipo';
  //inserir '?' na frente das variável deixa essa 'propriedade' opcional
  text?: string;
}
*/

import { useState } from "react"

//É Necessário passar o 'props' como parâmetro definindo o tipo declarado anteriormente
//export function Button(props: ButtonProps) {
export function Button() {
  //controle de estado => 
  // Não é uma variável é um array, com dois parâmetros, o primero é a variável
  // e o segudo a função que altera a variável. Ou seja, o seu estado
  const [counter, setCounter] = useState(0) //entender pq usou o 0 nesse caso
  function increment() {
    //Apesar de imutável o estado é sempre decalarado como constante
    //O estado é imutável, a alteração acontece nos seus valores
    setCounter(counter + 1)
  }

  return (
    //todo JS para inserir no HTML utilizar Chaves
    //<button>{props.text || 'Default'}</button>
    <button onClick={increment}>
      {counter}
    </button>
  )
}