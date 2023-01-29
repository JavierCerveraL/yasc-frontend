function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex  items-center text-stone-900 space-x-2 p-4 hover:bg-stone-300 rounded-xl cursor-pointer">
      {Icon && <Icon clasName="h-8 w-8  " />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
