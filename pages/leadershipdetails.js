import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './leadership.module.css';
import TaskBar from '../components/TaskBar';

const LeadershipDetails = () => {
  const router = useRouter();
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const sortedPositions = leadershipData.flatMap(org => 
    org.positions.map(pos => ({
      ...pos,
      organization: org.organization,
      location: org.location,
      startDate: pos.date.split('–')[0].trim()
    }))
  ).sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB - dateA;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Leadership Experience</title>
        <meta name="description" content="Leadership experience and positions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TaskBar />

      <main className={styles.main}>
        <h1 className={styles.title}>Leadership Experience</h1>
        
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          <div className={styles.timelineContainer}>
            {sortedPositions.map((position, index) => (
              <div
                key={index}
                className={`${styles.timelineCard} 
                            ${flippedCards.has(index) ? styles.flipped : ''} 
                            ${index % 2 === 0 ? styles.above : styles.below}`}
                onClick={() => handleCardClick(index)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <div className={styles.flipPrompt}>
                      Click to see details <span style={{ marginLeft: '0.2rem' }}>↻</span>
                    </div>
                    <h2 className={styles.orgTitle}>{position.organization}</h2>
                    <h3 className={styles.position}>{position.title}</h3>
                    <p className={styles.location}>{position.location}</p>
                    <span className={styles.timelineDate}>{position.date}</span>
                  </div>
                  <div className={styles.cardBack}>
                    <ul className={styles.responsibilities}>
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeadershipDetails;

const leadershipData = [
  {
    organization: "Georgia Tech Ambassadors",
    location: "Atlanta, GA",
    positions: [
      {
        title: "Student Ambassador",
        date: "Feb 2024 – Present",
        responsibilities: [
          "Selected from a rigorous application process to serve as an official representative of the school.",
          "Represents the diverse student body at high-profile events with top donors and institution leadership.",
          "Conducts engaging campus tours for prospective students, families, and distinguished visitors."
        ]
      }
    ]
  },
  {
    organization: "Student Alumni Association",
    location: "Atlanta, GA",
    positions: [
      {
        title: "President",
        date: "May 2023 – May 2024",
        responsibilities: [
          "Elected leader of one of the largest clubs on campus that hosts weekly events, mentorship programs, and seminars with the goal of connecting students and alumni.",
          "Developed a new team wide process for event organization that eliminated errors, late deliverables, and oversight, resulting in 100% efficiency and on-time performance.",
          "Hosted the largest events the club has seen, holding attendance of over 1,000 students.",
          "Led the club to win Organization of the Year for first time in Georgia Tech history."
        ]
      },
      {
        title: "Vice President of Operations",
        date: "May 2022 – May 2023",
        responsibilities: [
          "Direct creation and development of a new tier membership system based on involvement data.",
          "Served as central authority directing a team that analyzes, interprets, and acts upon member data.",
          "Oversaw all task delegation and operation innovation of processes on student-led side."
        ]
      },
      {
        title: "Vice President of Membership and Marketing",
        date: "May 2021 – May 2022",
        responsibilities: [
          "Fostered involvement opportunities for 6,000 general body club members.",
          "Marketed and organized events that are available to tens of thousands of students.",
          "Singlehandedly organized and orchestrated multiple weekly meetings for a committee of 10."
        ]
      }
    ]
  },
  {
    organization: "NASA, Kennedy Space Center",
    location: "Cape Canaveral, FL",
    positions: [
      {
        title: "Director of Intern Engagement",
        date: "Feb 2023 – May 2023",
        responsibilities: [
          "Led an organization that engages interns from nationwide NASA centers.",
          "Hosted the first NASA Symposium with representation from all NASA locations.",
          "Involved NASA officials, up to the level of Director, with students to share career advice."
        ]
      }
    ]
  },
  {
    organization: "Zeta Tau Alpha",
    location: "Atlanta, GA",
    positions: [
      {
        title: "Senior Programs Director",
        date: "Nov 2021 – Nov 2022",
        responsibilities: [
          "Spearheaded coordination and planning of events for an organization of over 200 members.",
          "Chaired organization-wide meetings as lead spokesperson, effectively communicating and fostering collaboration.",
          "Cultivated an inclusive environment by advocating for the diverse perspectives across the organization."
        ]
      },
      {
        title: "Head of Activities",
        date: "Nov 2020 – Nov 2021",
        responsibilities: [
          "Organized 12 different teams across 8 different sports for an organization of over 200 members.",
          "Involved in formation of the organization's first social media by collaborating with similar media groups, which soon became a schoolwide standard."
        ]
      }
    ]
  }
];
