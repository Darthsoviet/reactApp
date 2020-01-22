import React, { Component } from 'react';

import "../js/Item";

import Item from '../js/Item';



class AddForm extends Component {


    constructor() {
        super();
        this.state = {
            nombre: "",
            precio: "",
            descripcion:"",
            cantidad: "",
            show:true
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle=this.toggle.bind(this);
    }
    toggle(e){
        this.setState({show:!this.state.show});
    }

    handleInput(event) {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(evento) {
        //ELIMINA COMPORTAMIENTO REFRESH DEFAUL DE SUBMIT
        evento.preventDefault();
        var nombre = this.state.nombre.trim();
        var precio = this.state.precio;
        var cantidad = this.state.cantidad;
        var descripcion=this.state.descripcion.trim();
        var item = new Item(nombre, precio,descripcion, cantidad);
        /*AJAX POST A REST JAVA*/
        fetch("http://localhost:8080/AppTiendas/api/item",
            {method:"post",
                body:JSON.stringify(item),
                headers:{'Content-Type': 'application/json'}})
            .then((res)=>{console.log(res.json())}).finally(this.props.update);
    }

    render() {
        if(this.state.show) {
            return (
                <div className="form-add">
                    <button className={"btn-toggle-on"} onClick={this.toggle}><i className="fas fa-ellipsis-h"></i>
                    </button>
                    <div className="form-head">
                        <h1>{this.props.title}</h1>
                        <i className="fas fa-box-open"></i>
                    </div>
                    <form id="form-item" onSubmit={this.handleSubmit}>
                        <label htmlFor="nombre">Item</label>
                        <input type="text" name="nombre" id="nombre" required placeholder="Item"
                               onChange={this.handleInput}></input>
                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" name="descripcion" id="descripcion" required placeholder="Descripcion"
                               onChange={this.handleInput}></input>
                        <label htmlFor="precio">Precio</label>
                        <input type="number" name="precio" id="precio" required placeholder="Precio" step="0.01"
                               onChange={this.handleInput}></input>
                        <label htmlFor="cantidad">Cantidad</label>
                        <input type="number" name="cantidad" id="cantidad" required placeholder="cantidad"
                               onChange={this.handleInput}></input>
                        <div className={"btn-g"}>
                            <button className="btn-submit" type="submit">Agregar</button>
                            <button className="btn-reset" type="reset">Limpiar</button>
                        </div>
                    </form>
                </div>
            );
        }else {
            return (

                <div className="form-add-off">
                    <button className={"btn-toggle-off"} onClick={this.toggle}><i className="fas fa-bars"/>
                    </button>

                </div>


            );
        }
    }

}

export default AddForm;