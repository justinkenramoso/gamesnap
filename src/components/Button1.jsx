import styled from "styled-components";

const Button1 = styled.button`
  color: #eaeaea;
  position: relative;
  display: inline-block;
  padding: 2px 15px;
  z-index: 9;
  border: none;
  &:before {
    position: absolute;
    top: 0;
    left: -10%;
    width: 100%;
    height: 100%;
    content: "";
    background-color: #252a34;
    border: 2px solid #eaeaea;
    z-index: -1;
    width: 120%;
    transform: skewX(-20deg);
    transition: ease-out 0.3s;
  }
  &:hover {
    color: #252a34;
  }
  &:hover:before {
    background-color: #eaeaea;
  }
`;

export default Button1;
