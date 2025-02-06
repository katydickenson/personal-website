import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const fullText = 'Katherine Dickenson';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blink {
        from, to { opacity: 0 }
        50% { opacity: 1 }
      }
    `;
    document.head.appendChild(style);
    const menuStyle = document.createElement('style');
    menuStyle.innerHTML = `
      .menuContainer:hover .menu {
        display: block !important;
      }
    `;
    document.head.appendChild(menuStyle);
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Katherine Dickenson</title>
        <meta name="description" content="Welcome to Katherine Dickenson's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={styles.menuContainer}
        onMouseEnter={() => setMenuVisible(true)}
        onMouseLeave={() => setMenuVisible(false)}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <div style={styles.menuIcon}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
        {(menuVisible || menuVisible) && (
          <div style={{ ...styles.menu, width: '300%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href="/projects" style={{ ...styles.menuItem, textAlign: 'center' }}>Projects</a>
            <a href="/work" style={{ ...styles.menuItem, textAlign: 'center' }}>Work Experience</a>
            <a href="/education" style={{ ...styles.menuItem, textAlign: 'center' }}>Education</a>
            <a href="/leadership" style={{ ...styles.menuItem, textAlign: 'center' }}>Leadership</a>
            {/* <a href="/aboutme" style={{ ...styles.menuItem, textAlign: 'center' }}>About Me</a> */}
          </div>
        )}
      </div>

      <main style={styles.main}>
        <h1 style={styles.title}>
          {text}
          <span style={styles.cursor}>|</span>
        </h1>
        <div style={styles.email}>
          <div style={styles.emailHeader}>
            <span style={{ ...styles.dot, backgroundColor: '#ff5f56' }}></span>
            <span style={{ ...styles.dot, backgroundColor: '#ffbd2e' }}></span>
            <span style={{ ...styles.dot, backgroundColor: '#27c93f' }}></span>
          </div>
          <div style={styles.emailContent}>
            <p>Hello,</p>
            <p>I am a Georgia Institute of Technology graduate with a
                 <span style={{color: '#27c93f', fontWeight: 'bold'}}> B.S. in Computer Science</span>, 
                a <span style={{color: '#ffbd2e', fontWeight: 'bold'}}>minor in Law, Science, and Technology</span> 
                and a <span style={{color: '#ff5f56', fontWeight: 'bold'}}>certificate in Entrepreneurship</span>.</p>
            <p>As an undergraduate, I worked as a software engineer intern at <a href="https://www.lockheedmartin.com/en-us/careers/why-lm/business-areas/eo.html" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Lockheed Martin</a>,
             a systems engineering <a href="https://www.nasa.gov/careers/pathways/" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Pathways Intern at NASA</a>, 
                a legal and technical intern at <a href="https://martensonlaw.com/" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Martenson, Hasbrouck and Simon</a> 
                &nbsp;and a three-time data analytics co-op at <a href="https://news.delta.com/corporate-stats-and-facts" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Delta Air Lines</a>.&nbsp;</p>
            <p>My academics were supplemented by multiple leadership positions including serving as President of the <a href="https://www.gtsaa.com/s/1481/alumni/17/home.aspx?gid=39&pgid=61" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Student Alumni Association </a>
                and a Georgia Tech <a href="https://www.gtambassadors.org/s/1481/alumni/17/home.aspx?gid=44&pgid=61" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Student Ambassador</a>.</p>
            <p>Now, I am pursuing a Juris Doctor and a Masters in Computer Science in order to work 
              towards my goal of integrating my technical skills with legal knowledge to
              create innovative solutions to complex and modern problems.</p>
            <p>Browse to learn more about my <span style={{color: '#27c93f', fontWeight: 'bold'}}> projects</span>,
             <span style={{color: '#ffbd2e', fontWeight: 'bold'}}> work experience</span>, 
            <span style={{color: '#ff5f56', fontWeight: 'bold'}}> education and leadership positions</span>.</p>
            Sincerely,<br />
            Katherine (Katy) Dickenson<br />
            <a href="https://www.linkedin.com/in/katherinedickenson/" target="_blank" rel="noopener noreferrer" style={{color: 'black', transition: 'transform 0.3s', display: 'inline-block'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>LinkedIn</a>
            <div style={{ marginTop: '2px', display: 'flex', gap: '10px' }}>
              <a href="/KDickenson_Resume.pdf" download style={{ ...styles.attachment, transition: 'transform 0.3s', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                📎 1 Attachment<br />
                <span style={styles.resumeText}>KDickenson Resume.pdf</span>
              </a>
              <a href="/KDickenson_CoverLetter.pdf" download style={{ ...styles.attachment, transition: 'transform 0.3s', display: 'inline-block' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                📎 1 Attachment<br />
                <span style={styles.resumeText}>Cover Letter.pdf</span>
              </a>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    width: '100%',
    position: 'relative',
  },
  menuContainer: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    textAlign: 'right',
    cursor: 'pointer',
  },
  menuIcon: {
    display: 'inline-block',
    padding: '0.5rem',
  },
  bar: {
    width: '35px',
    height: '5px',
    backgroundColor: '#333',
    margin: '6px 0',
  },
  menu: {
    position: 'absolute',
    top: '3rem',
    right: '0',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  menuItem: {
    display: 'block',
    padding: '0.5rem 1rem',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #eee',
  },
  main: {
    padding: '2rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    margin: '1rem 0',
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  cursor: {
    marginLeft: '5px',
    animation: 'blink 1s step-end infinite',
  },
  email: {
    marginTop: '1rem',
    padding: '0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '70%',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  emailHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    borderBottom: '1px solid #ccc',
  },
  dot: {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '0.5rem',
  },
  emailContent: {
    padding: '1rem',
  },
  attachment: {
    display: 'inline-block',
    margin: '1rem 0',
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#e6f7ff',
    textAlign: 'left',
    textDecoration: 'none',
    color: '#333',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    width: '20%',
  },
  resumeText: {
    fontSize: '1rem',
    textAlign: 'center',
  },
}; 