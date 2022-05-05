const displayComponents = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
};

const options = {
  threshold: 0.5,
};
const Observe = (ref) => {
  const observer = new IntersectionObserver(displayComponents, options);
  observer.observe(ref.current);
};
export default Observe;
