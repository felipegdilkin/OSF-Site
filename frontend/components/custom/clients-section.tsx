import Link from "next/link";
import type { TImage } from "@/types";
import { StrapiImage } from "../../lib/strapi-image";
import { Text } from "../configs/text";

export interface IClientsSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  image: TImage;
}

const styles = {
  clientsSec: "clientsSec textCenter",
  clientsBox: "clientsBox",
  clientsTitle: "sectionName textCenter",
};

export function ClientsSection({ data }: { data: IClientsSectionProps }) {
  if (!data) return null;

  const { heading, image } = data;

  console.dir(data, { depth: null });
  return (
    <section className={styles.clientsSec}>
      <Text as="h1" className={styles.clientsTitle}>{heading}</Text>
      <div className={styles.clientsBox}>
        <StrapiImage 
          alt={image.alternativeText ?? "no alternative text"} 
          className="logosbar" 
          src={image.url} 
          height={108}
          width={3118}
        />
      </div>
    </section>
  );
}