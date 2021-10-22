import './App.css';

const arrayWorks = ['Leitura', 'Atividade', 'Codar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const list = arrayWorks.map((work) => Task(work));

function App() {
  return (
    <div>
      <ol>
        {Task('Atividade')}
        { list }
      </ol>
    </div>
  );
}

export default App;
