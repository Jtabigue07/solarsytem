const planetData = [
    { name: "Mercury", ratio: 0.2408467 },
    { name: "Venus",   ratio: 0.61519726 },
    { name: "Earth",   ratio: 1 },
    { name: "Mars",    ratio: 1.8808158 },
    { name: "Jupiter", ratio: 11.862615 },
    { name: "Saturn",  ratio: 29.447498 },
    { name: "Uranus",  ratio: 84.016846 },
    { name: "Neptune", ratio: 164.79132 },
    { name: "Pluto",   ratio: 248.00 }
];

function showPlanets(earthAge = null) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    planetData.forEach(planet => {
        let planetAgeText = '';
        if (earthAge !== null && !isNaN(earthAge)) {
            const planetAge = (earthAge / planet.ratio).toFixed(2);
            planetAgeText = `<span>Your age: ${planetAge} years</span><br>`;
        }
        const planetDiv = document.createElement('div');
        planetDiv.className = 'planet';
        planetDiv.innerHTML = `
            <label>${planet.name}:</label>
            ${planetAgeText}
            <video width="320" height="240" controls loop autoplay muted>
                <source src="planet_videos/${planet.name.toLowerCase()}.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        resultsDiv.appendChild(planetDiv);
    });
}

// Show planets and videos on page load (no age yet)
showPlanets();

document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const earthAge = parseFloat(document.getElementById('earthAge').value);
    showPlanets(earthAge);
});