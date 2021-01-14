import React from 'react';

class Footer extends React.Component {
    render () {
    return (
        <div>
            <footer className="page-footer font-small white">
                <div className="footer-global">
                    <div> <p> Alpha Project was developed with 🤍 by Alicia </p> </div>
                    <div>
                        <div className="col-md-12">
                            <div className="icons-social-media flex-center">
                            <a className="icon">
                                <i className="fab social-media-i fa-facebook-f fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="icon">
                                <i className="fab social-media-i fa-linkedin-in fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="icon">
                                <i className="fab social-media-i fa-instagram fa-lg white-text mr-4"> </i>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center">© 2020 Copyright  </div>
                </div>
            </footer>
        </div>
    )
}
}
export default Footer;