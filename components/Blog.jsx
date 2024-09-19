import React from "react";

const Blog = () => {
  return (
    <>
      {/* <!-- ====================================== Section Blogs ===================================== --> */}
      <section className="blog-section" id="blog">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Blogs.
          </h2>
          <div className="line"></div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section">
            <p className="blog-date">
              20<span>APR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">web development</h3>
            <h4 className="steps">
              Become a Frontend Developer in 5 Simple Steps
            </h4>
            <h5 className="est">
            JavaScript adds interactivity and dynamic behavior to web pages. It's a programming language that can be used to create things like form validations, sliders, and interactive maps. It can manipulate the DOM (Document Object Model) to change the content and structure of a web page in response to user actions.
           
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section blog-img-section2">
            <p className="blog-date">
              15<span>APR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">react developer</h3>
            <h4 className="steps">
              11 Best Logo Design
            </h4>
            <h5 className="est">
            Avoid copying other logos. Your design should be unique and set your brand apart from the competition.
            A well-balanced logo is aesthetically pleasing. Consider the placement of elements, symmetry, and spacing to create harmony in the design.
            Test your logo in various contexts, such as on websites, social media, 
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="blog-main mb-0 zoom_in">
          <div className="blog-img-section blog-img-section3">
            <p className="blog-date">
              10<span>APR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">React development</h3>
            <h4 className="steps">
              Rect devlopment
            </h4>
            <h5 className="est">
            React is a JavaScript library for building user interfaces using reusable components.
            Components can be functional or class-based, with functional being more common with hooks.
            JSX syntax is used to write HTML-like code within JavaScript.
            State and props are used to manage and pass data within components.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Blogs End ===================================== --> */}
    </>
  );
};
export default Blog;
