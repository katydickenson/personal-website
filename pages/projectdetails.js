import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './projectdetails.module.css'; // Import CSS module

export default function ProjectDetails() {
  const router = useRouter();
  const [flipped, setFlipped] = useState({ 
    spotify: false, 
    atlanta: false,
    cancellations: false,
    delay: false,
    gameboy: false,
    taxi: false,
    optimization: false,
    security: false,
    brain: false,
    hoppr: false
  });

  const toggleFlip = (card) => {
    setFlipped(prev => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Project Details</title>
        <meta name="description" content="Project Details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className={styles.backButton} onClick={() => router.push('/')}>
        &larr; Back
      </button>
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('spotify')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.spotify ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Fall 2024</h4>
                <h3 className={styles.company}>Spotify Wrapped</h3>
                <h4 className={styles.projectName}>Georgia Institute of Technology</h4>
                <p className={styles.summary}>
                  A web app for personalized music analytics using Spotify API.
                </p>
                <a
                  href="https://github.com/katydickenson/Spotify-Wrapped-CS2340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  A Django-based web application that interfaces with the Spotify Web API to create personalized music analytics. 
                  Users can generate custom "Wrapped" experiences by analyzing their listening patterns across different parameters and time periods, 
                  while also comparing music tastes with friends. The project utilizes Python, HTML/CSS, JavaScript, and 
                  the Spotify API to deliver an interactive platform for music discovery and social comparison.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('atlanta')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.atlanta ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Fall 2024</h4>
                <h3 className={styles.company}>Atlanta Food Finder</h3>
                <h4 className={styles.projectName}>Georgia Institute of Technology</h4>
                <p className={styles.summary}>
                  An interactive food discovery platform using Google Maps API.
                </p>
                <a
                  href="https://github.com/katydickenson/Atlanta-Food-Finder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  A Django-based web application that integrates with the Google Maps API to create an interactive food discovery platform for Atlanta. 
                  Users can explore restaurants on an interactive map, apply filters, and engage with a community-driven rating system. 
                  The application enables users to contribute reviews, view photos, and make informed dining decisions based on collective user feedback.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('cancellations')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.cancellations ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Summer 2024</h4>
                <h3 className={styles.company}>Cancellations Dashboard</h3>
                <h4 className={styles.projectName}>Delta Air Lines</h4>
                <p className={styles.summary}>
                  An interactive Power BI dashboard for analyzing airline performance metrics.
                </p>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Developed an interactive Power BI dashboard analyzing airline performance metrics across carriers. 
                  Features dynamic filtering for origin/destination airports, carrier codes, and time periods to identify operational challenges. 
                  Built using Power BI, DAX, and Python for data processing, enabling real-time performance tracking and delay pattern analysis.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('delay')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.delay ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Summer 2024</h4>
                <h3 className={styles.company}>Delay Assessment</h3>
                <h4 className={styles.projectName}>Delta Air Lines</h4>
                <p className={styles.summary}>
                  Analysis of network-wide flight delays to identify and resolve systematic issues.
                </p>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Analyzed a network-wide flight delay pattern affecting multiple routes, identifying two hub airports as the root cause. 
                  Investigation revealed systematic delays stemming from insufficient aircraft turnaround times in the schedule planning, 
                  creating a cascading effect across connected flights. Using SQL and Python data analysis, demonstrated how unrealistic 
                  gate-to-takeoff windows propagated delays throughout the daily schedule, impacting network reliability.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('gameboy')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.gameboy ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Spring 2024</h4>
                <h3 className={styles.company}>Mini Gameboy Game</h3>
                <h4 className={styles.projectName}>Georgia Institute of Technology</h4>
                <p className={styles.summary}>
                  A Game Boy emulator featuring a custom arcade-style game built in C.
                </p>
                <a
                  href="https://github.com/katydickenson/Mini-Gameboy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Developed a mini Game Boy emulator in C featuring a custom arcade-style game. 
                  Players control a bucket to catch falling pixels within a time limit. 
                  Project includes complete emulation infrastructure with custom graphics rendering, 
                  game logic, and scoring system. Built using GBA development tools with assembly 
                  integration for hardware-level control.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('taxi')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.taxi ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Fall 2023</h4>
                <h3 className={styles.company}>Taxi Time Predictor</h3>
                <h4 className={styles.projectName}>Delta Air Lines</h4>
                <p className={styles.summary}>
                  A predictive model for forecasting aircraft taxi times using SQL and Python.
                </p>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Developed a predictive model using SQL and Python to forecast aircraft taxi times 
                  based on historical flight data. Algorithm analyzes aircraft type, origin, and 
                  destination parameters to generate accurate taxi duration estimates. Automated 
                  data processing and prediction pipeline using Python, enabling real-time taxi 
                  time forecasting to improve operational planning.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('optimization')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.optimization ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Summer 2023</h4>
                <h3 className={styles.company}>Client Data Optimization</h3>
                <h4 className={styles.projectName}>Martenson, Hasbrouck and Simon</h4>
                <p className={styles.summary}>
                  Python script that reduced data processing time by 8000% through optimized matching algorithms.
                </p>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Engineered a Python script that processes and analyzes client data sets, implementing an optimized matching algorithm 
                  that reduced processing time by 8000%. Script enables custom queries and pattern identification while eliminating 
                  redundant iterations through the dataset. The enhanced efficiency transformed an hours-long process into minutes.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('security')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.security ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Spring 2023</h4>
                <h3 className={styles.company}>Security Risk Assessment</h3>
                <h4 className={styles.projectName}>NASA</h4>
                <p className={styles.summary}>
                  Comprehensive software security analysis system for tracking and verifying external downloads.
                </p>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Developed comprehensive software security analysis for NASA, evaluating unauthorized external downloads against 
                  approved software database. Created centralized tracking system and automated verification process. Implemented 
                  new download protocol and approval workflow to strengthen security compliance, moving from spreadsheet-based 
                  tracking to dedicated platform for improved monitoring and risk assessment.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('brain')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.brain ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Fall 2022</h4>
                <h3 className={styles.company}>Brain Trauma Assessment Protocols</h3>
                <h4 className={styles.projectName}>Georgia Institute of Technology</h4>
                <p className={styles.summary}>
                  iOS app for aphasia patient speech rehabilitation using Swift and SpriteKit.
                </p>
                <a
                  href="https://github.com/katydickenson/Discourse_NSC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Developed iOS application using Swift and SpriteKit to assist aphasia patients with speech rehabilitation. 
                  Created interactive exercises and patient progress dashboard with integrated backend. App features customized 
                  speech therapy protocols designed in collaboration with medical professionals at Georgia State University.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} flip-card`}
            onClick={() => toggleFlip('hoppr')}
          >
            <div className={styles.cardInner} style={{ transform: flipped.hoppr ? 'rotateY(180deg)' : 'rotateY(0)' }}>
              {/* Front of card */}
              <div className={styles.cardFront}>
                <h4 className={styles.date}>Summer 2022</h4>
                <h3 className={styles.company}>Hoppr</h3>
                <h4 className={styles.projectName}>Lockheed Martin</h4>
                <p className={styles.summary}>
                  Open-source containerization tool for cross-environment dependency management.
                </p>
                <a
                  href="https://hoppr.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
                <div className={styles.flipPrompt}>Click to see details ↻</div>
              </div>
              {/* Back of card */}
              <div className={styles.cardBack}>
                <p className={styles.projectInfo}>
                  Assisted in the development of open-source containerization tool Hoppr, focusing on cross-environment 
                  dependency management. Engineered Python script to automatically generate Pydantic Models from CycloneDX 
                  SBOM schemas. Project enhanced software portability while maintaining security compliance through automated 
                  dependency tracking and validation.
                </p>
                <div className={styles.flipPrompt}>Click to go back ↻</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
