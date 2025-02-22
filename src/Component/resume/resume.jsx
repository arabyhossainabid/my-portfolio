import React from 'react';

function Resume() {
  return (
    <section>
      <button
      
        onClick={() => window.open('/resume/resume.pdf', '_blank')}
        className="resume-button"
        aria-label="Download my resume"
      >
        Download My Resume
      </button>
    </section>
  );
}

export default Resume;