//------------------------------------------------------------------------------
// This function runs in the server side, it fetches the gallery from the
// resources folder
//------------------------------------------------------------------------------

export default async function getGallery(): Promise<Shared.GalleryItem[]> {
  return await require('resources/gallery.json');
}
