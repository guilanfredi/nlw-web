// JSX: Javascript + XML (HTML)

// Componentes / Propriedades
interface ButtonProps {
  title: string;
}

function Buttton(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Buttton title="Send 1"/>
      <Buttton title="Send 2"/>
      <Buttton title="Send 3"/>
      <Buttton title="Hello World"/>
    </div>
  )
}

export default App
