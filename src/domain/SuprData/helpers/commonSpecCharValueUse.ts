import {SpecificationCharacteristicValueResource, SpecificationCharacteristicValueUse} from '../specification';

export const specCharValueGenerator = (
  id: string, name?: string, valueType?: string, partialData?: Partial<SpecificationCharacteristicValueUse>
): SpecificationCharacteristicValueUse => Object.assign(partialData ?? {}, {id, name, valueType});

export const specCharValueCardinalityDecorator = (
  spec: SpecificationCharacteristicValueUse, cardinality: {
    minCardinality: number,
    maxCardinality: number
  }
): SpecificationCharacteristicValueUse => Object.assign({}, spec, cardinality);

export const booleanSpecCharValue = (
  id: string, name?: string
): SpecificationCharacteristicValueUse => specCharValueCardinalityDecorator(
  specCharValueGenerator(
    id,
    name,
    'boolean',
    {
      commonSpecCharValue: {
        valueRegex: '/[0-1]{1}/',
        editable: false,
        producible: false,
        visible: true
      }
    }
  ), {minCardinality: 0, maxCardinality: 1});

export const enumSpecCharValue = (
  id: string, types: string[], name?: string
): SpecificationCharacteristicValueUse => specCharValueCardinalityDecorator(
  specCharValueGenerator(
    id,
    name,
    'enum',
    {
      commonSpecCharValue: {
        valueRegex: '/('
          + types.reduce((prev, curr) => prev + '|' + curr)
          + ')/',
        editable: false,
        producible: false,
        visible: true
      }
    }
  ), {minCardinality: 0, maxCardinality: 1});

export const stringSpecCharValue = (
  id: string, name?: string
): SpecificationCharacteristicValueUse => specCharValueGenerator(
  id,
  name,
  'string',
  {
    commonSpecCharValue: {
      editable: false,
      producible: false,
      visible: true
    }
  }
);
export const resourceSpecCharValue = (
  id: string, name?: string, config?: SpecificationCharacteristicValueResource
): SpecificationCharacteristicValueUse => specCharValueGenerator(
  id,
  name,
  'resource',
  {
    commonSpecCharValue: {
      editable: false,
      producible: false,
      visible: true,
      isResource: true,
      valueResource: Object.assign({}, config ?? {})
    }
  }
);
