import Feature from "../Feature/Feature";
import PropTypes from "prop-types";

const PriceOption = ({ priceOption }) => {
  console.log(priceOption);
  const { name, price, features } = priceOption;

  return (
    <>
      <div className="bg-blue-500 ml-3 p-3 rounded-lg flex flex-col mb-4">
        <h2 className="font-bold text-3xl text-white text-center mt-4">
          {price}
        </h2>
        <h2 className="text-4xl text-white text-center mt-4">{name}</h2>

        <div className="flex-grow mt-5 p-3">
          {features.map((fetur, idx) => (
            <Feature key={idx} fetur={fetur}></Feature>
          ))}
        </div>
        <button className="text-white text-2xl font-bold bg-purple-600 w-full hover:bg-red-800 p-2 rounded-lg">
          Bye Now
        </button>
      </div>
    </>
  );
};
PriceOption.propTypes = {
  priceOption: PropTypes.object.isRequired,
};

export default PriceOption;
