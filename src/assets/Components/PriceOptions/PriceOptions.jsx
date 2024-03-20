import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const membership = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Group fitness classes available",
        "Locker room access",
        "24/7 gym access",
      ],
      price: "$300/month",
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Access to swimming pool",
        "Group fitness classes available",
        "Personal training sessions available (additional cost)",
        "Sauna access",
        "Locker room access",
        "24/7 gym access",
      ],
      price: "$500/month",
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Access to swimming pool",
        "Access to sauna and steam room",
        "Group fitness classes available",
        "Personal training sessions included",
        "Nutritional counseling included",
        "Towel service",
        "Locker room access",
        "24/7 gym access",
        "Priority booking for classes and facilities",
      ],
      price: "$800/month",
    },
  ];

  return (
    <div>
      <h1 className="text-7xl text-purple-600 font-bold">
        {" "}
        Best Gym Price In the Town
      </h1>
      <div className="grid md:grid-cols-3 p-4 mt-4">
        {membership.map((priceOption) => (
          <PriceOption
            key={membership.id}
            priceOption={priceOption}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
