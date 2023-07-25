import { styled } from "@mui/material";
export const UploadImage = styled("div")`
  flex-basis: 50%;
  padding: 3rem;
  background: #7fa998;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .Foricon {
    position: relative;
    position: relative;
    display: flex;
    justify-content: center;
  }
  span {
    position: absolute;
    right: 60px;
    bottom: 0;
    background: #fff;
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    right: 17%;
    bottom: 27%;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 940px) {
    .MuiAvatar-root.MuiAvatar-circular {
      width: 45%;
    }
    span {
      right: 30%;
    }
  }
  @media (max-width: 600px) {
    .MuiAvatar-root.MuiAvatar-circular {
      width: 45%;
    }
    span {
      right: 30%;
      width: 2rem;
      height: 2rem;
    }
  }
`;
