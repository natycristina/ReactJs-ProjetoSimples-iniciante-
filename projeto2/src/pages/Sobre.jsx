import Menu from "./Menu";

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <Menu />
            <p>
                Este é o componente <strong>Sobre</strong> do nosso site em React.
                Aqui você pode colocar informações sobre você, a empresa, ou o
                objetivo do projeto. 
            </p>
            <p>
                Criado com React Router para navegação entre páginas sem recarregar o navegador.
            </p>
        </div>
    );
}

export default Sobre;
