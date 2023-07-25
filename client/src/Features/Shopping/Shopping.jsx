import { Grid } from "@mui/material";
import Description from "../../Components/Description/Description";
import { MMContainer, Wrapper } from "./Shopping.styled";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import { useState } from "react";
import NavShop from "../../Components/NavShop/NavShop";
// import { Card1 } from "../../Components/Card/Card.styled";

const Shopping = ({ products }) => {
  const CountChangeHandler = (value) => {
    setproductsNum(value);
  };
  const [productsNum, setproductsNum] = useState(6);
  console.log("bb", productsNum);

  const [Start, setStart] = useState(0);
  const [End, setEnd] = useState(productsNum + 1);
  const ChangeHandler = (value) => {
    setStart(value.start);
    setEnd(value.end);
  };
  return (
    <Wrapper>
      <Description />
      <NavShop onCountChange={CountChangeHandler} />
      <MMContainer>
        {products && (
          <Grid container spacing={4}>
            {products.slice(Start, End).map((product) => (
              <Card
                key={product._id}
                product={product}
                productsNum={productsNum}
              />
            ))}
          </Grid>
        )}
        <Pagination
          productsNum={productsNum}
          TotalProducts={products.length}
          Start={Start}
          End={End}
          onChangeHandler={ChangeHandler}
        />
      </MMContainer>
    </Wrapper>
  );
};

export default Shopping;
