import "./ListaDesplegable.css";

const ListaDesplegable = ({ lista, mostrarFormatos, tipo }) => {
    const changeEvent = (e) => {
        mostrarFormatos({ lista: tipo, valor: e.target.value });
    }
    return (
        <select onChange={changeEvent} defaultValue={'Default'} name="Tipo" id="">
            <option disabled value="Default">
                Seleccione
            </option>

            {lista.map((opcion, indice) => (
                <option value={opcion} key={indice}>
                    {opcion}
                </option>
            ))}
        </select>
    );
};

export default ListaDesplegable;
