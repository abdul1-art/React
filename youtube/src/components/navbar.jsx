import hamburger from "../assets/hamburger.png";
import Youtube from "../assets/Youtube-Logo.png";
import search from "../assets/search.png";
import create from "../assets/create.png";
import apps from "../assets/apps.png";
import profile from "../assets/profile-pic.png";
import mic from "../assets/mic.png";
import notification from "../assets/notifications.png";
const Navbar = () => {
  return (
    <>
      <nav className="bg-[#212121] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={hamburger} alt="Hamburger" />
          <img src={Youtube} alt="YouTube Logo" />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#121212] text-white border border-[#303030] rounded-l-full py-2 px-4 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#121212] cursor-pointer hover:bg-[#3c3c3c] transition duration-300 ease-in-out"
          />
          <button className="bg-[#303030] text-white py-2 px-4 rounded-r-full cursor-pointer hover:bg-[#3c3c3c] transition duration-300 ease-in-out ">
            <img src={search} alt="Search" />
          </button>
          <button className="bg-[#303030] ml-3 text-white py-2 px-2 rounded-[100px] cursor-pointer hover:bg-[#3c3c3c] transition duration-300 ease-in-out">
            <img src={mic} alt="Microphone" />
          </button>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={create}
            alt="Create"
            className="cursor-pointer hover:color-[#3c3c3c] transition duration-300 ease-in-out"
          />
          <img src={apps} alt="Apps" />
          <img src={notification} alt="Notification" />
          <img src={profile} alt="Profile" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
