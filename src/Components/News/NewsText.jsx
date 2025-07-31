import React from 'react';

export default function NewsText({
  category = 'Company news',
  title = 'Sample News Title Goes Here',
  date = '30 April 2025',
  titleSize = 'text-2xl',        // control title font size
  gap = 'gap-4',                 // control spacing between blocks
}) {
  return (
    <div className={`w-full flex flex-col ${gap} text-black`}>

      {/* Category */}
      <span className="uppercase text-sm sm:text-[15px] text-gray-600 tracking-wider">
        {category}
      </span>

      {/* Title */}
              <span className={`font-emphasis-heavy hover:text-green-800 cursor-pointer hover:underline transition duration-150 leading-snug ${titleSize}`}>
        {title}
      </span>

      {/* Date Info */}
      <div className="text-sm sm:text-[15px] flex gap-2 text-gray-600 flex-wrap">
        <span>News Release</span>
        <span>|</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

