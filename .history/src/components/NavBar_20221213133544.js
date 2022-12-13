import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkArray = links.map(link => 
    <a href={"#" + link}>{link}</a>
  )

  return (
    <nav>{linkArray}

    </nav>
  );
}

export default NavBar;
