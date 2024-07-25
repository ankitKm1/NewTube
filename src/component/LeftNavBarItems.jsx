function LeftNavBarItem({ text, icon, action }) {
  return (
    <div onClick={action}
      className="flex h-10 px-3 items-center text-white cursor-pointer hover:bg-white/[.15] rounded-lg"
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
}

export default LeftNavBarItem;

