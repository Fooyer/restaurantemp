// importar as dependências
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Importar as páginas
import Home from './home/home';

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route element={<Home />} path="/" exact />

        </Routes>
      </BrowserRouter>
  );
}

export default App;