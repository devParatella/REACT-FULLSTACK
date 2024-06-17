import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/Posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts", error);
      });
  }, []);

  return (
  <div className="App">
    {/* Lógica para renderizar os posts */}
  </div>
  );
}
export default App;
