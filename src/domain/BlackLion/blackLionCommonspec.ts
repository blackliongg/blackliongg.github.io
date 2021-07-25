import {AccessRights, Common, CommonCategory, Specification} from '../Commonspec/specification';
import {
  booleanSpecCharValue,
  enumSpecCharValue, resourceSpecCharValue,
  stringSpecCharValue
} from '../Commonspec/helpers/commonSpecCharValueUse';
import {resourceCharValueUse, simpleCharValueUse} from '../Commonspec/helpers/commonCharValueUse';

const accessRights: AccessRights[] = [
  {name: 'public', id: 'PUBLIC'}
]

const PAGE: Specification = {
  name: 'Common page',
  id: 'common/page',
  commonSpecCharValueUse: [
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
  id: 'common/page_component',
  commonSpecCharValueUse: [
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
  id: 'common/page_key_component',
  commonSpecCharValueUse: [
    stringSpecCharValue('common/page_key_component/KEY_TITLE', 'Key Title'),
    stringSpecCharValue('common/page_key_component/KEY_SUBTITLE', 'Key Subtitle'),
    stringSpecCharValue('common/page_key_component/KEY_CONTENT', 'Key Content'),
    resourceSpecCharValue('common/page_key_component/KEY_VISUAL', 'Key visual'),
    resourceSpecCharValue('common/page_key_component/KEY_BACKGROUND', 'Key content background'),
  ]
}
const PLAYER_COMPONENT: Specification = {
  name: 'Player page component',
  id: 'player/component',
  commonSpecCharValueUse: [
    stringSpecCharValue('common/page_key_component/PLAYER_NAME', 'Player name'),
    resourceSpecCharValue('common/page_key_component/PLAYER_PICTURE', 'Player picture'),
    stringSpecCharValue('common/page_key_component/ROLE_NAME', 'Role name'),
    resourceSpecCharValue('common/page_key_component/ROLE_SYMBOL', 'Role symbol'),
    resourceSpecCharValue('common/page_key_component/ROLE_PATTERN', 'Role pattern'),
    {
      name: 'player name',
      id: 'player/component/PLAYER_NAME',
      valueType: 'string',
      minCardinality: 0,
      maxCardinality: 1,
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'player picture',
      id: 'player/component/PLAYER_PICTURE',
      valueType: 'string',
      minCardinality: 0,
      maxCardinality: 1,
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'player role',
      id: 'player/component/ROLE_NAME',
      valueType: 'string',
      minCardinality: 0,
      maxCardinality: 1,
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'player role symbol',
      id: 'player/component/ROLE_SYMBOL',
      valueType: 'list',
      minCardinality: 0,
      maxCardinality: 1,
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'player role pattern',
      id: 'player/component/ROLE_PATTERN',
      valueType: 'list',
      minCardinality: 0,
      maxCardinality: 1,
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    }
  ]

}

const DE: Common[] = [
  {
    name: 'Homepage',
    id: 'home',
    spec: PAGE,
    commonCharValueUse: [
      {
        commonSpecCharValueUse: {
          id: 'common/page/NAVIGATION_ITEM_HIDE'
        },
        commonCharValues: [
          {
            value: 1
          }
        ]
      }
    ],
  },
  {
    name: 'pro',
    id: 'pro',
    subCommons: [
      {
        name: 'Key component',
        id: 'pro/key',
        spec: PAGE_KEY_COMPONENT,
        commonCharValueUse: [
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
      },
      {
        name: 'Athletes',
        id: 'pro/athletes',
        spec: PAGE_COMPONENT,
        commonCharValueUse: [
          {
            commonSpecCharValueUse: {
              id: 'common/page_component/TITLE',
            },
            commonCharValues: [
              {
                value: 'Athlethen'
              }
            ]
          },
          {
            commonSpecCharValueUse: {
              id: 'common/page_component/CAN_RENDER_SUB_COMMON',
            },
            commonCharValues: [
              {
                value: 1
              }
            ]
          },
          {
            commonSpecCharValueUse: {
              id: 'common/page_component/RENDER_SUB_COMMON_ALGORITHM',
            },
            commonCharValues: [
              {
                value: 'small-tile'
              }
            ]
          },
        ],
        subCommons: [
          {
            name: 'Ryoshi',
            id: 'pro/athletes/ryoshi',
            spec: PLAYER_COMPONENT,
            commonCharValueUse: [
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
              }]),
              {
                commonSpecCharValueUse: {
                  id: 'player/component/PLAYER_NAME',
                },
                commonCharValues: [
                  {
                    value: 'Ryoshi'
                  }
                ]
              },
              {
                commonSpecCharValueUse: {
                  id: 'player/component/ROLE_NAME',
                },
                commonCharValues: [
                  {
                    value: 'Midlane'
                  }
                ]
              },
              {
                commonSpecCharValueUse: {
                  id: 'player/component/PLAYER_PICTURE',
                },
                commonCharValues: [
                  {
                    valueResource: {
                      name: 'urage',
                      contentLink: '/assets/images/urage-logo.png'
                    }
                  }
                ]
              },
              {
                commonSpecCharValueUse: {
                  id: 'player/component/ROLE_SYMBOL',
                },
                commonCharValues: [
                  {
                    valueResource: {
                      name: 'Black Lion',
                      contentLink: '/assets/images/BlackLion_Logo_white_clean_monochrom.png'
                    }
                  }
                ]
              },
              {
                commonSpecCharValueUse: {
                  id: 'player/component/ROLE_PATTERN',
                },
                commonCharValues: [
                  {
                    valueResource: {
                      name: 'bl_pattern_black',
                      contentLink: '/assets/images/BlackLion_Brandpattern_01_black.png'
                    }
                  }
                ]
              }
            ],
          },
        ]
      }
    ]
  }
]

const categories: CommonCategory = {
  name: 'Black Lion',
  subCategories: [
    {
      name: 'Navigation'
    },
    {
      name: 'DE',
      commons: DE
    }
  ]
}
