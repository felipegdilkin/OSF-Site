import Link from "next/link";
import { Text } from "../configs/text";
import { StrapiImage } from "../../lib/strapi-image";

const styles = {
    servicesSection: "servicesSection",
    contentServices: "contentServices",
    sectionName: "sectionName",
    heading: "servicesHeading",
    servicesButton: "servicesButton",
    mainLink: "buttonArrow",

    servicesBlock: "servicesBlock",
    servicesList: "services-list",
    serviceCard: "service-card",
    serviceIcon: "serviceIcon",
    serviceTitle: "serviceTitle",
    serviceDescription: "serviceDescription",
    inlineLink: "inlineButton",
   
};

export interface IServiceIcon {
    url: string;
    alternativeText?: string | null;
}

export interface IServiceItem {
    id: number;
    icon?: IServiceIcon | null;
    title: string;
    description: string;
    inlineLink?: {
        href: string;
        label: string;
        isExternal: boolean;
    } | null;
}

export interface ILinkObj {
    href: string;
    label: string;
    isExternal: boolean;
}

export interface IServicesSectionProps {
    id: number;
    __component: string;
    sectionName: string;
    heading: string;
    link?: ILinkObj;
    serviceItem: IServiceItem[];
}

export function ServicesSection({ data }: { data: IServicesSectionProps }) {
    if (!data) return null;
    
    const { sectionName, heading, link, serviceItem } = data;
    
    // safety: take first three items if backend sends more
    const items = Array.isArray(serviceItem) ? serviceItem.slice(0, 3) : [];
    
    return (
        <section className={styles.servicesSection}>
            <div className={styles.contentServices}>
                <Text as="h2" className={styles.sectionName}>{sectionName}</Text>
                <Text as="h3" className={styles.heading}>{heading}</Text>
                
                {link && (
                    <div className={styles.servicesButton}>
                    <Link href={link.href} target={link.isExternal ? "_blank" : "_self"} className={styles.mainLink}>
                    <Text>{link.label}</Text>
                    </Link>
                    </div>
                )}
                
                <div className={styles.servicesBlock}>
                    {items.map(item => (
                        <article className={styles.serviceCard} key={item.id}>
                        {item.icon && (
                            <StrapiImage
                            src={item.icon.url}
                            alt={item.icon.alternativeText ?? item.title}
                            className={styles.serviceIcon}
                            width={56}
                            height={56}
                            />
                        )}
                        
                        <Text as="h4" className={styles.serviceTitle}>{item.title}</Text>
                        <Text as="p" className={styles.serviceDescription}>{item.description}</Text>
                        
                        {item.inlineLink && (
                            <Link
                            href={item.inlineLink.href}
                            target={item.inlineLink.isExternal ? "_blank" : "_self"}
                            className={styles.inlineLink}
                            >
                            <Text>{item.inlineLink.label}</Text>
                            </Link>
                        )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
