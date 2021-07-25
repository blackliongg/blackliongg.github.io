import {CommonCharValueResource} from '../specification';

export const simpleCharValueUse = (
  specCharValueUseId: string,
  values: any[]
) => ({
  commonSpecCharValueUse: {
    id: specCharValueUseId
  },
  commonCharValues: values.map(
    (value: any) => ({
      value
    })
  )
});

export const resourceCharValueUse = (
  specCharValueUseId: string,
  resources: CommonCharValueResource[]
) => ({
  commonSpecCharValueUse: {
    id: specCharValueUseId
  },
  commonCharValues: resources.map(
    (valueResource: any) => ({
      valueResource
    })
  )
});
