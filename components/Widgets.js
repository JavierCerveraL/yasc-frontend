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
      <div className=" justify-between   rounded-xl p-2 h-auto  bg-stone-700 text-stone-100 mb-5  ">
        <h2 className="text-lg font-medium">Merida </h2>
        <h2 className="text-lg">Weather </h2>
        <div className="flex space-x-2 justify-center text-2xl">30 degrees</div>
      </div>
    </div>
  );
}

export default Widgets;
