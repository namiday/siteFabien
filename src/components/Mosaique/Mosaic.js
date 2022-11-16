import React, { useState } from "react";
import "./Mosaic.css";
// import data from "../../assets/images.json";
import Modal from "./Modal.js";

const Mosaic = ({data,categoryName}) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("divHeader").style.visibility = "hidden";
    document.getElementById("mapID").style.visibility = "hidden";

    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <span className="anchorHidden" id="anchorGallery" />
      <div id="divWrapper">
        <details>
          <summary class="collapsible">{categoryName}</summary>
          <div class="content">
            <div id="divMosaic">
              {data.data.map((item, index) => (
                <div key={index} className="divWrapperImages" id={"divJPG" + index}>
                  <img
                    src={item.link}
                    alt={item.text}
                    className="MosaicImage"
                    onClick={() => handleClick(item, index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
      <div id="divWrapper">
        {/* <div id="divMosaic">
          {data.data.map((item, index) => (
            <div key={index} className="divWrapperImages" id={"divJPG" + index}>
              <img
                src={item.link}
                alt={item.text}
                className="MosaicImage"
                onClick={() => handleClick(item, index)}
              />
            </div>
          ))}
        </div> */}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Mosaic;
