"use client";

import { useState } from "react";
import Link from "next/link";
import { Text } from "../configs/text";
import { StrapiImage } from "../../lib/strapi-image";

const styles = {
  insightsSection: "insightsSection",
  heading: "insightsHeading",
  tabsContainer: "tabsContainer",
  tabsNav: "tabsNav",
  tabButton: "tabButton",
  tabButtonActive: "tabButton--active",
  tabContent: "tabContent",
  cardsContainer: "insightCards",
  cardInsight: "cardInsight",
  cardImage: "cardInsightImage",
  cardData: "cardInsightData",
  cardInsightsContents: "cardInsightsContents",
  cardTitle: "cardInsightTitle",
  cardDescription: "cardInsightDescription",
  cardLink: "buttonArrow",
  tabFooterLink: "tabFooterLink",
};

export interface ICardInsightImage {
  url: string;
  alternativeText?: string | null;
}

export interface ICardInsightLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface ICardInsight {
  id: number;
  image: ICardInsightImage;
  data: string; // date or data label
  title: string;
  description: string;
  link?: ICardInsightLink | null;
}

export interface ITabLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface ITab {
  id: number;
  tabName: string;
  cardInsight: ICardInsight[];
  link?: ITabLink | null;
}

export interface IInsightsSectionProps {
  id: number;
  __component: string;
  heading: string;
  tab: ITab[];
}

export function InsightsSection({ data }: { data: IInsightsSectionProps }) {
  if (!data) return null;

  const { heading, tab } = data;
  const [activeTabId, setActiveTabId] = useState<number>(tab?.[0]?.id ?? 0);

  // Ensure tab is an array
  const tabList = Array.isArray(tab) ? tab : [];
  const activeTab = tabList.find(t => t.id === activeTabId);

  // Get up to 3 cards from the active tab
  const cards = activeTab?.cardInsight
    ? (Array.isArray(activeTab.cardInsight)
        ? activeTab.cardInsight.slice(0, 3)
        : [activeTab.cardInsight])
    : [];

  return (
    <section className={styles.insightsSection}>
      <Text as="h2" className={styles.heading}>{heading}</Text>

      <div className={styles.tabsContainer}>
        {/* Tab Navigation */}
        <div className={styles.tabsNav}>
          {tabList.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTabId === tab.id ? styles.tabButtonActive : ""
              }`}
              onClick={() => setActiveTabId(tab.id)}
            >
              <Text>{tab.tabName}</Text>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          <div className={styles.cardsContainer}>
            {cards.map(card => (
              <article className={styles.cardInsight} key={card.id}>
                {card.image && (
                  <StrapiImage
                    src={card.image.url}
                    alt={card.image.alternativeText ?? card.title}
                    className={styles.cardImage}
                    width={280}
                    height={180}
                  />
                )}

                <div className={styles.cardData}>
                  <Text>{card.data}</Text>
                </div>

                <div className={styles.cardInsightsContents}>
                    <Text as="h3" className={styles.cardTitle}>
                    {card.title}
                    </Text>

                    <Text as="p" className={styles.cardDescription}>
                    {card.description}
                    </Text>

                    {card.link && (
                    <Link
                        href={card.link.href}
                        target={card.link.isExternal ? "_blank" : "_self"}
                        className={styles.cardLink}
                    >
                        <Text>{card.link.label}</Text>
                    </Link>
                    )}
                </div>
              </article>
            ))}
          </div>

          {/* Tab Footer Link */}
          {activeTab?.link && (
            <div className={styles.tabFooterLink}>
              <Link
                href={activeTab.link.href}
                target={activeTab.link.isExternal ? "_blank" : "_self"}
                className="buttonOutline"
              >
                <Text>{activeTab.link.label}</Text>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
