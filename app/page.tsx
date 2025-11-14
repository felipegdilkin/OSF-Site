import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

import { HeroSection } from "@/components/custom/hero-section";
import { ClientsSection } from "@/components/custom/clients-section";
import { IndustriesSection } from "@/components/custom/industries-section";
import { ServicesSection } from "@/components/custom/services-section";
import { AboutUsSection } from "@/components/custom/about-us-section";
import { InsightsSection } from "@/components/custom/insights-section";
import { FormsSection } from "@/components/custom/forms-section";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero-section": {
          populate: {
            image: { fields: ["url", "alternativeText"] },
            link: { populate: true },
          },
        },
        "layout.clients-section": {
          populate: {
            image: { fields: ["url", "alternativeText"] },
          },
        },
        "layout.industries-section": {
          populate: {
            FirstCard: {
              populate: {
                image: { fields: ["url", "alternativeText"] },
                link: { populate: true }
              }
            },
            SecondCard: {
              populate: {
                image: { fields: ["url", "alternativeText"] },
                link: { populate: true }
              }
            },
            ThirdCard: {
              populate: {
                image: { fields: ["url", "alternativeText"] },
                link: { populate: true }
              }
            },
            SideCards: { 
              populate: {
                icon: { fields: ["url", "alternativeText"] },
              } 
            },
            link: { populate: true }
          },
        },
        "layout.services-section": {
          populate: {
            serviceItem: {
              populate: {
                icon: { fields: ["url", "alternativeText"] },
                inlineLink: { populate: true }
              }
            },
            link: { populate: true }
          },
        },
        "layout.about-us-section": {
          populate: {
            banner: {
              populate: {
                image: { fields: ["url", "alternativeText"] },
                link: { populate: true }
              }
            },
            link: { populate: true }
          }
        },
        "layout.insights-section": {
          populate: {
            tab: {
              populate: {
                cardInsight: {
                  populate: {
                    image: { fields: ["url", "alternativeText"] },
                    link: { populate: true }
                  }
                },
                link: { populate: true }
              }
            }
          }
        },
        "layout.forms-section": {
          populate: {
            infoContact: {
              populate: {
                contactInfo: { populate: true },
                link: { populate: true }
              }
            },
          }
        },

      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = getStrapiURL();
  const url = new URL(path, baseUrl);
  url.search = homePageQuery;
  
  console.log('Fetching URL:', url.href); // Debug: ver a URL completa
  
  try {
    const response = await fetch(url.href, {
      next: { revalidate: 0 }, // Desabilita cache
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error('Response not ok:', response.status, response.statusText);
      const text = await response.text();
      console.error('Response body:', text);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Data received:', data); // Debug: ver dados recebidos
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

export default async function Home() {
  try {
    const strapiData = await getStrapiData("/api/home-page");
    console.log('Initial strapiData:', strapiData); // Debug log
    
    if (!strapiData) {
      return <main>Error: No data received from API</main>;
    }
    
    if (!strapiData.data) {
      return <main>Error: No data property in response</main>;
    }
    
    if (!strapiData.data.blocks) {
      return <main>Error: No blocks found in data</main>;
    }
    
    const { blocks } = strapiData.data;
    
    return (
      <main>
      {blocks.map((block: any) => {
        switch (block.__component) {
          case "layout.hero-section":
          return <HeroSection key={block.id} data={block} />;
          case "layout.clients-section":
          return <ClientsSection key={block.id} data={block} />;
          case "layout.industries-section":
          return <IndustriesSection key={block.id} data={block} />;
          case "layout.services-section":
          return <ServicesSection key={block.id} data={block} />;
          case "layout.about-us-section":
          return <AboutUsSection key={block.id} data={block} />;
          case "layout.insights-section":
          return <InsightsSection key={block.id} data={block} />;
          case "layout.forms-section":
          return <FormsSection key={block.id} data={block} />;
          default:
          console.log('Unknown block type:', block.__component);
          return null;
        }
      })}
      </main>
    );
  } catch (error) {
    console.error('Error in Home component:', error);
    return <main>Error: Something went wrong</main>;
  }
  // ...existing code...
}