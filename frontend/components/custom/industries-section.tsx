import Link from "next/link";
import { Text } from "../configs/text";

const styles = {
    industriesSection: "industriesSection",
    sectionName: "sectionName textCenter",
    heading: "industriesHeading",
    subHeading: "industriesSubHeading",
    cardsBlock: "cardsBlock",
    industryCards: "industry-cards",
    contentCard: "content-card",
    cardTitle: "cardTitle",
    cardDescription: "cardDescription",
    sideCards: "sideCards",
    sideLabel: "sideLabel",
    sideLink: "sideLink",
    industriesLink: "industries-link",
    sideAllLink: "sideAllLink buttonArrow"
};

import { StrapiImage } from "../../lib/strapi-image";

export interface IIndustryCard {
    id: number;
    image: {
        url: string;
        alternativeText?: string | null;
    };
    title: string;
    description: string;
    link: {
        href: string;
        label: string;
        isExternal: boolean;
    };
}

export interface ISideCard {
    id: number;
    href: string;
    label: string;
    isExternal: boolean;
    icon: {
        url: string;
        alternativeText?: string | null;
    };
}

export interface IIndustriesSectionProps {
    id: number;
    __component: string;
    heading: string;
    sectionName: string;
    subHeading: string | null;
    FirstCard: IIndustryCard;
    SecondCard: IIndustryCard;
    ThirdCard: IIndustryCard;
    SideCards: ISideCard[];
    link: ISideCard;
}

export function IndustriesSection({ data }: { data: IIndustriesSectionProps }) {
    if (!data) return null;
    const {
        heading,
        sectionName,
        subHeading,
        FirstCard,
        SecondCard,
        ThirdCard,
        SideCards,
        link,
    } = data;
    
    return (
        <section className={styles.industriesSection}>
            <Text as="h2" className={styles.sectionName}>{sectionName}</Text>
            <Text as="h3" className={styles.heading}>{heading}</Text>
            {subHeading && <Text as="p" className={styles.subHeading}>{subHeading}</Text>}
            
            <div className={styles.cardsBlock}>
                <div className={styles.industryCards}>
                {[FirstCard, SecondCard, ThirdCard].map((card) => (
                    <div className={styles.contentCard} key={card.id}>
                        <StrapiImage src={card.image.url} alt={card.image.alternativeText ?? "no alternative text"} className="industryCardImage" height={120} width={120}/>
                        <Text as="h4" className={styles.cardTitle}>{card.title}</Text>
                        <Text as="p" className={styles.cardDescription}>{card.description}</Text>
                        <Link href={card.link.href} target={card.link.isExternal ? "_blank" : "_self"} className="industryCardLink buttonArrow">
                        <Text>{card.link.label}</Text>
                        </Link>
                    </div>
                ))}
                </div>
                
                <div className={styles.sideCards}>
                    {SideCards.map(card => (
                        <Link key={card.id} href={card.href} target={card.isExternal ? "_blank" : "_self"} className={styles.sideLink}>
                            {card.icon && (
                                <StrapiImage
                                    src={card.icon.url}
                                    alt={card.icon.alternativeText ?? "icon"}
                                    className="sideCardIcon"
                                    height={24}
                                    width={24}
                                />
                            )}
                            <Text className={styles.sideLabel}>{card.label}</Text>
                        </Link>
                    ))}
                    <div className={styles.industriesLink}>
                        <Link href={link.href} target={link.isExternal ? "_blank" : "_self"} className={styles.sideAllLink}>
                            <Text>{link.label}</Text>
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
}