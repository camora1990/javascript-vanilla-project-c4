"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { UserModel } from "../model/user.model.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class detailsController {
  #privateUser;
  #privateRickAndMortyURL;
  #privateView;
  #RickAndMortyService;

  constructor() {
    this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
    this.#privateUser = new UserModel();
    this.#privateUser.Name = "Julian";
    this.#privateUser.Lastname = "Lasso";
    // this.#privateView = new IndexView(); cambiar por vista details (Crearla)
    this.#RickAndMortyService = new RickAndMortyService(
      this.#privateRickAndMortyURL
    );
    
  }

  async init() {
    debugger
    const params = new URLSearchParams(window.location.search)
    const chacter = await this.#RickAndMortyService.characterByid(params.get("id"));
    debugger
    // const characters = [];
    // characters.push(chacter)
    // this.#privateView.init(characters); llaman la funcion que crea el componente
  }
}

const index = new detailsController();
index.init();
