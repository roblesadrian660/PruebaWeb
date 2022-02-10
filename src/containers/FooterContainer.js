import React from "react";

export const FooterContainer = () => pug `
  div(class="footercontainer__main")
    div(class="footercontainer__main-content")
      footer(class="text-center text-lg-start text-black")
        div(class="container-fluid p-4 pb-0")
          section(class="")
            div(class="row justify-content-center")
              div(class="col-lg-4 col-md-6 mb-4 mb-md-0")
                h5(class="footercontainer__text-uppercase")
                  | COMPANY NAME

                p(class="footercontainer__text-descrip")
                  | Un nombre comercial es un seud&oacute;nimo usado por empresas para
                  | desempe&ntilde;ar su negocio bajo un nombre que difiere del nombre
                  | legal registrado del negocio , distingui&eacute;ndolos de otras
                  | empresas que realizan actividades similares

              div(class="col-lg-2 col-md-6 mb-4 mb-md-0")
                h5(class="footercontainer__text-uppercase") Products
                ul(class="list-unstyled mb-0")
                  li
                    a(class="link" href="#!") MDBootstrap

                  li
                    a(class="link" href="#!") MDWordPress

                  li
                    a(class="link" href="#!") BrandFlow

                  li
                    a(class="link" href="#!") Bootstrap React

              div(class="col-lg-2 col-md-6 mb-4 mb-md-0")
                h5(class="footercontainer__text-uppercase")
                  | Useful links

                ul(class="list-unstyled mb-0")
                  li
                    a(class="link" href="#!") Your Account

                  li
                    a(class="link" href="#!") Become an Affiliate

                  li
                    a(class="link" href="#!") Shipping Rates

                  li
                    a(class="link" href="#!") Help

          hr(class="mb-2")
          section(class="mb-2 text-center")
            a(class="btn btn-outline-light btn-floating m-1" href="#!" role="button")
              i(class="fab fa-facebook-f")
            
            a(class="btn btn-outline-light btn-floating m-1" href="#!" role="button")
              i(class="fab fa-instagram")

            a(class="btn btn-outline-light btn-floating m-1" href="#!" role="button")
              i(class="fab fa-linkedin-in")

            a(class="btn btn-outline-light btn-floating m-1" href="#!" role="button")
              i(class="fab fa-github")
              
            a(class="btn btn-outline-light btn-floating m-1" href="#!" role="button")
              i(class="fab fa-twitter")
`;