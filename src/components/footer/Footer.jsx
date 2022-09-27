import React, { useEffect } from "react";
import "./footer.css";
import countapi from "countapi-js";

function Footer() {
  const [count, setCount] = React.useState(0);
  // ! Visiting page
  useEffect(() => {
    countapi.visits("arafat-alim2.com").then((result) => {
      // console.log(result.value);
      setCount(result.value);
    });
  }, []);
  // // ! gettng data from the api
  // useEffect(() => {
  //   countapi
  //     .get("arafat-alim2.com", "3cfc5e4b-0e60-40ce-bcc1-f826df3c51d3")
  //     .then((result) => {
  //       console.log(result.value);
  //       setCount(result.value);
  //     });
  // }, [count]);
  return (
    <div className="footer">
      <span className="viewing">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2874/2874802.png"
          alt="views"
        />
        <p id="visits">{count}</p>
      </span>
      <div>Made with ❤️ Arafat Alim &copy;</div>
    </div>
  );
}

export default Footer;
