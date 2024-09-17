// Sample project data
const projects = [
  {
      image: 'projects/mountable-glass-HUD.jpg',
      name: 'Mountable Glass HUD',
      category: 'Artificial Intelligence',
      tools: 'Python, TensorFlow, OpenCV',
      description: 'A project focusing on image recognition using deep learning models and computer vision techniques.',
      viewLink: '#',
      contributors: [
          { name: 'Amar Kulkarni', linkedin: 'https://www.linkedin.com/in/amar-kulkarni-b021ab295/', image: 'projects/profile.jpg' },
          
      ]
  },
  {
      image: 'projects/path-prediction-laser-turret.PNG',
      name: 'Path Prediction Laser Turret',
      category: 'Web Development',
      tools: 'toolsname',
      description: 'An e-commerce website designed with modern front-end technologies, focusing on user experience and responsiveness.',
      viewLink: '#',
      contributors: [
          { name: 'Amar Kulkarni', linkedin: 'https://www.linkedin.com/in/amar-kulkarni-b021ab295/', image: 'projects/profile.jpg' },
          
      ]
  },
  {
      image: 'projects/spy-watch-gun.PNG',
      name: 'Spy Watch Gun',
      category: 'Mobile Development',
      tools: 'Flutter, Dart, Firebase',
      description: 'A mobile app aimed at providing healthcare services, including appointment scheduling, consultations, and medical records management.',
      viewLink: '#',
      contributors: [
          { name: 'Amar Kulkarni', linkedin: 'https://www.linkedin.com/in/amar-kulkarni-b021ab295/', image: 'projects/profile.jpg' },
          
      ]
  },
  {
    image: 'projects/track-belt-robot.jpg',
    name: 'Track Belt Robot',
    category: 'Web Development',
    tools: 'HTML, CSS, JavaScript, React',
    description: 'An e-commerce website designed with modern front-end technologies, focusing on user experience and responsiveness.',
    viewLink: '#',
    contributors: [
        { name: 'Amey Hande', linkedin: 'https://www.linkedin.com/in/amey-hande-453474207/', image: 'projects/profile.jpg' },
        
    ]
}
];

// Function to create project cards
function createProjectCard(project) {
  return `
      <div class="project-card">
          <img src="${project.image}" alt="${project.name}">
          <div class="project-content">
              <h2 class="project-name">${project.name}</h2>
              <p class="project-category">Category: ${project.category}</p>
              <p class="project-tools">Tools Used: ${project.tools}</p>
              <p class="project-description">${project.description}</p>
              <div class="project-contributors">
                  ${project.contributors.map(contributor => `
                      <div class="contributor">
                          <a href="${contributor.linkedin}" target="_blank">
                              <img src="${contributor.image}" alt="${contributor.name}">
                          </a>
                          <span class="contributor-name">${contributor.name}</span>
                      </div>
                  `).join('')}
              </div>
              <button onclick="window.location.href='${project.viewLink}'">View Project</button>
          </div>
      </div>
  `;
}

// Function to display projects
function displayProjects(filteredProjects = projects) {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';
  filteredProjects.forEach(project => {
      projectList.innerHTML += createProjectCard(project);
  });
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  const filteredProjects = projects.filter(project => {
      return project.name.toLowerCase().includes(searchQuery) ||
             project.tools.toLowerCase().includes(searchQuery) ||
             project.description.toLowerCase().includes(searchQuery) ||
             project.contributors.some(contributor => contributor.name.toLowerCase().includes(searchQuery));
  });
  displayProjects(filteredProjects);
});

// Initial display of projects
displayProjects();
