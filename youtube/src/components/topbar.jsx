const TopMenu = () => {
  const categories = [
    "All",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
  ];

  return (
    <div className="bg-[#121212] border-b border-[#303030] px-4 py-4">
      <div className="flex items-center justify-between gap-5 ">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-2xl border border-[#303030] px-4 py-2 text-sm text-white hover:bg-[#303030] transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
