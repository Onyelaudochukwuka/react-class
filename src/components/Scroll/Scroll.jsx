import React, { useEffect } from "react";
import "./Scroll.css";
function Scroll() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const pTags = document.querySelectorAll("div p");
      const elements = document.querySelectorAll("nav ul li");
      pTags.forEach((pTag, i) => {
        const navLink = elements[i];
        if (e.currentTarget.scrollY >= pTag.offsetTop - 100  && e.currentTarget.scrollY < pTag.offsetTop + pTag.offsetHeight - 100) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
      console.log(elements);
      // console.log(pTag1.offsetTop);
    });
  }, []);
  return (
    <div>
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
        <p className="p">P tag</p>
        <p className="ptwo">P tag</p>
        <p className="pthree">P tag</p>
        <p className="pfour">P tag</p>
    </div>
  );
}

export default Scroll;