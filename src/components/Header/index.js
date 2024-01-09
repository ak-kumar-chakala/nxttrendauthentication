import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      className="logo-image"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
    />
    <div className="btn-container">
      <p className="home">Home</p>
      <p className="products">Products</p>
      <p className="cart">Cart</p>
      <button className="button1" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
