const adjectives = ["radiant", "wonderful", "brilliant", "witty", "kind-hearted", "phenomenal", "dazzling", "beloved", "charming", "beautiful"];
const nouns = ["star", "human", "soul", "friend", "genius", "artist", "dreamer", "light", "miracle", "treasure"];
const phrases = ["the world is brighter because of you!", "you make magic happen!", "you're a masterpiece in motion!", "you bring joy wherever you go!", "your kindness is contagious!", "you turn dreams into reality!", "your heart is pure gold!", "your presence is a gift!", "you're the missing spark the world needed!", "your smile can light up galaxies!"];

function generateCompliment() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    const compliment = `You're a ${adj} ${noun}, ${phrase}`;
    document.getElementById("compliment").textContent = compliment;
    document.getElementById("share-link").value = window.location.href + "?compliment=" + encodeURIComponent(compliment);
}

function copyLink() {
    const link = document.getElementById("share-link");
    link.select();
    document.execCommand("copy");
    alert("Link copied! Share it with someone special! 💖");
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const complimentText = urlParams.get("compliment");
    if (complimentText) {
        document.getElementById("compliment").textContent = complimentText;
    } else {
        generateCompliment();
    }
};
