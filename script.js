document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Structure for the Daily Pipe Organ
    const dailyOrganData = {
        title: "THE GREAT ORGAN OF ST. PETER'S",
        subtitle: "Basel, Switzerland | Built 1898 by F. J. Bach & Sons",
        imagePath: 'organ_facade_placeholder.jpg', 
        history: "Located in the historic St. Peter's Church, this Romantic-era instrument is renowned for its lush string stops and powerful reeds. It was heavily restored in the 1970s to preserve its original tonal character, making it a benchmark for 19th-century European organ building. Its façade dominates the rear wall of the sanctuary.",
        specs: {
            builder: 'F. J. Bach & Sons',
            year: '1898',
            location: 'Basel, Switzerland',
            manuals: 'IV (Great, Swell, Choir, Solo)',
            stops: '68 speaking stops',
            pipes: '5,580 pipes total'
        }
    };

    // 2. Function to Update the DOM
    function updateDailyPipe(organ) {
        // Hero Section Updates
        document.getElementById('organ-title').textContent = organ.title;
        document.getElementById('organ-subtitle').textContent = organ.subtitle;
        document.getElementById('instrument-hero').style.backgroundImage = `url('${organ.imagePath}')`;
        
        // History Update
        document.getElementById('history-text').textContent = organ.history;

        // Specifications Table Update
        document.getElementById('spec-builder').textContent = organ.specs.builder;
        document.getElementById('spec-year').textContent = organ.specs.year;
        document.getElementById('spec-location').textContent = organ.specs.location;
        document.getElementById('spec-manuals').textContent = organ.specs.manuals;
        document.getElementById('spec-stops').textContent = organ.specs.stops;
        document.getElementById('spec-pipes').textContent = organ.specs.pipes;
    }

    // Load today's data
    updateDailyPipe(dailyOrganData);


    // 3. Audio Button Interaction
    const playButton = document.getElementById('play-audio');
    playButton.addEventListener('click', () => {
        // In a real application, this would trigger an actual audio player, 
        // perhaps loading an MP3 file associated with this organ.
        alert(`Now playing a recording on the ${dailyOrganData.title}!`);
    });
});