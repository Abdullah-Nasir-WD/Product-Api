console.log("hello world..!");
// console.log("hello world 1");
// console.log("hello world 2");
// console.log("hello world 3");
// setTimeout(() => {
//   console.log("hello world 4");
// }, 0);
// console.log("hello world 5");

const div = document.querySelector(".container");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.products);
    res.products.map((item) => {
      div.innerHTML += 
        ` <div class="alone-card">
            <img src=${item.thumbnail}
                alt="thumbnail" width="100%">
            <h1>${item.title}</h1>
            <p>${item.description.slice(0, 20)}...</p>
            <p class="bg-green">Price: $${item.price}</p>
            <button class="seeMore" onclick="showMore(${item.id})">See more</button>
          </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

  const showMore = (id) => {
    // console.log(id);
    localStorage.setItem("id" , id)
    window.location = `./cart.html`
  }
