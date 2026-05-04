import { defineLive } from "next-sanity/live";
import { client, sanityConfigured } from "./client";
import { createClient } from "next-sanity";

const liveClient = sanityConfigured
  ? client!
  : createClient({
      projectId: "bbud04i7",
      dataset: "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    });

export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
});
