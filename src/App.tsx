import "./App.css";
import useDebounce from "./useDebounce";
import { ChangeEvent, useEffect, useState } from "react";

type Item = {
  id: number;
  title: string;
};

const App = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const searchQuery = useDebounce(query, 500);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClearQuery = () => {
    setQuery("");
  };

  const getProducts = async (searchText: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`
      );
      const result = response.json();
      return result;
    } catch (error) {
      return "Something went wrong!";
    }
  };

  useEffect(() => {
    setList([]);

    if (searchQuery) searchProducts();

    async function searchProducts() {
      setList([]);
      setLoading(true);
      const data = await getProducts(searchQuery);
      setList(data.products);
      setLoading(false);
    }
  }, [searchQuery]);

  const getSearchedText = (text: string) => {
    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
    return parts.map((part, i) => (
      <span
        key={i}
        style={
          part.toLowerCase() === searchQuery.toLowerCase()
            ? { fontWeight: "bold", color: "red" }
            : {}
        }
      >
        {part}
      </span>
    ));
  };

  return (
    <main>
      <div className="autocomplete-container">
        <input
          type="text"
          value={query}
          className="autocomplete"
          onChange={handleQueryChange}
          placeholder="Search..."
        />
        {query && (
          <button className="clear-icon" onClick={handleClearQuery}>
            &#10005;
          </button>
        )}
        {searchQuery && !loading && (
          <ul className="list-container">
            {list.length ? (
              list.map((item: Item) => (
                <li key={item?.id} className="list-item">
                  {getSearchedText(item?.title)}
                </li>
              ))
            ) : (
              <li className="list-item">No Products Found!</li>
            )}
          </ul>
        )}
      </div>
    </main>
  );
};

export default App;
