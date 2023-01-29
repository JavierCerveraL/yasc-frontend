import { BiCommentDetail } from 'react-icons/bi';

function Widgets() {
  return (
    <div className=" relative right-20 w-80 hidden lg:flex flex-col  p-2 mt-5 cursor-pointer">
      <div className="flex justify-between   rounded-xl p-2 h-20   bg-white text-stone-700 mb-5  ">
        <h2 className="text-xl">Reminders</h2>
        <div className="flex space-x-2">
          <BiCommentDetail className="h-6 cursor-pointer mt-1" />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
