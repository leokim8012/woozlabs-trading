export = Banner;
export as namespace Banner;

declare namespace Banner {
  interface ImageBanner {
    title: string;
    id: string;
    src: string;
    bgColor: string;
  }
}

export default Banner;
