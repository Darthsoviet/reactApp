import React from 'react';


import "../css/styles.css";
import Navigation from "./Navigation";
import AddForm from "./AddForm";
import Lista from "./Lista";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            items: []


        }

    }

    update() {
        fetch("http://localhost:8080/AppTiendas/api/item",
            {method: "GET"})
            .then((res) => {
                console.log(res.status);
                return res.json()
            })
            .then(json => {
                this.setState({items: json})
            });
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
                </header>
                <Navigation nombre="Primer Pagina React"/>
                <aside>

                    <AddForm title="Inserte Item" update={this.update.bind(this)}/>

                    <a id="volverInicio" href="#inicio"><i className="fas fa-angle-double-up fixed-bottom"></i></a>
                </aside>

                <main>
                    <Lista items={this.state.items} eliminar={this.quitarElemento.bind(this)}
                           update={this.update.bind(this)}/>

                </main>
                <footer className={"pie"}>
                    <section className={"social"}>
                        <h1>Social</h1>
                        <a target={"_blank"} href={"https://www.facebook.com/andres.dlvillrlujan"}><i
                            className="fab fa-facebook-square"></i></a>
                        <p>Sigueme en Facebook!</p>
                    </section>
                    <div className={"tecnologias"}>
                        <div className={"container-tec"}>
                            <div className={"container-back"}>
                                <h4>Back</h4>
                                <section className={"interno"}>
                                    <div className={"logos"}>
                                        <i className="fab fa-java"></i>
                                        <i className="fas fa-database"></i>
                                    </div>
                                    <article>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque ducimus ea explicabo fuga non nulla perferendis possimus quidem? At beatae eaque facere iste labore rerum saepe temporibus velit voluptas?</p>
                                    </article>
                                </section>
                            </div>
                            <div className={"container-front"}>
                                <h4>Front</h4>
                                <section className={"interno"}>
                                    <div className={"logos"}>
                                        <i className="fab fa-js"></i>
                                        <i className="fab fa-html5"></i>
                                        <i className="fab fa-css3-alt"></i>
                                        <i className="fab fa-react"></i>
                                        <i className="fab fa-sass"></i>
                                        <i className="fab fa-bootstrap"></i>
                                    </div>
                                   <article>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis harum nulla optio. Doloremque magni molestias necessitatibus nihil officia, quaerat ut veritatis voluptas voluptate voluptatem. Laboriosam natus nisi perferendis voluptatibus.</p>
                                   </article>
                                </section>
                            </div>
                        </div>
                    </div>

                </footer>

            </div>

        );
    }

}

export default App;

