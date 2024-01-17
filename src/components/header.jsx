'use client'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
      <div className={styles.heroContainer}>
        <Carousel className={styles.heroFrame}>
          {/* 1 */}
            <div className={styles.slide}>
                <div className={styles.leftColumn}>
                  <h1 className={styles.heroTitle}>Lesson and insights <br /> <span className={styles.eightYears}>from 8 years</span></h1>
                  <p className={styles.heroText}>Where to grow your business as a photographer: site or social media?</p>
                  <button className={styles.heroButton}><span className={styles.heroButtonLabel}>Register</span></button>
                </div>
                <div className={styles.rightColumn}>
                    <Image src="/images/header/man-it.png" alt="Hero Image" width={500} height={300} />
                </div>
            </div>
            {/* 2 */}
            <div className={styles.slide}>
                <div className={styles.leftColumn}>
                  <h1 className={styles.heroTitle}>Lesson and insights <br /> <span className={styles.eightYears}>from 8 years</span></h1>
                  <p className={styles.heroText}>Where to grow your business as a photographer: site or social media?</p>
                  <button className={styles.heroButton}><span className={styles.heroButtonLabel}>Register</span></button>
                </div>
                <div className={styles.rightColumn}>
                    <Image src="/images/header/man-it.png" alt="Hero Image" width={500} height={300} />
                </div>
            </div>
            {/* 3 */}
            <div className={styles.slide}>
                <div className={styles.leftColumn}>
                  <h1 className={styles.heroTitle}>Lesson and insights <br /> <span className={styles.eightYears}>from 8 years</span></h1>
                  <p className={styles.heroText}>Where to grow your business as a photographer: site or social media?</p>
                  <button className={styles.heroButton}><span className={styles.heroButtonLabel}>Register</span></button>
                </div>
                <div className={styles.rightColumn}>
                    <Image src="/images/header/man-it.png" alt="Hero Image" width={500} height={300} />
                </div>
            </div>
        </Carousel>
      </div>
    );
}

export default Header;