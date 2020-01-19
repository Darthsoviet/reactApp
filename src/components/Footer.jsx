import React, {Component} from "react";

class Footer  extends Component {

    render() {

        return(
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
                                    <p>Se utilizo JEE 8 con el API REST jersey en un servidor glassfish con base de datos en MYSQL utilizando JDBC

                                    </p>
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
                                    <p>Se utilizo la biblioteca de React.js Para generar las vistas y los estilos
                                        se diseñaron con ayuda de sass y css y una minima ayuda de bootstrap
                                    </p>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }


}
export default Footer;