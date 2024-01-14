import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-div-2">
      <div className="description-container">
        <h1>Clothes That Get you Noticed</h1>
        <p>
          Fashion is part of the daily air and it doesn&apos;t quite help that
          it changes all the time.Clothes have always been a marker of the era
          and we are in a revolution .your fashion makes you been seen heard
          that way you are So,celebrate the seasons new and exciting fashion in
          your own way
        </p>
        <button className="shop-now-button" type="button">
          Shop Now
        </button>
      </div>
      <img
        className="img-2"
        alt="clothes that get you noticed"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </div>
)

export default Home
