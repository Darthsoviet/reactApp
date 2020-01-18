import React, { Component } from 'react';

export class ItemCard extends Component {


    handleOnClick(e){
        console.log(this.props.index);
        this.props.eliminar(this.props.index);

    }
    render() {
        return (
            <li>
            <article className="item-card">
                <div className="item-card-titulo">
                    <h1>
                        {this.props.item.nombre}
                    </h1>
                    <div className="item-card-contador">
                        {this.props.item.cantidad}
                    </div>
                </div>
                <p className="item-card-content">

                    {this.props.item.descripcion}

                </p>
                <div className="item-card-foot">
                    <div className="item-card-foot-precio">
                        <i className="fas fa-dollar-sign"/><p>{this.props.item.precio} </p>
                    </div>

                    <div className="contenedor-btn">
                    <button onClick={this.handleOnClick.bind(this)}>
                        Eliminar
                    </button>
                    </div>
                </div>

            </article>
            </li>
        );
    }
}

export default ItemCard;
