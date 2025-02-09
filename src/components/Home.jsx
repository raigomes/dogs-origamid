import React from "react";
import FeedList from "./Feed/FeedList";
import Head from "./Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos | Dogs" description="Home do site Dogs, com o feed de fotos." />
      <FeedList />
    </section>
  );
};

export default Home;
