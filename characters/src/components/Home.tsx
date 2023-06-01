import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h4>Home de la página</h4>

      <NavLink to="/shell/characters/all">Ir a los Personajes</NavLink>

      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
        <li>Elemento 5</li>
      </ul>
    </div>
  );
};

export default Home;
