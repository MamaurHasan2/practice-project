import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

const Feature = ({ fetur }) => {
  return (
    <div>
      <span className="flex p-2">
        <TiTick className="mr-2 bg-purple-600 rounded-3xl text-white" />
        {fetur}
      </span>
    </div>
  );
};
Feature.propTypes = {
  fetur: PropTypes.object.isRequired,
};

export default Feature;
