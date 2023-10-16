import React, { useEffect, useState, useCallback } from "react";
import Flickity from "react-flickity-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHotel,
  faPlaneUp,
  faLocationDot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import "./Homepage.css";
import Hotels from "../../components/Hotels/Hotels";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [currentActive, setCurrentActive] = useState("Hotels");

  const fetchData = async (currentActive) => {
    switch (currentActive) {
      case "Hotels":
        const data = await axios
          .get("http://localhost:8800/api/hotels/")
          .then((res) => res.data)
          .then((data) => data);
        setData(data);
        break;
      case "Flight":
        setData([{ _id: "0", name: "Flights" }]);
        break;
      case "Place":
        setData([{ _id: "0", name: "Places" }]);
        break;
      case "Food":
        setData([{ _id: "0", name: "Foods" }]);
        break;
      default:
        return "Something went wrong.";
    }
  };

  const handleClick = (e) => {
    const clickedDiv = e.currentTarget.getAttribute("data-target");
    if (clickedDiv) {
      setCurrentActive(clickedDiv);
    }
  };

  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: true,
    contain: true,
    groupCells: true,
  };

  useEffect(() => {
    fetchData(currentActive);
  }, [currentActive]);

  
  return (
    <div className="text-black">
      <div className="flex flex-row justify-between mb-10 mt-10">
        <h1 className="text-4xl font-bold ml-5">
          Where you <br /> wanna go?
        </h1>
        <button className="mr-6 BoxShadow rounded-full bg-white h-[4em] w-[4em] mt-1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#66627e", scale: "150%" }}
          />
        </button>
      </div>
      <div>
        <div className="text-center">
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false}
          >
            <div
              className="flex justify-center"
              data-target="Hotels"
              onClick={(e) => handleClick(e)}
            >
              <div
                id="div-1"
                className={`h-[8em] w-[6em] ml-5 rounded-[1.7rem] TextGreyColor
          ${currentActive === "Hotels" ? "InitialBg" : "SecondBg"}
          `}
              >
                <button id="Button-1" className="-mt-5 h-[8rem] w-[6em]">
                  <FontAwesomeIcon icon={faHotel} style={{ scale: "200%" }} />
                </button>
                <h1 className="-mt-8 text-base">Hotel</h1>
              </div>
            </div>
            <div
              className="flex justify-center"
              data-target="Flight"
              onClick={(e) => handleClick(e)}
            >
              <div
                id="div-2"
                className={`h-[8em] w-[6em] ml-5 rounded-[1.7rem] TextGreyColor
          ${currentActive === "Flight" ? "InitialBg" : "SecondBg"}
          `}
              >
                <button id="Button-2" className="-mt-5 h-[8rem] w-[6em]">
                  <FontAwesomeIcon icon={faPlaneUp} style={{ scale: "200%" }} />
                </button>
                <h1 className="-mt-8 text-base">Flight</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                id="div-3"
                className={`h-[8em] w-[6em] ml-5 rounded-[1.7rem] TextGreyColor
          ${currentActive === "Place" ? "InitialBg" : "SecondBg"}
          `}
              >
                <button
                  id="Button-3"
                  className="-mt-5 h-[8rem] w-[6em]"
                  data-target="Place"
                  onClick={(e) => handleClick(e)}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ scale: "200%" }}
                  />
                </button>
                <h1 className="-mt-8 text-base">Place</h1>
              </div>
            </div>
            <div
              className="flex justify-center"
              data-target="Food"
              onClick={(e) => handleClick(e)}
            >
              <div
                id="div-4"
                className={`h-[8em] w-[6em] ml-5 rounded-[1.7rem] TextGreyColor
          ${currentActive === "Food" ? "InitialBg" : "SecondBg"}
          `}
              >
                <button id="Button-4" className="-mt-5 h-[8rem] w-[6em]">
                  <FontAwesomeIcon
                    icon={faUtensils}
                    style={{ scale: "200%" }}
                  />
                </button>
                <h1 className="-mt-8 text-base">Food</h1>
              </div>
            </div>
          </Flickity>
        </div>
        {data ? (
          data.map((element) => {
            return <p key={element._id}>{element.name}</p>;
          })
        ) : (
          <p>No data to display.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
