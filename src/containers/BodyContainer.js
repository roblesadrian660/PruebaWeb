import React from "react";
import { GalleryComponent } from "../components/gallery/GalleryComponent";
import { CarouselComponet } from "../components/carousel/CarouselComponet";

export const BodyContainer = () => pug `
  div(class="bodycontainer__main mt-2 mb-2")
    div(class="bodycontainer__main-content")
      div(class="row mt-4 mb-3")
        div(class="col-12")
          CarouselComponet

      div(class="row mt-5")
        div(class="col-lg-4 col-md-6 mb-4 mb-md-0")
          GalleryComponent 

        div(class="col-lg-8 col-md-6 mb-4 mb-md-0")
          h4(class="fw-bold ms-2") Significado de Desarrollo

          div(class="container-flex")
            p(class="mt1")
              | Desarrollo significa crecimiento, aumento, reforzamiento, progreso, desenvolvimiento o evolución de algo. Designa la acción y efecto de desarrollar o desarrollarse. El concepto de desarrollo hace referencia a un proceso en desenvolvimiento, sea que se trate de un asunto de orden físico, moral o intelectual, por lo cual puede aplicar a una tarea, una persona, una sociedad, un país o cualquier otra cosa.
            
            p(class="mt1")
              | Podemos hablar de desarrollo cuando nos referimos a la ejecución de una tarea o la realización de una idea. Por ejemplo, el desarrollo de un proyecto, de un entrenamiento, de un concurso o de cualquier tipo de actividad.
          
          div(class="container-flex")
            button(class="btn fs-6 btn-primary w-15 pt-2 pb-2 ps-4 pe-4")
              i(class="fas fa-arrow-alt-circle-right me-1")
              span Continue Reading
`;