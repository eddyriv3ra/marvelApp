import styled from "styled-components";

export const SVGIcon = styled.svg`
  position: absolute;
  top: ${(props) => props.styleProps.top};
  right: ${(props) => props.styleProps.right};
  fill: ${(props) => props.styleProps.fill};
  stroke: ${(props) => props.styleProps.stroke};
  stroke-width: ${(props) => props.styleProps.strokeWidth};
  &:hover {
    cursor: pointer;
  }
`;
