import { NavLink } from "react-router-dom";

const Home = ({ pathname }: { pathname: string }) => {
  return (
    <div>
      <h4>Home de la página</h4>

      <NavLink to={`/${pathname}/blog/episodes`}>Ir a los Episodios</NavLink>

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
