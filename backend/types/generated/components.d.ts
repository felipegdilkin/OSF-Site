import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCard4Elements extends Struct.ComponentSchema {
  collectionName: 'components_components_card_4elements';
  info: {
    displayName: 'Card-4elements';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCardIconText extends Struct.ComponentSchema {
  collectionName: 'components_components_card_icon_texts';
  info: {
    displayName: 'Card-IconText';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ComponentsContactLinks extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_links';
  info: {
    displayName: 'ContactLinks';
    icon: 'message';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'components.link', true>;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface ComponentsInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_components_insight_cards';
  info: {
    displayName: 'Insight-Card';
    icon: 'layout';
  };
  attributes: {
    data: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsInsightsTab extends Struct.ComponentSchema {
  collectionName: 'components_components_insights_tabs';
  info: {
    displayName: 'Insights-Tab';
    icon: 'folder';
  };
  attributes: {
    cardInsight: Schema.Attribute.Component<'components.insight-card', true>;
    link: Schema.Attribute.Component<'components.link', false>;
    tabName: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ComponentsServiceTopic extends Struct.ComponentSchema {
  collectionName: 'components_components_service_topics';
  info: {
    displayName: 'Service-Topic';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    inlineLink: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTextBanners extends Struct.ComponentSchema {
  collectionName: 'components_components_text_banners';
  info: {
    displayName: 'textOverBanners';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    isOnRightSide: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface GlobalComponentsCategoryBanner extends Struct.ComponentSchema {
  collectionName: 'components_global_components_category_banners';
  info: {
    displayName: 'categoryBanner';
  };
  attributes: {
    heading: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
  };
}

export interface GlobalComponentsColorThemeSwitch
  extends Struct.ComponentSchema {
  collectionName: 'components_global_components_color_theme_switches';
  info: {
    displayName: 'colorThemeSwitch';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

export interface GlobalComponentsContactButton extends Struct.ComponentSchema {
  collectionName: 'components_global_components_contact_buttons';
  info: {
    displayName: 'contactButton';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface GlobalComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    FooterBar: Schema.Attribute.Component<
      'global-components.footer-bar',
      false
    >;
    FooterCategories: Schema.Attribute.Component<
      'global-components.footer-categories',
      true
    >;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
    logo: Schema.Attribute.Component<'global-components.osf-logo', false>;
    socialMedias: Schema.Attribute.Component<
      'global-components.social-medias',
      false
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface GlobalComponentsFooterBar extends Struct.ComponentSchema {
  collectionName: 'components_global_components_footer_bars';
  info: {
    displayName: 'FooterBar';
  };
  attributes: {
    barLink: Schema.Attribute.Component<'components.link', true>;
    legalText: Schema.Attribute.String;
  };
}

export interface GlobalComponentsFooterCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_global_components_footer_categories';
  info: {
    displayName: 'FooterCategories';
    icon: 'bulletList';
  };
  attributes: {
    categoryPage: Schema.Attribute.Component<'components.link', true>;
    heading: Schema.Attribute.String;
    linkToAll: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface GlobalComponentsGlobalComponents
  extends Struct.ComponentSchema {
  collectionName: 'components_global_components_global_components';
  info: {
    displayName: 'Global-Components';
  };
  attributes: {};
}

export interface GlobalComponentsLanguage extends Struct.ComponentSchema {
  collectionName: 'components_global_components_languages';
  info: {
    displayName: 'language';
  };
  attributes: {
    flagIcon: Schema.Attribute.Media<'images'>;
    href: Schema.Attribute.String;
    languageName: Schema.Attribute.String;
  };
}

export interface GlobalComponentsLanguageSwitch extends Struct.ComponentSchema {
  collectionName: 'components_global_components_language_switches';
  info: {
    displayName: 'languageSwitch';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    language: Schema.Attribute.Component<'global-components.language', true>;
  };
}

export interface GlobalComponentsMenu extends Struct.ComponentSchema {
  collectionName: 'components_global_components_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    colorThemeSwitch: Schema.Attribute.Component<
      'global-components.color-theme-switch',
      false
    >;
    contactButton: Schema.Attribute.Component<
      'global-components.contact-button',
      false
    >;
    languageSwitch: Schema.Attribute.Component<
      'global-components.language-switch',
      false
    >;
    logo: Schema.Attribute.Component<'global-components.osf-logo', false>;
    menuCategory: Schema.Attribute.Component<
      'global-components.menu-category',
      true
    >;
    searchButton: Schema.Attribute.Component<
      'global-components.search-button',
      false
    >;
  };
}

export interface GlobalComponentsMenuCategory extends Struct.ComponentSchema {
  collectionName: 'components_global_components_menu_categories';
  info: {
    displayName: 'menuCategory';
  };
  attributes: {
    categoryName: Schema.Attribute.String;
    pannelBanners: Schema.Attribute.Component<
      'global-components.pannel-banners',
      false
    >;
    pannelCategories: Schema.Attribute.Component<
      'global-components.pannel-categories',
      false
    >;
  };
}

export interface GlobalComponentsOsfLogo extends Struct.ComponentSchema {
  collectionName: 'components_global_components_osf_logos';
  info: {
    displayName: 'OSF-Logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface GlobalComponentsPageLink extends Struct.ComponentSchema {
  collectionName: 'components_global_components_page_links';
  info: {
    displayName: 'pageLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface GlobalComponentsPannelBanners extends Struct.ComponentSchema {
  collectionName: 'components_global_components_pannel_banners';
  info: {
    displayName: 'pannelBanners';
  };
  attributes: {
    categoryBanner: Schema.Attribute.Component<
      'global-components.category-banner',
      true
    >;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface GlobalComponentsPannelCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_global_components_pannel_categories';
  info: {
    displayName: 'pannelCategories';
  };
  attributes: {
    categoryLink: Schema.Attribute.Component<
      'global-components.page-link',
      true
    >;
    linkToAll: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface GlobalComponentsSearchButton extends Struct.ComponentSchema {
  collectionName: 'components_global_components_search_buttons';
  info: {
    displayName: 'searchButton';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface GlobalComponentsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_global_components_social_links';
  info: {
    displayName: 'social-icon';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface GlobalComponentsSocialMedias extends Struct.ComponentSchema {
  collectionName: 'components_global_components_social_medias';
  info: {
    displayName: 'socialMedias';
  };
  attributes: {
    socialIcon: Schema.Attribute.Component<
      'global-components.social-links',
      true
    >;
  };
}

export interface LayoutAboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_us_sections';
  info: {
    displayName: 'AboutUs Section';
  };
  attributes: {
    banner: Schema.Attribute.Component<'components.text-banners', true>;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
    sectionName: Schema.Attribute.String;
  };
}

export interface LayoutClientsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_clients_sections';
  info: {
    displayName: 'Clients Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface LayoutFormsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_forms_sections';
  info: {
    displayName: 'Forms Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    infoContact: Schema.Attribute.Component<'components.contact-links', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_industries_sections';
  info: {
    displayName: 'Industries Section';
  };
  attributes: {
    FirstCard: Schema.Attribute.Component<'components.card-4elements', false>;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
    SecondCard: Schema.Attribute.Component<'components.card-4elements', false>;
    sectionName: Schema.Attribute.String;
    SideCards: Schema.Attribute.Component<'components.card-icon-text', true>;
    subHeading: Schema.Attribute.Text;
    ThirdCard: Schema.Attribute.Component<'components.card-4elements', false>;
  };
}

export interface LayoutInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_insights_sections';
  info: {
    displayName: 'Insights Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    tab: Schema.Attribute.Component<'components.insights-tab', true>;
  };
}

export interface LayoutServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'components.link', false>;
    sectionName: Schema.Attribute.String;
    serviceItem: Schema.Attribute.Component<'components.service-topic', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card-4elements': ComponentsCard4Elements;
      'components.card-icon-text': ComponentsCardIconText;
      'components.contact-links': ComponentsContactLinks;
      'components.insight-card': ComponentsInsightCard;
      'components.insights-tab': ComponentsInsightsTab;
      'components.link': ComponentsLink;
      'components.service-topic': ComponentsServiceTopic;
      'components.text-banners': ComponentsTextBanners;
      'global-components.category-banner': GlobalComponentsCategoryBanner;
      'global-components.color-theme-switch': GlobalComponentsColorThemeSwitch;
      'global-components.contact-button': GlobalComponentsContactButton;
      'global-components.footer': GlobalComponentsFooter;
      'global-components.footer-bar': GlobalComponentsFooterBar;
      'global-components.footer-categories': GlobalComponentsFooterCategories;
      'global-components.global-components': GlobalComponentsGlobalComponents;
      'global-components.language': GlobalComponentsLanguage;
      'global-components.language-switch': GlobalComponentsLanguageSwitch;
      'global-components.menu': GlobalComponentsMenu;
      'global-components.menu-category': GlobalComponentsMenuCategory;
      'global-components.osf-logo': GlobalComponentsOsfLogo;
      'global-components.page-link': GlobalComponentsPageLink;
      'global-components.pannel-banners': GlobalComponentsPannelBanners;
      'global-components.pannel-categories': GlobalComponentsPannelCategories;
      'global-components.search-button': GlobalComponentsSearchButton;
      'global-components.social-links': GlobalComponentsSocialLinks;
      'global-components.social-medias': GlobalComponentsSocialMedias;
      'layout.about-us-section': LayoutAboutUsSection;
      'layout.clients-section': LayoutClientsSection;
      'layout.forms-section': LayoutFormsSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.industries-section': LayoutIndustriesSection;
      'layout.insights-section': LayoutInsightsSection;
      'layout.services-section': LayoutServicesSection;
    }
  }
}
