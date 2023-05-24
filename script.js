const data = [
  {
    image: "./assets/images/menu/1.png",
    header: "Italian sauce mushroom",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda distinctio eos, voluptates alias nihil quis modi sint minima soluta rem iure neque aliquid obcaecati hic nemo optio, id odio. ",
    price: "$12.00",
  },
  {
    image: "./assets/images/menu/2.png",
    header: "Italian sauce mushroom",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda distinctio eos, voluptates alias nihil quis modi sint minima soluta rem iure neque aliquid obcaecati hic nemo optio, id odio. ",
    price: "$12.00",
  },
  {
    image: "./assets/images/menu/3.png",
    header: "Italian sauce mushroom",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda distinctio eos, voluptates alias nihil quis modi sint minima soluta rem iure neque aliquid obcaecati hic nemo optio, id odio. ",
    price: "$12.00",
  },
];

const dynamicData = document.getElementById("menu-wrapper");
dynamicData.classList.add("row");
dynamicData.classList.add("gap-5");

for (i = 0; i < data.length; i++) {
  const card = document.createElement("div");
  card.classList.add("col-md");
  card.classList.add("d-flex");
  card.classList.add("flex-column");

  const image = document.createElement("img");
  image.classList.add("w-100");
  image.src = data[i].image;

  var header = document.createElement("h1");
  header.classList.add("fs-4");
  header.classList.add("text-orange");
  header.classList.add("mt-4");
  header.classList.add("text-uppercase");
  header.innerHTML = data[i].header;

  var desc = document.createElement("p");
  desc.classList.add("my-3");
  desc.classList.add("fs-6");
  desc.innerHTML = data[i].desc;

  var price = document.createElement("h2");
  price.classList.add("fs-5");
  price.classList.add("text-orange");
  price.innerHTML = "Price: " + data[i].price;

  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(desc);
  card.appendChild(price);

  dynamicData.appendChild(card);
}
