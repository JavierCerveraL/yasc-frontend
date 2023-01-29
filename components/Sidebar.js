import React from 'react';
import { BiHome, BiNews, BiTime, BiMailSend } from 'react-icons/bi';
import SidebarRow from './SidebarRow';
// import { HomeIcon, InboxIcon } from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div className="p-2  max-w-[200px] min-w-[50px] bg-lime-100 shadow-md ">
      <SidebarRow Icon={BiHome} title="Home" />
      <SidebarRow Icon={BiNews} title="News" />
      <SidebarRow Icon={BiTime} title="Upcoming Shifts " />
      <SidebarRow Icon={BiMailSend} title="Email" />
      {/* OLD ICONS */}
    </div>
  );
}

export default Sidebar;
