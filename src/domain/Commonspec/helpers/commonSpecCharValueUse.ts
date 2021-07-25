import {CommonSpecCharValueResource, CommonSpecCharValueUse} from '../specification';

export const specCharValueGenerator = (
  id: string, name?: string, valueType?: string, partialData?: Partial<CommonSpecCharValueUse>
): CommonSpecCharValueUse => Object.assign(partialData ?? {}, {id, name, valueType});

export const specCharValueCardinalityDecorator = (
  spec: CommonSpecCharValueUse, cardinality: {
    minCardinality: number,
    maxCardinality: number
  }
): CommonSpecCharValueUse => Object.assign({}, spec, cardinality);

export const booleanSpecCharValue = (
  id: string, name?: string
): CommonSpecCharValueUse => specCharValueCardinalityDecorator(
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
): CommonSpecCharValueUse => specCharValueCardinalityDecorator(
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
): CommonSpecCharValueUse => specCharValueGenerator(
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
  id: string, name?: string, config?: CommonSpecCharValueResource
): CommonSpecCharValueUse => specCharValueGenerator(
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
