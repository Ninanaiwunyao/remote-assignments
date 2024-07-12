document.addEventListener("DOMContentLoaded", () => {
  let page = 1;

  const ajax = (url) => {
    return fetch(url).then((res) => {
      return res.json();
    });
  };

  const render = (data) => {
    const result = document.getElementById("result");

    data.forEach((item) => {
      let listItem = document.createElement("div");
      listItem.classList.add("item");

      let contentContainer = document.createElement("div");
      contentContainer.classList.add("content-container");

      let h1 = document.createElement("h1");
      h1.textContent = item.name;
      contentContainer.appendChild(h1);

      let ovalContainer = document.createElement("div");
      ovalContainer.classList.add("oval-container");

      let oval = document.createElement("div");
      oval.classList.add("oval");
      oval.textContent = item.visibility;
      ovalContainer.appendChild(oval);

      contentContainer.appendChild(ovalContainer);
      listItem.appendChild(contentContainer);

      let desContainer = document.createElement("div");
      desContainer.classList.add("itemDes");
      let itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      desContainer.appendChild(itemDescription);

      listItem.appendChild(desContainer);

      let topicsContainer = document.createElement("div");
      topicsContainer.classList.add("topics-container");

      if (item.topics && item.topics.length > 0) {
        item.topics.forEach((topic) => {
          let topicOval = document.createElement("div");
          topicOval.classList.add("topic-oval");
          topicOval.textContent = topic;
          topicsContainer.appendChild(topicOval);
        });
      }

      listItem.appendChild(topicsContainer);

      result.appendChild(listItem);
    });
  };

  const loadMore = () => {
    const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
    ajax(url)
      .then((data) => {
        render(data);
        page++;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const moreButton = document.getElementById("moreButton");
  moreButton.addEventListener("click", loadMore);

  loadMore();
});
