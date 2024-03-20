import PropTypes from "prop-types";

const Link = ({ route }) => {
  const { path, name } = route;
  return (
    <div>
      <li className="ml-10 hover:bg-slate-500 rounded-lg p-2">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};
Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;
