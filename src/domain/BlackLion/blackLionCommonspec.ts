import {AccessRights, Thing, Category, Specification} from '../SuprData/specification';
import {
  booleanSpecCharValue,
  enumSpecCharValue, resourceSpecCharValue,
  stringSpecCharValue
} from '../SuprData/helpers/commonSpecCharValueUse';
import {resourceCharValueUse, simpleCharValueUse} from '../SuprData/helpers/commonCharValueUse';
import {model} from '../SuprData/helpers/model';

const accessRights: AccessRights[] = [
  {name: 'public', '@id': 'PUBLIC'}
]


const PAGE: Specification = {
  name: 'Common page',
  '@id': 'common/page',
  specificationCharacteristicValueUse: [
    stringSpecCharValue('common/page/RENDER_BEHAVIOUR', 'How to render page components'),
    stringSpecCharValue('common/page/LINK', 'How to access page'),
    stringSpecCharValue('common/page/NAVIGATION_AREA', 'logo'),
    stringSpecCharValue('common/page/NAVIGATION_AREA_PRESENTATION', 'Presentation in navigation'),
    stringSpecCharValue('common/page/NAVIGATION_AREA_CONTENT', 'Navigation content in area'),
    stringSpecCharValue('common/page/NAVIGATION_ITEM_TITLE', 'Title within navigation'),
    stringSpecCharValue('common/page/NAVIGATION_ITEM_WEIGHT', 'Position within Navigation'),
  ]
}

const PAGE_COMPONENT: Specification = {
  name: 'Common page key component',
  '@id': 'common/page_component',
  specificationCharacteristicValueUse: [
    stringSpecCharValue('common/page_component/TITLE', 'Title'),
    stringSpecCharValue('common/page_component/SUBTITLE', 'Subtitle'),
    stringSpecCharValue('common/page_component/CONTENT', 'Content'),
    booleanSpecCharValue('common/page_component/CAN_RENDER_SUB_COMMON', 'Can render sub common?'),
    enumSpecCharValue(
      'common/page_component/RENDER_SUB_COMMON_ALGORITHM',
      ['small-tile'],
      'How to render sub common?'
    ),
  ]

}
const PAGE_KEY_COMPONENT: Specification = {
  name: 'Common page key component',
  '@id': 'common/page_key_component',
  specificationCharacteristicValueUse: [
    stringSpecCharValue('common/page_key_component/KEY_TITLE', 'Key Title'),
    stringSpecCharValue('common/page_key_component/KEY_SUBTITLE', 'Key Subtitle'),
    stringSpecCharValue('common/page_key_component/KEY_CONTENT', 'Key Content'),
    resourceSpecCharValue('common/page_key_component/KEY_VISUAL', 'Key visual'),
    resourceSpecCharValue('common/page_key_component/KEY_BACKGROUND', 'Key content background'),
  ]
}
const ATHLETE_COMPONENT: Specification = {
  name: 'Player page component',
  '@id': 'player/component',
  specificationCharacteristicValueUse: [
    stringSpecCharValue('common/page_key_component/PLAYER_NAME', 'Player name'),
    resourceSpecCharValue('common/page_key_component/PLAYER_PICTURE', 'Player picture'),
    stringSpecCharValue('common/page_key_component/ROLE_NAME', 'Role name'),
    resourceSpecCharValue('common/page_key_component/ROLE_SYMBOL', 'Role symbol'),
    resourceSpecCharValue('common/page_key_component/ROLE_PATTERN', 'Role pattern'),
  ]

}

const pageThingBuilder = model<Thing>({
  '@context': 'WebSite',
  '@type': 'WebPage',
  '@version': '1',
  specification: PAGE,
  accessRights
});

const pageComponentThingBuilder = model<Thing>({
  '@context': 'WebSite',
  '@type': 'WebPage',
  '@version': '1',
  specification: PAGE_COMPONENT,
  accessRights
});

const pageKeyComponentThingBuilder = model<Thing>({
  '@context': 'WebSite',
  '@type': 'WebPage',
  '@version': '1',
  specification: PAGE_KEY_COMPONENT,
  accessRights
});

const playerThingBuilder = model<Thing>({
  '@context': 'SportsTeam',
  '@baseType': 'Person',
  '@type': 'Athlete',
  '@version': '1',
  specification: ATHLETE_COMPONENT,
  accessRights
});

const DE: Thing[] = [
  pageThingBuilder({
    name: 'Homepage',
    '@id': 'home',
    characteristicValueUse: [
      simpleCharValueUse('common/page/NAVIGATION_ITEM_HIDE', [1]),
    ],
  }),
  pageThingBuilder({
    name: 'pro',
    '@id': 'pro',
    subThings: [
      pageKeyComponentThingBuilder({
        name: 'Key component',
        '@id': 'pro/key',
        characteristicValueUse: [
          simpleCharValueUse('common/page_key_component/KEY_TITLE', ['progaming']),
          simpleCharValueUse('common/page_key_component/KEY_SUBTITLE', ['Packende Team-Fights. Attraktive Taktik. Fesselnde Spiele.']),
          resourceCharValueUse('common/page_key_component/KEY_CONTENT', [{
            name: 'urage',
            contentLink: '/assets/images/urage-logo.png'
          }]),
          resourceCharValueUse('common/page_key_component/KEY_VISUAL', [{
            name: 'bl_logo',
            contentLink: '/assets/images/BlackLion_Logo_white_clean_monochrom.png'
          }]),
          resourceCharValueUse('common/page_key_component/KEY_BACKGROUND', [{
            name: 'bl_pattern_black',
            contentLink: '/assets/images/BlackLion_Brandpattern_01_black.png'
          }]),
        ],
      }),
      pageComponentThingBuilder({
        name: 'Athletes',
        '@id': 'pro/athletes',
        specification: PAGE_COMPONENT,
        characteristicValueUse: [
          {
            commonSpecCharValueUse: {
              '@id': 'common/page_component/TITLE',
            },
            commonCharValues: [
              {
                value: 'Athlethen'
              }
            ]
          },
          {
            commonSpecCharValueUse: {
              '@id': 'common/page_component/CAN_RENDER_SUB_COMMON',
            },
            commonCharValues: [
              {
                value: 1
              }
            ]
          },
          {
            commonSpecCharValueUse: {
              '@id': 'common/page_component/RENDER_SUB_COMMON_ALGORITHM',
            },
            commonCharValues: [
              {
                value: 'small-tile'
              }
            ]
          },
        ],
        subThings: [
          playerThingBuilder({
            name: 'Ryoshi',
            '@id': 'pro/athletes/ryoshi',
            characteristicValueUse: [
              simpleCharValueUse('player/component/PLAYER_NAME', ['progaming']),
              simpleCharValueUse('player/component/ROLE_SUBTITLE', ['Packende Team-Fights. Attraktive Taktik. Fesselnde Spiele.']),
              resourceCharValueUse('player/component/PLAYER_CONTENT', [{
                name: 'urage',
                contentLink: '/assets/images/urage-logo.png'
              }]),
              resourceCharValueUse('player/component/ROLE_VISUAL', [{
                name: 'bl_logo_monochrom',
                contentLink: '/assets/images/BlackLion_Brandpattern_01_black.png'
              }]),
              resourceCharValueUse('player/component/ROLE_BACKGROUND', [{
                name: 'bl_pattern_black',
                contentLink: '/assets/images/BlackLion_Brandpattern_01_black.png'
              }])
            ],
          }),
        ]
      })
    ]
  })
]

export const categories: Category = {
  name: 'Black Lion',
  subCategories: [
    {
      name: 'Navigation'
    },
    {
      name: 'DE',
      things: DE
    }
  ]
}
