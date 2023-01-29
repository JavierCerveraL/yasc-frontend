import { db } from '../firebase';

import Image from 'next/image';
import React, { useRef } from 'react';
import { icons } from 'react-icons';
import { BiHome, BiNews, BiTime, BiMailSend } from 'react-icons/bi';
import {
  BsFillCameraReelsFill,
  BsFillCameraFill,
  BsEmojiSmile,
} from 'react-icons/bs';
import Logo from './Logo';
function InputBox() {
  const inputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection('posts').add({
      message: inputRef.current.value,
      name: 'Yasc',
      email: 'Yasc@email.com',
      image: '/',
      timestampt: firebase.firestore.FieldValue.serverTimestamps(),
    });
    inputRef.current.value = '';
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-stone-400 font-medium">
      <div className="flex space-x-4 p-4 items-center justify-center">
        <form className="flex flex-1 space-x-2">
          {/* <Image
            width={42}
            height={100}
            class="h-9 mt-1 gap-x-2 rounded-full"
            src="/../public/logoYASC.png"
            alt="logo"
          /> */}
          <Logo />
          <input
            className="rounded-full h-12 w-2 bg-slate-100 placeholder:text-xs placeholder:flex placeholder:relative placeholder:bottom-1 flex-grow px-5 focus:outline-none text-stone-700 "
            type="text"
            placeholder="Post something here"
            ref={inputRef}
          />
          <button type="submit" hidden onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      {/* uploads */}
      <div className="flex justify-evenly p-3 border-t ">
        {/*  Video*/}
        <div className="inputIcons">
          <BsFillCameraReelsFill className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm">Video</p>
        </div>
        {/* pic */}
        <div className="inputIcons">
          <BsFillCameraFill className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm">Picture</p>
        </div>
        {/* feeling */}
        <div className="inputIcons">
          <BsEmojiSmile className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm">Feeling</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
