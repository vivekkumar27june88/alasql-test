import * as model from './model';
import { expect } from 'chai';

const dummyData = {
  configure_preferences: {
    filter_link: 'https://silogapyll.execute-api.us-east-1.amazonaws.com/dev/timeline?filter=pref',
    link: 'https://silogapyll.execute-api.us-east-1.amazonaws.com/dev/preference',
    views: {
      ids: ['privacy_settings', 'unsubscribed_settings'],
      entities: {
        privacy_settings: {
          title: 'Privacy Settings',
          uuid: 'uuid1',
          view_title: 'configure_preferences',
          content: {
            map_items: {
              ids: ['item3', 'item2'],
              entities: {
                item3: {
                  isActive: false,
                  title: "Don't keep my data for more than 30 day",
                },
                item2: {
                  isActive: false,
                  title: 'Keep my data co-located',
                },
                item1: {
                  isActive: false,
                  title: "Don't sell my data 3rd party agencies",
                },
              },
            },
            description:
              'We take Privacy seriously. Please choose your preferences and  click Save. You can change your mind and revisit your \nprivacy choices at anytime by returning to this site.',
            depth: '1',
          },
          side_bar_title: 'Privacy Settings',
          view_id: 'privacy_settings',
        },
        unsubscribed_settings: {
          title: 'Unsuscribed Settings',
          uuid: 'uuid3',
          view_title: 'configure_preferences',
          content: {
            map_items: {
              ids: ['item8', 'item9'],
              entities: {
                item8: {
                  isActive: true,
                  title: 'I no longer want to receive notifications',
                },
                item9: {
                  isActive: false,
                  title: 'I want weekly list',
                },
              },
            },
            description:
              'We take Privacy seriously. Please choose your Unsubscribe settings \nand click Save. You can change your mind and revisit your choices at \nanytime by returning to this site.',
            depth: '1',
          },
          side_bar_title: 'Unsubscribed Settings',
          view_id: 'unsubscribed_settings',
        },
      },
    },
    title: 'Preferences',
    form_link: 'https://silogapyll.execute-api.us-east-1.amazonaws.com/dev/admin/pref/form',
  },
};

describe('Testing | Configure Preferences', () => {
  let cfObj: model.ConfigurationPreferences;

  beforeEach(() => {
    const cfModel: model.IConfigurePreferencesModel = JSON.parse(JSON.stringify(dummyData.configure_preferences));
    cfObj = new model.ConfigurationPreferences(cfModel);
    // model.printJSON(cfObj.cf);
  });

  it('should change the view side_bar_title', () => {
    const viewId = cfObj.cf.views.ids[0];
    let view = cfObj.getViewById(viewId);
    const newSideBarTitle = `${view.side_bar_title}-CHANGED`;
    cfObj.changeSideBarTitle(viewId, newSideBarTitle);

    view = cfObj.getViewById(viewId);
    expect(view.side_bar_title).to.equal(newSideBarTitle);
  });
});
