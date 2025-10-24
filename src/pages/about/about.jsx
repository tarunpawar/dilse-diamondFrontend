import React from "react";

export default function About() {
  return (
    <>
     <style>{`
        .section-header {
          font-size: 2rem;
          color: #222;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .section-header {
            font-size: 1.5rem;
            text-align: center;
          }
          p {
            text-align: center;
          }
          img.img-fluid {
            margin-bottom: 1rem;
          }
        }
      `}</style>
      
      {/* HERO SECTION */}
      <section className="hero_section_wrapper">
        <div className="container-fluid p-0 position-relative">
          <img
            src="images/Header_Banner.png"
            alt="Engagement Rings Banner"
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* DESIGNED BY DREAMERS */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 col-md-12">
              <img
                src="images/Ring_Sketch_Pic.png"
                alt="Ring Sketch"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <h2 className="section-header mb-3 fw-bold text-uppercase">
                Designed by Dreamers
              </h2>
              <p className="text-muted">
                Our passionate designers bring your dream to life. Inspired by
                the constantly evolving trends and innovation of Surat City, each
                creation is driven by the aspirational and infectious energy of
                the city we’re built in. With a personalized experience in
                designing your jewelry, we aim to create a symbol that uniquely
                reflects your story.
              </p>
              <div className="mt-4">
                <img
                  src="images/Ring_inpection_pic.png"
                  alt="Ring Inspection"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISANAL EXCELLENCE */}
      <section className="py-5 position-relative bg-light">
        <div className="container text-center">
          <img
            src="images/Crafted_with_Excellence_Vid.png"
            alt="Crafted with Excellence"
            className="img-fluid w-100 rounded mb-4"
          />
          <div className="px-lg-5">
            <h3 className="fw-bold mb-3">Crafted with Artisanal Excellence</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Combining superior artisanship and carefully curated materials
              with advanced three-dimensional techniques, your jewelry is
              handcrafted from start to finish — completely through us.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE BUILT ON TRUST */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <h2 className="section-header mb-3 fw-bold text-uppercase">
                An Experience Built On Trust
              </h2>
              <p className="text-muted">
                Purchasing jewelry is more than a shopping experience — it’s a
                memorable journey. We thrive on helping our clients create
                pieces that mean the world to them, every step of the way. With
                full integrity in our offerings, nothing leaves our office
                without us being in love with it. We value our experience to be
                comfortable and reliable — always alongside as a trusted guide.
              </p>
              <div className="mt-4">
                <img
                  src="images/Engagement_Pic.png"
                  alt="Engagement"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <img
                src="images/Wedding_Pic.png"
                alt="Wedding"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROOTED IN SUSTAINABILITY */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <img
            src="images/Ring_Pic.png"
            alt="Ring"
            className="img-fluid w-100 rounded mb-4"
          />
          <div className="px-lg-5">
            <h3 className="fw-bold mb-3">Rooted in Sustainability</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Committed to eco-friendly practices, sustainability lies at our
              core. Our mark in the jewelry industry is invaluable to us, and to
              uphold this commitment we are proud members of the Global Diamond
              Trade Organization (GDTO). The Carat Casa manufacturing process
              received a green rating, reflecting our standard.
            </p>
            <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
              To further our impact in the community, we have minimized our
              environmental footprint by planting over 52,000 trees worldwide,
              saving 1,155,000 kg of carbon emissions. Wear your jewelry with
              unwavering confidence, understanding exactly how it was crafted.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

