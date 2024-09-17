// Sample mentor data
const mentors = [
  {
      image: 'mentorship/1.png',
      name: 'Pratap Tokekar',
      batchYear: '2020',
      branch: 'Computer Science',
      interests: 'AI, Machine Learning, Web Development',
      description: 'Pratap Tokekar is an Associate Professor in the Department of Computer Science at the University of Maryland, with a Ph.D. from the University of Minnesota. His research spans robotics, computational geometry, and algorithmic decision-making, with a focus on developing scalable solutions for multi-robot systems, autonomous vehicles, and sensor networks. Leading the Robotics Algorithms and Autonomous Systems (RAAS) Lab and practical applications, driving advancements in autonomous systems and robotics research. SIH Mentor',
      linkedin: 'https://www.linkedin.com/in/prataptokekar/',
      instagram: 'https://www.instagram.com/johndoe'
  },
  {
      image: 'mentorship/2.PNG',
      name: 'Raj Mali',
      batchYear: '2019',
      branch: 'Information Technology',
      interests: 'Cybersecurity, Data Science',
      description: 'Have worked with EYRC, highly skilled in ROS and an expert in MATLAB, showcasing a strong foundation in robotics and computational technologies. SIH Winner',
      linkedin: 'https://www.linkedin.com/in/raj-mali/',
      instagram: 'https://www.instagram.com/janesmith'
  },
  {
      image: 'mentorship/3.png',
      name: 'Aditya More',
      batchYear: '2021',
      branch: 'Electronics and Communication',
      interests: 'IoT, Embedded Systems',
      description: 'BTech student at COEP Tech University, was a team member of the Robot Study Circle and a former research intern at NCAIR, IIT Bombay. His involvement in cutting-edge research and robotics reflects his commitment to technological advancement.',
      linkedin: 'https://www.linkedin.com/in/aditya-more-0a4035212/',
      instagram: 'https://www.instagram.com/alexjohnson'
  },
  {
    image: 'mentorship/4.png',
    name: 'Amey Hande',
    batchYear: '2019',
    branch: 'Information Technology',
    interests: 'Cybersecurity, Data Science',
    description: " RSC Secretary 2023-24, <br> As Secretary of the Robotic Study Circle Club, demonstrating leadership and innovation, earning the Best Project award. His dedication to robotics and project excellence helped him drive the club's activities and contribute to its success.",
    linkedin: 'https://www.linkedin.com/in/raj-mali/',
    instagram: 'https://www.instagram.com/janesmith'
},
{
  image: 'mentorship/5.PNG',
  name: 'Jiten Topiwala',
  batchYear: '2019',
  branch: 'Information Technology',
  interests: 'Cybersecurity, Data Science',
  description: 'BTech student at COEP Tech University, has interned at both IIT Roorkee and NCAIR, IIT Bombay. He has also won multiple awards in MathWorks competitions, showcasing his strong expertise in robotics and engineering innovation.',
  linkedin: 'https://www.linkedin.com/in/jitentopiwala/',
  instagram: 'https://www.instagram.com/janesmith'
},
{
  image: 'mentorship/6.png',
  name: 'Yash Gavit',
  batchYear: '2019',
  branch: 'Information Technology',
  interests: 'Cybersecurity, Data Science',
  description: 'BTech student at COEP Tech University, interned at the Armament Research and Development Establishment (DRDO) from February to June 2024, designing a dynamic model for a turret gun system. He also completed a mechanical design internship at AgMove Robotics India Pvt Ltd.',
  linkedin: 'https://www.linkedin.com/in/yash-gavit-2ab657229/',
  instagram: 'https://www.instagram.com/janesmith'
},
{
  image: 'mentorship/7.PNG',
  name: 'Anirudha Gaikwad ',
  batchYear: '2019',
  branch: 'Information Technology',
  interests: 'Cybersecurity, Data Science',
  description: 'Software engineer : Microservices based on .Net Core, Angular and Python. Exp. 2 years Tech stack : Asp.net, MVC, Ado.net, Postgres and MSsql <br> Creator based on Embedded electronics - robotics. Five+ years experience in PCB designing, robotics. Sponsored by companies like PCBway, NEXTpcb etc.Blogs on my projects can be found on Hackster.io, Instructables, Altium Stories.<br>Find my work at @_ro.box',
  linkedin: 'https://www.linkedin.com/in/raj-mali/',
  instagram: 'https://www.instagram.com/janesmith'
},
];


// Function to create mentor cards
function createMentorCard(mentor) {
  const truncatedDescription = truncateText(mentor.description, 150); // Truncate to 150 chars (adjust as needed)

  return `
      <div class="mentor-card">
          <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image">
          <h2 class="mentor-name">${mentor.name}</h2>
          <p class="mentor-batch">Batch Year: ${mentor.batchYear}</p>
          <p class="mentor-branch">Branch: ${mentor.branch}</p>
          <p class="mentor-interests">Interests: ${mentor.interests}</p>
          <p class="mentor-description" id="desc-${mentor.name}">
              ${truncatedDescription} <span class="more-link" onclick="expandDescription('${mentor.name}', '${mentor.description}')">more...</span>
          </p>
          <div class="mentor-icons">
              <a href="${mentor.linkedin}" target="_blank"><i class="ri-linkedin-fill"></i></a>
              <a href="${mentor.instagram}" target="_blank"><i class="ri-instagram-line"></i></a>
          </div>
          <button onclick="window.location.href='#'">Connect</button>
      </div>
  `;
}

// Function to truncate text after a certain length
function truncateText(text, limit) {
  if (text.length > limit) {
      return text.substring(0, limit) + '...';
  }
  return text;
}

// Function to expand description
function expandDescription(mentorName, fullDescription) {
  const descElement = document.getElementById(`desc-${mentorName}`);
  descElement.innerHTML = `${fullDescription} <span class="less-link" onclick="collapseDescription('${mentorName}', '${fullDescription}')">less...</span>`;
}

// Function to collapse the description
function collapseDescription(mentorName, truncatedDescription) {
  const descElement = document.getElementById(`desc-${mentorName}`);
  descElement.innerHTML = `${truncateText(truncatedDescription, 150)} <span class="more-link" onclick="expandDescription('${mentorName}', '${truncatedDescription}')">more...</span>`;
}




























// Function to display mentors
function displayMentors(filteredMentors = mentors) {
  const mentorList = document.getElementById('mentor-list');
  mentorList.innerHTML = '';
  filteredMentors.forEach(mentor => {
      mentorList.innerHTML += createMentorCard(mentor);
  });
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  const filteredMentors = mentors.filter(mentor => {
      return mentor.name.toLowerCase().includes(searchQuery) ||
             mentor.branch.toLowerCase().includes(searchQuery) ||
             mentor.interests.toLowerCase().includes(searchQuery) ||
             mentor.batchYear.toLowerCase().includes(searchQuery) ||
             mentor.description.toLowerCase().includes(searchQuery);
  });
  displayMentors(filteredMentors);
});

// Initial display of mentors
displayMentors();
