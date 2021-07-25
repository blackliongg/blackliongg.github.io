const accessRights: AccessRights[] = [
  {name: 'public', id: 'PUBLIC'}
]

const PAGE: CommonSpec = {
  name: 'Common page',
  id: 'common/page',
  commonSpecCharValueUse: [
    {
      name: 'hide in navigation',
      id: 'common/page/NAVIGATION_ITEM_HIDE',
      valueType: 'boolean',
      minCardinality: 0,
      maxCardinality: 1,
      commonSpecCharValue: {
        valueRegex: '/[0-1]{1}/',
        editable: false,
        producible: false,
        visible: true
      }
    },

  ]

}

const PAGE_COMPONENT: CommonSpec = {
  name: 'Common page component',
  id: 'common/page_component',
  commonSpecCharValueUse: [
    {
      name: 'key title',
      id: 'common/page_component/KEY_TITLE',
      valueType: 'string',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'key subtitle',
      id: 'common/page_component/KEY_SUBTITLE',
      valueType: 'string',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'key content',
      id: 'common/page_component/KEY_CONTENT',
      valueType: 'list',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    }, {
      name: 'title',
      id: 'common/page_component/TITLE',
      valueType: 'string',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'subtitle',
      id: 'common/page_component/SUBTITLE',
      valueType: 'string',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'content',
      id: 'common/page_component/CONTENT',
      valueType: 'list',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'key additional content',
      id: 'common/page_component/KEY_ADDITIONAL_CONTENT',
      valueType: 'list',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'key background',
      id: 'common/page_component/KEY_BACKGROUND',
      valueType: 'resourceId',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'Can render sub common?',
      id: 'common/page_component/KEY_BACKGROUND',
      valueType: 'boolean',
      commonSpecCharValue: {
        valueRegex: '/[0-1]{1}/',
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'How to render sub common?',
      id: 'common/page_component/KEY_BACKGROUND',
      valueType: 'enum',
      commonSpecCharValue: {
        valueRegex: '/(small-tile)/',
        visible: true,
        producible: false,
        editable: false
      }
    }
  ]

}

const PLAYER_COMPONENT: CommonSpec = {
  name: 'Player page component',
  id: 'player/component',
  commonSpecCharValueUse: [
    {
      name: 'player name',
      id: 'player/component/NAME',
      valueType: 'string',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'player picture',
      id: 'player/component/PICTURE',
      valueType: 'string',
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
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'key additional content',
      id: 'player/component/KEY_ADDITIONAL_CONTENT',
      valueType: 'list',
      commonSpecCharValue: {
        visible: true,
        producible: false,
        editable: false
      }
    },
    {
      name: 'key background',
      id: 'player/component/KEY_BACKGROUND',
      valueType: 'resourceId',
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
    subCommons: [
      {
        name: 'Key component',
        spec: PAGE_COMPONENT,
        commonCharValueUse: [
          {
            commonSpecCharValueUse: {
              id: 'common/page_component/KEY_TITLE',
            },
            commonCharValues: [
              {
                value: 'progaming'
              }
            ]
          },
          {
            commonSpecCharValueUse: {
              id: 'common/page_component/KEY_SUBTITLE',
            },
            commonCharValues: [
              {
                value: 'Packende Team-Fights. Attraktive Taktik. Fesselnde Spiele.'
              }
            ]
          },
          {
            commonSpecCharValueUse: {
              id: 'common/page_component/KEY_CONTENT',
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
              id: 'common/page_component/KEY_ADDITIONAL_CONTENT',
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
              id: 'common/page_component/KEY_BACKGROUND',
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
      }
    ]
  }
]

const categories: CommonCategory = {
  name: 'Black Lion',
  subCategories: [
    {
      name: 'DE',
      commons: DE
    }
  ]
}
