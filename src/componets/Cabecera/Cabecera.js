import './Cabecera.css'

const Cabecera = (pr) =>{
    return <div className="cabecera">
        <img alt="logo" id="logo" src="logo.png" />
        <p>CEL 320 4265135</p>
        <p> </p>
        <h1> {pr.titulo} </h1>
    </div>
}

export default Cabecera