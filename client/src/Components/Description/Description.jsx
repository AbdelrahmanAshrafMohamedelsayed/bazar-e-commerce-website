import { useEffect } from "react";
import { DescContainer, Header, Txt } from "./Description.styled";
import Aos from "aos";

const Description = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <DescContainer data-aos="fade-right">
      <Header>shopping everyday</Header>
      <Txt>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        quos fugit inventore, cumque quae corporis ratione tenetur eos
        voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
        asperiores repudiandae assumenda quidem.
      </Txt>
    </DescContainer>
  );
};

export default Description;
