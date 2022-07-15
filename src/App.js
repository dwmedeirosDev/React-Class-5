import React, { Component} from 'react';
import "./App.css"
class App extends Component{

    state = {
        alunos: [
            {
                nome: "David",
                idade: 28,
                tecnologia: "HTML"
            }, 
            {
                nome: "Mariana",
                idade: 18,
                tecnologia: "CSS"
            }, 
            {
                nome: "Rômulo",
                idade: 29,
                tecnologia: "JavaScript"
            },
            {
                nome: "Fernanda",
                idade: 31,
                tecnologia: "React"
            }
        ]
    }

    render(){
        return(
            <nav>
                {/* <ul>
                    <li>{this.state.alunos[0].nome}</li>
                    <li>{this.state.alunos[0].idade}</li>
                    <li>{this.state.alunos[0].tecnologia}</li>
                </ul>
                <ul>
                    <li>{this.state.alunos[1].nome}</li>
                    <li>{this.state.alunos[1].idade}</li>
                    <li>{this.state.alunos[1].tecnologia}</li>
                </ul>
                <ul>
                    <li>{this.state.alunos[2].nome}</li>
                    <li>{this.state.alunos[2].idade}</li>
                    <li>{this.state.alunos[2].tecnologia}</li>
                </ul> */}
                {this.state.alunos.map((item) => (
                    <div className="conteiner-ul">
                        <ul className="map-list">
                            <li>{item.nome}</li>
                            <li>{item.idade}</li>
                            <li>{item.tecnologia}</li>
                        </ul>
                        <button>Sobre</button>
                    </div>
                ))}
                {/* Callback => Função dentro de um map
                    () => {}    => Arrow Function */}
            </nav>
        )
    }
}

export default App;