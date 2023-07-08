// script.js

async function getMatchData() {
  try {
    const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=06bf0318-25a0-420e-a1e6-1ed574fe634a&offset=0");
    const data = await response.json();

    if (data.status !== "success") return;

    const matchesList = data.data;

    if (!matchesList) return [];

    const relevantData = matchesList.map((match) => `${match.name}, ${match.status}`);

    console.log({ relevantData });

    const matchesContainer = document.getElementById("matches");
    matchesContainer.innerHTML = relevantData.map((match) => `<li>${match} </li>`).join('');

    matchesContainer.addEventListener("click", (event) => {
      const clickedMatch = event.target.textContent;
      console.log(`Clicked match: ${clickedMatch}`);
      // Add your custom logic here for handling the clicked match
    });

    return relevantData;
  } catch (error) {
    console.log(error);
  }
}

getMatchData();
