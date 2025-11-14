import qs from "qs";
import type { TStrapiResponse, THomePage, TGlobalData } from "@/types";

import { api } from "@/app/data/data-api";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function getHomePageData(): Promise<TStrapiResponse<THomePage>> {
  const query = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.brandsBar-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  });

  const url = new URL("/api/home-page", baseUrl);
  url.search = query;
  return api.get<THomePage>(url.href);
}

async function getGlobalData(): Promise<TStrapiResponse<TGlobalData>> {
  // Strapi v5 syntax - populate all nested components with *
  const query = qs.stringify({
    populate: {
      Menu: {
        populate: {
          logo: {
            populate: "*",
          },
          menuCategory: {
            populate: {
              pannelCategories: {
                populate: "*",
              },
              pannelBanners: {
                populate: {
                  categoryBanner: {
                    populate: "*",
                  },
                },
              },
            },
          },
          searchButton: {
            populate: "*",
          },
          colorThemeSwitch: {
            populate: "*",
          },
          contactButton: {
            populate: "*",
          },
          languageSwitch: {
            populate: {
              language: {
                populate: "*",
              },
            },
          },
        },
      },
      Footer: {
        populate: {
          logo: {
            populate: "*",
          },
          socialMedias: {
            populate: {
              socialIcon: {
                populate: "*",
              },
            },
          },
          link: {
            populate: "*",
          },
          FooterCategories: {
            populate: "*",
          },
          FooterBar: {
            populate: "*",
          },
        },
      },
    },
  });

  const url = new URL("/api/global", baseUrl);
  url.search = query;
  return api.get<TGlobalData>(url.href);
}

export const loaders = {
  getHomePageData,
  getGlobalData,
};