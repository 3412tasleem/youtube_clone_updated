import React, { useState } from "react";

//components
import Header from "./Header";
import Sidebar_menu from "./Sidebar_menu";
import Home_content from "./Home_content";
// import Shorts from "./Shorts";

const Main_content = () => {
  const [butt_menu, setbutt_menu] = useState(false);
  // const [render, setRender] = useState(false);

  return (
    <>
      <Header func={setbutt_menu} />
      <div className="main_content">
        <Sidebar_menu checking={butt_menu} />
        <Home_content checking2={butt_menu} />

        {/* <Shorts /> */}
      </div>
    </>
  );
};

export default Main_content;
