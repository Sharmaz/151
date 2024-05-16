import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="bg-slate-200">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
