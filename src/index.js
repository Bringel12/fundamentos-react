
// Seu código está correto para React 17 ou menor, mas o problema mais comum hoje é que o projeto está usando React 18 ou 19, onde ReactDOM.render() foi removido.
// import ReactDOM from 'react-dom' import React from 'react' ReactDOM.render( <div>Olá React</div>, document.getElementById('root') )
// Por isso o React não renderiza nada.
// import ReactDOM from "react-dom/client";

// const el = document.getElementById("root");

// const root = ReactDOM.createRoot(el);

// root.render("Olá !");


import'./index.css'
import React from 'react';
import ReactDOM from 'react-dom/client'
import Comp from './components/basicos/primeiro'
import ComParamentro from './components/basicos/ComParametro'


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div id='app'>
        <Comp></Comp>
        <ComParamentro
        titulo= "Situação do aluno"
        aluno= "Pedro Silva" nota={9.3}
        />
        <ComParamentro
        titulo= "Situação do aluno"
        aluno= "Maria Silva" nota={5.3}
        />
    </div>
)
