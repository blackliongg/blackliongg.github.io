interface TimePeriod {
  from: Date;
  to: Date;
}

interface CommonCategory {
  name: string;
  commons: Common[];
}

interface Common {
  spec: CommonSpec;

  /**
   * values need to correspondent
   * to values of spec
   */
  commonSpecCharValueUse?: undefined | CommonSpecCharValueUse[];
  subCommons?: undefined | Common[];

  name: string;
  version?: string;
  validFor?: undefined | TimePeriod;
  isBundle?: boolean;
  lifecycleStatus?: string;
  lastUpdate?: undefined | Date;
  accessRights: AccessRights[];
}

interface CommonSpec {
  name: string;
  version?: string;
  validFor?: undefined | TimePeriod;
  isBundle?: boolean;
  lifecycleStatus?: string;
  lastUpdate?: undefined | Date;
  commonSpecCharValueUse?: undefined | CommonSpecCharValueUse[];
}

interface CommonSpecCharValueUse {
  name: string;
  valueType: string;// a type could be string, whereas a mimetype needs to be a correct mimetype
  minCardinality?: number;
  maxCardinality?: number;
  commonSpecCharValues?: undefined | CommonSpecCharValue[];
}

interface CommonSpecCharValue {
  isDefault?: boolean;

  /**
   *   generatable false means user generated content
   *   for example comments of any news
   */
  generatable?: boolean;

  editable?: boolean;
  visible?: boolean;
  accessRights: AccessRights[];
  rangeInterval?: string;
  valueFrom?: any;
  valueTo?: any;
  valueRegex?: string;
  value?: any;
  valueResource?: undefined |  CommonSpecCharValueResource;
}

interface CommonSpecCharValueResource {
  name: string;
  byte: number;
  mimeType: string;
  extension: string;
  content: any;

  // some resource link of a specific resource
  contentLink: string;
  accessRights: AccessRights[];
}

interface AccessRights {
  name: string;
}
