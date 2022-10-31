import React from "react";
import "./Detalhes.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const { REACT_APP_API_KEY } = process.env;

function Detalhes() {
  const param = useParams();
  const id1 = param.id;

  const [det, setDet] = useState([]);

  useEffect(() => {
    const url1 = `https://api.themoviedb.org/3/movie/${id1}?api_key=${REACT_APP_API_KEY}&language=pt-BR`;

    fetch(url1)
      .then((res) => res.json())
      .then((data1) => setDet(data1));
  }, [id1]);

  console.log(det);

  return (
    <div className="container">
      <div className="detalhes">
        <div className="filme">
          <img
            className="imagem"
            src={`https://image.tmdb.org/t/p/w500${det.poster_path}`}
            alt="..."
          ></img>
          <div className="texto">
            <h2>{det.title}</h2>
            <p>
              <span>Sinopse: </span>
              {det.overview}
            </p>
            <p>
              <span>Lançamento: </span>
              {det.release_date}
            </p>
            <Link to="/" type="button" class="btn btn-danger">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
