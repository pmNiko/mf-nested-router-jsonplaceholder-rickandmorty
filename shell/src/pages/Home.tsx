const Home = () => {
  return (
    <div style={{ marginTop: "1em", color: "black" }}>
      <h4 style={{ marginTop: "1em", marginBottom: "1em" }}>Nested Router</h4>

      <p>Home del App Shell encargado de contener dos Micro Frontend</p>

      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "3em",
          gap: 50,
        }}
      >
        <img
          width={"250px"}
          src="https://apilist.fun/images/social/api/jsonplaceholder.png"
          alt="jsonplacholder"
        />
        <img
          width={"250px"}
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-ruefers-deviantart-22.png"
          alt="rickandmorty"
        />
      </section>
    </div>
  );
};

export default Home;
