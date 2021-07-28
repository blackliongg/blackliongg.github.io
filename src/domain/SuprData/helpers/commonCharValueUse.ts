import {CharacteristicValueResource, CharacteristicValueUse} from '../specification';

export const simpleCharValueUse = (
  specCharValueUseId: string,
  values: any[]
): CharacteristicValueUse => ({
  commonSpecCharValueUse: {
    '@id': specCharValueUseId
  },
  commonCharValues: values.map(
    (value: any) => ({
      value
    })
  )
});

export const resourceCharValueUse = (
  specCharValueUseId: string,
  resources: CharacteristicValueResource[]
): CharacteristicValueUse => ({
  commonSpecCharValueUse: {
    '@id': specCharValueUseId
  },
  commonCharValues: resources.map(
    (characteristicValueResource: any) => ({
      characteristicValueResource
    })
  )
});
