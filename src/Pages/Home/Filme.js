import React from "react";
import "./Detalhes.css";
import { useEffect, useState, useContext } from "react";
import "./App.css";

import { PesqContext } from "../../contexts/Context";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { REACT_APP_API_KEY } = process.env;

function Filme() {
  const { pesquisa, setPesquisa } = React.useContext(PesqContext);
  const [resultado, setResultado] = useState([]);
  //console.log(pesquisa);

  useEffect(() => {
    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=pt-BR&query=${pesquisa}&page=1&include_adult=false`;
    fetch(url2)
      .then((res) => res.json())
      .then((data2) => setResultado(data2.results));
  }, []);

  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid top">
        <h1 className="display-4">Resultados para {pesquisa}:</h1>
      </div>
      <div className="container">
        {resultado.length ? (
          <div className="filmes">
            {resultado.map((filme) => {
              return (
                filme.poster_path != null && (
                  <div className="card" key={filme.id}>
                    <img
                      className="card-img-top"
                      src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{filme.title} </h5>
                      <Link to={`/${filme.id}`} className="btn ">
                        Detalhes
                      </Link>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        ) : (
          <div className="pesquisa">
            <h1>Nenhum Filme encontrado</h1>
            <Link to="/" type="button" class="btn btn-danger btn-sm">
              Voltar
            </Link>
          </div>
        )}
      </div>
      <footer>Guilherme Bernardes 2022 </footer>
    </div>
  );
}

export default Filme;
