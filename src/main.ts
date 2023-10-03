import Aurelia /*, { StyleConfiguration }*/ from "aurelia";
import { MyApp } from "./my-app";
import { RouterConfiguration } from "@aurelia/router";
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.css';

Aurelia
  /*
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  */
  .register(
    RouterConfiguration.customize({
      useDirectRouting: true,
      useUrlFragmentHash: false,
    })
  )
  .app(MyApp)
  .start();
