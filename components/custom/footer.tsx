import Link from "next/link";
import { Text } from "@/components/configs/text";
import { StrapiImage } from "@/lib/strapi-image";
import type { TFooterData } from "@/types";

export function Footer({ data }: { data: TFooterData }) {
  // Safety check
  if (!data) {
    console.error("Footer: Invalid data structure", data);
    return null;
  }

  const styles = {
    footer: "footer",
    footerContent: "footerContent",
    footerColumns: "footerColumns",
    footerLogoSection: "footerLogoSection",
    footerLogo: "footerLogo",
    footerLogoImage: "footerLogoImage",
    footerHeading: "footerHeading",
    socialMedias: "socialMedias",
    socialIcon: "socialIcon",
    footerSubHeading: "footerSubHeading",
    footerLink: "buttonGreen",
    footerCategory: "footerCategory",
    footerCategoryHeading: "footerCategoryHeading",
    categoryPages: "categoryPages",
    categoryPageLink: "categoryPageLink",
    footerCategoryLinkToAll: "inlineButton footerCategoryLinkToAll",
    footerBar: "footerBar",
    footerBarContent: "footerBarContent",
    barLinks: "barLinks",
    barLink: "barLink",
    legalText: "legalText",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          {/* Left Column - Logo e Social Icons Pannel */}
          <div className={styles.footerLogoSection}>
            {data.logo && (
              <Link
                href={data.logo.href || "/"}
                className={styles.footerLogo}
                target={data.logo.isExternal ? "_blank" : undefined}
              >
                {(data.logo.logo || data.logo.image) && (
                  <StrapiImage
                    src={(data.logo.logo || data.logo.image)!.url}
                    alt={(data.logo.logo || data.logo.image)!.alternativeText || "Logo"}
                    width={40}
                    height={40}
                    className={styles.footerLogoImage}
                  />
                )}
                {data.logo.label && <Text as="span">{data.logo.label}</Text>}
              </Link>
            )}

            {data.heading && (
              <Text as="h3" className={styles.footerHeading}>
                {data.heading}
              </Text>
            )}

            {data.socialMedias && data.socialMedias.socialIcon.length > 0 && (
              <div className={styles.socialMedias}>
                {data.socialMedias.socialIcon.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href || "#"}
                    target={social.isExternal ? "_blank" : undefined}
                    className={styles.socialIcon}
                  >
                    {social.logo && (
                      <StrapiImage
                        src={social.logo.url}
                        alt={social.label || "Social Media"}
                        width={24}
                        height={24}
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}

            {data.subHeading && (
              <Text as="p" className={styles.footerSubHeading}>
                {data.subHeading}
              </Text>
            )}

            {data.link && (
              <Link
                href={data.link.href || "#"}
                className={styles.footerLink}
                target={data.link.isExternal ? "_blank" : undefined}
              >
                <Text as="span">{data.link.label}</Text>
              </Link>
            )}
          </div>

          {/* Footer Categories - positioned via grid-areas on desktop */}
          {data.FooterCategories &&
            data.FooterCategories.map((category, index) => {
              // Map category index to specific grid area positions (skip col 1 reserved for logo)
              // Positions per requirement:
              // 1: 1/1/4/2 (logo column) - NOT used here
              // 2: 1/2/4/3 | 3: 1/3/4/4 | 4: 1/4/4/5 | 5: 1/5/2/6 | 6: 2/5/3/6 | 7: 1/6/2/7 | 8: 2/6/3/7
              const positionMap = [2, 3, 4, 5, 6, 7, 8];
              const posNumber = positionMap[index] ?? 8;
              const positionClass = `categoryPosition-${posNumber}`;

              return (
                <div key={index} className={`${styles.footerCategory} ${positionClass}`}>
                {category.heading && (
                  <Text as="h4" className={styles.footerCategoryHeading}>
                    {category.heading}
                  </Text>
                )}

                {category.categoryPage.length > 0 && (
                  <ul className={styles.categoryPages}>
                    {category.categoryPage.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.href || "#"}
                          className={styles.categoryPageLink}
                          target={page.isExternal ? "_blank" : undefined}
                        >
                          <Text as="span">{page.label}</Text>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {category.linkToAll && (
                  <Link
                    href={category.linkToAll.href || "#"}
                    className={styles.footerCategoryLinkToAll}
                    target={category.linkToAll.isExternal ? "_blank" : undefined}
                  >
                    <Text as="span">{category.linkToAll.label}</Text>
                  </Link>
                )}
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer Bar - 70px */}
      {data.FooterBar && (
        <div className={styles.footerBar}>
            <div className={styles.footerBarContent}>
                <div className={styles.barLinks}>
                    {data.FooterBar.barLink.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href || "#"}
                        className={styles.barLink}
                        target={link.isExternal ? "_blank" : undefined}
                    >
                        <Text as="span">{link.label}</Text>
                    </Link>
                    ))}
                </div>

                {data.FooterBar.legalText && (
                    <Text as="p" className={styles.legalText}>
                    {data.FooterBar.legalText}
                    </Text>
                )}
            </div>
        </div>
      )}
    </footer>
  );
}
