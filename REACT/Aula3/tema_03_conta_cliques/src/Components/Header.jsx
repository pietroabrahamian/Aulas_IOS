import PropTypes from 'prop-types';
const Header = (props) => {
    return (
        <div>
            <h1 style={{ color: 'red' }}>  Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

Header.defaultProps = {
    nome: PropTypes.string,
};

export default Header;