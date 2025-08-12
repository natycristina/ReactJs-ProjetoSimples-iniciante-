//importando um estado
import { useState } from "react"

function Titulo({nome, paragrafo, cor}){
    //const [texto, setTexto] = useState("Um titulo do estado inicial")
    const [texto, setTexto] = useState("Nataly")
    const [inputText, setInputText] = useState("");
    //let nome = "Nataly Cristina";
    const urlImg = "https://www.colourtheme.com/images/reactJS_logo.webp"

    function clicou(){
    setTexto(inputText);
    }

    return (
    <div>
        <h1 style={{color:cor}}>Oi eu sou {nome ? texto : "Naty"}</h1>
        {paragrafo ?
        <p>Aprendendo React</p>
        :
        <p>Aprendendo atributos</p>
}
        <img width={150} src={urlImg}/>
        {/* Este botão abaixo muda o estado... no incio meu nome aparec como Nataly ao apertar o botão, meu nome aparece como naty naty*/}
        {/* <button onClick={()=>{setTexto("a Naty Naty. Mudei via botão kk")}}>Aperte para mudar o estado/NOME</button> */}

        {/* Este campo abaixo voce pode digitar outro nome, e ao clicar no botão, mudará o estado.. passará a ter o nome que voce digitou!!*/}
        <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text"/> 
        <button onClick={clicou}>Mude o nome</button>

    </div>
    )
}

export default Titulo