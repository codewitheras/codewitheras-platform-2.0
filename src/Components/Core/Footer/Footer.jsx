import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__logo_container}>
        <Link to='/' className={styles.footer__logo}>
          <h3>Codewitheras</h3>
        </Link>
      </div>
      <div className={styles.footer__links_container}>
        <div className={styles.footer__community_links}>
          <h4>Community</h4>
          <div className={styles.footer__links}>
            <a
              href='http://youtube.com/codewitheras'
              target='_blank'
              rel='noopener noreferrer'>
              Youtube
            </a>
            <a
              href='http://github.com/codewitheras'
              target='_blank'
              rel='noopener noreferrer'>
              Github
            </a>
            <a
              href='http://discord.com/gg.hT45'
              target='_blank'
              rel='noopener noreferrer'>
              Discord
            </a>
            <a
              href='https://t.me/+DQKeiKbhUEdhMWM8'
              target='_blank'
              rel='noopener noreferrer'>
              Telegram
            </a>
            <a
              href='http://chat.whatsapp.com/D7S35Fod0DUJWHZhEFs3M9'
              target='_blank'
              rel='noopener noreferrer'>
              WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.footer__socials_links}>
          <h4>Social Media</h4>
          <div className={styles.footer__links}>
            <a
              href='https://Linkedin.com'
              target='_blank'
              rel='noopener noreferrer'>
              LinkedIn
            </a>
            <a
              href='https://Facebook.com'
              target='_blank'
              rel='noopener noreferrer'>
              Facebook
            </a>
            <a
              href='https://Instagram.com'
              target='_blank'
              rel='noopener noreferrer'>
              Instagram
            </a>
            <a
              href='https://Twitter.com'
              target='_blank'
              rel='noopener noreferrer'>
              Twitter
            </a>
          </div>
        </div>
        <div className={styles.footer__about_links}>
          <h4>Contribute</h4>
          <div className={styles.footer__links}>
            <a
              href='https://github.com/codewitheras/codewitheras-platform-2.0/issues'
              target='_blank'
              rel='noopener noreferrer'>
              Report an issue
            </a>
            <Link to='/donation'>Donate</Link>
            <Link to='/contribute'>Contribute</Link>
          </div>
        </div>
        <div className={styles.footer__about_links}>
          <h4>About Us</h4>
          <div className={styles.footer__links}>
            {/* <Link to='/about'>About Us</Link> */}
            <Link to='/privacy'>Terms and Conditions</Link>
            <Link to='/privacy'>Privacy Policies</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/join-community'>Join our community</Link>
          </div>
        </div>
      </div>
      <div className={styles.sub__footer}>
        <p>Copyright @ 2022 Codewitheras Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer