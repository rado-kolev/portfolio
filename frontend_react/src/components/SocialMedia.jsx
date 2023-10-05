import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/rado-kolev" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/radostin-rado-kolev/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;