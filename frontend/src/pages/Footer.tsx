import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
              <div className="container">
                  <div className="row">
                      <div className="col-5" id="colonne1">
                          <h1 className='text-center'>Fait par Johan | Copyright ClinicManage. 2023</h1>
                          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                      </div>

                  </div>
              </div>
            
        </div>
    );
};

export default Footer;