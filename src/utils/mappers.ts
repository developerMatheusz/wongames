import formatPrice from "./format-price";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const bannerMapper = (banners: any) => {
  return banners.map((banner: any) => ({
    img: `http://localhost:1337${banner.attributes.image?.data.attributes.url}`,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle,
    buttonLabel: banner.attributes.button.label,
    buttonLink: banner.attributes.button.link,
    ...(banner.attributes.ribbon && {
      ribbon: banner.attributes.ribbon.text,
      ribbonColor: banner.attributes.ribbon.color,
      ribonSize: banner.attributes.ribbon.size
    })
  }));
};

export const gamesMapper = (newGame: any) => {
  return (
    newGame &&
    newGame.map((game: any) => ({
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
      cover: game.attributes.cover,
      price: game.attributes.price
    }))
  );
};

export const gamesExplorerMapper = (games: any) => {
  return (
    games &&
    games.map((game: any) => ({
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
      price: game.attributes.price
    }))
  );
};

export const highlightMapper = (highlight: any) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background.data.attributes.url}`,
      floatImage: `http://localhost:1337${highlight.floatImage.data.attributes.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  );
};

export const cartMapper = (games: any) => {
  return games
    ? games.map((game: any) => ({
        id: game.attributes.id,
        img: `http://localhost:1337/${game.attributes.cover.data.attributes.url}`,
        price: formatPrice(game.attributes.price),
        title: game.attributes.name
      }))
    : [];
};
