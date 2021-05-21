// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
  JSONObject: any;
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

export type FormField = {
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};




export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  collection?: Maybe<Section>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type Section = {
  __typename?: 'Section';
  type?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  new_doc_ext?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Document>>>;
};

export type SectionDocumentUnion = Page_Document;

export type SectionParams = {
  page?: Maybe<Page_Input>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument?: Maybe<Document>;
  updateDocument?: Maybe<SectionDocumentUnion>;
  updatePageDocument?: Maybe<Page_Document>;
};


export type MutationAddPendingDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<SectionParams>;
};


export type MutationUpdatePageDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Page_Input>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  getDocument?: Maybe<SectionDocumentUnion>;
  getCollections?: Maybe<Array<Maybe<Section>>>;
  getCollection?: Maybe<Section>;
  getPageDocument?: Maybe<Page_Document>;
  getPageList?: Maybe<Array<Maybe<Page_Document>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryGetPageDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};

export type Page_Data = Homepage_Doc_Data;

export type Page_Input = {
  homepage?: Maybe<Homepage_Doc_Input>;
};

export type Page_Values = Homepage_Doc_Values;

export type Page_Form = Homepage_Doc_Form;

export type Page_Document = Node & Document & {
  __typename?: 'Page_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Page_Data>;
  values?: Maybe<Page_Values>;
  form?: Maybe<Page_Form>;
};

export type NavWordmark_Icon_Data = {
  __typename?: 'NavWordmark_Icon_Data';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type HomepageNav_Wordmark_Data = {
  __typename?: 'HomepageNav_Wordmark_Data';
  icon?: Maybe<NavWordmark_Icon_Data>;
  name?: Maybe<Scalars['String']>;
};

export type HomepageNav_Items_Data = {
  __typename?: 'HomepageNav_Items_Data';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Homepage_Nav_Data = {
  __typename?: 'Homepage_Nav_Data';
  wordmark?: Maybe<HomepageNav_Wordmark_Data>;
  items?: Maybe<Array<Maybe<HomepageNav_Items_Data>>>;
};

export type Hero_Text_Data = {
  __typename?: 'Hero_Text_Data';
  color?: Maybe<Scalars['String']>;
};

export type Hero_Image_Data = {
  __typename?: 'Hero_Image_Data';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type Hero_Actions_Data = {
  __typename?: 'Hero_Actions_Data';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
};

export type Hero_Style_Data = {
  __typename?: 'Hero_Style_Data';
  color?: Maybe<Scalars['String']>;
};

export type Hero_Data = {
  __typename?: 'Hero_Data';
  tagline?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  text?: Maybe<Hero_Text_Data>;
  image?: Maybe<Hero_Image_Data>;
  actions?: Maybe<Array<Maybe<Hero_Actions_Data>>>;
  style?: Maybe<Hero_Style_Data>;
};

export type Testimonial_Style_Data = {
  __typename?: 'Testimonial_Style_Data';
  color?: Maybe<Scalars['String']>;
};

export type Testimonial_Data = {
  __typename?: 'Testimonial_Data';
  quote?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  style?: Maybe<Testimonial_Style_Data>;
};

export type FeaturesItems_Icon_Data = {
  __typename?: 'FeaturesItems_Icon_Data';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type FeaturesItems_Actions_Data = {
  __typename?: 'FeaturesItems_Actions_Data';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
};

export type Features_Items_Data = {
  __typename?: 'Features_Items_Data';
  icon?: Maybe<FeaturesItems_Icon_Data>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<FeaturesItems_Actions_Data>>>;
};

export type Features_Style_Data = {
  __typename?: 'Features_Style_Data';
  color?: Maybe<Scalars['String']>;
};

export type Features_Data = {
  __typename?: 'Features_Data';
  items?: Maybe<Array<Maybe<Features_Items_Data>>>;
  style?: Maybe<Features_Style_Data>;
};

export type Homepage_Blocks_Data = Hero_Data | Testimonial_Data | Features_Data;

export type Nav_Items_Data = {
  __typename?: 'Nav_Items_Data';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Nav_Data = {
  __typename?: 'Nav_Data';
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Nav_Items_Data>>>;
};

export type Homepage_Navlist_Data = Nav_Data;

export type HomepageFooter_Social_Data = {
  __typename?: 'HomepageFooter_Social_Data';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type Homepage_Footer_Data = {
  __typename?: 'Homepage_Footer_Data';
  social?: Maybe<HomepageFooter_Social_Data>;
};

export type Homepage_Doc_Data = {
  __typename?: 'Homepage_Doc_Data';
  nav?: Maybe<Homepage_Nav_Data>;
  blocks?: Maybe<Array<Maybe<Homepage_Blocks_Data>>>;
  navlist?: Maybe<Array<Maybe<Homepage_Navlist_Data>>>;
  footer?: Maybe<Homepage_Footer_Data>;
  _body?: Maybe<Scalars['String']>;
};

export type NavWordmark_Icon_Values = {
  __typename?: 'NavWordmark_Icon_Values';
  color?: Maybe<Scalars['Reference']>;
  name?: Maybe<Scalars['Reference']>;
  style?: Maybe<Scalars['Reference']>;
};

export type HomepageNav_Wordmark_Values = {
  __typename?: 'HomepageNav_Wordmark_Values';
  icon?: Maybe<NavWordmark_Icon_Values>;
  name?: Maybe<Scalars['String']>;
};

export type HomepageNav_Items_Values = {
  __typename?: 'HomepageNav_Items_Values';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Homepage_Nav_Values = {
  __typename?: 'Homepage_Nav_Values';
  wordmark?: Maybe<HomepageNav_Wordmark_Values>;
  items?: Maybe<Array<Maybe<HomepageNav_Items_Values>>>;
};

export type Hero_Text_Values = {
  __typename?: 'Hero_Text_Values';
  color?: Maybe<Scalars['Reference']>;
};

export type Hero_Image_Values = {
  __typename?: 'Hero_Image_Values';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type Hero_Actions_Values = {
  __typename?: 'Hero_Actions_Values';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Reference']>;
  icon?: Maybe<Scalars['Boolean']>;
};

export type Hero_Style_Values = {
  __typename?: 'Hero_Style_Values';
  color?: Maybe<Scalars['Reference']>;
};

export type Hero_Values = {
  __typename?: 'Hero_Values';
  tagline?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  text?: Maybe<Hero_Text_Values>;
  image?: Maybe<Hero_Image_Values>;
  actions?: Maybe<Array<Maybe<Hero_Actions_Values>>>;
  style?: Maybe<Hero_Style_Values>;
  _template?: Maybe<Scalars['String']>;
};

export type Testimonial_Style_Values = {
  __typename?: 'Testimonial_Style_Values';
  color?: Maybe<Scalars['Reference']>;
};

export type Testimonial_Values = {
  __typename?: 'Testimonial_Values';
  quote?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  style?: Maybe<Testimonial_Style_Values>;
  _template?: Maybe<Scalars['String']>;
};

export type FeaturesItems_Icon_Values = {
  __typename?: 'FeaturesItems_Icon_Values';
  color?: Maybe<Scalars['Reference']>;
  name?: Maybe<Scalars['Reference']>;
  style?: Maybe<Scalars['Reference']>;
};

export type FeaturesItems_Actions_Values = {
  __typename?: 'FeaturesItems_Actions_Values';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Reference']>;
  icon?: Maybe<Scalars['Boolean']>;
};

export type Features_Items_Values = {
  __typename?: 'Features_Items_Values';
  icon?: Maybe<FeaturesItems_Icon_Values>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<FeaturesItems_Actions_Values>>>;
};

export type Features_Style_Values = {
  __typename?: 'Features_Style_Values';
  color?: Maybe<Scalars['Reference']>;
};

export type Features_Values = {
  __typename?: 'Features_Values';
  items?: Maybe<Array<Maybe<Features_Items_Values>>>;
  style?: Maybe<Features_Style_Values>;
  _template?: Maybe<Scalars['String']>;
};

export type Homepage_Blocks_Values = Hero_Values | Testimonial_Values | Features_Values;

export type Nav_Items_Values = {
  __typename?: 'Nav_Items_Values';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Nav_Values = {
  __typename?: 'Nav_Values';
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Nav_Items_Values>>>;
  _template?: Maybe<Scalars['String']>;
};

export type Homepage_Navlist_Values = Nav_Values;

export type HomepageFooter_Social_Values = {
  __typename?: 'HomepageFooter_Social_Values';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type Homepage_Footer_Values = {
  __typename?: 'Homepage_Footer_Values';
  social?: Maybe<HomepageFooter_Social_Values>;
};

export type Homepage_Doc_Values = {
  __typename?: 'Homepage_Doc_Values';
  nav?: Maybe<Homepage_Nav_Values>;
  blocks?: Maybe<Array<Maybe<Homepage_Blocks_Values>>>;
  navlist?: Maybe<Array<Maybe<Homepage_Navlist_Values>>>;
  footer?: Maybe<Homepage_Footer_Values>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type SelectField = FormField & {
  __typename?: 'SelectField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NavWordmark_Icon_FormFieldsUnion = SelectField;

export type NavWordmark_Icon_GroupField = FormField & {
  __typename?: 'NavWordmark_Icon_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<NavWordmark_Icon_FormFieldsUnion>>>;
};

export type TextField = FormField & {
  __typename?: 'TextField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type HomepageNav_Wordmark_FormFieldsUnion = NavWordmark_Icon_GroupField | TextField;

export type HomepageNav_Wordmark_GroupField = FormField & {
  __typename?: 'HomepageNav_Wordmark_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<HomepageNav_Wordmark_FormFieldsUnion>>>;
};

export type HomepageNav_Items_FormFieldsUnion = TextField;

export type HomepageNav_Items_GroupListField = FormField & {
  __typename?: 'HomepageNav_Items_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<HomepageNav_Items_FormFieldsUnion>>>;
};

export type Homepage_Nav_FormFieldsUnion = HomepageNav_Wordmark_GroupField | HomepageNav_Items_GroupListField;

export type Homepage_Nav_GroupField = FormField & {
  __typename?: 'Homepage_Nav_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Homepage_Nav_FormFieldsUnion>>>;
};

export type Hero_Text_FormFieldsUnion = SelectField;

export type Hero_Text_GroupField = FormField & {
  __typename?: 'Hero_Text_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Hero_Text_FormFieldsUnion>>>;
};

export type Hero_Image_FormFieldsUnion = TextField;

export type Hero_Image_GroupField = FormField & {
  __typename?: 'Hero_Image_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Hero_Image_FormFieldsUnion>>>;
};

export type BooleanField = FormField & {
  __typename?: 'BooleanField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type Hero_Actions_FormFieldsUnion = TextField | SelectField | BooleanField;

export type Hero_Actions_GroupListField = FormField & {
  __typename?: 'Hero_Actions_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Hero_Actions_FormFieldsUnion>>>;
};

export type Hero_Style_FormFieldsUnion = SelectField;

export type Hero_Style_GroupField = FormField & {
  __typename?: 'Hero_Style_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Hero_Style_FormFieldsUnion>>>;
};

export type Hero_FormFieldsUnion = TextField | Hero_Text_GroupField | Hero_Image_GroupField | Hero_Actions_GroupListField | Hero_Style_GroupField;

export type Hero_Form = {
  __typename?: 'Hero_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Hero_FormFieldsUnion>>>;
};

export type TextareaField = FormField & {
  __typename?: 'TextareaField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type Testimonial_Style_FormFieldsUnion = SelectField;

export type Testimonial_Style_GroupField = FormField & {
  __typename?: 'Testimonial_Style_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Testimonial_Style_FormFieldsUnion>>>;
};

export type Testimonial_FormFieldsUnion = TextareaField | TextField | Testimonial_Style_GroupField;

export type Testimonial_Form = {
  __typename?: 'Testimonial_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Testimonial_FormFieldsUnion>>>;
};

export type FeaturesItems_Icon_FormFieldsUnion = SelectField;

export type FeaturesItems_Icon_GroupField = FormField & {
  __typename?: 'FeaturesItems_Icon_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<FeaturesItems_Icon_FormFieldsUnion>>>;
};

export type FeaturesItems_Actions_FormFieldsUnion = TextField | SelectField | BooleanField;

export type FeaturesItems_Actions_GroupListField = FormField & {
  __typename?: 'FeaturesItems_Actions_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<FeaturesItems_Actions_FormFieldsUnion>>>;
};

export type Features_Items_FormFieldsUnion = FeaturesItems_Icon_GroupField | TextField | FeaturesItems_Actions_GroupListField;

export type Features_Items_GroupListField = FormField & {
  __typename?: 'Features_Items_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Features_Items_FormFieldsUnion>>>;
};

export type Features_Style_FormFieldsUnion = SelectField;

export type Features_Style_GroupField = FormField & {
  __typename?: 'Features_Style_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Features_Style_FormFieldsUnion>>>;
};

export type Features_FormFieldsUnion = Features_Items_GroupListField | Features_Style_GroupField;

export type Features_Form = {
  __typename?: 'Features_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Features_FormFieldsUnion>>>;
};

export type Homepage_Blocks_BlocksFieldTemplates = {
  __typename?: 'Homepage_Blocks_BlocksFieldTemplates';
  hero?: Maybe<Hero_Form>;
  testimonial?: Maybe<Testimonial_Form>;
  features?: Maybe<Features_Form>;
};

export type Homepage_Blocks_BlocksField = FormField & {
  __typename?: 'Homepage_Blocks_BlocksField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  templates?: Maybe<Homepage_Blocks_BlocksFieldTemplates>;
};

export type Nav_Items_FormFieldsUnion = TextField;

export type Nav_Items_GroupListField = FormField & {
  __typename?: 'Nav_Items_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Nav_Items_FormFieldsUnion>>>;
};

export type Nav_FormFieldsUnion = TextField | Nav_Items_GroupListField;

export type Nav_Form = {
  __typename?: 'Nav_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Nav_FormFieldsUnion>>>;
};

export type Homepage_Navlist_BlocksFieldTemplates = {
  __typename?: 'Homepage_Navlist_BlocksFieldTemplates';
  nav?: Maybe<Nav_Form>;
};

export type Homepage_Navlist_BlocksField = FormField & {
  __typename?: 'Homepage_Navlist_BlocksField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  templates?: Maybe<Homepage_Navlist_BlocksFieldTemplates>;
};

export type HomepageFooter_Social_FormFieldsUnion = TextField;

export type HomepageFooter_Social_GroupField = FormField & {
  __typename?: 'HomepageFooter_Social_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<HomepageFooter_Social_FormFieldsUnion>>>;
};

export type Homepage_Footer_FormFieldsUnion = HomepageFooter_Social_GroupField;

export type Homepage_Footer_GroupField = FormField & {
  __typename?: 'Homepage_Footer_GroupField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Homepage_Footer_FormFieldsUnion>>>;
};

export type Homepage_Doc_FormFieldsUnion = Homepage_Nav_GroupField | Homepage_Blocks_BlocksField | Homepage_Navlist_BlocksField | Homepage_Footer_GroupField | TextareaField;

export type Homepage_Doc_Form = {
  __typename?: 'Homepage_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Homepage_Doc_FormFieldsUnion>>>;
};

export type NavWordmark_Icon_Input = {
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type HomepageNav_Wordmark_Input = {
  icon?: Maybe<NavWordmark_Icon_Input>;
  name?: Maybe<Scalars['String']>;
};

export type HomepageNav_Items_Input = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Homepage_Nav_Input = {
  wordmark?: Maybe<HomepageNav_Wordmark_Input>;
  items?: Maybe<Array<Maybe<HomepageNav_Items_Input>>>;
};

export type Hero_Text_Input = {
  color?: Maybe<Scalars['String']>;
};

export type Hero_Image_Input = {
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type Hero_Actions_Input = {
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
};

export type Hero_Style_Input = {
  color?: Maybe<Scalars['String']>;
};

export type Hero_Input = {
  tagline?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
  text?: Maybe<Hero_Text_Input>;
  image?: Maybe<Hero_Image_Input>;
  actions?: Maybe<Array<Maybe<Hero_Actions_Input>>>;
  style?: Maybe<Hero_Style_Input>;
};

export type Testimonial_Style_Input = {
  color?: Maybe<Scalars['String']>;
};

export type Testimonial_Input = {
  quote?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  style?: Maybe<Testimonial_Style_Input>;
};

export type FeaturesItems_Icon_Input = {
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type FeaturesItems_Actions_Input = {
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
};

export type Features_Items_Input = {
  icon?: Maybe<FeaturesItems_Icon_Input>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<FeaturesItems_Actions_Input>>>;
};

export type Features_Style_Input = {
  color?: Maybe<Scalars['String']>;
};

export type Features_Input = {
  items?: Maybe<Array<Maybe<Features_Items_Input>>>;
  style?: Maybe<Features_Style_Input>;
};

export type Blocks_Input = {
  hero?: Maybe<Hero_Input>;
  testimonial?: Maybe<Testimonial_Input>;
  features?: Maybe<Features_Input>;
};

export type Nav_Items_Input = {
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type Nav_Input = {
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Nav_Items_Input>>>;
};

export type Navlist_Input = {
  nav?: Maybe<Nav_Input>;
};

export type HomepageFooter_Social_Input = {
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type Homepage_Footer_Input = {
  social?: Maybe<HomepageFooter_Social_Input>;
};

export type Homepage_Doc_Input = {
  nav?: Maybe<Homepage_Nav_Input>;
  blocks?: Maybe<Array<Maybe<Blocks_Input>>>;
  navlist?: Maybe<Array<Maybe<Navlist_Input>>>;
  footer?: Maybe<Homepage_Footer_Input>;
  _body?: Maybe<Scalars['String']>;
};

