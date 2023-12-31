import { BannerStyle, Icons, Images, Icon } from "./Banner.styled";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import ChevronLeftTwoToneIcon from "@mui/icons-material/ChevronLeftTwoTone";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import { first, fourth, second, thrid } from "../../assets";

const Banner = () => {
  const user = useSelector((state) => state.cart.user).user;
  const [currentSlide, setCurrentSlide] = useState(0);
  const HandleClickLeftArrow = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const HandleClickRightArrow = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  const data = [first, second, thrid, fourth];

  return (
    <BannerStyle>
      {user && user.displayName && (
        <Typewriter
          options={{
            strings: ["Welcome", `${user.displayName}`],
            autoStart: true,
            loop: true,
          }}
        />
      )}
      <Images TransitionX={`${currentSlide * -100}%`}>
        {data.map((item, index) => {
          return <img key={index} src={item} alt="banner" />;
        })}
      </Images>
      <Icons>
        <Icon onClick={HandleClickLeftArrow}>
          <ChevronLeftTwoToneIcon />
        </Icon>
        <Icon onClick={HandleClickRightArrow}>
          <ChevronRightTwoToneIcon />
        </Icon>
      </Icons>
    </BannerStyle>
  );
};

export default Banner;
