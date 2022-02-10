import React from "react";

import { NavComponent } from "../components/nav/NavComponent";

export const HeaderContainer = () => pug `
  div(class="headercontainer__main")
    div(class="headercontainer__main-content")
      div(class="row mt-2")
        NavComponent

      div(class="row mt-5")
        div(class="col-12")
          div(class="card")
            div(class="card-body text-alig-left")
              div(class="row")
                div(class="col-lg-7 col-md-6 mb-4 mb-md-0")
                  h3(class="headercontainer__card-title fw-bold")
                    | HI. This is Lorem

                  p(class="headercontainer__card-text")
                    | Lorem ipsum es simplemente el rexto de relleno de las
                    | imprentas y archivos de texto

                div(class="col-lg-5 col-md-6 mb-4 mb-md-0")
                  button(class="btn fs-4 btn-primary w-100")
                    span Ok let&apos;s go
                    i(class="fas fa-arrow-circle-right ms-4")

                  br

                  button(class="btn fs-4 btn-primary w-100")
                    span More info
                    i(class="fas fa-question-circle ms-4")
`;