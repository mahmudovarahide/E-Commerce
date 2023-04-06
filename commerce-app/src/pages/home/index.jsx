import React from 'react'
import Carditem from '../../components/card.item';

const Home = () => {
    const categories = [
        {
          id: 1,
          title: "ASUS",
          imgUrl:
            "https://m.media-amazon.com/images/I/4114Rtg3zEL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
          id: 2,
          title: "MacBook",
          imgUrl:
            "https://dlcdnwebimgs.asus.com/gain/5cd95cf4-afde-4319-9d83-d95a6fbaec3f/",
        },
        {
          id: 3,
          title: "Acer",
          imgUrl:
            "https://m.media-amazon.com/images/I/4114Rtg3zEL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
          id: 4,
          title: "Acer",
          imgUrl:
          "https://dlcdnwebimgs.asus.com/gain/5cd95cf4-afde-4319-9d83-d95a6fbaec3f/",
        },
        {
          id: 5,
          title: "MacBook",
          imgUrl:
            "https://dlcdnwebimgs.asus.com/gain/5cd95cf4-afde-4319-9d83-d95a6fbaec3f/",
        },
        {
          id: 6,
          title: "Acer",
          imgUrl:
            "https://m.media-amazon.com/images/I/4114Rtg3zEL._SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
          id: 7,
          title: "MacBook",
          imgUrl:
          "https://dlcdnwebimgs.asus.com/gain/5cd95cf4-afde-4319-9d83-d95a6fbaec3f/",
        },
        {
          id: 8,
          title: "Acer",
          imgUrl:
          "https://dlcdnwebimgs.asus.com/gain/5cd95cf4-afde-4319-9d83-d95a6fbaec3f/",
        },
      ];
  return (
    <section className="categories">
    <div className="container">
      <div className="row">
        {categories.map((category) => {
          return (
            <Carditem key={category.id} category={category}/>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Home