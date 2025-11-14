import Link from "next/link";
import { Text } from "../configs/text";
import { StrapiImage } from "../../lib/strapi-image";

const styles = {
  aboutUsSection: "aboutUsSection",
  divHeading: "divHeading",
  sectionName: "sectionName",
  heading: "aboutUsHeading",
  mainLink: "mainLink",
  aboutUsBlock: "aboutUsBlock",
  bannersList: "banners-list",
  bannerCard: "banner-card",
  bannerImage: "bannerImage",
  bannerContent: "bannerContent",
  bannerContentLeft: "bannerContent--left",
  bannerContentRight: "bannerContent--right",
  bannerTitle: "bannerTitle",
  bannerSubtitle: "bannerSubtitle",
  bannerLink: "buttonArrow",
  
};

export interface IBannerImage {
  url: string;
  alternativeText?: string | null;
}

export interface IBannerLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface IBanner {
  id: number;
  image: IBannerImage;
  heading: string;
  subHeading?: string | null;
  link?: IBannerLink | null;
  isOnRightSide: boolean;
}

export interface ILinkObj {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface IAboutUsSectionProps {
  id: number;
  __component: string;
  sectionName: string;
  heading: string;
  link?: ILinkObj;
  banner: IBanner[];
}

export function AboutUsSection({ data }: { data: IAboutUsSectionProps }) {
  if (!data) return null;

  const { sectionName, heading, link, banner } = data;

  // Ensure banner is an array
  const bannerList = Array.isArray(banner) ? banner : [];

  return (
    <section className={styles.aboutUsSection}>
      <Text as="h2" className={styles.sectionName}>{sectionName}</Text>
      <div className={styles.divHeading}>
        <Text as="h3" className={styles.heading}>{heading}</Text>

        {link && (
            <div className={styles.mainLink}>
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                className="buttonArrow"
              >
                <Text>{link.label}</Text>
              </Link>
            </div>
          )}
        </div>

      <div className={styles.aboutUsBlock}>
        <div className={styles.bannersList}>
          {bannerList.map(banner => (
            <article
              className={styles.bannerCard}
              key={banner.id}
              data-position={banner.isOnRightSide ? "right" : "left"}
            >
              {/* Background Image */}
              <StrapiImage
                src={banner.image.url}
                alt={banner.image.alternativeText ?? banner.heading}
                className={styles.bannerImage}
                fill
                priority={false}
              />

              {/* Text Content Overlay */}
              <div
                className={`${styles.bannerContent} ${
                  banner.isOnRightSide
                    ? styles.bannerContentRight
                    : styles.bannerContentLeft
                }`}
              >
                <Text as="h3" className={styles.bannerTitle}>
                  {banner.heading}
                </Text>

                {banner.subHeading && (
                  <Text as="p" className={styles.bannerSubtitle}>
                    {banner.subHeading}
                  </Text>
                )}

                {banner.link && (
                  <Link
                    href={banner.link.href}
                    target={banner.link.isExternal ? "_blank" : "_self"}
                    className={styles.bannerLink}
                  >
                    <Text>{banner.link.label}</Text>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutUsSection;
