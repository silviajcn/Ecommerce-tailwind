import PropTypes from 'prop-types';

export const Layout = ({children}) => {
    return (
        <div className='flex flex-col items-center mt-20 mb-40'>
            {children}
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
}