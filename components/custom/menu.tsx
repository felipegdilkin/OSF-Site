"use client";

import { useState } from "react";
import Link from "next/link";
import { Text } from "@/components/configs/text";
import { StrapiImage } from "@/lib/strapi-image";
import type { TMenuData } from "@/types";

export function Menu({ data }: { data: TMenuData }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Safety check
  if (!data || !data.menuCategory) {
    console.error("Menu: Invalid data structure", data);
    return null;
  }

  const styles = {
    menu: "menu",
    menuContainer: "menuContainer",
    menuLeft: "menuLeft",
    menuLogo: "menuLogo",
    menuLogoImage: "menuLogoImage",
    menuCenter: "menuCenter",
    menuCategory: "menuCategory",
    menuCategoryActive: "menuCategoryButton--active",
    menuRight: "menuRight",
    menuButton: "menuButton",
    contactButton: "buttonGreen contactButton",
    languageSwitch: "languageSwitch",
    languageList: "languageList",
    languageItem: "languageItem",
    expandPanel: "expandPanel",
    panelContent: "panelContent",
    panelLeft: "panelLeft",
    categoryLinks: "categoryLinks",
    categoryLink: "categoryLink",
    linkToAll: "buttonOutline linkToAll",
    panelRight: "panelRight",
    bannerHeading: "bannerHeading",
    bannerSubheading: "bannerSubheading",
    panelBanners: "panelBanners",
    menuBannerItem: "menuBannerItem",
    menuBannerImage: "menuBannerImage",
    bannerText: "bannerText",
    menuOverlay: "menuOverlay",
  };

  const activeData = data.menuCategory.find(
    (cat) => cat.categoryName === activeCategory
  );

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menuContainer}>
        {/* Logo Section */}
        <div className={styles.menuLeft}>
          <Link
            href={data.logo?.href || "/"}
            className={styles.menuLogo}
            target={data.logo?.isExternal ? "_blank" : undefined}
          >
            {(data.logo?.logo || data.logo?.image) && (
              <StrapiImage
                src={(data.logo.logo || data.logo.image)!.url}
                alt={(data.logo.logo || data.logo.image)!.alternativeText || "Logo"}
                width={40}
                height={40}
                className={styles.menuLogoImage}
              />
            )}
            {data.logo?.label && <Text as="span">{data.logo.label}</Text>}
          </Link>
        </div>

        {/* Menu Categories */}
        <div className={styles.menuCenter}>
          {data.menuCategory.map((category) => {
            const isActive = activeCategory === category.categoryName;
            return (
              <button
                key={category.categoryName}
                className={`${styles.menuCategory} ${
                  isActive ? styles.menuCategoryActive : ""
                }`}
                aria-expanded={isActive ? "true" : "false"}
                aria-controls={`panel-${category.categoryName.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() =>
                  setActiveCategory(isActive ? null : category.categoryName)
                }
              >
                <span>{category.categoryName}</span>
                <svg
                  className="menuArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className={styles.menuRight}>
          {data.searchButton && (
            <button className={styles.menuButton}>
              {data.searchButton.icon && (
                <StrapiImage
                  src={data.searchButton.icon.url}
                  alt="Search"
                  width={24}
                  height={24}
                />
              )}
            </button>
          )}

          {data.colorThemeSwitch && (
            <button className={styles.menuButton}>
              {data.colorThemeSwitch.icon && (
                <StrapiImage
                  src={data.colorThemeSwitch.icon.url}
                  alt={data.colorThemeSwitch.label || "Theme Switch"}
                  width={24}
                  height={24}
                />
              )}
            </button>
          )}

          {data.contactButton && (
            <Link
              href={data.contactButton.href || "#"}
              className={styles.contactButton}
              target={data.contactButton.isExternal ? "_blank" : undefined}
            >
              {data.contactButton.icon && (
                <StrapiImage
                  src={data.contactButton.icon.url}
                  alt="Contact"
                  width={24}
                  height={24}
                />
              )}
              {data.contactButton.label && (
                <Text as="span">{data.contactButton.label}</Text>
              )}
            </Link>
          )}

          {data.languageSwitch && data.languageSwitch.language.length > 0 && (
            <div className={styles.languageSwitch}>
              <ul className={styles.languageList}>
                {data.languageSwitch.language.map((lang, index) => (
                  <li key={index} className={styles.languageItem}>
                    <Link href={lang.href || "#"}>
                      {lang.flagIcon && (
                        <StrapiImage
                          src={lang.flagIcon.url}
                          alt={lang.languageName}
                          width={20}
                          height={20}
                        />
                      )}
                      <Text as="span">{lang.languageName}</Text>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Expandable Panel */}
      {activeData && (
        <div className={styles.expandPanel}>
          <div className={styles.panelContent}>
            {/* Left Panel - 25% */}
            <div className={styles.panelLeft}>
              <ul className={styles.categoryLinks}>
                {activeData.pannelCategories.categoryLink.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href || "#"}
                      className={styles.categoryLink}
                      target={link.isExternal ? "_blank" : undefined}
                    >
                      <Text as="span">{link.label}</Text>
                    </Link>
                  </li>
                ))}
              </ul>
              {activeData.pannelCategories.linkToAll && (
                <Link
                  href={activeData.pannelCategories.linkToAll.href || "#"}
                  className={styles.linkToAll}
                  target={
                    activeData.pannelCategories.linkToAll.isExternal
                      ? "_blank"
                      : undefined
                  }
                >
                  <Text as="span">
                    {activeData.pannelCategories.linkToAll.label}
                  </Text>
                </Link>
              )}
            </div>

            {/* Right Panel - 75% */}
            <div className={styles.panelRight}>
              {activeData.pannelBanners.heading && (
                <Text as="h4" className={styles.bannerHeading}>
                  {activeData.pannelBanners.heading}
                </Text>
              )}
              {activeData.pannelBanners.subHeading && (
                <Text as="p" className={styles.bannerSubheading}>
                  {activeData.pannelBanners.subHeading}
                </Text>
              )}
              {activeData.pannelBanners.categoryBanner.length > 0 && (
                <div className={styles.panelBanners}>
                  {activeData.pannelBanners.categoryBanner.map(
                    (banner, index) => (
                      <Link
                        key={index}
                        href={banner.href || "#"}
                        className={styles.menuBannerItem}
                        target={banner.isExternal ? "_blank" : undefined}
                      >
                        {banner.image && (
                          <StrapiImage
                            src={banner.image.url}
                            alt={banner.image.alternativeText || banner.heading}
                            width={300}
                            height={200}
                            className={styles.menuBannerImage}
                          />
                        )}
                        <div className={styles.bannerText}>
                          {banner.heading && (
                            <Text as="h5">{banner.heading}</Text>
                          )}
                          {banner.subHeading && (
                            <Text as="p">{banner.subHeading}</Text>
                          )}
                        </div>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Overlay quando menu está aberto */}
      {activeCategory && (
        <div 
          className={styles.menuOverlay} 
          onClick={() => setActiveCategory(null)}
        />
      )}
    </>
  );
}
