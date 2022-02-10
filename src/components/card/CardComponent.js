import React from "react";

export const CardComponent = ({ name, title, description, image }) => pug`
  - var img = image

  div(class="card cardcomponent__card animate__animated animate__backInDown")
    img(src=img class="cardcomponent__card-img" alt="...")

    h5(class="cardcomponent__card-title card-title fw-bold") #{name}

    div(class="card-body text-alig-left")
      h5(class="card-title fw-bold") #{title}
      p(class="card-text") #{description}
`