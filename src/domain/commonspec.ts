interface TimePeriod {
  from: Date;
  to: Date;
}

interface CommonCategory {
  name: string;
  parent?: undefined | CommonCategory;
  subCategories?: CommonCategory[];
  commons?: Common[];
}

interface Common {
  spec?: CommonSpec;

  /**
   * values need to correspondent
   * to values of spec
   */
  commonCharValueUse?: undefined | CommonCharValueUse[];
  subCommons?: undefined | Common[];
  parentCommons?: undefined | Common;

  name: string;
  version?: string;
  validFor?: undefined | TimePeriod;
  isBundle?: boolean;
  lifecycleStatus?: string;
  lastUpdate?: undefined | Date;
  accessRights?: AccessRights[];
}

interface CommonSpec {
  name?: string;
  id: string;
  version?: string;
  validFor?: undefined | TimePeriod;
  isBundle?: boolean;
  lifecycleStatus?: string;
  lastUpdate?: undefined | Date;
  commonSpecCharValueUse?: undefined | CommonSpecCharValueUse[];
}

interface CommonSpecCharValueUse {
  name?: string;
  id: string;
  valueType?: string;// a type could be string, whereas a mimetype needs to be a correct mimetype
  minCardinality?: number;
  maxCardinality?: number;
  commonSpecCharValue?: undefined | CommonSpecCharValue;
}

interface CommonSpecCharValue {
  isDefault?: boolean;

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
}

interface CommonCharValueUse {
  commonSpecCharValueUse: CommonSpecCharValueUse;

  /**
   * Needs to correspondent to a subset of values of
   * CommonCharValueUse.commonSpecCharValueUse
   */
  commonCharValues: CommonCharValue[];
}

/**
 * Needs to have either value or valueResource.
 */
interface CommonCharValue {
  isDefault?: boolean;
  hasResource?: boolean;
  value?: any;
  valueResource?: undefined |  CommonCharValueResource;
}

interface CommonCharValueResource {
  name?: string;
  byte?: number;
  mimeType?: string;
  extension?: string;
  content?: any;

  // some resource link of a specific resource
  contentLink?: string;
  accessRights?: AccessRights[];
}

interface AccessRights {
  name: string;
  id: string;
}
