export interface TimePeriod {
  from: Date;
  to: Date;
}

export interface CommonCategory {
  name: string;
  parent?: undefined | CommonCategory;
  subCategories?: CommonCategory[];
  commons?: Common[];
}

export interface Common {
  spec: Specification;

  /**
   * values need to correspondent
   * to values of spec
   */
  commonCharValueUse?: undefined | CommonCharValueUse[];
  subCommons?: undefined | Common[];
  parentCommons?: undefined | Common;

  name: string;
  id: string;
  version?: string;
  validFor?: undefined | TimePeriod;
  isBundle?: boolean;
  lifecycleStatus?: string;
  lastUpdate?: undefined | DateConstructor;
  accessRights?: AccessRights[];
}

export interface Specification {
  name?: string;
  id: string;
  version?: string;
  validFor?: undefined | TimePeriod;
  isBundle?: boolean;
  lifecycleStatus?: string;
  lastUpdate?: undefined | Date;
  commonSpecCharValueUse?: undefined | CommonSpecCharValueUse[];
}

export interface CommonSpecCharValueUse {
  name?: string;
  id: string;
  valueType?: string;// a type could be string, whereas a mimetype needs to be a correct mimetype
  minCardinality?: number;
  maxCardinality?: number;
  commonSpecCharValue?: undefined | CommonSpecCharValue;
}

export interface CommonSpecCharValue {
  isDefault?: boolean;
  isResource?: boolean;

  /**
   *   allow or disallow generated content from any source with rules based on CommonSpecCharValueUse
   *   for example comments of any news
   */
  producible?: boolean;
  editable?: boolean;
  visible?: boolean;
  accessRights?: AccessRights[];
  rangeInterval?: string;
  valueFrom?: any;
  valueTo?: any;
  valueRegex?: string;
  value?: any;
  valueResource?: undefined | CommonSpecCharValueResource;
}

export interface CommonCharValueUse {
  commonSpecCharValueUse: CommonSpecCharValueUse;

  /**
   * Needs to correspondent to a subset of values of
   * CommonCharValueUse.commonSpecCharValueUse
   *
   * Values are always a real list if maxCardinality > 1 or not defined
   * Values are always single values if maxCardinality = 1
   */
  commonCharValues: CommonCharValue[];
}

/**
 * Needs to have either value or valueResource.
 */
export interface CommonCharValue {
  isDefault?: boolean;
  hasResource?: boolean;
  value?: any;
  valueResource?: undefined |  CommonCharValueResource;
}

export interface CommonCharValueResource {
  name?: string;
  byte?: number;
  mimeType?: string;
  extension?: string;
  content?: any;

  // some resource link of a specific resource
  contentLink?: string;
  accessRights?: AccessRights[];
}

export interface CommonSpecCharValueResource {
  name?: string;
  maxBytes?: number;
  mimeTypes?: string;
}

export interface AccessRights {
  name: string;
  id: string;
}
