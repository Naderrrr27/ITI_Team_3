import React, { useEffect } from 'react';

function Effect() {
  useEffect(() => {
    console.log('Content loaded!');
    var logo = document.querySelector(".footer_logo img");
    logo.addEventListener("click", function() {
      alert("You clicked on the logo!");
    });
    var socialIcons = document.querySelectorAll(".socials img");
    socialIcons.forEach(function(icon) {
      icon.addEventListener("click", function() {
        var platform = this.getAttribute("src").split("/").pop().split(".")[0];
        alert("You clicked on the " + platform + " icon!");
      });
    });
  }, []);

  return null;
}

export default Effect;