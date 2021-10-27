declare namespace Shared {
  interface GalleryItem {
    id: number;
    title: string;
    url: string;
    group: string[];
    loader: [string, number, number];
  }
}
