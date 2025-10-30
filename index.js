/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===
function findFreelancer() {
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const randomOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const randomRate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return {
    name: randomName,
    occupation: randomOccupation,
    rate: randomRate,
  };
}

const freelancerArray = Array.from({ length: NUM_FREELANCERS }, findFreelancer);

function findAvergaeRate() {
  const totalRate = freelancerArray.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  return (totalRate / freelancerArray.length).toFixed(2);
}

// === Use a function to initialize a sate variable which will store the average rate of all freelancers ===
const averageRate = findAvergaeRate();

// Write a component function to represent a single freelancer
function FreelancerCard(freelancer) {
  const $card = document.createElement("div");
  $card.classList.add("freelancer");
  const nameElement = document.createElement("h2");
  nameElement.classList.add("name");
  nameElement.textContent = `${freelancer.name}`;
  const occupationElement = document.createElement("p");
  occupationElement.classList.add("occupation");
  occupationElement.textContent = `Occupation: ${freelancer.occupation}`;
  const rateElement = document.createElement("p");
  rateElement.classList.add("rate");
  rateElement.textContent = `Rate: $${freelancer.rate}/hr`;
  $card.appendChild(nameElement);
  $card.appendChild(occupationElement);
  $card.appendChild(rateElement);
  return $card;
}

// Write a component function to represent a list of freelancers
function FreelancerList() {
  const $container = document.createElement("div");
  $container.classList.add("freelancers");

  for (let i = 0; i < freelancerArray.length; i++) {
    const freelancerCard = FreelancerCard(freelancerArray[i]);
    $container.appendChild(freelancerCard);
  }
  return $container;
}

// write a component function to represent the average rate of all freelancers
function AverageRate() {
  const $averageContainer = document.createElement("h2");
  $averageContainer.classList.add("average-rate");
  $averageContainer.textContent = `Average Rate: $${averageRate}/hr`;
  return $averageContainer;
}
// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <FreelancerList></FreelancerList>
  `;
  const averageRateComponent = AverageRate();
  $app.querySelector("AverageRate").replaceWith(averageRateComponent);
  const freelancerListComponent = FreelancerList();
  $app.querySelector("FreelancerList").replaceWith(freelancerListComponent);
}
render();
