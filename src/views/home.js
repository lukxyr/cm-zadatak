import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import KitWrapper from "../components/kit-wrapper";
import "./home.css";

const Home = (props) => {
  const [visibleKits, setVisibleKits] = useState(3);
  const totalKits = 6;
  const [isLoading, setIsLoading] = useState(false);
  const [apiKits, setApiKits] = useState([]);

  useEffect(() => {
    fetchKits();
  }, []);

  const fetchKits = async () => {
    setIsLoading(true);

    try {
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                desc: "A DIY voice assistant that talks, lights up, and understands voice commands (API)",
                button: "Shop now",
                heading: "Spencer (API)",
                discount: "Limited 20% discount",
                image_alt: "Spencer Kit",
                image_src: "/psm-spencer-1-500w.jpg",
                new_price: "kn813.99",
                old_price: "kn1,207.99",
                rootClassName: "kit-wrapper-root-class-name",
                color: "#E3384D",
                bckg_img:
                  "url(https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2febe907-d54e-4f13-9dc7-a7976fa77a26/ed2219ab-c98b-4f4f-9886-2edb40ea722f?org_if_sml=1)",
              },
              {
                desc: "Build & code your own DJ mixtable (API)",
                button: "Shop now",
                heading: "Jay-D (API)",
                discount: "Limited 15% discount",
                image_alt: "Jay-D Kit",
                image_src: "/jayd-new-4x3-1-500w.jpg",
                new_price: "kn856.99",
                old_price: "kn1,027.99",
                rootClassName: "kit-wrapper-root-class-name1",
                color: "#fed600",
                bckg_img:
                  "url(https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2febe907-d54e-4f13-9dc7-a7976fa77a26/22d80716-2aec-4466-afda-a193dee36c00?org_if_sml=1)",
              },
              {
                desc: "A DIY voice assistant that talks, lights up, and understands voice commands (API)",
                button: "Shop now",
                heading: "Nibble (API)",
                discount: "Limited 20% discount",
                image_alt: "Nibble Kit",
                image_src: "/psm-nibble-4x3-1-500w.jpg",
                new_price: "kn642.99",
                old_price: "kn813.99",
                rootClassName: "kit-wrapper-root-class-name2",
                color: "#00bed6",
                bckg_img:
                  "url(https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2febe907-d54e-4f13-9dc7-a7976fa77a26/93bd7deb-4b96-4532-8daf-8b734f959170?org_if_sml=1)",
              },
            ]),
          50
        )
      );

      setApiKits(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching kits:", error);
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setIsLoading(true);

    setTimeout(() => {
      setVisibleKits((prevVisibleKits) => prevVisibleKits + 3);
      setIsLoading(false);
    }, 1000);
  };

  const kitsToRender = [
    ...apiKits.slice(0, visibleKits - 3),
    ...apiKits.slice(-3),
  ];

  return (
    <section className="home-container">
      <Helmet>
        <title>Copy of CircuitMess Zadatak</title>
        <meta property="og:title" content="CircuitMess Zadatak" />
      </Helmet>
      <div className="kits-wrapper">
        <div className="kits-header">
          <h1 className="heading-style-h1">
            <span>Learn electronics &amp; coding</span>
            <br />
            <span>with our best-selling DIY STEM kits:</span>
          </h1>
        </div>
        <div className="kits-container home-kitscontainer">
          {kitsToRender.map((kit, index) => (
            <KitWrapper key={index} {...kit} />
          ))}
        </div>
        {visibleKits < totalKits && (
          <button
            type="button"
            className="button red-button"
            onClick={handleShowMore}
            disabled={isLoading}
          >
            {isLoading ? "Results are loading..." : "Show more"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Home;
