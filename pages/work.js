import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Work() {
  const [text, setText] = useState('');
  const fullText = 'Work Experience';
  const router = useRouter();

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
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Work Experience</title>
        <meta name="description" content="Work Experience page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button style={styles.backButton} onClick={() => router.push('/')}>
        &larr; Back
      </button>

      <main style={styles.main}>
        <h1 style={styles.title}>
          {text}
          <span style={styles.cursor}>|</span>
        </h1>
        <button style={styles.nextButton} onClick={() => router.push('/workdetails')}>
          &rarr;
        </button>
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
    justifyContent: 'center',
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
    justifyContent: 'center',
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
  nextButton: {
    marginTop: '.1rem',
    background: 'none',
    border: 'none',
    color: 'black',
    fontSize: '6rem',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
