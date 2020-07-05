import React from "react";
import PropTypes from "prop-types";
import { SVGIcon } from "./StarStyle";

SVGIcon.displayName = "svg";

const Star = (props) => {
  const handleClick = (e) => {
    e.stopPropagation();
    props.onClick(props.id);
  };

  return (
    <SVGIcon
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="2rem"
      height="2rem"
      viewBox="0 0 612 612"
      right={props.right}
      styleProps={props.style}
      onClick={handleClick}
    >
      <g>
        <g id="_x32__19_">
          <g>
            <polygon
              points="612,234.167 400.898,201.96 306,0 211.102,201.96 0,234.167 152.713,390.532 116.567,612 306,507.387 
          495.434,612 459.287,390.532 			"
            />
          </g>
        </g>
      </g>
    </SVGIcon>
  );
};

Star.propTypes = {
  style: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    right: PropTypes.string,
    top: PropTypes.string,
  }),
};

Star.defaultProps = {
  style: {
    fill: "white",
    stroke: "",
    strokeWidth: 0,
    right: "1rem",
    top: "1rem",
  },
};

export default Star;
