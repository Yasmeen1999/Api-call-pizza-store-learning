import React, { Component } from "react";

class App extends Component {
  state = {
    pizzalist: [],
    sortType: "",
  };
  // api call componentdidmount
  componentDidMount() {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((resjson) => this.setState({ pizzalist: resjson }))
      .catch((e) => console.log(e));
  }

  // function
  renderPizzalist = () => {
    return this.state.pizzalist.map((pizza) => (
      <div key={pizza.id}>
        <img src={pizza.img_url} alt={pizza.name} width="200" margin="20px" />
        <p key={pizza.id}>Pizza name :{pizza.name}</p>
        <p>Dscription:{pizza.description}</p>
        <p>Rating:{pizza.rating}/5</p>
        <p>Price:INR {pizza.price}/-</p>
        <p>Type:{pizza.isVeg ? "Veg" : "Non-veg"}</p>
      </div>
    ));
  };

  // need to understand
  sortPizzaList = (sortType) => {
    let sortedList;
    if (sortType === "price") {
      sortedList = this.state.pizzalist.sort((a, b) => {
        if (b.price < a.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
      });
      this.setState({ pizzaList: sortedList });
    } else if (sortType === "rating") {
      sortedList = this.state.pizzalist.sort((a, b) => {
        if (b.rating < a.rating) return -1;
        if (b.rating > a.rating) return 1;
        return 0;
      });
      this.setState({ pizzaList: sortedList });
    }
  };

  // redndering all the elements here
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          margin: "10px",
          background:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <h1 style={{ color: "red", fontFamily: "cursive" }}>pizza store</h1>
        <div>
          <p> Sort by</p>
          Price:
          <input
            type="radio"
            name="sort"
            onChange={() => this.sortPizzaList("price")}
          />
          <br />
          Rating:
          <input
            type="radio"
            name="sort"
            onChange={() => this.sortPizzaList("rating")}
          />
          <br />
          <button
            style={{ margin: "10px" }}
            onChange={() => this.sortPizzaList("reset")}
          >
            Reset Sort
          </button>
        </div>
        {this.renderPizzalist()}
      </div>
    );
  }
}
export default App;
