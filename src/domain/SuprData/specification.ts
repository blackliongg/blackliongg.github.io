interface Typed {
  '@version'?: string;
  '@type'?: string;
  '@context'?: string;
}

interface TypedWithBaseType extends Typed {
  '@baseType'?: string;
}

interface Id {
  '@id': string;
}

interface Common {
  name?: string;
  description?: string;
}

interface ValidFor {
  validFor?: TimePeriod;
}

interface LifecycleStatus {
  lifecycleStatus?: string;
}

interface AccessRightsManagement {
  accessRights?: AccessRights[];
}

interface Action extends Id,
  Common,
  Typed,
  AccessRightsManagement,
  ValidFor,
  LifecycleStatus {
}

interface ActionManagement {
  actions?: Action[];
}

interface Timestamps {
  updatedAt?: Date;
  createdAt?: Date;
}

export interface TimePeriod {
  from: Date;
  to: Date;
}

export interface Category extends Common {
  parentCategory?: undefined | Category;
  subCategories?: Category[];
  things?: Thing[];
}

export interface Thing extends Id,
  TypedWithBaseType,
  Timestamps,
  AccessRightsManagement,
  ValidFor,
  LifecycleStatus,
  Common {
  specification: Specification;

  /**
   * values need to correspondent
   * to values of spec
   */
  characteristicValueUse?: undefined | CharacteristicValueUse[];
  subThings?: undefined | Thing[];
  relatedThings?: undefined | Thing[];
  isBundle?: boolean;
}

export interface Specification extends Id,
  Typed,
  Timestamps,
  ValidFor,
  LifecycleStatus,
  Common,
  ActionManagement {
  isBundle?: boolean;
  specificationCharacteristicValueUse?: undefined | SpecificationCharacteristicValueUse[];
}

export interface SpecificationCharacteristicValueUse extends Id, Common {
  valueType?: string;// a type could be string, whereas a mimetype needs to be a correct mimetype
  minCardinality?: number;
  maxCardinality?: number;
  commonSpecCharValue?: undefined | CommonSpecCharValue;
}

export interface CommonSpecCharValue extends AccessRightsManagement {
  isDefault?: boolean;
  isResource?: boolean;

  /**
   *   allow or disallow generated content from any source with rules based on CommonSpecCharValueUse
   *   for example comments of any news
   */
  producible?: boolean;
  editable?: boolean;
  visible?: boolean;
  rangeInterval?: string;
  valueFrom?: any;
  valueTo?: any;
  valueRegex?: string;
  value?: any;
  valueResource?: undefined | SpecificationCharacteristicValueResource;
}

export interface CharacteristicValueUse {
  commonSpecCharValueUse: SpecificationCharacteristicValueUse;

  /**
   * Needs to correspondent to a subset of values of
   * CommonCharValueUse.commonSpecCharValueUse
   *
   * Values are always a real list if maxCardinality > 1 or not defined
   * Values are always single values if maxCardinality = 1
   */
  commonCharValues: CharacteristicValue[];
}

/**
 * Needs to have either value or valueResource.
 */
export interface CharacteristicValue {
  isDefault?: boolean;
  hasResource?: boolean;
  value?: any;
  characteristicValueResource?: undefined | CharacteristicValueResource;
}

export interface CharacteristicValueResource extends Common {
  byte?: number;
  mimeType?: string;
  contentLink?: string;
  accessRights?: AccessRights[];
}

export interface SpecificationCharacteristicValueResource {
  name?: string;
  maxBytes?: number;
  mimeTypes?: string;
}

export interface AccessRights extends Id, Common {
}
