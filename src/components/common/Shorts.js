import React, { useEffect, useState } from "react";
import images_data from "../../utils/images_data";

//Component
import Card from "./Card";
// import Cardd from "../cards/Cardd";
import Mini_side_bar from "../../components/common/Mini_side_bar";
import Sidebar_menu from "./Sidebar_menu";
import Header from "./Header";
import PropagateLoader from "react-spinners/PropagateLoader";
const Shorts = ({ checking2 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [butt_menu, setbutt_menu] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // const [movieList, setMovieList] = useState([]);
  // useEffect(() => {
  //   // const options = {
  //   //   method: "GET",
  //   //   headers: {
  //   //     "X-RapidAPI-Key": "dac17e9298msh2a58d5c5f481f7ap194a76jsn3854dcc2f3d2",
  //   //     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  //   //   },
  //   // };

  //   // fetch(
  //   //   "https://imdb8.p.rapidapi.com/actors/get-all-videos?nconst=nm0001667&region=US",
  //   //   options
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((response) => {
  //   //     console.log(response.resource.videos[0].title);
  //   //     setMovieList(response.resource.videos);
  //   //   })
  //   //   .catch((err) => console.error(err));

  //   // const options = {
  //   //   method: "GET",
  //   //   headers: {
  //   //     "X-RapidAPI-Key": "819202a2d7msh36cd34c5637f789p10f394jsnaa4d8174a33d",
  //   //     "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
  //   //   },
  //   // };

  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // console.log(response);
  //       // setMovieList(response);
  //     });
  // }, []);
  // //   console.log(movieList);
  return (
    <>
      <Header func={setbutt_menu} />
      <div className="main_content">
        <Sidebar_menu />
        <div className={checking2 ? "content_div" : "content_div2"}>
          <Mini_side_bar check={checking2} />

          <div className="margin"></div>
          {isLoading ? (
            <div
              style={{
                // backgroundColor: "blueviolet",
                display: "flex",
                justifyContent: "center",
                marginTop: "25%",
              }}
            >
              {" "}
              <PropagateLoader color="#36d7b7" />
            </div>
          ) : (
            <div className="horizontal_row">
              {images_data.map((movie) => (
                <Card
                  pic={movie.image}
                  text={movie.descrip}
                  // video={movie.url}
                  // pic={movie.url}
                  // albumId={movie.id}
                  // title={movie.title}
                  // logo={movie.url}
                  // description={movie.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shorts;
