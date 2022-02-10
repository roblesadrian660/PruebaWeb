import React from "react";


export const NavComponent = () => pug `
  div(class="col-lg-4 col-md-6 mb-6 mb-md-0 text-alig-left")
    h1(class="headercontainer__titulo") DEVELOPER

  div(class="col-lg-8 col-md-6 mb-6 mb-md-0 text-alig-right")
    ul(class="headercontainer__nav d-flex justify-content-end")
      li
        a(href="#!") Welcome

      li
        a(href="#!") Dropdown

      li
        a(href="#!") Left Sidebar

      li
        a(href="#!") Right Sidebar
`;
