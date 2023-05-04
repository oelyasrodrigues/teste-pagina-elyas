import "./bio.scss"

function Bio() {
  return (
    <section className="bio d-flex">
      <div className="container">
        <div className="content pad d-flex">
          <div className="espaco-img"></div>
          <div className="text">
            <h2>Conheça <span>seu parceiro</span></h2>
            <p>
              Me chamo <span className="underline">Elyas Rodrigues</span>, estudo programação a mais de 1 ano, mas o designer sempre me chamou atenção.
            </p>
            <p>
              Não demorou muito para juntar o útil ao agradável e me tornar um <span>web designer.</span>
            </p>
            <p>
              Não sou só mais um designer que faz "artes bonitas", mas sim um parceiro para seu negócio que além do profissionalismo, te faz gerar <span className="underline">resultados!!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
