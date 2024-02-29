import { useState } from 'react';
import P2PAlertsIcon from './P2PAlertsIcon';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`${styles.navbar} ${styles.sticky}`}>
      <div className={`${styles.leftItems} ${styles.flexItems}`}>
        {/* Make "P2P Alerts" clickable to navigate to home */}
        <Link href="/">
          <span className={`${styles.brand} ${styles.clickable}`}>
            <P2PAlertsIcon />
          </span>
        </Link>
      </div>
      <div className={`${styles.rightItems} ${styles.flexItems}`}>
        <ul className={`${styles.navItems} ${showMenu ? styles.showMenu : ''}`}>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
        {/* Add additional elements on the right side */}
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.menuIconLine}></div>
        <div className={styles.menuIconLine}></div>
        <div className={styles.menuIconLine}></div>
      </div>
    </nav>
  );
};

export default Navbar;