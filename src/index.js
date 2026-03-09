
// Seu código está correto para React 17 ou menor, mas o problema mais comum hoje é que o projeto está usando React 18 ou 19, onde ReactDOM.render() foi removido.
// import ReactDOM from 'react-dom' import React from 'react' ReactDOM.render( <div>Olá React</div>, document.getElementById('root') )
// Por isso o React não renderiza nada.
// import ReactDOM from "react-dom/client";

// const el = document.getElementById("root");

// const root = ReactDOM.createRoot(el);

// root.render("Olá !");

// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const tag = <strong>Olá React!</strong>
// ReactDOM.render(
//     <div>
//       {tag}
//     </div>,
//     document.getElementById('root')
// );
import'./index.css'
import React from "react";
import ReactDom from "react-dom/client";

const tag = <strong>Olá React</strong>;
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <div>
        {tag}
    </div>
)
