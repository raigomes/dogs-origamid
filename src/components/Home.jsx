import React, { useEffect, useState } from "react";
import Feed from "./Feed/Feed";
import { PHOTOS_GET } from "../api/services";

const Home = () => {
  const [photos, setPhotos] = useState(null);
  const { endpoint } = PHOTOS_GET();

  function load() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  );
};

export default Home;
