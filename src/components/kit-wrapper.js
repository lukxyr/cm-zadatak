import React from "react";
import PropTypes from "prop-types";

import "./kit-wrapper.css";

const KitWrapper = (props) => {
  return (
    <div
      className={`kit-wrapper-kit-wrapper kit-wrapper ${props.rootClassName}`}
      style={{
        backgroundImage: props.bckg_img,
        backgroundSize: props.bckg_size,
        backgroundPositon: props.bckg_position,
        backgroundRepeat: props.bckg_repeat,
      }}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="img_red"
      />
      <h2 className="heading-style-h2" style={{ color: props.color }}>
        {props.heading}
      </h2>
      <span className="grey-text">{props.desc}</span>
      <div className="kit-pricing">
        <div className="kit-wrapper-container pricing-container">
          <span
            className="kit-wrapper-text2 old-price"
            style={{ color: props.color }}
          >
            {props.old_price}
          </span>
          <span
            className="kit-wrapper-text3 new-price"
            style={{ color: props.color }}
          >
            {props.new_price}
          </span>
        </div>
        <span className="pricing-text" style={{ color: props.color }}>
          {props.discount}
        </span>
      </div>
      <button
        type="button"
        className="button"
        style={{
          color: props.btn_color,
          backgroundColor: props.color,
          borderColor: props.color,
        }}
      >
        {props.button}
      </button>
    </div>
  );
};

KitWrapper.defaultProps = {
  heading: "Name",
  image_src: "Img source",
  rootClassName: "",
  desc: "Desc",
  image_alt: "Img_alt",
  old_price: "old_price",
  new_price: "new_price",
  discount: "discount",
  button: "button",
  color: "#fff",
  btn_color: "#fff",
  bckg_img:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2febe907-d54e-4f13-9dc7-a7976fa77a26/ed2219ab-c98b-4f4f-9886-2edb40ea722f?org_if_sml=1",
  bckg_size: "110px",
  bckg_position: "bottom right",
  bckg_repeat: "no-repeat",
};

KitWrapper.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  desc: PropTypes.string,
  image_alt: PropTypes.string,
  old_price: PropTypes.string,
  new_price: PropTypes.string,
  discount: PropTypes.string,
  button: PropTypes.string,
  color: PropTypes.string,
  btn_color: PropTypes.string,
  bckg_img: PropTypes.string,
  bckg_size: PropTypes.string,
  bckg_position: PropTypes.string,
  bckg_repeat: PropTypes.string,
};

export default KitWrapper;
