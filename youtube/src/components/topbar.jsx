const TopMenu = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Sports",
    "Live",
    "Mixes",
    "Learning",
    "Fashion",
  ];

  return (
    <div className="bg-[#121212] border-b border-[#303030] px-4 py-4">
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((category) => (
          <button
            key={category}
            className="whitespace-nowrap rounded-full border border-[#303030] px-4 py-2 text-sm text-white hover:bg-[#303030] transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
