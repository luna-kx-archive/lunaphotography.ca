import React from "react"

import Layout from "../components/layout"

export const Cityscapes = [
  {
    id: 1,
    name: "2019, Frenco Épicerie.",
    src: "./cityscapes-1.jpg"
  },
  {
    id: 2,
    name: "2019, Rue Bullion.",
    src: "./cityscapes-2.jpg"
  },
  {
    id: 3,
    name: "2018, Somewhere in Vieux-Port.",
    src: "./cityscapes-3.jpg"
  },
  {
    id: 4,
    name: "2018, Silo #5.",
    src: "./cityscapes-4.jpg"
  },
  {
    id: 5,
    name: "2017, Rue Prince apartment.",
    src: "./cityscapes-5.jpg"
  },
  {
    id: 6,
    name: "2017, Rue Prince apartment.",
    src: "./cityscapes-6.jpg"
  }
];

const IndexPage = () => (
  <Layout>
    {Cityscapes.map(image => {
      console.log(image.src);
      return <img key={image.id} src={image.src} alt="can't show image" />;
    })}
  </Layout>
)

export default IndexPage
