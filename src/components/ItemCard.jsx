import React, { Component } from 'react';
import ModForm from "./ModForm";

export class ItemCard extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleOnClick(e) {
        console.log(this.props.index);
        this.props.eliminar(this.props.index);

    }

    toggleForm() {
        this.setState({show: !this.state.show});
    }

    render() {
        if (this.state.show) {
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

                            <div className="contenedor-mod">
                                <button onClick={this.toggleForm.bind(this)}><i className="fas fa-cog"></i></button>
                            </div>
                            <div className="contenedor-btn">
                                <button onClick={this.handleOnClick.bind(this)}>
                                    Eliminar
                                </button>
                            </div>

                        </div>
                        <ModForm update={this.props.update} index={this.props.index} item={this.props.item}/>

                    </article>
                </li>

            );
        }else {
            return (<li>
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

                        <div className="contenedor-mod">
                            <button onClick={this.toggleForm.bind(this)}><i className="fas fa-cog"></i></button>
                        </div>
                        <div className="contenedor-btn">
                            <button onClick={this.handleOnClick.bind(this)}>
                                Eliminar
                            </button>
                        </div>

                    </div>


                </article>
            </li>);
        }
    }

}
export default ItemCard;
