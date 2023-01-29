import Image from 'next/image';
import React from 'react';
import { BsHandThumbsUp, BsShare } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';

function Post() {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src="/../public/logoYASC.png"
            className=" rounded-full"
            width={40}
            height={40}
            alt="/"
          />{' '}
          <div>
            <p className="font-medium"> Yasc Portal</p>
            <p className="text-xs text-stone-500 ">29/01/2023, 13:25 </p>
          </div>
        </div>
        <p className="pt-4"> Hello, Welcome. </p>
        <div className=" flex mt-6 justify-between items-center rounded-2xl bg-white shadow-md text-stone-500 border-t">
          <div className="inputIcons ">
            <BsHandThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcons">
            <BiCommentDetail className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcons">
            <BsShare className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
