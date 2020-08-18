import styled from "styled-components";

const StyledAnimatedImg = styled.img`
  // transform: translate(${({posX}) => posX}px,${({posY}) => posY}px);
   position: absolute;
   width: 20%;
  //
  top:${({type}) => type === 'sun' ? 10 + '%' : null};
  left:${({type}) => type === 'sun' ? 50 + '%' : null};
  
  &:nth-child(1) {
    left: 20%;
    top: 30%;
  }
  
  &:nth-child(2) {
    left: 24%;
  }
  
  &:nth-child(3) {
    left: 33%;
    top: 25%;
    z-index: 1;
  }
  
  &:nth-child(4) {
    left: 60%;
  }
  
  &:nth-child(5) {
    top: 25px;
    z-index: 1;
  }
`
export default StyledAnimatedImg;