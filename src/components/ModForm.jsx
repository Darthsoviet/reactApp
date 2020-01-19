import React from "react";
import Item from "../js/Item";
class ModForm extends React.Component {
    constructor() {
        super();
        this.state={
            nombre:"",
            descripcion:"",
            precio:"",
            cantidad:""
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
        this.putItem=this.putItem.bind(this);

    }

    handleOnChange(evento){
        const {name,value} = evento.target;
        this.setState({[name]:value});

    }

    putItem(item){
        console.log(item);
        item.idItem=this.props.item.idItem;
        fetch("http://localhost:8080/AppTiendas/api/item",
            {method:"put",body:JSON.stringify(item),headers:{"content-type":"application/json"}})
            .then((res=>{console.log(res.json())})).then(this.props.update);

    }

    handleOnSubmit(event){
        event.preventDefault();
        var item = new Item(this.state.nombre,this.state.precio,this.state.descripcion,this.state.cantidad);

        this.putItem(item);


    }

    render() {
        return(
            <form className={"form-mod was-validated"} onSubmit={this.handleOnSubmit} >
                <input type="text" required placeholder="Nombre" name="nombre" onChange={this.handleOnChange} value={this.state.nombre}/>
                <input type="text" required placeholder="Descripcion" name="descripcion" onChange={this.handleOnChange} value={this.props.descripcion}/>
                <input type="number" required placeholder="Precio" name="precio" step="0.01" onChange={this.handleOnChange} value={this.props.precio}/>
                <input type="number" required placeholder="cantidad" name="cantidad" onChange={this.handleOnChange} value={this.props.cantidad}/>
                <button type="submit" className="btn btn-success">Actualizar</button>
            </form>
        );
    }
}
export default ModForm;
