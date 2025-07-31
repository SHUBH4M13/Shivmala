import React from 'react';
import CardDots from '../Projects/CardDots';
import ZoomPhotoText from '../ZoomPhotoText';

export default function ProjectCard({
  heading1,
  heading2,
  h2Size = '40px',
  text1,
  ButtonText,
  onClick,
  Photo,
  PhotoLoc,
  PhotoDuration,
  direction = 'normal', //'reverse'
}) {
  return (
    <div
      className={`px-6 md:px-12 lg:px-20 py-10 w-full flex flex-col-reverse lg:flex-row ${
        direction === 'reverse' ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } justify-center items-center gap-10 lg:gap-x-16`}
    >
      <div className="w-full lg:w-[500px]">
        <ZoomPhotoText
          heading1={heading1}
          heading2={heading2}
          h2Size={h2Size}
          text1={text1}
          ButtonText={ButtonText}
          onClick={onClick}
        />
      </div>

      <div className="relative w-full max-w-[488px] h-[332px]">
        <div className="absolute left-[-50px] top-[20px] z-0 hidden md:block">
          <CardDots />
        </div>

        <div className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-lg">
          <img
            src={Photo}
            alt="project"
            className="w-full h-full object-cover hover:scale-105 duration-150"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
            <p className="text-white font-emphasis-heavy text-[18px] leading-tight">
              {PhotoLoc}
            </p>
            <p className="text-white font-emphasis text-[16px]">
              {PhotoDuration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
