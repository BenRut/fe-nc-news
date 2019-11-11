import React, { Component } from 'react';
import '../css/Footer.css';
import classnames from 'classnames';

class Footer extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    visible: true
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <footer
        className={classnames({
          'navbar--hidden': !this.state.visible
        })}
      >
        <div id="footer-header">
          <h4>Contact</h4>
          <i class="fa fa-comment"></i>
        </div>

        <div>
          <ul>
            <li>
              <a href="tel:+44 7933 256338">
                <i className=" accent-color fa fa-phone"></i>
              </a>
              &nbsp;
              <a href="tel:+44 7933 256338">(+44) 07933 256338</a>
            </li>
            <li>
              <a href="mailto:info@benjaminrutledge.me">
                <i className="accent-color fa fa-envelope"></i>
              </a>
              &nbsp;
              <a href="mailto:info@benjaminrutledge.me">
                info@benjaminrutledge.me
              </a>
            </li>

            <li>
              <a href="https://github.com/BenjaminRutledge">
                <i className="accent-color icon-large fa fa-github"></i>
              </a>
              &nbsp; Visit my&nbsp;
              <a className="accent-color" href="https://github.com/BenRut">
                GitHub profile
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/benjamin-rutledge-03a331174/">
                <i className=" accent-color fa fa-linkedin"></i>
              </a>
              &nbsp; Visit my&nbsp;
              <a
                className="accent-color"
                href="https://www.linkedin.com/in/benjamin-rutledge-03a331174/"
              >
                LinkedIn profile
              </a>
            </li>
          </ul>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} Benjamin Rutledge
        </span>
      </footer>
    );
  }
}

export default Footer;
