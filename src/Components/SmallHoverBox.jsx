import React from 'react';

export default function SmallHoverBox({ heading1, heading2, heading3 }) {
  return (
    <div className='w-full max-w-[407px] flex flex-col gap-5 shadow-xl hover:shadow-black/50 hover:bg-HoverBlue hover:text-white duration-200 rounded-xl bg-white p-6 sm:p-10 h-auto sm:h-[333px]'>

      <div className='flex gap-3 items-center'>
        {heading1 && (
          <>
            <div className='w-[5px] h-[30px] rounded-xl bg-gradient-to-b from-[#9FD64D] to-[#2297B6]'></div>
            <p className='uppercase font-semibold text-[15px]'>{heading1}</p>
          </>
        )}
      </div>

      <div className='w-full font-bold text-[20px] sm:text-[24px]'>
        <p>{heading2}</p>
      </div>

      <div>
        <p className='font-light text-[16px] sm:text-[18px]'>{heading3}</p>
      </div>

    </div>
  );
}
