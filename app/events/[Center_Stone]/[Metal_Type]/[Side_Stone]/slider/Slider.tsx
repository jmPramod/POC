'use client';
{
  /* eslint-disable-next-line @next/next/no-img-element */
}
import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { styles } from './styles';
import Image from 'next/image';
const Slider = (props: any) => {
  const { selectedJewelry } = props;
  useEffect(() => {
    // console.log('selectedJewelry?.description', selectedJewelry);
  }, [selectedJewelry]);

  return (
    <styles.sliderContainer>
      {selectedJewelry?.description ||
      selectedJewelry === '' ||
      selectedJewelry === 'undefined' ||
      selectedJewelry === null ? (
        <Carousel autoPlay={false} interval={1000} transitionTime={1000}>
          {selectedJewelry?.Main_Image.map((v: any, i: any) => (
            <>
              <img src={v} alt="no image" key={i} />
            </>
          ))}
        </Carousel>
      ) : (
        <styles.noImage>No Image </styles.noImage>
      )}
    </styles.sliderContainer>
  );
};

export default Slider;
