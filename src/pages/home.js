import React from 'react'
import farm from '../farm.jpg'
import bananas from '../bananas.jpg'
import fruit from '../fruit-sm.jpeg'
import meat from '../meat-sm.jpeg'
import veggie from '../veggie-sm.jpeg'
import freshlocal from '../fresh-local.jpg'

export default () => {
  return (
    <div>

      <main role="main">
  
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <img className="first-slide" src={farm} alt="Always fresh. Always local." />
              <div className="container">
                <div className="carousel-caption">
                  <h1>MT Grociers</h1>
                  <p>Your local provider for responsibly sourced produce, meat, and seafood.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="first-slide" src={freshlocal} alt="Always fresh. Always local." />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Always fresh. Always local. Always MT.</h1>
                  <p>We only carry the freshest fruits, vegetables, and meats from local growers and farmers.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="second-slide" src={bananas} alt=""/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Quality is in our DNA.</h1>
                  <p>The MT Grociers family is committed to bringing you the best farm-to-table experience. Feel good about what you eat.</p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
  
  
  
        <div className="container marketing">
  
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src={fruit} alt="Juicy Fruits" width="140" height="140"/>
              <h2>Juicy Fruits</h2>
              <p>Come try our local raspberries, strawberries, and all of your other favorites along with our large selection of exotic fruits. Ever try a durian?</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={meat} alt="Prime-Choice Meats" width="140" height="140"/>
              <h2>Prime-Choice Meats</h2>
              <p>Our in-house butchers </p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={veggie} alt="Crisp Vegetables" width="140" height="140"/>
              <h2>Crisp Vegetables</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
          </div>
    
        </div>
  
      </main>
      </div>
  ) 
}