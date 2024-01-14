import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      className="logo-image"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
    />
    <div className="btn-container">
      <li className="home">Home</li>
      <li className="products">Products</li>
      <li className="cart">Cart</li>
      <button className="button1" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
