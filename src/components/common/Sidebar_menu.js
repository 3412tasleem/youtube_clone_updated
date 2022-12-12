// import React from "react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//components
import Four_item_sidebar from "./Four_item_sidebar";
import Button from "./Button";
import Sidebar_subcriptions_button from "./Sidebar_subcriptions_button";
import Footer from "./Footer";
// import Sidebar_menu from "./Sidebar_menu";
import city_41 from "../../assets/sidebar_menu/city_41.jfif";
import geeky_shows from "../../assets/sidebar_menu/geeky_shows.jpg";
import tech_gun from "../../assets/sidebar_menu/tech_gun.jpg";
import ary from "../../assets/sidebar_menu/ary-news.png";
import HomeIcon from "@material-ui/icons/Home";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import FeedbackIcon from "@material-ui/icons/Feedback";
import sidebar_icons_data from "../../utils/sidebar_icons_data";

const Sidebar_menu = ({ checking }) => {
  // const [active, setActive] = useState(false);

  const [showmore, setShowmore] = useState(false);
  const open = () => {
    setShowmore(!showmore);
  };

  return (
    <>
      <div className="sidebar">
        {checking ? (
          <div className="main_subContainer">
            <div className="upper_items">
              <NavLink
                to="/"
                style={(isActive) => ({
                  color: isActive ? "black" : "",
                  backgroundColor: isActive ? "lightgrey" : "",
                  borderRadius: isActive ? "12px" : "",
                  textDecoration: isActive ? "none" : "none",
                })}
              >
                <Button text="Home" logo={<HomeIcon />} />
              </NavLink>

              <NavLink
                to="/shorts"
                style={(isActive) => ({
                  color: isActive ? "black" : "black",
                  backgroundColor: isActive ? "lightgrey" : "",
                  borderRadius: isActive ? "12px" : "",
                  textDecoration: isActive ? "none" : "none",
                })}
              >
                <Button text="Shorts" logo={<ShortTextIcon />} />
              </NavLink>

              <NavLink
                to="/subscriptions"
                style={(isActive) => ({
                  color: isActive ? "black" : "black",
                  backgroundColor: isActive ? "lightgrey" : "",
                  borderRadius: isActive ? "12px" : "",
                  textDecoration: isActive ? "none" : "none",
                })}
              >
                <Button text="subcriptions" logo={<SubscriptionsIcon />} />
              </NavLink>
              <div className="dividers" />
              <NavLink
                to="/library"
                style={(isActive) => ({
                  color: isActive ? "black" : "black",
                  backgroundColor: isActive ? "lightgrey" : "",
                  borderRadius: isActive ? "12px" : "",
                  textDecoration: isActive ? "none" : "none",
                })}
              >
                <Button text="library" logo={<VideoLibraryIcon />} />
              </NavLink>
              <>
                <Button text="history" logo={<HistoryIcon />} />
                <Button text="your videos" logo={<PersonalVideoIcon />} />
                <Button text="watch lator" logo={<ThumbUpIcon />} />
                <Button text="liked videos" logo={<WatchLaterIcon />} />
              </>
            </div>
            <div className="upper_items">
              Subcriptions
              <Sidebar_subcriptions_button
                text="ARY"
                logo={<img src={ary}></img>}
              />
              <Sidebar_subcriptions_button
                text="Geeky shows"
                logo={<img src={geeky_shows}></img>}
              />
              <div className="divider" />
              <Sidebar_subcriptions_button
                text="Tech gun"
                logo={<img src={tech_gun}></img>}
              />
              <Sidebar_subcriptions_button
                text="City 41"
                logo={<img src={city_41}></img>}
              />
              <Sidebar_subcriptions_button
                text="ARY"
                logo={<img src={ary}></img>}
              />
              <Sidebar_subcriptions_button
                text="Geeky shows"
                logo={<img src={geeky_shows}></img>}
              />
              <div className="divider" />
              <Sidebar_subcriptions_button
                text="City 41"
                logo={<img src={city_41}></img>}
              />
              <Sidebar_subcriptions_button
                text="Tech gun"
                logo={<img src={tech_gun}></img>}
              />
              {showmore ? (
                <>
                  {sidebar_icons_data.map((data) => (
                    <div className="home">
                      <div className="home_icon">{data.logo}</div>
                      <div className="home_text">{data.text}</div>
                    </div>
                  ))}

                  <button className="show_less_button" onClick={open}>
                    ^ Show fewer
                  </button>
                </>
              ) : (
                <button className="show_less_button" onClick={open}>
                  Show more
                </button>
              )}
            </div>
            <div className="upper_items">
              More from YouTube
              <br></br>
              <div>
                <Button
                  text="Create Studio"
                  logo={<PersonalVideoIcon color="secondary" />}
                />
                <Button
                  text="Youtube Music"
                  logo={<ShortTextIcon color="secondary" />}
                />
                <Button
                  text="Youtube Kids"
                  logo={<SubscriptionsIcon color="secondary" />}
                />
                <div className="divider" />
                <Button
                  text="Youtube Tv"
                  logo={<VideoLibraryIcon color="secondary" />}
                />
                <div className="dividers" />
                <br></br>
              </div>
              Explore
              <br></br>
              <Button text="Setting" logo={<SettingsIcon />} />
              <Button text="Report history" logo={<FlagIcon />} />
              <Button text="Help" logo={<HelpOutlineIcon />} />
              <Button text="Send feedback" logo={<FeedbackIcon />} />
            </div>

            <div className="dividers" />
            <Footer />
          </div>
        ) : (
          <Four_item_sidebar />
        )}
      </div>
    </>
  );
};

export default Sidebar_menu;
