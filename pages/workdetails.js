import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TaskBar from '../components/TaskBar';

export default function WorkDetails() {
  const router = useRouter();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      name: 'Delta Air Lines',
      role: 'Data Analytics Co-op',
      dates: 'Aug 2023 - Present',
      description: [
        'Developed a predictive model to anticipate future flight taxi times by analyzing historical data.',
        'Identified and resolved an arrival time issue at major U.S. airports, presenting solutions to leadership.',
        'Developed a dashboard displaying flight data and error rates, enabling cross-divisional coordination.'
      ],
    },
    {
      name: 'Martenson, Hasbrouck and Simon',
      role: 'Legal and Technical Intern',
      dates: 'May 2023 - Aug 2023',
      description: [
        'Bridged the gap between legal and technical proficiency to enhance daily work and client deliverables.',
        'Optimized data analysis programs already in use, improving their speed by up to 8000%.',
        'Assisted in the investigation, analysis and organization of lawsuits and implementation of strategy.'
      ],
    },
    {
      name: 'NASA',
      role: 'Systems Engineering Pathways Intern',
      dates: 'Jan 2023 - May 2023',
      description: [
        'Assessed software for security vulnerabilities that could directly impact the mission to the moon.',
        'Using a country wide database cross-referenced with a local one, produced a quantitative analysis of software safety within the company.',
        'Revised legal framework governing contractor obligations and liabilities for distributed manufacturing of Artemis rocket components.',
        'Worked closely with the legal team to ensure adherence to government regulations for deliverables.'
      ],
    },
    {
      name: 'Lockheed Martin',
      role: 'Software Engineer Intern',
      dates: 'May 2022 - Aug 2022',
      description: [
        'Collaborated on development of plug-ins, architecture, and documentation with a team to create an open-source software, allowing applications and build dependencies to move between isolated environments.',
        'Generated and developed a script creating Pydantic Models from a user specified CycloneDX Software Bill of Materials schema release.',
        'Demonstrated living expertise and fluency in both Python and Bash.'
      ],
    },
    {
      name: 'Georgia Tech Alumni Association',
      role: 'Student Assistant',
      dates: 'Jan 2022 - May 2022',
      description: [
        'Authored articles for the Alumni Association website and newsletters, highlighting events and alumni.',
        'Honed public speaking skills through presentations to alumni and leadership on improvement strategies.'
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <Head>
        <title>Work Experience</title>
        <meta name="description" content="Work Experience page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TaskBar />

      <button style={styles.backButton} onClick={() => router.push('/')}>
        &larr; Back
      </button>
      <main style={styles.main}>
        <h1 style={styles.title}>Work Experience</h1>
        <div style={styles.inboxContainer}>
          <div style={styles.emailHeader}>
            <span style={{ ...styles.dot, backgroundColor: '#ff5f56' }}></span>
            <span style={{ ...styles.dot, backgroundColor: '#ffbd2e' }}></span>
            <span style={{ ...styles.dot, backgroundColor: '#27c93f' }}></span>
          </div>
          <div style={styles.toolbar}>
            <div style={styles.toolbarItem}>
              📧 <span style={styles.toolbarLabel}>New Email</span>
            </div>
            <div style={styles.toolbarItem}>
              🔄 <span style={styles.toolbarLabel}>Sync</span>
            </div>
            <div style={styles.toolbarItem}>
              🗑️ <span style={styles.toolbarLabel}>Delete</span>
            </div>
            <div style={styles.toolbarItem}>
              📥 <span style={styles.toolbarLabel}>Archive</span>
            </div>
            <div style={styles.toolbarItem}>
              ⭐ <span style={styles.toolbarLabel}>Star</span>
            </div>
            <div style={styles.toolbarItem}>
              📂 <span style={styles.toolbarLabel}>Move</span>
            </div>
            <div style={styles.toolbarItem}>
              📭 <span style={styles.toolbarLabel}>Mark Unread</span>
            </div>
          </div>
          <div style={styles.contentContainer}>
            <div style={styles.emailList}>
              {companies.map((company, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.emailItem,
                    backgroundColor: selectedCompany === company ? '#e0f7fa' : 'transparent',
                  }}
                  onClick={() => setSelectedCompany(company)}
                >
                  <div style={styles.companyInfo}>
                    <strong>{company.name}</strong>
                    <p style={styles.emailRole}>{company.role}</p>
                    <p style={styles.emailDates}>{company.dates}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.messageBox}>
              {selectedCompany ? (
                <>
                  <h3>{selectedCompany.name}</h3>
                  <h4>{selectedCompany.role}</h4>
                  <p style={styles.selectedDates}>{selectedCompany.dates}</p>
                  <hr />
                  {Array.isArray(selectedCompany.description) ? (
                    <ul>
                      {selectedCompany.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{selectedCompany.description}</p>
                  )}
                </>
              ) : (
                <>
                  <p>No conversation selected.</p>
                  <p>Select a company to view details.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    width: '100%',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    background: 'none',
    border: 'none',
    color: '#333',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  main: {
    padding: '1rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: '3rem',
    textAlign: 'center',
    margin: '40px 0',
    color: '#2c3e50',
  },
  inboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: '70vh',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  emailHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    backgroundColor: '#e6e6e6',
    borderBottom: '1px solid #ccc',
  },
  dot: {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '0.5rem',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0.5rem',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  toolbarItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  toolbarLabel: {
    marginLeft: '0.5rem',
    fontSize: '0.9rem',
    color: '#333',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
  },
  emailList: {
    width: '30%',
    backgroundColor: '#e6e6e6',
    overflowY: 'auto',
  },
  emailItem: {
    padding: '0.5rem',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    display: 'flex',
    alignItems: 'flex-start',
  },
  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  emailRole: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '0.1rem', 
  },
  emailDates: {
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '0.1rem', 
  },
  selectedDates: {
    fontSize: '0.8rem',
    color: '#888',
    marginLeft: '1rem',
  },
  messageBox: {
    width: '70%',
    backgroundColor: '#fff',
    padding: '1rem',
    overflowY: 'auto',
    borderLeft: '1px solid #ccc',
  },
};

