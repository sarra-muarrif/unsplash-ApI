const client_id = "UeBrLcB_uVLvVb8eK-GePvbjFv_SCSBsBAv6PBiEJ9k";
const endPoint = "https://api.unsplash.com/search/photos";

const root = document.querySelector("#root");
const renderData = (list) => {
  root.textContent = "";
  list.map((photo) => {
    const node = document.createElement("li");
    const image = document.createElement("img");
    image.src = photo.urls.small;
    node.appendChild(image);
    root.appendChild(node);
  });
};

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();
  const query = document.querySelector("#search-Query").value;
  fetch(`${endPoint}?client_id=${client_id}&query=${query}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw new Error();
      }
      renderData(res.results);
    })
    .catch((err) => console.log(err));
});
