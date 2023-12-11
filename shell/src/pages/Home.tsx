const Home = () => {
  return (
    <div style={{ marginTop: "1em" }}>
      <h4 style={{ marginTop: "1em", marginBottom: "1em" }}>Nested Router</h4>

      <p>
        En esta aplicación de muestra podemos ver como trabajan tres Microfront
        end con sus propios router
      </p>

      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "3em",
        }}
      >
        <img
          width={"250px"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5-4VxpEnW28Bux5jpEovI4CJkK0BDab69c3_dgDU-gz-ZbknS5MwaDuHbr5TqiHRj10&usqp=CAU"
          alt="jsonplacholder"
        />
        <img
          width={"250px"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09C5OJRR3IFCkB7HE-VSPaz_-lE2MRah3WnETU7gG_pK3DAqxqPUnqijP0vDSbRdVnNc&usqp=CAU"
          alt="rickandmorty"
        />
      </section>
    </div>
  );
};

export default Home;
