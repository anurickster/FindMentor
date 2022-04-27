import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect } from "react";
import "./MultipleInput.css";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

const MultipleInput = (props) => {
  const [cart, setCart] = React.useState([]);
  const [input, setInput] = React.useState("");

  useEffect(() => {
    console.log(props);
    cart.push(...props.Array);
    props.SetArray(cart);
  }, []);

  // setInterval(() => {
  //   cart.push(...props.Array);
  // }, 2000);
  // clearInterval(setTimeout, 3000);

  const addNewItem = async (e) => {
    e.preventDefault();
    // console.log(props.Array);

    if (input) {
      console.log(input);
      cart.push(input);
      // props.Array.push(input);
      document.getElementById("inputcart").value = "";
      setInput("");
    } else {
      alert("Please " + props.placeholder);
    }
  };
  const RemoveItem = (e, id) => {
    e.preventDefault();
    const newCart = cart.filter((item, index) => index !== id);
    console.log(newCart);
    setCart(newCart);
  };
  return (
    <div className="Input__Container">
      <div className="Input__Container__Header">
        <input
          type="text"
          className="MultipleInput"
          placeholder={props.placeholder}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          id="inputcart"
        />
        <button className="BTN Add" onClick={(e) => addNewItem(e)}>
          <AddIcon />
        </button>
      </div>
      <ol className="List__of__items">
        {cart
          ? cart.map((subItems, sIndex) => {
              return (
                <li key={sIndex} className="Item">
                  <p>{subItems}</p>
                  <button
                    className="DeleteItem"
                    onClick={(e) => RemoveItem(e, sIndex)}
                  >
                    <ClearIcon fontSize="small" />
                  </button>
                </li>
              );
            })
          : null}
      </ol>
    </div>
  );
};

export default MultipleInput;
