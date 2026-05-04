import { client } from "./client";

export async function getSiteSettings() {
  if (!client) return null;
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getServices() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      "id": _id,
      name,
      tagline,
      description,
      icon,
      "slug": slug.current,
      featured
    }`
  );
}

export async function getFeaturedServices() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "service" && featured == true] | order(order asc)[0...6] {
      "id": _id,
      name,
      tagline,
      icon,
      "slug": slug.current
    }`
  );
}

export async function getTestimonials() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt asc)[0...6] {
      "id": _id,
      customerName,
      location,
      quote,
      rating
    }`
  );
}

export async function getGalleryItems() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "galleryItem"] | order(order asc) {
      "_id": _id,
      title,
      description,
      category,
      "imageUrl": image.asset->url,
      "beforeImageUrl": beforeImage.asset->url
    }`
  );
}
