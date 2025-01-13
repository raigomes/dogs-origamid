import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api/services";
import Photo from "./Photo";

const PhotoPage = (props) => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const id = params.id;

    function fetchData(id) {
      const { endpoint } = PHOTO_GET(id);
      fetch(endpoint)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData.photo))
        .catch((error) => console.error(error));
    }
    id && fetchData(id)
  }, []);

  if (!data) return null;
  return (
    <section className="container mainContainer">
      <Photo data={data} id={params.id} />
    </section>
  );
};

export default PhotoPage;
