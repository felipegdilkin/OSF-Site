import Link from "next/link";
import type { TImage, TLink } from "@/types";
import { StrapiImage } from "../../lib/strapi-image";
import { Text } from "../configs/text";

export interface IHeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: TImage;
  link: TLink;
}

const styles = {
  heroSection: "heroSection",
  heroBox: "heroBox",
  heading: "heroTitle",
  subheading: "heroSubTitle",
  button: "buttonArrow",
};

export function HeroSection({ data }: { data: IHeroSectionProps }) {
  if (!data) return null;

  const { heading, subHeading, image, link } = data;

  console.dir(data, { depth: null });
  return (
    <header className={styles.heroSection}>
      <StrapiImage
        alt={image.alternativeText ?? "no alternative text"}
        className="heroBG" src={image.url} height={1080} width={1920}
      />
      <div className={styles.heroBox}>
        <Text as="h1" className={styles.heading}>{heading}</Text>
        <Text as="p" className={styles.subheading}>{subHeading}</Text>
        <Link className={styles.button} href={link.href}>
          <Text>{link.label}</Text>
        </Link>
      </div>
    </header>
  );
}