/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  Name?: Maybe<Scalars['String']>;
  Slug: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  Name?: InputMaybe<Scalars['String']>;
  Slug?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentFooterCombinedFooter = {
  __typename?: 'ComponentFooterCombinedFooter';
  FooterCopyright?: Maybe<Scalars['String']>;
  FooterLogotype?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID'];
};


export type ComponentFooterCombinedFooterFooterLogotypeArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFooterCombinedFooterInput = {
  FooterCopyright?: InputMaybe<Scalars['String']>;
  FooterLogotype?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentFooterFooterList = {
  __typename?: 'ComponentFooterFooterList';
  FooterLink?: Maybe<Array<Maybe<ComponentNavigationNavigationLink>>>;
  ListName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type ComponentFooterFooterListFooterLinkArgs = {
  filters?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFooterFooterListFiltersInput = {
  FooterLink?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  ListName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterListFiltersInput>>>;
  not?: InputMaybe<ComponentFooterFooterListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterListFiltersInput>>>;
};

export type ComponentFooterFooterListInput = {
  FooterLink?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkInput>>>;
  ListName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHeroSectionSingleSlide = {
  __typename?: 'ComponentHeroSectionSingleSlide';
  SlideHeading?: Maybe<Scalars['String']>;
  SlideImage?: Maybe<UploadFileEntityResponse>;
  SlideSubheading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentHeroSectionSingleSlideFiltersInput = {
  SlideHeading?: InputMaybe<StringFilterInput>;
  SlideSubheading?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>>>;
  not?: InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>>>;
};

export type ComponentHeroSectionSingleSlideInput = {
  SlideHeading?: InputMaybe<Scalars['String']>;
  SlideImage?: InputMaybe<Scalars['ID']>;
  SlideSubheading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHeroSectionSlider = {
  __typename?: 'ComponentHeroSectionSlider';
  ArrowDownIcon?: Maybe<UploadFileEntityResponse>;
  ArrowUpIcon?: Maybe<UploadFileEntityResponse>;
  ReusableButton?: Maybe<Array<Maybe<ComponentReusableNavigationButton>>>;
  SingleSlide?: Maybe<Array<Maybe<ComponentHeroSectionSingleSlide>>>;
  id: Scalars['ID'];
};


export type ComponentHeroSectionSliderReusableButtonArgs = {
  filters?: InputMaybe<ComponentReusableNavigationButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentHeroSectionSliderSingleSlideArgs = {
  filters?: InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHeroSectionSliderInput = {
  ArrowDownIcon?: InputMaybe<Scalars['ID']>;
  ArrowUpIcon?: InputMaybe<Scalars['ID']>;
  ReusableButton?: InputMaybe<Array<InputMaybe<ComponentReusableNavigationButtonInput>>>;
  SingleSlide?: InputMaybe<Array<InputMaybe<ComponentHeroSectionSingleSlideInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationCartButton = {
  __typename?: 'ComponentNavigationCartButton';
  CartIcon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentNavigationCartButtonInput = {
  CartIcon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationFooterNavList = {
  __typename?: 'ComponentNavigationFooterNavList';
  FooterList?: Maybe<Array<Maybe<ComponentFooterFooterList>>>;
  id: Scalars['ID'];
};


export type ComponentNavigationFooterNavListFooterListArgs = {
  filters?: InputMaybe<ComponentFooterFooterListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentNavigationMobileButton = {
  __typename?: 'ComponentNavigationMobileButton';
  MobileButtonIcon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentNavigationMobileButtonInput = {
  MobileButtonIcon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationNavigation = {
  __typename?: 'ComponentNavigationNavigation';
  CartButton?: Maybe<ComponentNavigationCartButton>;
  Link?: Maybe<Array<Maybe<ComponentNavigationNavigationLink>>>;
  LoginButton?: Maybe<ComponentReusableNavigationButton>;
  MobileButton?: Maybe<ComponentNavigationMobileButton>;
  id: Scalars['ID'];
};


export type ComponentNavigationNavigationLinkArgs = {
  filters?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentNavigationNavigationInput = {
  CartButton?: InputMaybe<ComponentNavigationCartButtonInput>;
  Link?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkInput>>>;
  LoginButton?: InputMaybe<ComponentReusableNavigationButtonInput>;
  MobileButton?: InputMaybe<ComponentNavigationMobileButtonInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationNavigationLink = {
  __typename?: 'ComponentNavigationNavigationLink';
  LinkName?: Maybe<Scalars['String']>;
  LinkURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentNavigationNavigationLinkFiltersInput = {
  LinkName?: InputMaybe<StringFilterInput>;
  LinkURL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkFiltersInput>>>;
  not?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkFiltersInput>>>;
};

export type ComponentNavigationNavigationLinkInput = {
  LinkName?: InputMaybe<Scalars['String']>;
  LinkURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentReusableNavigationButton = {
  __typename?: 'ComponentReusableNavigationButton';
  ButtonIcon?: Maybe<UploadFileEntityResponse>;
  ButtonLink?: Maybe<Scalars['String']>;
  ButtonStyle?: Maybe<Enum_Componentreusablenavigationbutton_Buttonstyle>;
  ButtonText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentReusableNavigationButtonFiltersInput = {
  ButtonLink?: InputMaybe<StringFilterInput>;
  ButtonStyle?: InputMaybe<StringFilterInput>;
  ButtonText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentReusableNavigationButtonFiltersInput>>>;
  not?: InputMaybe<ComponentReusableNavigationButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentReusableNavigationButtonFiltersInput>>>;
};

export type ComponentReusableNavigationButtonInput = {
  ButtonIcon?: InputMaybe<Scalars['ID']>;
  ButtonLink?: InputMaybe<Scalars['String']>;
  ButtonStyle?: InputMaybe<Enum_Componentreusablenavigationbutton_Buttonstyle>;
  ButtonText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentReusablePictureWithDescriptionAndCta = {
  __typename?: 'ComponentReusablePictureWithDescriptionAndCta';
  CTA?: Maybe<ComponentReusableNavigationButton>;
  DescriptionAlignment?: Maybe<Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment>;
  DescriptionHeading?: Maybe<Scalars['String']>;
  DescriptionText?: Maybe<Scalars['String']>;
  Picture?: Maybe<UploadFileEntityResponse>;
  Variant?: Maybe<Enum_Componentreusablepicturewithdescriptionandcta_Variant>;
  id: Scalars['ID'];
};

export type ComponentReusablePictureWithDescriptionAndCtaFiltersInput = {
  CTA?: InputMaybe<ComponentReusableNavigationButtonFiltersInput>;
  DescriptionAlignment?: InputMaybe<StringFilterInput>;
  DescriptionHeading?: InputMaybe<StringFilterInput>;
  DescriptionText?: InputMaybe<StringFilterInput>;
  Variant?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>>>;
  not?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>>>;
};

export type ComponentReusablePictureWithDescriptionAndCtaInput = {
  CTA?: InputMaybe<ComponentReusableNavigationButtonInput>;
  DescriptionAlignment?: InputMaybe<Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment>;
  DescriptionHeading?: InputMaybe<Scalars['String']>;
  DescriptionText?: InputMaybe<Scalars['String']>;
  Picture?: InputMaybe<Scalars['ID']>;
  Variant?: InputMaybe<Enum_Componentreusablepicturewithdescriptionandcta_Variant>;
  id?: InputMaybe<Scalars['ID']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentreusablenavigationbutton_Buttonstyle {
  Accent = 'accent',
  Dark = 'dark',
  Light = 'light',
  Main = 'main'
}

export enum Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentreusablepicturewithdescriptionandcta_Variant {
  Inside = 'inside',
  Left = 'left',
  Outside = 'outside',
  Right = 'right'
}

export enum Enum_Product_Mode {
  Sale = 'sale',
  SoldOut = 'sold_out',
  Standard = 'standard',
  Upcoming = 'upcoming'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  FooterBrand?: Maybe<ComponentFooterCombinedFooter>;
  FooterNavLists?: Maybe<Array<Maybe<ComponentFooterFooterList>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FooterFooterNavListsArgs = {
  filters?: InputMaybe<ComponentFooterFooterListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  FooterBrand?: InputMaybe<ComponentFooterCombinedFooterInput>;
  FooterNavLists?: InputMaybe<Array<InputMaybe<ComponentFooterFooterListInput>>>;
};

export type GenericMorph = Category | ComponentFooterCombinedFooter | ComponentFooterFooterList | ComponentHeroSectionSingleSlide | ComponentHeroSectionSlider | ComponentNavigationCartButton | ComponentNavigationFooterNavList | ComponentNavigationMobileButton | ComponentNavigationNavigation | ComponentNavigationNavigationLink | ComponentReusableNavigationButton | ComponentReusablePictureWithDescriptionAndCta | Footer | GlobalSetting | Header | HeroSection | HomepageBestseller | HomepagePresentationPhoto1 | HomepagePresentationPhoto2 | I18NLocale | Product | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type GlobalSetting = {
  __typename?: 'GlobalSetting';
  ArrowDown?: Maybe<UploadFileEntityResponse>;
  ArrowUp?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalSettingEntity = {
  __typename?: 'GlobalSettingEntity';
  attributes?: Maybe<GlobalSetting>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalSettingEntityResponse = {
  __typename?: 'GlobalSettingEntityResponse';
  data?: Maybe<GlobalSettingEntity>;
};

export type GlobalSettingInput = {
  ArrowDown?: InputMaybe<Scalars['ID']>;
  ArrowUp?: InputMaybe<Scalars['ID']>;
};

export type Header = {
  __typename?: 'Header';
  Logotype?: Maybe<UploadFileEntityResponse>;
  Navigation?: Maybe<ComponentNavigationNavigation>;
  PageName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  Logotype?: InputMaybe<Scalars['ID']>;
  Navigation?: InputMaybe<ComponentNavigationNavigationInput>;
  PageName?: InputMaybe<Scalars['String']>;
};

export type HeroSection = {
  __typename?: 'HeroSection';
  Slider?: Maybe<ComponentHeroSectionSlider>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeroSectionEntity = {
  __typename?: 'HeroSectionEntity';
  attributes?: Maybe<HeroSection>;
  id?: Maybe<Scalars['ID']>;
};

export type HeroSectionEntityResponse = {
  __typename?: 'HeroSectionEntityResponse';
  data?: Maybe<HeroSectionEntity>;
};

export type HeroSectionInput = {
  Slider?: InputMaybe<ComponentHeroSectionSliderInput>;
};

export type HomepageBestseller = {
  __typename?: 'HomepageBestseller';
  Description?: Maybe<Scalars['String']>;
  Heading?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomepageBestsellerProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomepageBestsellerEntity = {
  __typename?: 'HomepageBestsellerEntity';
  attributes?: Maybe<HomepageBestseller>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageBestsellerEntityResponse = {
  __typename?: 'HomepageBestsellerEntityResponse';
  data?: Maybe<HomepageBestsellerEntity>;
};

export type HomepageBestsellerInput = {
  Description?: InputMaybe<Scalars['String']>;
  Heading?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type HomepagePresentationPhoto1 = {
  __typename?: 'HomepagePresentationPhoto1';
  PictureDescriptionCTA?: Maybe<ComponentReusablePictureWithDescriptionAndCta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepagePresentationPhoto1Entity = {
  __typename?: 'HomepagePresentationPhoto1Entity';
  attributes?: Maybe<HomepagePresentationPhoto1>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepagePresentationPhoto1EntityResponse = {
  __typename?: 'HomepagePresentationPhoto1EntityResponse';
  data?: Maybe<HomepagePresentationPhoto1Entity>;
};

export type HomepagePresentationPhoto1Input = {
  PictureDescriptionCTA?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaInput>;
};

export type HomepagePresentationPhoto2 = {
  __typename?: 'HomepagePresentationPhoto2';
  PictureDescriptionCTA2?: Maybe<ComponentReusablePictureWithDescriptionAndCta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepagePresentationPhoto2Entity = {
  __typename?: 'HomepagePresentationPhoto2Entity';
  attributes?: Maybe<HomepagePresentationPhoto2>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepagePresentationPhoto2EntityResponse = {
  __typename?: 'HomepagePresentationPhoto2EntityResponse';
  data?: Maybe<HomepagePresentationPhoto2Entity>;
};

export type HomepagePresentationPhoto2Input = {
  PictureDescriptionCTA2?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHeroSection?: Maybe<HeroSectionEntityResponse>;
  deleteHomepageBestseller?: Maybe<HomepageBestsellerEntityResponse>;
  deleteHomepagePresentationPhoto1?: Maybe<HomepagePresentationPhoto1EntityResponse>;
  deleteHomepagePresentationPhoto2?: Maybe<HomepagePresentationPhoto2EntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHeroSection?: Maybe<HeroSectionEntityResponse>;
  updateHomepageBestseller?: Maybe<HomepageBestsellerEntityResponse>;
  updateHomepagePresentationPhoto1?: Maybe<HomepagePresentationPhoto1EntityResponse>;
  updateHomepagePresentationPhoto2?: Maybe<HomepagePresentationPhoto2EntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateGlobalSettingArgs = {
  data: GlobalSettingInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateHeroSectionArgs = {
  data: HeroSectionInput;
};


export type MutationUpdateHomepageBestsellerArgs = {
  data: HomepageBestsellerInput;
};


export type MutationUpdateHomepagePresentationPhoto1Args = {
  data: HomepagePresentationPhoto1Input;
};


export type MutationUpdateHomepagePresentationPhoto2Args = {
  data: HomepagePresentationPhoto2Input;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  AdditionalInfo?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Gallery?: Maybe<UploadFileRelationResponseCollection>;
  MainPhoto?: Maybe<UploadFileEntityResponse>;
  Marketing?: Maybe<ComponentReusablePictureWithDescriptionAndCta>;
  Mode?: Maybe<Enum_Product_Mode>;
  Name?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  SalePrice?: Maybe<Scalars['Float']>;
  Slug: Scalars['String'];
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  AdditionalInfo?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Marketing?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>;
  Mode?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<FloatFilterInput>;
  SalePrice?: InputMaybe<FloatFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  AdditionalInfo?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  Gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  MainPhoto?: InputMaybe<Scalars['ID']>;
  Marketing?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaInput>;
  Mode?: InputMaybe<Enum_Product_Mode>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['Float']>;
  SalePrice?: InputMaybe<Scalars['Float']>;
  Slug?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  globalSetting?: Maybe<GlobalSettingEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  heroSection?: Maybe<HeroSectionEntityResponse>;
  homepageBestseller?: Maybe<HomepageBestsellerEntityResponse>;
  homepagePresentationPhoto1?: Maybe<HomepagePresentationPhoto1EntityResponse>;
  homepagePresentationPhoto2?: Maybe<HomepagePresentationPhoto2EntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  cart?: Maybe<Scalars['JSON']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  cart?: InputMaybe<JsonFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  cart?: InputMaybe<Scalars['JSON']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AllProductsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsDataQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Name?: string | null, Mode?: Enum_Product_Mode | null, Price?: number | null, SalePrice?: number | null, Slug: string, MainPhoto?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null };

export type GetUserDataQueryQueryVariables = Exact<{
  userEmail?: InputMaybe<StringFilterInput>;
}>;


export type GetUserDataQueryQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, cart?: any | null } | null }> } | null };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', id?: string | null, attributes?: { __typename?: 'Footer', FooterBrand?: { __typename?: 'ComponentFooterCombinedFooter', id: string, FooterCopyright?: string | null, FooterLogotype?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null, FooterNavLists?: Array<{ __typename?: 'ComponentFooterFooterList', id: string, ListName?: string | null, FooterLink?: Array<{ __typename?: 'ComponentNavigationNavigationLink', id: string, LinkName?: string | null, LinkURL?: string | null } | null> | null } | null> | null } | null } | null } | null };

export type GlobalSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalSettingsQuery = { __typename?: 'Query', globalSetting?: { __typename?: 'GlobalSettingEntityResponse', data?: { __typename?: 'GlobalSettingEntity', id?: string | null, attributes?: { __typename?: 'GlobalSetting', ArrowDown?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, ArrowUp?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', header?: { __typename?: 'HeaderEntityResponse', data?: { __typename?: 'HeaderEntity', id?: string | null, attributes?: { __typename?: 'Header', PageName?: string | null, Logotype?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Navigation?: { __typename?: 'ComponentNavigationNavigation', id: string, Link?: Array<{ __typename?: 'ComponentNavigationNavigationLink', id: string, LinkName?: string | null, LinkURL?: string | null } | null> | null, LoginButton?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, CartButton?: { __typename?: 'ComponentNavigationCartButton', id: string, CartIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, MobileButton?: { __typename?: 'ComponentNavigationMobileButton', id: string, MobileButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null } | null };

export type HeroSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroSectionQuery = { __typename?: 'Query', heroSection?: { __typename?: 'HeroSectionEntityResponse', data?: { __typename?: 'HeroSectionEntity', id?: string | null, attributes?: { __typename?: 'HeroSection', Slider?: { __typename?: 'ComponentHeroSectionSlider', SingleSlide?: Array<{ __typename?: 'ComponentHeroSectionSingleSlide', id: string, SlideHeading?: string | null, SlideSubheading?: string | null, SlideImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null> | null, ArrowUpIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, ArrowDownIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, ReusableButton?: Array<{ __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null> | null } | null } | null } | null } | null };

export type HomepageBestsellerQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageBestsellerQuery = { __typename?: 'Query', homepageBestseller?: { __typename?: 'HomepageBestsellerEntityResponse', data?: { __typename?: 'HomepageBestsellerEntity', attributes?: { __typename?: 'HomepageBestseller', Heading?: string | null, Description?: string | null, products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Name?: string | null, Mode?: Enum_Product_Mode | null, Price?: number | null, SalePrice?: number | null, Slug: string, AdditionalInfo?: string | null, MainPhoto?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, Gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null }> } | null, Marketing?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, DescriptionAlignment?: Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type HomepagePresentationPhoto1QueryVariables = Exact<{ [key: string]: never; }>;


export type HomepagePresentationPhoto1Query = { __typename?: 'Query', homepagePresentationPhoto1?: { __typename?: 'HomepagePresentationPhoto1EntityResponse', data?: { __typename?: 'HomepagePresentationPhoto1Entity', id?: string | null, attributes?: { __typename?: 'HomepagePresentationPhoto1', PictureDescriptionCTA?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, DescriptionAlignment?: Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type HomepagePresentationPhoto2QueryVariables = Exact<{ [key: string]: never; }>;


export type HomepagePresentationPhoto2Query = { __typename?: 'Query', homepagePresentationPhoto2?: { __typename?: 'HomepagePresentationPhoto2EntityResponse', data?: { __typename?: 'HomepagePresentationPhoto2Entity', id?: string | null, attributes?: { __typename?: 'HomepagePresentationPhoto2', PictureDescriptionCTA2?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, DescriptionAlignment?: Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type GetProductDataQueryQueryVariables = Exact<{
  slug?: InputMaybe<StringFilterInput>;
}>;


export type GetProductDataQueryQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Name?: string | null, Description?: string | null, Mode?: Enum_Product_Mode | null, Price?: number | null, SalePrice?: number | null, Slug: string, AdditionalInfo?: string | null, MainPhoto?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, Gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null }> } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', Name?: string | null } | null }> } | null, Marketing?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null }> } | null };

export type ProductSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductSlugsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Slug: string } | null }> } | null };

export type AddProductToUserCartMutationVariables = Exact<{
  id: Scalars['ID'];
  cartData?: InputMaybe<Scalars['JSON']>;
}>;


export type AddProductToUserCartMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', cart?: any | null } | null } | null } };


export const AllProductsDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProductsData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Mode"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"SalePrice"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"MainPhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProductsDataQuery, AllProductsDataQueryVariables>;
export const GetUserDataQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserDataQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StringFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"cart"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserDataQueryQuery, GetUserDataQueryQueryVariables>;
export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FooterBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"FooterLogotype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"FooterCopyright"}}]}},{"kind":"Field","name":{"kind":"Name","value":"FooterNavLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ListName"}},{"kind":"Field","name":{"kind":"Name","value":"FooterLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"LinkName"}},{"kind":"Field","name":{"kind":"Name","value":"LinkURL"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const GlobalSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GlobalSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"globalSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArrowDown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ArrowUp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GlobalSettingsQuery, GlobalSettingsQueryVariables>;
export const HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Logotype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"PageName"}},{"kind":"Field","name":{"kind":"Name","value":"Navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"LinkName"}},{"kind":"Field","name":{"kind":"Name","value":"LinkURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"LoginButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonStyle"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"CartButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"CartIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MobileButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"MobileButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HeaderQuery, HeaderQueryVariables>;
export const HeroSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HeroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SingleSlide"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"SlideHeading"}},{"kind":"Field","name":{"kind":"Name","value":"SlideSubheading"}},{"kind":"Field","name":{"kind":"Name","value":"SlideImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ArrowUpIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ArrowDownIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ReusableButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonStyle"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HeroSectionQuery, HeroSectionQueryVariables>;
export const HomepageBestsellerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homepageBestseller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homepageBestseller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Mode"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"SalePrice"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"MainPhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"AdditionalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"Marketing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionHeading"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionText"}},{"kind":"Field","name":{"kind":"Name","value":"Variant"}},{"kind":"Field","name":{"kind":"Name","value":"Picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonStyle"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionAlignment"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomepageBestsellerQuery, HomepageBestsellerQueryVariables>;
export const HomepagePresentationPhoto1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomepagePresentationPhoto1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homepagePresentationPhoto1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PictureDescriptionCTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionHeading"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionText"}},{"kind":"Field","name":{"kind":"Name","value":"Variant"}},{"kind":"Field","name":{"kind":"Name","value":"Picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonStyle"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionAlignment"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomepagePresentationPhoto1Query, HomepagePresentationPhoto1QueryVariables>;
export const HomepagePresentationPhoto2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomepagePresentationPhoto2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homepagePresentationPhoto2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PictureDescriptionCTA2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionHeading"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionText"}},{"kind":"Field","name":{"kind":"Name","value":"Variant"}},{"kind":"Field","name":{"kind":"Name","value":"Picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonStyle"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionAlignment"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomepagePresentationPhoto2Query, HomepagePresentationPhoto2QueryVariables>;
export const GetProductDataQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductDataQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StringFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Mode"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"SalePrice"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"MainPhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"AdditionalInfo"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Marketing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionHeading"}},{"kind":"Field","name":{"kind":"Name","value":"DescriptionText"}},{"kind":"Field","name":{"kind":"Name","value":"Variant"}},{"kind":"Field","name":{"kind":"Name","value":"Picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CTA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonStyle"}},{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductDataQueryQuery, GetProductDataQueryQueryVariables>;
export const ProductSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductSlugsQuery, ProductSlugsQueryVariables>;
export const AddProductToUserCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addProductToUserCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartData"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartData"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddProductToUserCartMutation, AddProductToUserCartMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  Name?: Maybe<Scalars['String']>;
  Slug: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  Name?: InputMaybe<Scalars['String']>;
  Slug?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentFooterCombinedFooter = {
  __typename?: 'ComponentFooterCombinedFooter';
  FooterCopyright?: Maybe<Scalars['String']>;
  FooterLogotype?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID'];
};


export type ComponentFooterCombinedFooterFooterLogotypeArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFooterCombinedFooterInput = {
  FooterCopyright?: InputMaybe<Scalars['String']>;
  FooterLogotype?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentFooterFooterList = {
  __typename?: 'ComponentFooterFooterList';
  FooterLink?: Maybe<Array<Maybe<ComponentNavigationNavigationLink>>>;
  ListName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type ComponentFooterFooterListFooterLinkArgs = {
  filters?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFooterFooterListFiltersInput = {
  FooterLink?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  ListName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterListFiltersInput>>>;
  not?: InputMaybe<ComponentFooterFooterListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterListFiltersInput>>>;
};

export type ComponentFooterFooterListInput = {
  FooterLink?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkInput>>>;
  ListName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHeroSectionSingleSlide = {
  __typename?: 'ComponentHeroSectionSingleSlide';
  SlideHeading?: Maybe<Scalars['String']>;
  SlideImage?: Maybe<UploadFileEntityResponse>;
  SlideSubheading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentHeroSectionSingleSlideFiltersInput = {
  SlideHeading?: InputMaybe<StringFilterInput>;
  SlideSubheading?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>>>;
  not?: InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>>>;
};

export type ComponentHeroSectionSingleSlideInput = {
  SlideHeading?: InputMaybe<Scalars['String']>;
  SlideImage?: InputMaybe<Scalars['ID']>;
  SlideSubheading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHeroSectionSlider = {
  __typename?: 'ComponentHeroSectionSlider';
  ArrowDownIcon?: Maybe<UploadFileEntityResponse>;
  ArrowUpIcon?: Maybe<UploadFileEntityResponse>;
  ReusableButton?: Maybe<Array<Maybe<ComponentReusableNavigationButton>>>;
  SingleSlide?: Maybe<Array<Maybe<ComponentHeroSectionSingleSlide>>>;
  id: Scalars['ID'];
};


export type ComponentHeroSectionSliderReusableButtonArgs = {
  filters?: InputMaybe<ComponentReusableNavigationButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentHeroSectionSliderSingleSlideArgs = {
  filters?: InputMaybe<ComponentHeroSectionSingleSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHeroSectionSliderInput = {
  ArrowDownIcon?: InputMaybe<Scalars['ID']>;
  ArrowUpIcon?: InputMaybe<Scalars['ID']>;
  ReusableButton?: InputMaybe<Array<InputMaybe<ComponentReusableNavigationButtonInput>>>;
  SingleSlide?: InputMaybe<Array<InputMaybe<ComponentHeroSectionSingleSlideInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationCartButton = {
  __typename?: 'ComponentNavigationCartButton';
  CartIcon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentNavigationCartButtonInput = {
  CartIcon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationFooterNavList = {
  __typename?: 'ComponentNavigationFooterNavList';
  FooterList?: Maybe<Array<Maybe<ComponentFooterFooterList>>>;
  id: Scalars['ID'];
};


export type ComponentNavigationFooterNavListFooterListArgs = {
  filters?: InputMaybe<ComponentFooterFooterListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentNavigationMobileButton = {
  __typename?: 'ComponentNavigationMobileButton';
  MobileButtonIcon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentNavigationMobileButtonInput = {
  MobileButtonIcon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationNavigation = {
  __typename?: 'ComponentNavigationNavigation';
  CartButton?: Maybe<ComponentNavigationCartButton>;
  Link?: Maybe<Array<Maybe<ComponentNavigationNavigationLink>>>;
  LoginButton?: Maybe<ComponentReusableNavigationButton>;
  MobileButton?: Maybe<ComponentNavigationMobileButton>;
  id: Scalars['ID'];
};


export type ComponentNavigationNavigationLinkArgs = {
  filters?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentNavigationNavigationInput = {
  CartButton?: InputMaybe<ComponentNavigationCartButtonInput>;
  Link?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkInput>>>;
  LoginButton?: InputMaybe<ComponentReusableNavigationButtonInput>;
  MobileButton?: InputMaybe<ComponentNavigationMobileButtonInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationNavigationLink = {
  __typename?: 'ComponentNavigationNavigationLink';
  LinkName?: Maybe<Scalars['String']>;
  LinkURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentNavigationNavigationLinkFiltersInput = {
  LinkName?: InputMaybe<StringFilterInput>;
  LinkURL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkFiltersInput>>>;
  not?: InputMaybe<ComponentNavigationNavigationLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavigationNavigationLinkFiltersInput>>>;
};

export type ComponentNavigationNavigationLinkInput = {
  LinkName?: InputMaybe<Scalars['String']>;
  LinkURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentReusableNavigationButton = {
  __typename?: 'ComponentReusableNavigationButton';
  ButtonIcon?: Maybe<UploadFileEntityResponse>;
  ButtonLink?: Maybe<Scalars['String']>;
  ButtonStyle?: Maybe<Enum_Componentreusablenavigationbutton_Buttonstyle>;
  ButtonText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentReusableNavigationButtonFiltersInput = {
  ButtonLink?: InputMaybe<StringFilterInput>;
  ButtonStyle?: InputMaybe<StringFilterInput>;
  ButtonText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentReusableNavigationButtonFiltersInput>>>;
  not?: InputMaybe<ComponentReusableNavigationButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentReusableNavigationButtonFiltersInput>>>;
};

export type ComponentReusableNavigationButtonInput = {
  ButtonIcon?: InputMaybe<Scalars['ID']>;
  ButtonLink?: InputMaybe<Scalars['String']>;
  ButtonStyle?: InputMaybe<Enum_Componentreusablenavigationbutton_Buttonstyle>;
  ButtonText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentReusablePictureWithDescriptionAndCta = {
  __typename?: 'ComponentReusablePictureWithDescriptionAndCta';
  CTA?: Maybe<ComponentReusableNavigationButton>;
  DescriptionAlignment?: Maybe<Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment>;
  DescriptionHeading?: Maybe<Scalars['String']>;
  DescriptionText?: Maybe<Scalars['String']>;
  Picture?: Maybe<UploadFileEntityResponse>;
  Variant?: Maybe<Enum_Componentreusablepicturewithdescriptionandcta_Variant>;
  id: Scalars['ID'];
};

export type ComponentReusablePictureWithDescriptionAndCtaFiltersInput = {
  CTA?: InputMaybe<ComponentReusableNavigationButtonFiltersInput>;
  DescriptionAlignment?: InputMaybe<StringFilterInput>;
  DescriptionHeading?: InputMaybe<StringFilterInput>;
  DescriptionText?: InputMaybe<StringFilterInput>;
  Variant?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>>>;
  not?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>>>;
};

export type ComponentReusablePictureWithDescriptionAndCtaInput = {
  CTA?: InputMaybe<ComponentReusableNavigationButtonInput>;
  DescriptionAlignment?: InputMaybe<Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment>;
  DescriptionHeading?: InputMaybe<Scalars['String']>;
  DescriptionText?: InputMaybe<Scalars['String']>;
  Picture?: InputMaybe<Scalars['ID']>;
  Variant?: InputMaybe<Enum_Componentreusablepicturewithdescriptionandcta_Variant>;
  id?: InputMaybe<Scalars['ID']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentreusablenavigationbutton_Buttonstyle {
  Accent = 'accent',
  Dark = 'dark',
  Light = 'light',
  Main = 'main'
}

export enum Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentreusablepicturewithdescriptionandcta_Variant {
  Inside = 'inside',
  Left = 'left',
  Outside = 'outside',
  Right = 'right'
}

export enum Enum_Product_Mode {
  Sale = 'sale',
  SoldOut = 'sold_out',
  Standard = 'standard',
  Upcoming = 'upcoming'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  FooterBrand?: Maybe<ComponentFooterCombinedFooter>;
  FooterNavLists?: Maybe<Array<Maybe<ComponentFooterFooterList>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FooterFooterNavListsArgs = {
  filters?: InputMaybe<ComponentFooterFooterListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  FooterBrand?: InputMaybe<ComponentFooterCombinedFooterInput>;
  FooterNavLists?: InputMaybe<Array<InputMaybe<ComponentFooterFooterListInput>>>;
};

export type GenericMorph = Category | ComponentFooterCombinedFooter | ComponentFooterFooterList | ComponentHeroSectionSingleSlide | ComponentHeroSectionSlider | ComponentNavigationCartButton | ComponentNavigationFooterNavList | ComponentNavigationMobileButton | ComponentNavigationNavigation | ComponentNavigationNavigationLink | ComponentReusableNavigationButton | ComponentReusablePictureWithDescriptionAndCta | Footer | GlobalSetting | Header | HeroSection | HomepageBestseller | HomepagePresentationPhoto1 | HomepagePresentationPhoto2 | I18NLocale | Product | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type GlobalSetting = {
  __typename?: 'GlobalSetting';
  ArrowDown?: Maybe<UploadFileEntityResponse>;
  ArrowUp?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalSettingEntity = {
  __typename?: 'GlobalSettingEntity';
  attributes?: Maybe<GlobalSetting>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalSettingEntityResponse = {
  __typename?: 'GlobalSettingEntityResponse';
  data?: Maybe<GlobalSettingEntity>;
};

export type GlobalSettingInput = {
  ArrowDown?: InputMaybe<Scalars['ID']>;
  ArrowUp?: InputMaybe<Scalars['ID']>;
};

export type Header = {
  __typename?: 'Header';
  Logotype?: Maybe<UploadFileEntityResponse>;
  Navigation?: Maybe<ComponentNavigationNavigation>;
  PageName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  Logotype?: InputMaybe<Scalars['ID']>;
  Navigation?: InputMaybe<ComponentNavigationNavigationInput>;
  PageName?: InputMaybe<Scalars['String']>;
};

export type HeroSection = {
  __typename?: 'HeroSection';
  Slider?: Maybe<ComponentHeroSectionSlider>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeroSectionEntity = {
  __typename?: 'HeroSectionEntity';
  attributes?: Maybe<HeroSection>;
  id?: Maybe<Scalars['ID']>;
};

export type HeroSectionEntityResponse = {
  __typename?: 'HeroSectionEntityResponse';
  data?: Maybe<HeroSectionEntity>;
};

export type HeroSectionInput = {
  Slider?: InputMaybe<ComponentHeroSectionSliderInput>;
};

export type HomepageBestseller = {
  __typename?: 'HomepageBestseller';
  Description?: Maybe<Scalars['String']>;
  Heading?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomepageBestsellerProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomepageBestsellerEntity = {
  __typename?: 'HomepageBestsellerEntity';
  attributes?: Maybe<HomepageBestseller>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageBestsellerEntityResponse = {
  __typename?: 'HomepageBestsellerEntityResponse';
  data?: Maybe<HomepageBestsellerEntity>;
};

export type HomepageBestsellerInput = {
  Description?: InputMaybe<Scalars['String']>;
  Heading?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type HomepagePresentationPhoto1 = {
  __typename?: 'HomepagePresentationPhoto1';
  PictureDescriptionCTA?: Maybe<ComponentReusablePictureWithDescriptionAndCta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepagePresentationPhoto1Entity = {
  __typename?: 'HomepagePresentationPhoto1Entity';
  attributes?: Maybe<HomepagePresentationPhoto1>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepagePresentationPhoto1EntityResponse = {
  __typename?: 'HomepagePresentationPhoto1EntityResponse';
  data?: Maybe<HomepagePresentationPhoto1Entity>;
};

export type HomepagePresentationPhoto1Input = {
  PictureDescriptionCTA?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaInput>;
};

export type HomepagePresentationPhoto2 = {
  __typename?: 'HomepagePresentationPhoto2';
  PictureDescriptionCTA2?: Maybe<ComponentReusablePictureWithDescriptionAndCta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepagePresentationPhoto2Entity = {
  __typename?: 'HomepagePresentationPhoto2Entity';
  attributes?: Maybe<HomepagePresentationPhoto2>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepagePresentationPhoto2EntityResponse = {
  __typename?: 'HomepagePresentationPhoto2EntityResponse';
  data?: Maybe<HomepagePresentationPhoto2Entity>;
};

export type HomepagePresentationPhoto2Input = {
  PictureDescriptionCTA2?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHeroSection?: Maybe<HeroSectionEntityResponse>;
  deleteHomepageBestseller?: Maybe<HomepageBestsellerEntityResponse>;
  deleteHomepagePresentationPhoto1?: Maybe<HomepagePresentationPhoto1EntityResponse>;
  deleteHomepagePresentationPhoto2?: Maybe<HomepagePresentationPhoto2EntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHeroSection?: Maybe<HeroSectionEntityResponse>;
  updateHomepageBestseller?: Maybe<HomepageBestsellerEntityResponse>;
  updateHomepagePresentationPhoto1?: Maybe<HomepagePresentationPhoto1EntityResponse>;
  updateHomepagePresentationPhoto2?: Maybe<HomepagePresentationPhoto2EntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateGlobalSettingArgs = {
  data: GlobalSettingInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateHeroSectionArgs = {
  data: HeroSectionInput;
};


export type MutationUpdateHomepageBestsellerArgs = {
  data: HomepageBestsellerInput;
};


export type MutationUpdateHomepagePresentationPhoto1Args = {
  data: HomepagePresentationPhoto1Input;
};


export type MutationUpdateHomepagePresentationPhoto2Args = {
  data: HomepagePresentationPhoto2Input;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  AdditionalInfo?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Gallery?: Maybe<UploadFileRelationResponseCollection>;
  MainPhoto?: Maybe<UploadFileEntityResponse>;
  Marketing?: Maybe<ComponentReusablePictureWithDescriptionAndCta>;
  Mode?: Maybe<Enum_Product_Mode>;
  Name?: Maybe<Scalars['String']>;
  Price?: Maybe<Scalars['Float']>;
  SalePrice?: Maybe<Scalars['Float']>;
  Slug: Scalars['String'];
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  AdditionalInfo?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Marketing?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaFiltersInput>;
  Mode?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<FloatFilterInput>;
  SalePrice?: InputMaybe<FloatFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  AdditionalInfo?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  Gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  MainPhoto?: InputMaybe<Scalars['ID']>;
  Marketing?: InputMaybe<ComponentReusablePictureWithDescriptionAndCtaInput>;
  Mode?: InputMaybe<Enum_Product_Mode>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['Float']>;
  SalePrice?: InputMaybe<Scalars['Float']>;
  Slug?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  globalSetting?: Maybe<GlobalSettingEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  heroSection?: Maybe<HeroSectionEntityResponse>;
  homepageBestseller?: Maybe<HomepageBestsellerEntityResponse>;
  homepagePresentationPhoto1?: Maybe<HomepagePresentationPhoto1EntityResponse>;
  homepagePresentationPhoto2?: Maybe<HomepagePresentationPhoto2EntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  cart?: Maybe<Scalars['JSON']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  cart?: InputMaybe<JsonFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  cart?: InputMaybe<Scalars['JSON']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AllProductsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsDataQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Name?: string | null, Mode?: Enum_Product_Mode | null, Price?: number | null, SalePrice?: number | null, Slug: string, MainPhoto?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null };

export type GetUserDataQueryQueryVariables = Exact<{
  userEmail?: InputMaybe<StringFilterInput>;
}>;


export type GetUserDataQueryQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, cart?: any | null } | null }> } | null };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', id?: string | null, attributes?: { __typename?: 'Footer', FooterBrand?: { __typename?: 'ComponentFooterCombinedFooter', id: string, FooterCopyright?: string | null, FooterLogotype?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null } | null, FooterNavLists?: Array<{ __typename?: 'ComponentFooterFooterList', id: string, ListName?: string | null, FooterLink?: Array<{ __typename?: 'ComponentNavigationNavigationLink', id: string, LinkName?: string | null, LinkURL?: string | null } | null> | null } | null> | null } | null } | null } | null };

export type GlobalSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalSettingsQuery = { __typename?: 'Query', globalSetting?: { __typename?: 'GlobalSettingEntityResponse', data?: { __typename?: 'GlobalSettingEntity', id?: string | null, attributes?: { __typename?: 'GlobalSetting', ArrowDown?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, ArrowUp?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { __typename?: 'Query', header?: { __typename?: 'HeaderEntityResponse', data?: { __typename?: 'HeaderEntity', id?: string | null, attributes?: { __typename?: 'Header', PageName?: string | null, Logotype?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, Navigation?: { __typename?: 'ComponentNavigationNavigation', id: string, Link?: Array<{ __typename?: 'ComponentNavigationNavigationLink', id: string, LinkName?: string | null, LinkURL?: string | null } | null> | null, LoginButton?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, CartButton?: { __typename?: 'ComponentNavigationCartButton', id: string, CartIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, MobileButton?: { __typename?: 'ComponentNavigationMobileButton', id: string, MobileButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null } | null };

export type HeroSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroSectionQuery = { __typename?: 'Query', heroSection?: { __typename?: 'HeroSectionEntityResponse', data?: { __typename?: 'HeroSectionEntity', id?: string | null, attributes?: { __typename?: 'HeroSection', Slider?: { __typename?: 'ComponentHeroSectionSlider', SingleSlide?: Array<{ __typename?: 'ComponentHeroSectionSingleSlide', id: string, SlideHeading?: string | null, SlideSubheading?: string | null, SlideImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null> | null, ArrowUpIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, ArrowDownIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, ReusableButton?: Array<{ __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null> | null } | null } | null } | null } | null };

export type HomepageBestsellerQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageBestsellerQuery = { __typename?: 'Query', homepageBestseller?: { __typename?: 'HomepageBestsellerEntityResponse', data?: { __typename?: 'HomepageBestsellerEntity', attributes?: { __typename?: 'HomepageBestseller', Heading?: string | null, Description?: string | null, products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Name?: string | null, Mode?: Enum_Product_Mode | null, Price?: number | null, SalePrice?: number | null, Slug: string, AdditionalInfo?: string | null, MainPhoto?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, Gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null }> } | null, Marketing?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, DescriptionAlignment?: Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type HomepagePresentationPhoto1QueryVariables = Exact<{ [key: string]: never; }>;


export type HomepagePresentationPhoto1Query = { __typename?: 'Query', homepagePresentationPhoto1?: { __typename?: 'HomepagePresentationPhoto1EntityResponse', data?: { __typename?: 'HomepagePresentationPhoto1Entity', id?: string | null, attributes?: { __typename?: 'HomepagePresentationPhoto1', PictureDescriptionCTA?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, DescriptionAlignment?: Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type HomepagePresentationPhoto2QueryVariables = Exact<{ [key: string]: never; }>;


export type HomepagePresentationPhoto2Query = { __typename?: 'Query', homepagePresentationPhoto2?: { __typename?: 'HomepagePresentationPhoto2EntityResponse', data?: { __typename?: 'HomepagePresentationPhoto2Entity', id?: string | null, attributes?: { __typename?: 'HomepagePresentationPhoto2', PictureDescriptionCTA2?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, DescriptionAlignment?: Enum_Componentreusablepicturewithdescriptionandcta_Descriptionalignment | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type GetProductDataQueryQueryVariables = Exact<{
  slug?: InputMaybe<StringFilterInput>;
}>;


export type GetProductDataQueryQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Name?: string | null, Description?: string | null, Mode?: Enum_Product_Mode | null, Price?: number | null, SalePrice?: number | null, Slug: string, AdditionalInfo?: string | null, MainPhoto?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, Gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null }> } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', Name?: string | null } | null }> } | null, Marketing?: { __typename?: 'ComponentReusablePictureWithDescriptionAndCta', id: string, DescriptionHeading?: string | null, DescriptionText?: string | null, Variant?: Enum_Componentreusablepicturewithdescriptionandcta_Variant | null, Picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null, CTA?: { __typename?: 'ComponentReusableNavigationButton', id: string, ButtonText?: string | null, ButtonStyle?: Enum_Componentreusablenavigationbutton_Buttonstyle | null, ButtonLink?: string | null, ButtonIcon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null }> } | null };

export type ProductSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductSlugsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', Slug: string } | null }> } | null };

export type AddProductToUserCartMutationVariables = Exact<{
  id: Scalars['ID'];
  cartData?: InputMaybe<Scalars['JSON']>;
}>;


export type AddProductToUserCartMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', cart?: any | null } | null } | null } };


export const AllProductsDataDocument = gql`
    query AllProductsData {
  products(pagination: {limit: 100}) {
    data {
      id
      attributes {
        Name
        Mode
        Price
        SalePrice
        Slug
        MainPhoto {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllProductsDataQuery__
 *
 * To run a query within a React component, call `useAllProductsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsDataQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsDataQuery, AllProductsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsDataQuery, AllProductsDataQueryVariables>(AllProductsDataDocument, options);
      }
export function useAllProductsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsDataQuery, AllProductsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsDataQuery, AllProductsDataQueryVariables>(AllProductsDataDocument, options);
        }
export type AllProductsDataQueryHookResult = ReturnType<typeof useAllProductsDataQuery>;
export type AllProductsDataLazyQueryHookResult = ReturnType<typeof useAllProductsDataLazyQuery>;
export type AllProductsDataQueryResult = Apollo.QueryResult<AllProductsDataQuery, AllProductsDataQueryVariables>;
export const GetUserDataQueryDocument = gql`
    query getUserDataQuery($userEmail: StringFilterInput) {
  usersPermissionsUsers(filters: {email: $userEmail}) {
    data {
      id
      attributes {
        email
        username
        cart
      }
    }
  }
}
    `;

/**
 * __useGetUserDataQueryQuery__
 *
 * To run a query within a React component, call `useGetUserDataQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQueryQuery({
 *   variables: {
 *      userEmail: // value for 'userEmail'
 *   },
 * });
 */
export function useGetUserDataQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDataQueryQuery, GetUserDataQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDataQueryQuery, GetUserDataQueryQueryVariables>(GetUserDataQueryDocument, options);
      }
export function useGetUserDataQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDataQueryQuery, GetUserDataQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDataQueryQuery, GetUserDataQueryQueryVariables>(GetUserDataQueryDocument, options);
        }
export type GetUserDataQueryQueryHookResult = ReturnType<typeof useGetUserDataQueryQuery>;
export type GetUserDataQueryLazyQueryHookResult = ReturnType<typeof useGetUserDataQueryLazyQuery>;
export type GetUserDataQueryQueryResult = Apollo.QueryResult<GetUserDataQueryQuery, GetUserDataQueryQueryVariables>;
export const FooterDocument = gql`
    query Footer {
  footer {
    data {
      id
      attributes {
        FooterBrand {
          id
          FooterLogotype {
            data {
              id
              attributes {
                url
              }
            }
          }
          FooterCopyright
        }
        FooterNavLists {
          id
          ListName
          FooterLink {
            id
            LinkName
            LinkURL
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFooterQuery__
 *
 * To run a query within a React component, call `useFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterQuery(baseOptions?: Apollo.QueryHookOptions<FooterQuery, FooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options);
      }
export function useFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterQuery, FooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options);
        }
export type FooterQueryHookResult = ReturnType<typeof useFooterQuery>;
export type FooterLazyQueryHookResult = ReturnType<typeof useFooterLazyQuery>;
export type FooterQueryResult = Apollo.QueryResult<FooterQuery, FooterQueryVariables>;
export const GlobalSettingsDocument = gql`
    query GlobalSettings {
  globalSetting {
    data {
      id
      attributes {
        ArrowDown {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
        ArrowUp {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGlobalSettingsQuery__
 *
 * To run a query within a React component, call `useGlobalSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GlobalSettingsQuery, GlobalSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalSettingsQuery, GlobalSettingsQueryVariables>(GlobalSettingsDocument, options);
      }
export function useGlobalSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalSettingsQuery, GlobalSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalSettingsQuery, GlobalSettingsQueryVariables>(GlobalSettingsDocument, options);
        }
export type GlobalSettingsQueryHookResult = ReturnType<typeof useGlobalSettingsQuery>;
export type GlobalSettingsLazyQueryHookResult = ReturnType<typeof useGlobalSettingsLazyQuery>;
export type GlobalSettingsQueryResult = Apollo.QueryResult<GlobalSettingsQuery, GlobalSettingsQueryVariables>;
export const HeaderDocument = gql`
    query Header {
  header {
    data {
      id
      attributes {
        Logotype {
          data {
            attributes {
              url
            }
          }
        }
        PageName
        Navigation {
          id
          Link {
            id
            LinkName
            LinkURL
          }
          LoginButton {
            id
            ButtonIcon {
              data {
                attributes {
                  url
                }
              }
            }
            ButtonText
            ButtonStyle
            ButtonLink
          }
          CartButton {
            id
            CartIcon {
              data {
                attributes {
                  url
                }
              }
            }
          }
          MobileButton {
            id
            MobileButtonIcon {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHeaderQuery__
 *
 * To run a query within a React component, call `useHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeaderQuery(baseOptions?: Apollo.QueryHookOptions<HeaderQuery, HeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeaderQuery, HeaderQueryVariables>(HeaderDocument, options);
      }
export function useHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeaderQuery, HeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeaderQuery, HeaderQueryVariables>(HeaderDocument, options);
        }
export type HeaderQueryHookResult = ReturnType<typeof useHeaderQuery>;
export type HeaderLazyQueryHookResult = ReturnType<typeof useHeaderLazyQuery>;
export type HeaderQueryResult = Apollo.QueryResult<HeaderQuery, HeaderQueryVariables>;
export const HeroSectionDocument = gql`
    query HeroSection {
  heroSection {
    data {
      id
      attributes {
        Slider {
          SingleSlide {
            id
            SlideHeading
            SlideSubheading
            SlideImage {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          ArrowUpIcon {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          ArrowDownIcon {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          ReusableButton {
            id
            ButtonIcon {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
            ButtonText
            ButtonStyle
            ButtonLink
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHeroSectionQuery__
 *
 * To run a query within a React component, call `useHeroSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroSectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroSectionQuery(baseOptions?: Apollo.QueryHookOptions<HeroSectionQuery, HeroSectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeroSectionQuery, HeroSectionQueryVariables>(HeroSectionDocument, options);
      }
export function useHeroSectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeroSectionQuery, HeroSectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeroSectionQuery, HeroSectionQueryVariables>(HeroSectionDocument, options);
        }
export type HeroSectionQueryHookResult = ReturnType<typeof useHeroSectionQuery>;
export type HeroSectionLazyQueryHookResult = ReturnType<typeof useHeroSectionLazyQuery>;
export type HeroSectionQueryResult = Apollo.QueryResult<HeroSectionQuery, HeroSectionQueryVariables>;
export const HomepageBestsellerDocument = gql`
    query homepageBestseller {
  homepageBestseller {
    data {
      attributes {
        products {
          data {
            id
            attributes {
              Name
              Mode
              Price
              SalePrice
              Slug
              MainPhoto {
                data {
                  id
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
              Gallery {
                data {
                  id
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
              AdditionalInfo
              Marketing {
                id
                DescriptionHeading
                DescriptionText
                Variant
                Picture {
                  data {
                    id
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
                CTA {
                  id
                  ButtonIcon {
                    data {
                      id
                      attributes {
                        url
                        width
                        height
                      }
                    }
                  }
                  ButtonText
                  ButtonStyle
                  ButtonLink
                }
                DescriptionAlignment
              }
            }
          }
        }
        Heading
        Description
      }
    }
  }
}
    `;

/**
 * __useHomepageBestsellerQuery__
 *
 * To run a query within a React component, call `useHomepageBestsellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageBestsellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageBestsellerQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageBestsellerQuery(baseOptions?: Apollo.QueryHookOptions<HomepageBestsellerQuery, HomepageBestsellerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageBestsellerQuery, HomepageBestsellerQueryVariables>(HomepageBestsellerDocument, options);
      }
export function useHomepageBestsellerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageBestsellerQuery, HomepageBestsellerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageBestsellerQuery, HomepageBestsellerQueryVariables>(HomepageBestsellerDocument, options);
        }
export type HomepageBestsellerQueryHookResult = ReturnType<typeof useHomepageBestsellerQuery>;
export type HomepageBestsellerLazyQueryHookResult = ReturnType<typeof useHomepageBestsellerLazyQuery>;
export type HomepageBestsellerQueryResult = Apollo.QueryResult<HomepageBestsellerQuery, HomepageBestsellerQueryVariables>;
export const HomepagePresentationPhoto1Document = gql`
    query HomepagePresentationPhoto1 {
  homepagePresentationPhoto1 {
    data {
      id
      attributes {
        PictureDescriptionCTA {
          id
          DescriptionHeading
          DescriptionText
          Variant
          Picture {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          CTA {
            id
            ButtonIcon {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
            ButtonText
            ButtonStyle
            ButtonLink
          }
          DescriptionAlignment
        }
      }
    }
  }
}
    `;

/**
 * __useHomepagePresentationPhoto1Query__
 *
 * To run a query within a React component, call `useHomepagePresentationPhoto1Query` and pass it any options that fit your needs.
 * When your component renders, `useHomepagePresentationPhoto1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepagePresentationPhoto1Query({
 *   variables: {
 *   },
 * });
 */
export function useHomepagePresentationPhoto1Query(baseOptions?: Apollo.QueryHookOptions<HomepagePresentationPhoto1Query, HomepagePresentationPhoto1QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepagePresentationPhoto1Query, HomepagePresentationPhoto1QueryVariables>(HomepagePresentationPhoto1Document, options);
      }
export function useHomepagePresentationPhoto1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepagePresentationPhoto1Query, HomepagePresentationPhoto1QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepagePresentationPhoto1Query, HomepagePresentationPhoto1QueryVariables>(HomepagePresentationPhoto1Document, options);
        }
export type HomepagePresentationPhoto1QueryHookResult = ReturnType<typeof useHomepagePresentationPhoto1Query>;
export type HomepagePresentationPhoto1LazyQueryHookResult = ReturnType<typeof useHomepagePresentationPhoto1LazyQuery>;
export type HomepagePresentationPhoto1QueryResult = Apollo.QueryResult<HomepagePresentationPhoto1Query, HomepagePresentationPhoto1QueryVariables>;
export const HomepagePresentationPhoto2Document = gql`
    query HomepagePresentationPhoto2 {
  homepagePresentationPhoto2 {
    data {
      id
      attributes {
        PictureDescriptionCTA2 {
          id
          DescriptionHeading
          DescriptionText
          Variant
          Picture {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          CTA {
            id
            ButtonIcon {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
            ButtonText
            ButtonStyle
            ButtonLink
          }
          DescriptionAlignment
        }
      }
    }
  }
}
    `;

/**
 * __useHomepagePresentationPhoto2Query__
 *
 * To run a query within a React component, call `useHomepagePresentationPhoto2Query` and pass it any options that fit your needs.
 * When your component renders, `useHomepagePresentationPhoto2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepagePresentationPhoto2Query({
 *   variables: {
 *   },
 * });
 */
export function useHomepagePresentationPhoto2Query(baseOptions?: Apollo.QueryHookOptions<HomepagePresentationPhoto2Query, HomepagePresentationPhoto2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepagePresentationPhoto2Query, HomepagePresentationPhoto2QueryVariables>(HomepagePresentationPhoto2Document, options);
      }
export function useHomepagePresentationPhoto2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepagePresentationPhoto2Query, HomepagePresentationPhoto2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepagePresentationPhoto2Query, HomepagePresentationPhoto2QueryVariables>(HomepagePresentationPhoto2Document, options);
        }
export type HomepagePresentationPhoto2QueryHookResult = ReturnType<typeof useHomepagePresentationPhoto2Query>;
export type HomepagePresentationPhoto2LazyQueryHookResult = ReturnType<typeof useHomepagePresentationPhoto2LazyQuery>;
export type HomepagePresentationPhoto2QueryResult = Apollo.QueryResult<HomepagePresentationPhoto2Query, HomepagePresentationPhoto2QueryVariables>;
export const GetProductDataQueryDocument = gql`
    query getProductDataQuery($slug: StringFilterInput) {
  products(filters: {Slug: $slug}) {
    data {
      id
      attributes {
        Name
        Description
        Mode
        Price
        SalePrice
        Slug
        MainPhoto {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
        Gallery {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
        AdditionalInfo
        categories {
          data {
            id
            attributes {
              Name
            }
          }
        }
        Marketing {
          id
          DescriptionHeading
          DescriptionText
          Variant
          Picture {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          CTA {
            id
            ButtonIcon {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
            ButtonText
            ButtonStyle
            ButtonLink
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProductDataQueryQuery__
 *
 * To run a query within a React component, call `useGetProductDataQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDataQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDataQueryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductDataQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetProductDataQueryQuery, GetProductDataQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductDataQueryQuery, GetProductDataQueryQueryVariables>(GetProductDataQueryDocument, options);
      }
export function useGetProductDataQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductDataQueryQuery, GetProductDataQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductDataQueryQuery, GetProductDataQueryQueryVariables>(GetProductDataQueryDocument, options);
        }
export type GetProductDataQueryQueryHookResult = ReturnType<typeof useGetProductDataQueryQuery>;
export type GetProductDataQueryLazyQueryHookResult = ReturnType<typeof useGetProductDataQueryLazyQuery>;
export type GetProductDataQueryQueryResult = Apollo.QueryResult<GetProductDataQueryQuery, GetProductDataQueryQueryVariables>;
export const ProductSlugsDocument = gql`
    query ProductSlugs {
  products(pagination: {limit: 100}) {
    data {
      id
      attributes {
        Slug
      }
    }
  }
}
    `;

/**
 * __useProductSlugsQuery__
 *
 * To run a query within a React component, call `useProductSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductSlugsQuery(baseOptions?: Apollo.QueryHookOptions<ProductSlugsQuery, ProductSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductSlugsQuery, ProductSlugsQueryVariables>(ProductSlugsDocument, options);
      }
export function useProductSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSlugsQuery, ProductSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductSlugsQuery, ProductSlugsQueryVariables>(ProductSlugsDocument, options);
        }
export type ProductSlugsQueryHookResult = ReturnType<typeof useProductSlugsQuery>;
export type ProductSlugsLazyQueryHookResult = ReturnType<typeof useProductSlugsLazyQuery>;
export type ProductSlugsQueryResult = Apollo.QueryResult<ProductSlugsQuery, ProductSlugsQueryVariables>;
export const AddProductToUserCartDocument = gql`
    mutation addProductToUserCart($id: ID!, $cartData: JSON) {
  updateUsersPermissionsUser(id: $id, data: {cart: $cartData}) {
    data {
      attributes {
        cart
      }
    }
  }
}
    `;
export type AddProductToUserCartMutationFn = Apollo.MutationFunction<AddProductToUserCartMutation, AddProductToUserCartMutationVariables>;

/**
 * __useAddProductToUserCartMutation__
 *
 * To run a mutation, you first call `useAddProductToUserCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToUserCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToUserCartMutation, { data, loading, error }] = useAddProductToUserCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      cartData: // value for 'cartData'
 *   },
 * });
 */
export function useAddProductToUserCartMutation(baseOptions?: Apollo.MutationHookOptions<AddProductToUserCartMutation, AddProductToUserCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductToUserCartMutation, AddProductToUserCartMutationVariables>(AddProductToUserCartDocument, options);
      }
export type AddProductToUserCartMutationHookResult = ReturnType<typeof useAddProductToUserCartMutation>;
export type AddProductToUserCartMutationResult = Apollo.MutationResult<AddProductToUserCartMutation>;
export type AddProductToUserCartMutationOptions = Apollo.BaseMutationOptions<AddProductToUserCartMutation, AddProductToUserCartMutationVariables>;