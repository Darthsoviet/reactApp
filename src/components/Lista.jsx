import React, {Component} from 'react';
import ItemCard from "./ItemCard"
import "../js/Item";
import Item from '../js/Item';
import minimi from "../icons/minimi.png";
import serv from "../icons/server.svg";
import noItems from "../icons/boat-logistic-transportation-deleivery-vehicle-ship-container-parcel-10-20541.png"

export class Lista extends Component {


    render() {
        if (this.props.items != null && this.props.items.length >0) {

            const lista = this.props.items.map((elemento) => {
                const i = new Item(elemento.nombre, elemento.precio, elemento.descripcion, elemento.cantidad, elemento.idItem);
                const index = this.props.items.indexOf(elemento);
                return (
                    <ItemCard key={index} eliminar={this.props.eliminar} index={index} item={i}
                              update={this.props.update}/>
                );
            });
            return (
                <ul className="lista-grid">
                    {lista}
                </ul>
            );
        } else if(this.props.items==null) {
            return (
                <div className={"not"}>
                    <img className={"minimi"} src={minimi} width={100} height={50} alt=""/>

                    <h1>404 no se encontro servidor</h1>
                    <img className={"serv"} src={serv} alt=""/>
                </div>

            );}else {
            return (
                <div className={"not"}>
                    <img className={"minimi"} src={minimi} width={100} height={50} alt=""/>

                    <h1>No hay Items</h1>
                    <img className={"serv"} src={noItems} alt=""/>
                </div>);

        }
    }
}

export default Lista;
