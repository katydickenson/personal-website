import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './education.module.css';

const EducationDetails = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Education Details</title>
        <meta name="description" content="Education Details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className={styles.backButton} onClick={() => router.push('/')}>
        &larr; Back
      </button>
      <main>
        <h1 className={styles.title}>Education</h1>
        
        <div className={styles.flexContainer}>
          <section className={`${styles.section} ${styles.areasOfStudySection}`}>
            <h2 className={styles.sectionTitle}>Areas of Study</h2>
            <div className={styles.sectionContent}>
              <p>Major: Bachelor of Science in Computer Science <span className={styles.gpa}>Major GPA: 4.0</span></p>
              <p>Minor: Law, Science and Technology <span className={styles.gpa}>Minor GPA: 4.0</span></p>
              <p>Certificate: Entrepreneurship <span className={styles.gpa}>Certificate GPA: 4.0</span></p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.graduationSection}`}>
            <h2 className={styles.sectionTitle}>Graduation</h2>
            <div className={styles.sectionContent}>
              <p>Graduation Date: May 2025</p>
              <p>Graduation Status: Highest Honors</p>
            </div>
          </section>
        </div>

        <div className={styles.flexContainer}>
          <section className={`${styles.section} ${styles.awardsSection}`}>
            <h2 className={styles.sectionTitle}>Awards</h2>
            <ul className={styles.sectionContent}>
              <li>
                Dean's List Scholar
                <span className={styles.date}>2020</span>
                <span className={styles.date}>2021</span>
                <span className={styles.date}>2022</span>
                <span className={styles.date}>2023</span>
                <span className={styles.date}>2024</span>
                <p className={styles.awardDescription}>Recognized for outstanding academic performance each semester.</p>
              </li>
              <li>
                Zell Miller Scholarship Recipient
                <span className={styles.date}>2020</span>
                <span className={styles.date}>2021</span>
                <span className={styles.date}>2022</span>
                <span className={styles.date}>2023</span>
                <span className={styles.date}>2024</span>
                <p className={styles.awardDescription}>Merit based scholarship fully covering 127 credit hours of tuition.</p>
              </li>
              <li>
                Organization of the Year Award
                <span className={styles.date}>Spring 2024</span>
                <p className={styles.awardDescription}>Received on behalf of the Student Alumni Association due to work as President.
                Led the club to win award for first time in school history.</p>
              </li>
            </ul>
          </section>

          <section className={`${styles.section} ${styles.classesSection}`}>
            <h2 className={styles.sectionTitle}>Classes of Interest</h2>
            <ul className={styles.sectionContent}>
              <li>Computer Law <span className={styles.date}>Fall 2023</span></li>
              <li>Junior Design – Mobile Application for Brain Trauma Assessment <span className={styles.date}>2022</span>
                <span className={styles.date}>2023</span></li>
              <li>Data Input and Manipulation <span className={styles.date}>Summer 2022</span></li>
              <li>Discrete Math for Coding Information Systems <span className={styles.date}>Spring 2022</span></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EducationDetails;