import React from 'react';

export default function Slider({ picList, slideIndex }) {
  return (
    <div className="container-slider">
      {picList.map((obj, index) => {
        return (
          <div
            key={index}
            className={
              slideIndex === index + 1 ? 'slide active-anim' : 'slide'
            }>
            <img className="img" src={obj.pic} />
          </div>
        );
      })}
    </div>
  );
}
