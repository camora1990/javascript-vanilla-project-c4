"use strict";

export class IndexView {
  #privateBody;

  constructor() {
    document.title = "Hola Mundo";
    this.#privateBody = document.querySelector("body");
  }

  init( data) {
    this.#createComponent(data)
  }

  #createComponent(data) {
    let div;
    let img;
    let h1;
    let p;
    let btn;

    data.forEach((element) => {
      div = document.createElement("div");
      img = document.createElement("img");
      img.src = element.image
      h1 = document.createElement("h1");
      h1.innerHTML = element.name
      p = document.createElement("p");
      p.innerHTML = `estado: ${element.status} Especie: ${element.species}`
      btn = document.createElement("a")
      btn.innerHTML = "ver mas"
      btn.href = `details.html?id=${element.id}`

      div.append(h1,img,p,btn)
      this.#privateBody.append(div);
    });
  }
}
