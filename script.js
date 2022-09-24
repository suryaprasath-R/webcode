const div = document.createElement("div");
div.setAttribute("class", "main");

const div1 = document.createElement("div");
div1.setAttribute("class", "body row");
div1.setAttribute("id", "bodys");

const nav = document.createElement("nav");
nav.setAttribute("class", "navbar");

const navdiv = document.createElement("div");
navdiv.setAttribute("class", "container-fluid");

const brand = document.createElement("a");
brand.textContent = "Pokemon";
brand.setAttribute("class", "navbar-brand");

const form = document.createElement("div");
form.setAttribute("class", "d-flex");

const input = document.createElement("input");
input.setAttribute("class", "me-2");
input.setAttribute("id", "submit");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter the Pokemon Name");

const button = document.createElement("button");
button.setAttribute("class", "btn btn-primary");
button.setAttribute("type", "submit");
button.textContent = "Search";

form.append(input, button);
navdiv.append(brand, form);
nav.append(navdiv);
div.append(nav);

document.body.append(div, div1);
var div2 = document.createElement("div");
div2.setAttribute("class", "row");
document.body.append(div2);
async function foo() {
  var res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1154`
  );
  var data = await res.json();
  results = data.results;

  function foo2() {
    results.slice(0, 50).forEach((ele) => {
      const url2 = ele.url;
      async function foo3() {
        var res1 = await fetch(url2);
        var data1 = await res1.json();
        var name = data1.name;
        var res1 = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${name}`
        );
        var data1s = await res1.json();
        var results1 = data1s.sprites;
        const carousel = document.createElement("div");
        carousel.setAttribute(
          "class",
          "carrs col-sm-12 col-lg-3 col-md-4 mt-5 mb-4 d-flex justify-content-around"
        );
        carousel.innerHTML = `<div class="card" style="width: 18rem;">
                <div id="img2"><img src="${results1.front_default}" style="width:20rem";></div>
                <div class="card-body text-center">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Height : ${data1.height}</p>
                <p class="card-text">Weigth : ${data1.weight}</p>
                <select class="form-select" aria-label="Default select example">
                <option selected>Pokemon Abilities</option>
                <option value="1">${data1.abilities[0].ability.name}</option>
                <option value="2">${data1.abilities[1].ability.name}</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                <option selected> 5 Attacking Moves</option>
                <option value="1">${data1.moves[0].move.name}</option>
                <option value="2">${data1.moves[1].move.name}</option>
                <option value="3">${data1.moves[2].move.name}</option>
                <option value="2">${data1.moves[3].move.name}</option>
                <option value="3">${data1.moves[4].move.name}</option>
                </select>
                </div>
                </div>`;
        div1.append(carousel);
      }
      foo3();
    });
  }
  foo2();

  button.addEventListener("click", async () => {
    var carousel = document.getElementById("bodys");
    carousel.style.display = "none";
    var input = document.getElementById("submit").value;
    let lowercaseinput = input.toLowerCase();
    try {
      results.forEach((element) => {
        if (element.name == lowercaseinput) {
          const url = element.url;
          async function foo1() {
            var res1 = await fetch(url);
            var data1 = await res1.json();
            var res1 = await fetch(
              `https://pokeapi.co/api/v2/pokemon-form/${lowercaseinput}`
            );
            var data1s = await res1.json();
            var results1 = data1s.sprites;
            const carousel = document.createElement("div");
            carousel.setAttribute(
              "class",
              "carrs col-sm-12 col-lg-3 col-md-4 mt-5 mb-4 d-flex justify-content-around"
            );
            carousel.innerHTML = `<div class="card " style="width: 18rem;">
                <div id="img2"><img src="${results1.front_default}" style="width:20rem";></div>
                <div class="card-body text-center">
                <h5 class="card-title">${lowercaseinput}</h5>
                <p class="card-text">Height : ${data1.height}</p>
                <p class="card-text">Weigth : ${data1.weight}</p>
                <select class="form-select" aria-label="Default select example">
                <option selected>Pokemon Abilities</option>
                <option value="1">${data1.abilities[0].ability.name}</option>
                <option value="2">${data1.abilities[1].ability.name}</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                <option selected> 5 Attacking Moves</option>
                <option value="1">${data1.moves[0].move.name}</option>
                <option value="2">${data1.moves[1].move.name}</option>
                <option value="3">${data1.moves[2].move.name}</option>
                <option value="2">${data1.moves[3].move.name}</option>
                <option value="3">${data1.moves[4].move.name}</option>
                </select>
                </div>
                </div>`;

            div2.append(carousel);
          }
          foo1();
        }
      });
    } catch {
      console.log("Somthing went wrong");
    }
  });
}
foo();
