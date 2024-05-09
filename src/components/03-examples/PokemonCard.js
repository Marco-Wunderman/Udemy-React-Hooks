export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <div className="container">
      <section style={{ height: 200 }}>
        <h2 className="text-capitalize">
          #{id}-{name}
        </h2>

        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              {sprites.map((sprite) => (
                <img
                  key={sprite}
                  src={sprite}
                  className="img-thumbnail px-1 mx-1"
                  alt={name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
