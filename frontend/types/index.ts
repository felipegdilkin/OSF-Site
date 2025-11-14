export interface TImage {
  url: string;
  alternativeText?: string | null;
}

export interface TLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface TStrapiResponse<T> {
  data: T;
  meta?: any;
  success: boolean;
  status: number;
  error?: {
    status: number;
    name: string;
    message: string;
  };
}

export interface THomePage {
  blocks: any[];
  // Add other fields as needed
}

// Global Components Types
export interface TLogo {
  logo?: TImage;  // Changed from 'image' to 'logo' based on Strapi response
  image?: TImage; // Keep both for compatibility
  href: string | null;
  label: string | null;
  isExternal: boolean;
}

export interface TCategoryLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface TPannelCategories {
  categoryLink: TCategoryLink[];
  linkToAll: TLink;
}

export interface TCategoryBanner {
  image: TImage;
  heading: string;
  subHeading: string;
  href: string;
  isExternal: boolean;
}

export interface TPannelBanners {
  heading: string;
  subHeading: string;
  categoryBanner: TCategoryBanner[];
}

export interface TMenuCategory {
  categoryName: string;
  pannelCategories: TPannelCategories;
  pannelBanners: TPannelBanners;
}

export interface TSearchButton {
  icon: TImage;
  href: string;
}

export interface TColorThemeSwitch {
  icon: TImage;
  label: string;
  href: string;
}

export interface TContactButton {
  icon?: TImage;
  label: string;
  href: string;
  isExternal: boolean;
}

export interface TLanguage {
  flagIcon: TImage;
  languageName: string;
  href: string;
}

export interface TLanguageSwitch {
  language: TLanguage[];
}

export interface TMenuData {
  logo: TLogo;
  menuCategory: TMenuCategory[];
  searchButton: TSearchButton;
  colorThemeSwitch: TColorThemeSwitch;
  contactButton: TContactButton;
  languageSwitch: TLanguageSwitch;
}

export interface TSocialIcon {
  logo: TImage;
  href: string;
  label: string;
  isExternal: boolean;
}

export interface TSocialMedias {
  socialIcon: TSocialIcon[];
}

export interface TCategoryPage {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface TFooterCategory {
  heading: string;
  categoryPage: TCategoryPage[];
  linkToAll: TLink;
}

export interface TBarLink {
  href: string;
  label: string;
  isExternal: boolean;
}

export interface TFooterBar {
  barLink: TBarLink[];
  legalText: string;
}

export interface TFooterData {
  logo: TLogo;
  heading: string;
  socialMedias: TSocialMedias;
  subHeading: string;
  link: TLink;
  FooterCategories: TFooterCategory[];
  FooterBar: TFooterBar;
}

export interface TGlobalData {
  Menu: TMenuData;
  Footer: TFooterData;
}
