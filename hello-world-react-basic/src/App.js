import React from "react";
import Header from "./Header";
import Content from "./Content";
import Cards from "./Cards"
import Card from "./Card"

import reactImg from "./imagens/reactjs.png"
import nodeImg from "./imagens/nodejs.png"
import nextImg from "./imagens/nextjs.png"

function App() {
    return (
        <div>
            <Header titulo="Hello World" subTitulo="Outro texto" />
            <Content titulo="Bem-vindo">
                <h2>Titulo</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Cards>
                    <Card  
                    imagem={reactImg}
                    titulo="Titulo 1"
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />

                    <Card  
                    imagem={nodeImg}
                    titulo="Titulo 2"
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />

                    <Card  
                    imagem={nextImg}
                    titulo="Titulo 3"
                    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                </Cards>
            </Content>
        </div>
    )
}

export default App;