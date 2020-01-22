import React from 'react';


import "../css/stylesLight.css";
import Navigation from "./Navigation";
import AddForm from "./AddForm";
import Lista from "./Lista";
import Footer from "./Footer";


class AppL extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            oscuro:true


        }
        this.drawLista=this.drawLista.bind(this);

    }
    i

    update() {
        fetch("http://localhost:8080/AppTiendas/api/item",
            {method: "GET"})
            .then((res) => {
                console.log(res.status);
                return res.json()
            })
            .then(json => {
                this.drawLista(json);
            });
    }
    drawLista(json){
        this.setState({items: json})
    }

    componentDidMount() {
        this.update();

    }

    quitarElemento(index) {
        fetch("http://localhost:8080/AppTiendas/api/item?id=" + this.state.items[index].idItem, {method: "delete"})
            .then((res) => {
                console.log(res.status);
            })
            .then(this.update.bind(this));


    }


    render() {


        return (
            <div className="cuerpo-grid">
                <header className="titulo">
                    <h1 id="inicio" className="display2 titulo">Inventario <i className="fas fa-address-book"></i></h1>
                   <button onClick={this.props.modo}>modo</button>
                </header>
                <Navigation nombre="Primer Pagina React" items={this.drawLista}/>
                <aside>

                    <AddForm title="Inserte Item" update={this.update.bind(this)}/>

                    <a id="volverInicio" href="#inicio"><i  className="fas fa-angle-double-up fixed-bottom"></i></a>
                </aside>

                <main>
                    <Lista items={this.state.items} eliminar={this.quitarElemento.bind(this)}
                           update={this.update.bind(this)}/>

                </main>
                <Footer/>

            </div>

        );
    }

}

export default AppL;

