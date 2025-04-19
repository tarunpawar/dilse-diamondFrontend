import React from 'react'

export default function Diamond() {
  return (
    <>
    <section className="hero_section_wrapper">
    <div className="container-fluid p-0 position-relative">
      <img src="images/Header_Banner.jpg" alt="" className="img-fluid w-100" />
    </div>
  </section>

  {/* <section className="diamond-section py-5 pb-5">
  <div className="diamond-container">
    <div className="process-steps page-width">
      <div className="process-steps-wrapper">
        <p className="process-steps-heading">Create Your Diamond Ring</p>
        <div className="process-steps-container">
          <div className="start-over-button">
            <p id="start-over" className="text-uppercase">Start Over</p>
          </div>
          <div className="steps-wrapper">
            <div className="step step-1" data-step="ring-setting">
              <div className="step-container">
                <div className="step-count">
                  <div className="count">2</div>
                  <div className="title-wrapper">
                    <p className="title">Choose a setting</p>
                  </div>
                </div>
                <div className="product-selection">
                  <div className="current-ring-setting" style={{ display: 'none' }}>
                    <div className="product-img">
                      <img
                        src="//cdn.shopify.com/s/files/1/0718/9833/3499/products/enrrb1501246-round-white-frontview_60x.jpg?v=1675848070"
                        alt="Ring Setting"
                      />
                    </div>
                    <div className="product-link">
                      <a href="/collections/engagement-rings" className="change">Change</a>
                      <span>|</span>
                      <a href="#" className="remove">Remove</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step step-2 active first-step" data-step="diamonds">
              <div className="step-container">
                <div className="step-count">
                  <div className="count">1</div>
                  <div className="title-wrapper">
                    <p className="title">Choose a diamond</p>
                  </div>
                </div>
                <div className="product-selection">
                  <div className="current-diamond-option">
                    <div className="product-img">
                      <img
                        src="//cdn.shopify.com/s/files/1/0718/9833/3499/products/enrrb1501246-round-white-frontview_60x.jpg?v=1675848070"
                        alt="Current Diamond"
                      />
                    </div>
                    <div className="product-link">
                      <a href="/collections/engagement-rings" className="change">Change</a>
                      <span>|</span>
                      <a href="#" className="remove">Remove</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step step-3" data-step="final-ring">
              <div className="step-container">
                <div className="step-count">
                  <div className="count">3</div>
                  <div className="title-wrapper">
                    <p className="title">Complete Your Ring</p>
                  </div>
                </div>
                <div className="product-selection">
                  <div className="current-ring-setting">
                    <div className="product-img">
                      <img
                        src="//cdn.shopify.com/s/files/1/0718/9833/3499/products/enrrb1501246-round-white-frontview_60x.jpg?v=1675848070"
                        alt="Complete Ring"
                      />
                    </div>
                    <div className="product-link">
                      <a href="/collections/engagement-rings">Complete Purchase</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="diamond-tab-container page-width">
      <div className="tab-wrapper">
        <p className="diamond-tab" data-diamond="lab-diamonds">Lab Diamonds</p>
        <p className="diamond-tab active" data-diamond="natural-diamonds">Natural diamonds</p>
        <p className="diamond-tab" data-diamond="color-diamonds">Color diamonds</p>
      </div>
    </div>

    <div className="diamond-filter__wrapper page-width natural-diamonds">
      <div className="diamond-filter__container">
        <div className="filter__grid-1fr-2fr-wrapper">
          <div className="row p-remove">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
              <div className="filter-shapes">
                {["Round", "Princess", "Radiant", "Pear", "Cushion", "Asscher", "Emerald", "Marquise", "Oval", "Heart"].map(shape => (
                  <div className="shape filter__item" key={shape} data-value={shape} data-handle={shape.toLowerCase()} style={{ display: 'block' }}>
                    <div className="shape__icon"></div>
                    <p className="shape__title">{shape}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xs-12">
              <label htmlFor="range_50a">By Price</label>
              <input type="text" id="range_50a" name="range" />
              <div className="slider-value-wrapper">
                <input className="slider-start-value" type="text" data-value="100.00" data-min="100" />
                <span className="slider-to-text">to</span>
                <input className="slider-end-value" type="text" data-value="700000.00" data-max="700000" />
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xs-12">
              <label htmlFor="range_50">Carat</label>
              <input type="text" id="range_50" name="range" />
              <div className="slider-value-wrapper">
                <input className="slider-start-value" type="text" data-value="100.00" data-min="100" />
                <span className="slider-to-text">to</span>
                <input className="slider-end-value" type="text" data-value="700000.00" data-max="700000" />
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xs-12">
              <label htmlFor="range_51a">Cut</label>
              <input type="text" id="range_51a" name="range" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
              <label htmlFor="color-range">Color</label>
              <input type="text" id="color-range" name="range" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
              <label htmlFor="clarity-range">Clarity</label>
              <input type="text" id="clarity-range" name="range" />
            </div>
          </div>
        </div>

        <div className="button-wrapper mm-filter-footer">
          <button type="button" className="btn border-button show-hide-advance-filter small--hide">
            Show advanced
          </button>
          <button type="button" className="btn border-button reset-diamond-filter">
            Reset filters
          </button>
          <button type="button" className="btn apply-filter mm-close medium-up--hide">
            Apply filters
          </button>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section className="diamond-section pb-5">
      <div className="diamond-container">
         <div className="row">
            <div className="diamonds-list-container page-width">
            <div className="page-title">
  <h2>
    Showing Natural Diamonds <br />
    (
    <span id="diamond-count" style={{ display: 'inline' }}>44,777</span>
    <span className="loader-2" style={{ display: 'none' }}>
      <img
        src="https://cdn.shopify.com/s/files/1/0465/8787/1396/files/loading-gif.gif?v=1675764492"
        alt="Loading"
      />
    </span>
    <span id="diamond-total-count" style={{ display: 'inline' }}>
      &nbsp;of&nbsp;<span>56,166</span>
    </span>
    )
  </h2>
</div>
<div className="diamond-serach-wrapper">
  {/* <div className="diamond-sku-serach diamond-serach">
    <p className="serach-title">Search by SKU</p>
    <div className="serach-box">
      <input type="text" placeholder="#########" name="serach-sku" />
      <button className="btn" type="button">Search</button>
    </div>
  </div> */}
  <div className="diamond-certificate-serach diamond-serach">
    <p className="serach-title">Search by Certificate Number</p>
    <div className="serach-box">
      <input type="text" placeholder="#########" name="serach-certificate" />
      <button className="btn" type="button">Search</button>
    </div>
  </div>
</div>
<div className="diamond__tab-n-sort-container">
  <div className="diamond__tab-wrapper">

    <div className="diamond__featured-deal small--hide tab-box">
      <label className="checkbox"></label>
      Featured Deal Diamonds
    </div>

    <div className="diamond__compare-diamond-tab tab-box" data-tab-type="diamond-compare-body">
      <label className="checkbox"></label>
      Compare (<span>0</span>)
    </div>
  </div>

  <div className="diamond__sort-wrapper">

    <div className="diamond__report-list" id="diamond__report-list">
      <div className="select-dropdown">
        <p className="report-dropdown__button">
          <span className="sort_by_ttile">Filter by</span>
          <span className="sort__seperator">|</span>
          <span className="sort_by-title">Report</span>
        </p>
        <ul className="select-dropdown__list">
          <li data-value="IGI" className="select-dropdown__list-item">IGI</li>
          <li data-value="GIA" className="select-dropdown__list-item">GIA</li>
          <li data-value="GCAL" className="select-dropdown__list-item">GCAL</li>
        </ul>
      </div>
    </div>

    <div className="diamond__sort-list" id="diamond__sort-by">
      <div className="select-dropdown">
        <p className="select-dropdown__button">
          <span className="sort_by_ttile">Sort By</span>
          <span className="sort__seperator">|</span>
          <span className="sort_by-title">Price (Low to High)</span>
        </p>
        <ul className="select-dropdown__list">
          <li data-value="Price-ASC" className="select-dropdown__list-item active-dropdown">Price (Low to High)</li>
          <li data-value="Price-DESC" className="select-dropdown__list-item">Price (High to Low)</li>
          <li data-value="Carat-ASC" className="select-dropdown__list-item">Carat (Low to High)</li>
          <li data-value="Carat-DESC" className="select-dropdown__list-item">Carat (High to Low)</li>
          <li data-value="Color-ASC" className="select-dropdown__list-item">Color (Low to High)</li>
          <li data-value="Color-DESC" className="select-dropdown__list-item">Color (High to Low)</li>
          <li data-value="clarity_index-ASC" className="select-dropdown__list-item">Clarity (Low to High)</li>
          <li data-value="clarity_index-DESC" className="select-dropdown__list-item">Clarity (High to Low)</li>
          <li data-value="cut_index-ASC" className="select-dropdown__list-item">Cut (Low to High)</li>
          <li data-value="cut_index-DESC" className="select-dropdown__list-item">Cut (High to Low)</li>
        </ul>
      </div>
    </div>

  </div>
</div>
    


</div>
</div>
</div>
</section>
  </>
  )
}


