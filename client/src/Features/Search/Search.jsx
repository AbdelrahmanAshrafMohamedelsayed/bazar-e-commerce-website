import { useEffect, useState } from "react";
import { Cont1, ContSearch, SearchItems, SearchItem } from "./Search.styled";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
const Search = () => {
  const items = useRouteLoaderData("home")?.data;
  console.log(items);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);
  return (
    <Cont1>
      <ContSearch>
        <input
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search your products here"
        />
        <span className="icon">
          <SearchSharpIcon />
        </span>
        {searchQuery && (
          <SearchItems>
            {searchQuery &&
              filteredProducts.map((item) => (
                <SearchItem
                  to={`product/${item._id}`}
                  state={item}
                  onClick={() => setShowSearchBar(true) & setSearchQuery("")}
                  key={item._id}
                >
                  <img src={item.image} alt="productImg" />
                  <div className="txt">
                    <p className="title">{item.title}</p>
                    <p className="desc">{item.description}</p>
                    <p className="price">
                      Price: <span>${item.price}</span>
                    </p>
                  </div>
                </SearchItem>
              ))}
          </SearchItems>
        )}
      </ContSearch>
    </Cont1>
  );
};

export default Search;
