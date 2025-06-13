const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400"
];
let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImg.src = images[currentIndex];
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImg.src = images[currentIndex];
});

document.getElementById("get-joke").addEventListener("click", async () => {
  const jokeText = document.getElementById("joke-text");
  jokeText.textContent = "Loading joke...";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeText.textContent = `${data.setup} 🤔 ${data.punchline}`;
  } catch (error) {
    jokeText.textContent = "Oops! Failed to load joke.";
  }
});
