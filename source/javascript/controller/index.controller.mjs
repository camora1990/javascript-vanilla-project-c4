"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { UserModel } from "../model/user.model.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class IndexController {
    #privateUser;
    #privateRickAndMortyURL;
    #privateView;
    #RickAndMortyService

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateUser = new UserModel();
        this.#privateUser.Name = "Julian";
        this.#privateUser.Lastname = "Lasso";
        this.#privateView = new IndexView();
        this.#RickAndMortyService = new RickAndMortyService(this.#privateRickAndMortyURL)
    }

    async init() {
        const characters = await this.#RickAndMortyService.characters
        this.#privateView.init( characters);
    }
}

const index = new IndexController();
index.init();