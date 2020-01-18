import React, { Component } from 'react';


class Navigation extends Component {

    render() {
        return (

            <nav className="nav">

                <div className="buttons">
                    <button>prueba</button>
                    <button>prueba</button>
                    <button>prueba</button>
                </div>

                <div className="buscador">
                    <input type="text" name="buscar" id="buscar" placeholder="Inserte Nombre De Item"></input>
                    <button ><i className="fas fa-search"></i></button>
                </div>

            </nav>);
    }

}

export default Navigation;