export let screenWidth: number = window.innerWidth;

const updateScreenWidth = () => {
  screenWidth = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);
