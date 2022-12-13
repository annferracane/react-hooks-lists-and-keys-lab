import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkArray = links.map(link => 
    <a href={"#" + link}>{link}</a>
  )

  return (
    <nav>

    </nav>
  );
}

export default NavBar;
