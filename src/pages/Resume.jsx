import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center border-b-2 border-gray-200 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Keith Wilcox</h1>
        <p className="text-gray-600 mt-2">
          <strong>Desired Job Title:</strong> Product Operations Associate<br />
          <strong>Email:</strong> <a href="mailto:keithwilcoxdev@gmail.com" className="text-blue-500">keithwilcoxdev@gmail.com</a> | <strong>Phone:</strong> 775-225-2895<br />
          <strong>Location:</strong> Reno, NV<br />
          <a href="https://github.com/Fishcuit/Fishcuit" className="text-blue-500">Github</a> | <a href="https://www.linkedin.com/in/keith-wilcox12/" className="text-blue-500">LinkedIn</a> | <a href="https://keithwilcox.io/" className="text-blue-500">Portfolio</a> | <a href="https://www.dfsprops.com" className="text-blue-500">DFSProps</a>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
        <p className="text-gray-700 mt-2">
          Passionate sports enthusiast and data analyst with over 2 years of experience in product development, data analysis, and process improvement. Adept at managing product launch timelines, analyzing performance metrics, and enhancing operational efficiency. Proven ability to oversee pre-game and in-play projections and develop statistical models to drive product success. Strong team player with excellent problem-solving skills and a deep knowledge of various sports.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Professional Experience</h2>
        
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800"><a href="http://DFSPROPS.COM" className="text-blue-500">DFSPROPS.COM</a> | Creator | Reno, NV</h3>
          <p className="text-gray-600"><em>June 2022 – Present</em></p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Oversaw pre-game and in-play projections for various sports, including NFL, NBA, NHL, and college sports, enhancing user engagement and accuracy.</li>
            <li>Created and managed diverse contest predictions for Pick’em games, significantly increasing user traffic to over 150 unique visitors a day.</li>
            <li>Launched projections for new sports, expanding the platform’s offerings and user base.</li>
            <li>Implemented statistical models to enhance betting accuracy and manage risks effectively.</li>
            <li>Conducted market analysis to identify betting patterns and develop effective strategies.</li>
            <li>Maintained PostgreSQL databases and created hundreds of complex queries for key features.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">SCOUTING HEROES | Basketball / Football Scout | Reno, NV</h3>
          <p className="text-gray-600"><em>November 2023 – Present</em></p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Managed real-time data entry for college basketball and football games, ensuring accuracy and attention to detail.</li>
            <li>Collaborated with the QA team for precise and timely updates, highlighting teamwork and commitment to quality.</li>
            <li>Utilized specialized software for data input and analysis, demonstrating adaptability to various technology platforms.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">KING SIZE GAMES | Mathematician | Reno, NV</h3>
          <p className="text-gray-600"><em>March 2022 – Present</em></p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Developed data solutions for game analytics, using Python and SQL for over twenty casino games.</li>
            <li>Implemented real-time data analytics and visualization tools, enhancing game design and user experience.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">CLEAR CAPITAL | Data Analyst | Reno, NV</h3>
          <p className="text-gray-600"><em>May 2022 - October 2022</em></p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Automated reporting processes by integrating Python with SQL, Excel, and Google Sheets, enhancing efficiency.</li>
            <li>Conducted comprehensive data analysis to improve the appraiser selection process, providing valuable business insights.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">U.S. NAVY | Flight Data Analyst | Key West, FL / Bremerton, WA</h3>
          <p className="text-gray-600"><em>February 2011 - January 2018</em></p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Specialized in data analysis and visualization for operational data, managing risks and implementing appropriate actions.</li>
            <li>Developed leadership, teamwork, and professionalism in high-stress environments.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        <p className="text-gray-700 mt-2">
          <strong>University of Nevada</strong> | B.S. Statistics<br />
          Major GPA: 3.5 / 4.0
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Advanced SQL, NCLab (2022)</li>
          <li>Advanced Python, NCLab (2022)</li>
          <li>Python for Data Analytics, NCLab (2022)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        <p className="text-gray-700 mt-2">Python, SQL, Excel, Power BI, NextJS, MongoDB, Django, React, Node, Machine Learning, JavaScript, C++, CSS, LATEX, HTML</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Hobbies</h2>
        <p className="text-gray-700 mt-2">Basketball, Boxing, Coding, Fantasy sports</p>
      </section>
    </div>
  );
};

export default Resume;


