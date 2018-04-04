export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 500
          }
        },
        children: [
          {
            path: 'intrusion',
            data: {
              menu: {
                title: 'general.menu.intrusion',
              }
            }
          },
          {
            path: 'vulnerability',
            data: {
              menu: {
                title: 'general.menu.vulnerability',
              }
            }
          },
          {
            path: 'systems',
            data: {
              menu: {
                title: 'general.menu.systems',
              }
            }
          },
          {
            path: 'fulllogs',
            data: {
              menu: {
                title: 'general.menu.full_logs',
              }
            }
          }
        ]
      },
      {
        path: 'analysis',
        data: {
          menu: {
            title: 'general.menu.analysis',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 350,
          }
        },
        children: [
          {
            path: 'correlation',
            data: {
              menu: {
                title: 'general.menu.correlation',
              }
            }
          },
          {
            path: 'addrule',
            data: {
              menu: {
                title: 'general.menu.add_rule',
              }
            }
          },
          {
            path: 'elastalert',
            data: {
              menu: {
                title: 'general.menu.elastalert',
              }
            }
          }
        ]
      },
      {
        path: 'configuration',
        data: {
          menu: {
            title: 'general.menu.configuration',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 450,
          }
        },
        children: [
          {
            path: 'log',
            data: {
              menu: {
                title: 'general.menu.log',
              }
            }
          },
          {
            path: 'user',
            data: {
              menu: {
                title: 'general.menu.user',
              }
            }
          },
          {
            path: 'agent',
            data: {
              menu: {
                title: 'general.menu.agent',
              }
            }
          },
          {
            path: 'system',
            data: {
              menu: {
                title: 'general.menu.system',
              }
            }
          }
        ]
      },
      {
        path: 'report',
        data: {
          menu: {
            title: 'general.menu.report',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'configuration',
            data: {
              menu: {
                title: 'general.menu.configuration',
              }
            }
          }
        ]
      },
      {
        path: 'intelligence',
        data: {
          menu: {
            title: 'general.menu.intelligence',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 0,
          }
        }
      },
      
    ]
  }
];
