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
          className={`card ${card.bg} shadow-md border border-gray-200`}
        >
          <div className="card-body px-6 py-4">
            <div className="flex items-center gap-4">
              {/* Icon Section */}
              <div className="text-4xl">{card.icon}</div>

              {/* Text Section */}
              <div className="text-right flex-1">
                <div className="text-sm font-medium text-gray-600">
                  {card.title}
                </div>
                <div className="text-3xl font-bold text-gray-800">
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
