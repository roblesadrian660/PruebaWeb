import React from "react";
import { CardComponent } from "../card/CardComponent";
import { Carousel } from '@trendyol-js/react-carousel';

export const CarouselComponet = () => {

  const Json = [
    {
       "id":"1",
       "name":"Desarrollador 1",
       "title":"Desarrollador 1",
       "description":"signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo",
       "image":"https://www.qualitydevs.com/wp-content/uploads/2017/12/desarrollador-1288x724.jpg"
    },
    {
       "id":"2",
       "name":"Desarrollador 2",
       "title":"Desarrollador 2",
       "description":"signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo",
       "image":"https://webescuela.com/wp-content/uploads/2020/08/desarrollador-web.png"
    },
    {
       "id":"3",
       "name":"Desarrollador 3",
       "title":"Desarrollador 3",
       "description":"signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo",
       "image":"https://www.tokioschool.com/wp-content/uploads/2020/10/Formaciones-ID-Tokio.xlsx.jpg"
    },
    {
       "id":"4",
       "name":"Desarrollador 4",
       "title":"Desarrollador 4",
       "description":"signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo",
       "image":"https://www.comunicare.es/wp-content/uploads/2021/09/desarrollador-web-2.jpg"
    }
 ]

  return (
    <Carousel swiping={true} show={3} slide={2} transition={0.5} >
    {
      Json.map((item) => (
      <CardComponent key={item.id} {...item} />
      ))
    }
    </Carousel>
  );
};
