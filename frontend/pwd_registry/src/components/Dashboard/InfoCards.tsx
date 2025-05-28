const InfoCards = () => {
  const data = [
    { title: "Total PWD", value: 4300, icon: "♿", bg: "bg-blue-100" },
    { title: "Total Barangay", value: 23, icon: "🏘️", bg: "bg-green-100" },
    { title: "Expired PWD ID", value: 1, icon: "📅", bg: "bg-red-100" },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {data.map((card) => (
        <div
          key={card.title}
          className={`card ${card.bg} shadow-md border border-gray-200 min-h-[12rem]`}
        >
          <div className="card-body px-6 py-6">
            <div className="flex items-center justify-between w-full gap-4 pt-7">
              {/* Icon on the left */}
              <div className="text-6xl sm:text-7xl">{card.icon}</div>

              {/* Text on the right */}
              <div className="text-right flex-1">
                <div className="text-lg font-medium text-gray-600">
                  {card.title}
                </div>
                <div className="text-5xl font-bold text-gray-800">
                  {card.value}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
