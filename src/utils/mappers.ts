import formatPrice from "./format-price";
import { getImageUrl } from "./getImageUrl";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const bannerMapper = (banners: any) => {
  return banners.map((banner: any) => ({
    img: `${getImageUrl(banner.attributes.image?.data.attributes.url)}`,
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
      id: game.id,
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `${getImageUrl(game.attributes.cover.data.attributes.url)}`,
      cover: game.attributes.cover,
      price: game.attributes.price
    }))
  );
};

export const gamesExplorerMapper = (games: any) => {
  return (
    games &&
    games.map((game: any) => ({
      id: game.id,
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `${getImageUrl(game.attributes.cover.data.attributes.url)}`,
      price: game.attributes.price
    }))
  );
};

export const highlightMapper = (highlight: any) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `${getImageUrl(
        highlight.background.data.attributes.url
      )}`,
      floatImage: `${getImageUrl(highlight.floatImage.data.attributes.url)}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  );
};

export const cartMapper = (games: any) => {
  return games?.map((game: any) => ({
    id: game.id,
    img: `${getImageUrl(game.attributes.cover.data.attributes.url)}`,
    price: formatPrice(game.attributes.price),
    title: game.attributes.name
  }));
};

export const ordersMapper = (orders: any) => {
  return orders
    ? orders.map((order: any) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.attributes.card_brand,
            img: order.attributes.card_brand
              ? `/img/cards/${order.attributes.card_brand}.png`
              : null,
            number: order.attributes.card_last4
              ? `**** **** **** ${order.attributes.card_last4}`
              : "Free Game",
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric"
            }).format(new Date(order.attributes.createdAt))}`
          },
          games: order.attributes.games.data.map((game: any) => ({
            id: game.id,
            title: game.attributes.name,
            downloadLink:
              "https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf",
            img: `${getImageUrl(game.attributes.cover.data.attributes.url)}`,
            price: formatPrice(game.attributes.price)
          }))
        };
      })
    : [];
};
