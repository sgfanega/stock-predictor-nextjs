function Footer(props) {
  return (
    <footer className="container-fluid px-0">
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5">
          <span>Get Connected With Me:</span>
        </div>
        <div>
          <a href={"mailto: " + props.footerProps.email} className="me-4 text-reset">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href={props.footerProps.website} className="me-4 text-reset">
            <i className="bi bi-globe"></i>
          </a>
          <a href={props.footerProps.github} className="me-4 text-reset">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>
      <div className="text-center my-4 px-0">
        <p className="fs-6 mb-0">© 2022 Copyright: <span><a href="https://fanegawebsites.com" 
          className="text-decoration-none text-reset fw-bold">FWD</a></span></p>
      </div>
    </footer>
  )
}

export default Footer;