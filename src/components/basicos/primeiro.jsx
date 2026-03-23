// export  default function Primeiro(){
//     return <h2>Primeiro Components</h2>
// }
import React from "react";

export  default function Primeiro(){
    const msg = 'Seja bem Vinda (a) !'
    return (
     <div>
        <h2>Primeiro components</h2>
        <p>{msg}</p>
    </div>
    )
}