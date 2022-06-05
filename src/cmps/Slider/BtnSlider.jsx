import React from 'react';
import leftArrow from './pic/back.png';
import rightArrow from './pic/next.png';

export default function BtnSlider({ direction, moveSlide, picList }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      {picList.length !== 1 && (
        <img src={direction === 'next' ? rightArrow : leftArrow} />
      )}
    </button>
  );
}
