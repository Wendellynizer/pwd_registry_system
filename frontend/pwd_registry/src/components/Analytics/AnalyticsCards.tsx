const AnalyticsCards = () => {
  const data = [
    { title: "Total Registered PWDs", value: 4300 },
    { title: "Active", value: 4299 },
    { title: "Inactive", value: 1 },
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4 mb-6">
      {data.map((card) => (
        <div className="card bg-white shadow-md" key={card.title}>
          <div className="card-body">
            <h2 className="card-title">{card.title}</h2>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
