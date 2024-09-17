// Sample event data
const events = [
  {
      image: 'donationimg/mindspark.png',
      name: 'Mindspark',
      description: '2nd Largest TechFest in Maharashtra',
      viewLink: '#',
      donateLink: '#'
  },
  {
      image: 'donationimg/or.png',
      name: 'Octane Racing',
      description: 'Formula Student Team, COEP',
      viewLink: '#',
      donateLink: '#'
  },
  {
    image: 'donationimg/psf.png',
    name: 'Pune Startup Fest',
    description: 'Largest Startup Fest',
    viewLink: '#',
    donateLink: '#'
  },
  {
    image: 'donationimg/rsc.png',
    name: 'Robotic Study Circle',
    description: 'Where Automation Begins',
    viewLink: '#',
    donateLink: '#'
  },
  {
    image: 'donationimg/impressions.png',
    name: 'Impressions',
    description: 'Cultural Fest of COEP',
    viewLink: '#',
    donateLink: '#'
},
{
  image: 'donationimg/regatta.PNG',
  name: 'Regatta-The Legacy',
  description: 'Oldest Running fest scince ',
  viewLink: '#',
  donateLink: '#'
},
  {
      image: 'donationimg/arsc.png',
      name: 'Arial Robotic Study Circle',
      description: 'Sky High',
      viewLink: '#',
      donateLink: '#'
  }
];

// Function to create event cards
function createEventCard(event) {
  return `
      <div class="event-card">
          <img src="${event.image}" alt="${event.name}" class="event-image">
          <div class="event-content">
              <h2 class="event-name">${event.name}</h2>
              <p class="event-description">${event.description}</p>
              <div class="buttons">
                  <button class="view" onclick="window.location.href='${event.viewLink}'">View</button>
                  <button class="donate" onclick="window.location.href='${event.donateLink}'">Donate Now</button>
              </div>
          </div>
      </div>
  `;
}

// Function to display events
function displayEvents(filteredEvents = events) {
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '';
  filteredEvents.forEach(event => {
      eventList.innerHTML += createEventCard(event);
  });
}

// Search functionality
document.getElementById('search-icon').addEventListener('click', function() {
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('search-input').addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  const filteredEvents = events.filter(event => {
      return event.name.toLowerCase().includes(searchQuery) || event.description.toLowerCase().includes(searchQuery);
  });
  displayEvents(filteredEvents);
});

// Initial display of events
displayEvents();
