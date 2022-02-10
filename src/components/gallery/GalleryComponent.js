import React from "react";

export const GalleryComponent = () => pug `
  div(class="container-flex")
    h4(class="fw-bold ms-2") Interesting stuff

    div(class="container-flex")
      div(class="d-flex flex-row bd-highlight mb-3")
        div(class="row")
          div(class="col-sm-6 col-md-6 col-lg-6")
            img(class="bodycontainer__card-img mt-2", src="./assets/images/pic01.jpg", alt="...")

          div(class="col-sm-6 col-md-6 col-lg-6")
            img(class="bodycontainer__card-img mt-2", src="./assets/images/pic02.jpg", alt="...")

          div(class="col-sm-6 col-md-6 col-lg-6")
            img(class="bodycontainer__card-img mt-2", src="./assets/images/pic03.jpg", alt="...")

          div(class="col-sm-6 col-md-6 col-lg-6")
            img(class="bodycontainer__card-img mt-2", src="./assets/images/pic05.jpg", alt="...")

    div(class="container-flex ms-2")
      button(class="btn fs-6 btn-primary w-15 pt-2 pb-2 ps-4 pe-4")
        i(class="fas fa-file-alt me-1")
        span More
`;