import React, { useEffect, useState } from "react";
import { PHOTOS_QUERY_GET } from "../../api/services";
import Feed from "./Feed";

const FeedList = ({ user=0, total=6 }) => {
  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (
        infinite &&
        document.body.scrollHeight - 30 < window.scrollY + window.innerHeight
      ) {
        setLoading(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [infinite]);

  useEffect(() => {
    const fetchApi = () => {
      const { endpoint } = PHOTOS_QUERY_GET(page, user, total);
  
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
    <>
      <div>{feed}</div>
      {loading && <h1>Loading....</h1>}
    </>
  );
};

export default FeedList;
