import React, { useCallback, useEffect, useState } from "react";
import Feed from "./Feed/Feed";
import { PHOTOS_GET, PHOTOS_QUERY_GET } from "../api/services";

const Home = () => {
  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (infinite && document.body.scrollHeight - 30 < window.scrollY + window.innerHeight) {
        setLoading(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [infinite])

  useEffect(() => {
    const fetchApi = () => {
      const { endpoint } = PHOTOS_QUERY_GET(page);
  
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0)
            setFeed([...feed, <Feed key={page} photos={data} />]);
          else {
            setFeed([
              ...feed,
              <p
                key={page}
                style={{
                  textAlign: "center",
                  padding: "2rem 0px 4rem",
                  color: "rgb(136, 136, 136)",
                }}
              >
                Não existem mais postagens.
              </p>,
            ]);
            setInfinite(false)
          }
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  
    fetchApi();
  }, [page]);

  useEffect(() => {
    if (loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);
  

  return (
    <section className="container mainContainer">
      <div>{feed}</div>
      {loading && <h1>Loading....</h1>}
    </section>
  );
};

export default Home;
