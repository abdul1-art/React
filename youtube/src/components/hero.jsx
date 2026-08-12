import profile from "../assets/profile-pic.png";
import thumbnail from "../assets/thumbnail-images.png";

const Hero = () => {
  return (
    // grid box youtube
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="flex-col m-6  gap-2 hover:bg-[#181818] rounded-b-sm items-center">
        <img src={thumbnail} alt="Thumbnail" className="w-full" />

        <div className="flex gap-2 m-3">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </h1>
            <div className="text-sm text-gray-400">
              <p>James Gouse</p>
              <p>15K Views .1 week ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex-col m-6  gap-2 hover:bg-[#181818] rounded-b-sm items-center">
        <img src={thumbnail} alt="Thumbnail" className="w-full" />

        <div className="flex gap-2 m-3">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </h1>
            <div className="text-sm text-gray-400">
              <p>James Gouse</p>
              <p>15K Views .1 week ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex-col m-6  gap-2 hover:bg-[#181818] rounded-b-sm items-center">
        <img src={thumbnail} alt="Thumbnail" className="w-full" />

        <div className="flex gap-2 m-3">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </h1>
            <div className="text-sm text-gray-400">
              <p>James Gouse</p>
              <p>15K Views .1 week ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="flex-col m-6  gap-2 hover:bg-[#181818] rounded-b-sm items-center">
        <img src={thumbnail} alt="Thumbnail" className="w-full" />

        <div className="flex gap-2 m-3">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </h1>
            <div className="text-sm text-gray-400">
              <p>James Gouse</p>
              <p>15K Views .1 week ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="flex-col m-6  gap-2 hover:bg-[#181818] rounded-b-sm items-center">
        <img src={thumbnail} alt="Thumbnail" className="w-full" />

        <div className="flex gap-2 m-3">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </h1>
            <div className="text-sm text-gray-400">
              <p>James Gouse</p>
              <p>15K Views .1 week ago</p>
            </div>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className="flex-col m-6  gap-2 hover:bg-[#181818] rounded-b-sm items-center">
        <img src={thumbnail} alt="Thumbnail" className="w-full" />

        <div className="flex gap-2 m-3">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </h1>
            <div className="text-sm text-gray-400">
              <p>James Gouse</p>
              <p>15K Views .1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
