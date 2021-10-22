import './App.css';

function App() {
  // ===================================================================================
  const element = <h1>Hello, world!</h1>;

  // ===================================================================================
  const nome = 'Jorge Maravilha';
  const element2 = <h1>Hello, {nome}</h1>;

  // ===================================================================================
  function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
  }
  const element3 = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>

  // ===================================================================================
  function helloWorld(nome, sobrenome) {
    return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
  }
  const element4 = helloWorld('Wesley', 'Maia');
  const container = <div>{element4}</div>;

  // ===================================================================================
  return (
    <div>
      {element}
      {element2}
      {element3}
      {container}
    </div>
  );
}

export default App;
