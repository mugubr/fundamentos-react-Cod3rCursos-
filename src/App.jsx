import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Miguel</li>
                    <li>Carlinhos</li>
                    <li>João</li>
                    <li>Maria</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametros">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />

        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
);