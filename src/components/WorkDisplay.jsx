import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

// interface Props {
//   bgColor: string;
//   symbol: string;
//   symbolWidth: number;
//   text: string;
//   url?: string;
//   picture?: string;
// }

export default function WorkDisplay(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <div
      className="max-w-[560px] min-w-[33.3%] min-h-[325px] rounded-[20px] relative flex items-center justify-center"
      style={{ backgroundColor: props.bgColor }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.symbol}
        width={props.symbolWidth}
      />
      {isHovered ? (
        <div className="w-full h-full font-europa_light text-[white] bg-[rgba(0,0,0,.9)] rounded-[20px] absolute top-0 left-0 flex flex-col items-center justify-center px-8">
          <p className="text-2xl text-center">{props.text}</p>
          {props.url ? (
            <button
              className="cursor-pointer w-fit h-fit text-xl px-5 py-2 mt-8 bg-[var(--green3)] rounded-full shrink-0"
              onClick={() => window.open(props.url)}
            >
              Visit Website
            </button>
          ) : (
            <button
              className="cursor-pointer w-fit h-fit text-xl px-5 py-2 mt-8 bg-[var(--green3)] rounded-full shrink-0"
              onClick={() => setIsViewerOpen(true)}
            >
              Visit Picture
            </button>
          )}
        </div>
      ) : null}
      {isViewerOpen && (
        <ImageViewer
          src={[props.picture]}
          // currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </div>
  );
}
