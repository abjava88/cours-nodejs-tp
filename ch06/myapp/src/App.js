import HomePage from "./HomePage";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  
function App01() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="John" />
        <Welcome name="Omar" />
        <Welcome name="Sami" />
        <HomePage />
      </div>
    );
}
export default App01