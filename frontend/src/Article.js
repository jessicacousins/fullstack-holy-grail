import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Article = (props) => {
  return (
    <>
      <article>
        <PlusMinus section="article" handle={props.handle} />
        <div className="section">Article: {props.data.article}</div>
        <Data data={props.data} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          voluptatem sapiente vitae deserunt. Soluta, laborum? Molestiae, ipsum?
          Possimus animi deserunt tempore incidunt iusto pariatur explicabo esse
          error deleniti, sapiente nesciunt saepe accusamus ea quasi mollitia
          quibusdam molestias eaque sunt magnam voluptatum! Porro animi tempore
          consectetur obcaecati eaque at assumenda molestiae dignissimos
          quibusdam ducimus, quam aliquam error a. Laboriosam voluptas quis
          vitae illum, a minus? Recusandae laudantium magni, tempora
          dignissimos, non rerum voluptate dicta ratione sequi cum nobis! Esse
          optio laborum, nobis facilis sapiente soluta saepe iusto velit quasi
          blanditiis autem iure explicabo, eligendi eum quis possimus nemo nisi
          ullam itaque quam provident! Reiciendis, molestias veritatis!
          Dignissimos iste doloribus soluta, distinctio beatae illum hic vitae
          maxime minima sunt neque minus voluptas nobis nesciunt maiores, nam
          quia alias cupiditate consectetur quidem impedit iusto perspiciatis
          magni. Quos nostrum odit cum, assumenda deleniti doloremque doloribus
          impedit accusamus vero corporis sed. Nostrum quasi consectetur
          molestiae aut vero beatae animi cum est aliquam fugit, omnis numquam,
          officia repellendus architecto aperiam cupiditate vitae, laboriosam
          consequatur culpa. Obcaecati, earum. Modi deserunt quisquam officia
          recusandae corporis quidem minus voluptas, pariatur, provident laborum
          quia explicabo quas mollitia placeat tempore nam vel, repudiandae ut
          labore aut at ipsam vitae amet omnis? Nisi provident soluta, quisquam
          veniam error iusto, animi debitis beatae dolore incidunt molestias,
          accusamus fugit illo sapiente dolorum reprehenderit quaerat quia odio
          doloribus mollitia maxime. Provident reiciendis veniam, mollitia sunt
          non tempora alias nostrum repellendus tempore at placeat rerum porro
          vero? Quam ipsa nemo ratione rerum iusto debitis quasi eos. Labore,
          rerum molestias veniam, aperiam voluptates ad officiis itaque quisquam
          eos voluptatum assumenda nesciunt quibusdam ipsa corrupti, iure
          sapiente dolor explicabo! Repellendus quos quisquam, blanditiis nemo
          beatae quae expedita sint sequi odio. Debitis quibusdam sit tempore
          nemo eaque earum dolore. Deserunt quo ex dolores. Sapiente, fugiat
          aperiam. Ullam, in culpa.
        </p>
      </article>
    </>
  );
};

export default Article;
