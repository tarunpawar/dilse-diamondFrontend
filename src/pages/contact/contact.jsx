export default function Contact() {
    return (
      <>
        <section className="customize-engagement-ring hero_section_wrapper">
      <div className="container position-relative">
        <div className="wrapper text-center w-100 mb-3 ps-5">
          <div className="content-inner medium-up--one-half">
            <div className="section-heading">
              <h3 className="mb-2 mt-4 display-4">
                Our expert gemologists can guide you on diamonds, gemstones and jewelry.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero_section_wrapper w-75 m-auto">
      <div className="container-fluid p-0 position-relative">
        <img
          src="images/contact_banner-desk.jpg"
          alt="Contact Banner"
          className="img-fluid"
        />
      </div>
    </section>

    <section className="py-5 pb-5 contact-form-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-wrapper">
              <div className="text-center">
                <h2 className="section-header">Send us a message</h2>
                <p>
                  Contact one of our expert gemologists and we’ll get back to
                  you as soon as possible. You’ll be amazed at how helpful we
                  can be.
                </p>
              </div>
              <div className="form-wrapper form-vertical">
                <form
                  method="post"
                  action="/contact#ContactForm"
                  id="ContactForm"
                  acceptCharset="UTF-8"
                  className="contact-form"
                >
                  <input type="hidden" name="form_type" value="contact" />
                  <input type="hidden" name="utf8" value="✓" />

                  <div className="form-field">
                    <label htmlFor="ContactForm-name">Name</label>
                    <input
                      type="text"
                      id="ContactForm-name"
                      className="form-control"
                      name="contact[Name]"
                      data-uw-rm-form="nfx"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="ContactForm-email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="ContactForm-email"
                      className="form-control"
                      name="contact[email]"
                      autoCorrect="off"
                      autoCapitalize="off"
                      aria-required="true"
                      data-uw-rm-form="nfx"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="ContactForm-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="ContactForm-phone"
                      className="form-control"
                      name="contact[Phone Number]"
                      pattern="[0-9\-]*"
                      data-uw-rm-form="nfx"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="ContactForm-topic">
                      Topic <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="ContactForm-topic"
                      className="form-select"
                      name="topic"
                      aria-required="true"
                      data-uw-rm-form="nfx"
                    >
                      <option value="">Select</option>
                      <option value="Diamonds">Diamonds</option>
                      <option value="Engagement Rings">
                        Engagement Rings
                      </option>
                      <option value="Jewelry">Jewelry</option>
                      <option value="Home Preview">Home Preview</option>
                      <option value="Policies">Policies</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="ContactForm-message">Ask a Question</label>
                    <textarea
                      rows="5"
                      id="ContactForm-message"
                      className="form-control"
                      name="contact[Ask a Question]"
                      data-uw-rm-form="nfx"
                    ></textarea>
                  </div>

                  <div className="form-field text-center">
                    <input
                      type="submit"
                      className="btn border-button"
                      value="Submit"
                      data-uw-rm-form="fx"
                      aria-label="Submit button"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="customize-engagement-ring hero_section_wrapper">
      <div className="container position-relative">
        <div className="wrapper text-center w-100 mb-3 ps-5">
          <div className="content-inner medium-up--one-half">
            <div className="section-heading">
              <h3 className="mb-2 mt-4 display-4">We're always here to help.</h3>
              <p>
                A commitment to sustainability, transparency and jewelry made to
                fit beautifully into your big moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-help-section mb-5">
      <div className="container position-relative">
        <div className="page-width-sm p-5">
          <div className="help-content">
            <h2 className="section-header">We're here to help.</h2>
            <p className="section-description">
              Our expert gemologists are here to help. <br />
              We’re available seven days a week to guide you on
              <br /> diamonds, gemstones, and jewelry.
            </p>
          </div>
          <div className="help-grids">
            <div className="help-grid absolute-link-wrapper">
              <a href="#" className="button-chat fa-regular fa-comment"></a>
              <p className="help-title">Chat</p>
            </div>
            <div className="help-grid absolute-link-wrapper">
              <a
                href="mailto:"
                className="button-email fa-regular fa-envelope"
                aria-describedby="a11y-external-message"
                aria-label="send an email to service"
              ></a>
              <p className="help-title">Email</p>
            </div>
            <div className="help-grid absolute-link-wrapper">
              <a
                href="tel:"
                className="button-call US-contact fa-regular fa-phone"
              ></a>
              <p className="help-title">Call</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="accordian_class">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-header-sm section-header-reverse section-header-sb mb-5">
            FAQ&apos;s
          </h2>
        </div>
        <div className="accordion mx-5 pb-5 px-5" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Can I place an order on the phone?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  We would love to hear from you. To place an order on the phone,
                  simply call us at +91 8511544005 during our business hours. It may
                  be helpful to call in for custom orders, split payments, or if
                  you have a shipping deadline in mind. We’re always available to
                  help with questions and special requests.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What’s the best way to get the status of my order?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  As all our jewelry is made to order, the best way to get all
                  the details on your order is emailing us at
                  digitalmarketing.dilsejewels@gmail.com. We can also assist you via live chat or
                  phone to get you information right away about your ring or
                  jewelry order.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How do I order custom jewelry or a custom ring?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  We specialize in custom jewelry and rings. Simply call us or
                  email us with the specifications of what you have in mind. We
                  will get back to you within a day with a pricing quote and a way
                  to make your custom jewelry vision come to life. Our team of
                  gemologists and design consultants works in-house here in NYC to
                  make all designs.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Where can I learn more about The Carat Casa policies?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  For all general questions, you can see our policies about
                  warranties, insurance, returns and more. For anything specific,
                  please feel free to email, live chat or call us at +91 8511544005
                  and we can provide you with quick answers to your questions.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Do you have gemologists on your team?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  Our customer care team is composed of gemologists with decades
                  of experience and design consultants that have an eye for
                  recommending the perfect diamond jewelry. We’re able to offer
                  helpful guidance on both lab grown and natural diamonds and also
                  help you find the right jewelry. Because of our design expertise,
                  we can also craft custom jewelry to suit your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Why should I choose Dilse Jewels?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  Founded with a commitment to sustainability, transparent shopping
                  and convenience, we have thousands of happy customers and 5 star
                  reviews. We’re rated A+ with the BBB, and have been featured as
                  one of the fastest growing diamond jewelry companies. Talk to us,
                  we’d be happy to tell you more. Our commitment to crafting
                  jewelry that celebrates your moments is paramount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </> 
    );
  }