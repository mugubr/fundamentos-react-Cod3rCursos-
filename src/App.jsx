import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="#10 - Contador" color="#DD00FF">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#FF9A00">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#620027">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#62FF00">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#3E844B">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#FF00EF">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#DBE11F">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#E11F1F">
                <ComFilhos>
                    <ul>
                        <li>Miguel</li>
                        <li>Carlinhos</li>
                        <li>João</li>
                        <li>Maria</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parametros" color="#1FE1D4">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />

            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#201FE1">
                <Primeiro />
            </Card>
        </div>

    </div>
);