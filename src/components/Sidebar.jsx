import assets  from "../assets/assets";
function Sidebar() {
  return (
    <div className="hidden sm:flex h-screen w-52 justify-between flex-col bg-[#f0f3f8]">
      <div className="  space-y-4 w-full p-3 py-12 ">
        <img
          src={assets.menu_icon}
          className="w-8 h-8 object-contain mb-12 cursor-pointer"
          alt=""
        />
        <div className="lg:p-2 sm:p-1 flex cursor-pointer items-center rounded-3xl bg-[#e6ebf1] justify-between">
          <img
            src={assets.plus_icon}
            className="w-8 h-8 object-contain"
            alt=""
          />
          <span>New Chat</span>
        </div>
        <div className="pt-4">
          <p>Recent</p>
        </div>
      </div>
      <div className="w-full hidden lg:block pb-6">
        <div className="flex p-2 items-center ">
          <img
            className="w-8 h-6 object-contain mx-4"
            src={assets.question_icon}
          />
          <span>Help</span>
        </div>
        <div className="flex p-2 items-center ">
          <img
            className="w-8 h-6 object-contain mx-4"
            src={assets.history_icon}
          />
          <span>Activity</span>
        </div>
        <div className="flex p-2 items-center ">
          <img
            className="w-8 h-6 object-contain mx-4"
            src={assets.setting_icon}
          />
          <span>Setting</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
