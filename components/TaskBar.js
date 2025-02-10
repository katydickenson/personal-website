import React from 'react';
import { useRouter } from 'next/router';

const TaskBar = () => {
  const router = useRouter();

  return (
    <div style={styles.taskBar}>
      {router.pathname !== '/' && (
        <a
          href="/"
          style={styles.homeIcon}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          🏠
        </a>
      )}
      <div style={styles.menu}>
        <a
          href="/projectdetails"
          style={styles.menuItem}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Projects
        </a>
        <a
          href="/workdetails"
          style={styles.menuItem}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Work Experience
        </a>
        <a
          href="/educationdetails"
          style={styles.menuItem}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Education
        </a>
        <a
          href="/leadershipdetails"
          style={styles.menuItem}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Leadership
        </a>
      </div>
    </div>
  );
};

const styles = {
  taskBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  homeIcon: {
    position: 'absolute',
    left: '10px',
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#333',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    fontSize: '18px',
  },
  menu: {
    display: 'flex',
    gap: '10px',
  },
  menuItem: {
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#333',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    fontSize: '18px',
  },
};

export default TaskBar; 