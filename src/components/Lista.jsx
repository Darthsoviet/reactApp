import React, { Component } from 'react';
import ItemCard from "./ItemCard"
import "../js/Item";
import Item from '../js/Item';
export class Lista extends Component {




    render() {

        const lista = this.props.items.map((elemento) => {
            const i = new Item(elemento.nombre,elemento.precio,elemento.descripcion,elemento.cantidad);
            const index=this.props.items.indexOf(elemento);
            return (
                <ItemCard key={index} eliminar={this.props.eliminar} index={index} item={i}/>
            );
        });
        return (
            <ul className="lista-grid">
                {lista}
            </ul>
        );
    }
}

export default Lista;