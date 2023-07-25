import { useEffect, useState } from "react";
import { StyledPagination, Wrapper } from "./Pagination.styled";

const Pagination = ({
  productsNum,
  TotalProducts,
  Start,
  End,
  onChangeHandler,
}) => {
  const pageChangeHandler = (e, value) => {
    console.log(value);
    onChangeHandler({
      start: (value - 1) * productsNum,
      end: (value - 1) * productsNum + productsNum,
    });
  };
  useEffect(() => {
    onChangeHandler({
      start: 0,
      end: productsNum,
    });
  }, [productsNum]);
  const pageCount = Math.ceil(+TotalProducts / +productsNum);
  console.log("bbb", pageCount);

  console.log(pageCount);
  return (
    <Wrapper>
      {
        <StyledPagination
          count={pageCount}
          shape="rounded"
          onChange={pageChangeHandler}
        />
      }
      <p>
        Products from {Start + 1} to{" "}
        {End <= TotalProducts ? End : TotalProducts} of {TotalProducts}
      </p>
    </Wrapper>
  );
};

export default Pagination;
