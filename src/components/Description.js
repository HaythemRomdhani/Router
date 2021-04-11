  
import { useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

const Description = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const movie = Data.find((el) => el.id.toString() === props.match.params.id);

  return (
    <div className="App">
      <header className="App-header">
        <button>
          <Link to="/">home</Link>
        </button>
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.description}</h3>
          <button onClick={handleShow}>Trailer</button>
          <div>
            {show ? (
              <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title={movie.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : null}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Description;
