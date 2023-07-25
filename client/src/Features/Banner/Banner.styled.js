import { keyframes, styled } from "@mui/material";
export const BannerStyle = styled("div")`
  position: relative;
  .Typewriter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    z-index: 999;
    text-align: center;
    @media (max-width: 900px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
    background-color: transparent;
  }
  .Typewriter span {
    color: #000;
  }
  .Typewriter__cursor {
    color: #2e7d32 !important;
  }
  width: 100%;
  height: calc(100vh - 5rem - 1px);
  background-color: #f2f2f2;
  overflow: hidden;
`;
export const Images = styled("div")`
  transition: 0.5s;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  /* @keyframes slide {
        0% {
            
        }
    } */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    img {
      object-fit: unset;
    }
  }
  background-color: ${(props) => {
    console.log(props.TransitionX);
    return props.TransitionX;
  }};
  transform: translateX(${(props) => props.TransitionX});
`;
export const Icons = styled("div")`
  position: absolute;
  left: 50%;
  bottom: 10rem;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
`;
export const Icon = styled("span")`
  padding: 0.5rem;
  border: solid 1px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3;
  :hover {
    background-color: #374151;
    color: #fff;
  }
`;
