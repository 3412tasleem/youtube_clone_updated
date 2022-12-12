import React, { useEffect, useState } from "react";

import ScaleLoader from "react-spinners/ScaleLoader";
const Card = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="cards_outer">
          <ScaleLoader color="gray" />
        </div>
      ) : (
        <div className="cards_outer">
          <div className="cards_view">
            <div className="cards_img">
              <img src={props.pic} />
            </div>
            <div className="logo_discrip">
              <div className="upper_div">
                <div className="logo">
                  <img src={props.pic} alt="" />
                </div>
                <div className="cards_discrip_outer">
                  <div className="cards_description">
                    {props.text ? props.text.slice(0, 20) + "..." : ""}
                  </div>

                  <div className="name_views_div">
                    <div className="channal_name">
                      {"This is " + props.text.slice(0, 10) + "..."}
                    </div>
                    <div className="Views">
                      {'" AlbumId ' + props.text.slice(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
