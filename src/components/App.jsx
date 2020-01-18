import React from 'react';


import "../css/styles.css";
import Navigation from "./Navigation";
import AddForm from "./AddForm";
import Lista from "./Lista";



class App extends React.Component {
  constructor(){
    super()
      this.state={
        items : []
        

      }
      
  }

    update(){
        fetch("http://localhost:8080/AppTiendas/api/item",
            {method:"GET"})
            .then(res =>{console.log(res.status);return res.json()})
            .then(json =>{this.setState({items:json})});
    }
    componentDidMount() {
        this.update();

    }

  quitarElemento(index) {
      fetch("http://localhost:8080/AppTiendas/api/item?id=" + this.state.items[index].idItem, {method: "delete"})
          .then((res)=>{
              console.log(res.status);
          })
          .then(this.update.bind(this));


  }


  render() {
    return (
      <div className="cuerpo-grid">
        <header className="titulo">
                <h1 id="inicio" className="display2 titulo">Hola <i className="fas fa-address-book"></i></h1>
        </header>
          <Navigation nombre="Primer Pagina React" />
        <aside>

          <AddForm title="Inserte Item" update={this.update.bind(this)} />

            <a id="volverInicio" href="#inicio"><i className="fas fa-angle-double-up fixed-bottom"></i></a>
        </aside>

        <main>
         <Lista items={this.state.items} eliminar={this.quitarElemento.bind(this)} />

        </main>

      </div>

    );
  }

}

export default App;

