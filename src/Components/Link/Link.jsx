import PropTypes from "prop-types";

const Link = ({route}) => {

    const{path, name} = route
    return (
        <div className="mr-10">
             <a className="hover:bg-purple-900 px-2 rounded-lg" href={path}>{name}</a>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;