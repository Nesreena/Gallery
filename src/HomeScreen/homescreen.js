import React, { useEffect, useState } from "react";
import Card from "../Components/cards/card";
import "./style.css";
import logo from "../Header/Logo.png";
import axios from "axios";

function HomeScreen(props) {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response);
      setList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header className="nav-header">
        <div className="logo-img">
          <img src={logo} />
        </div>

        <input
          type="search"
          placeholder="Search... "
          className="search-input"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
      </header>

      <div className="container">
        <h1 className="title-website">Your Space To WatchThe Best Pictures</h1>

        <section className="card-container">
          {list?.length ? (
            list
              .filter((item) => {
                if (item.title.includes(value)) {
                  return item;
                } else if (item.title === "") {
                  return list;
                }
              })
              .map((item) => (
                <Card srcImg={item.url} titleCard={item.title} key={item.id} />
              ))
          ) : (
            <span>Loading ....</span>
          )}
        </section>
      </div>
    </div>
  );
}
export default HomeScreen;
