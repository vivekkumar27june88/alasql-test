"use strict";
exports.__esModule = true;
var dummyData = {
    configure_preferences: {
        filter_link: "https://silogapyll.execute-api.us-east-1.amazonaws.com/dev/timeline?filter=pref",
        link: "https://silogapyll.execute-api.us-east-1.amazonaws.com/dev/preference",
        views: {
            ids: ["privacy_settings", "unsubscribed_settings"],
            entities: {
                privacy_settings: {
                    title: "Privacy Settings",
                    uuid: "uuid1",
                    view_title: "configure_preferences",
                    content: {
                        map_items: {
                            ids: ["item3", "item2"],
                            entities: {
                                item3: {
                                    isActive: false,
                                    title: "Don't keep my data for more than 30 day"
                                },
                                item2: {
                                    isActive: false,
                                    title: "Keep my data co-located"
                                },
                                item1: {
                                    isActive: false,
                                    title: "Don't sell my data 3rd party agencies"
                                }
                            }
                        },
                        description: "We take Privacy seriously. Please choose your preferences and  click Save. You can change your mind and revisit your \nprivacy choices at anytime by returning to this site.",
                        depth: "1"
                    },
                    side_bar_title: "Privacy Settings",
                    view_id: "privacy_settings"
                },
                unsubscribed_settings: {
                    title: "Unsuscribed Settings",
                    uuid: "uuid3",
                    view_title: "configure_preferences",
                    content: {
                        map_items: {
                            ids: ["item8", "item9"],
                            entities: {
                                item8: {
                                    isActive: true,
                                    title: "I no longer want to receive notifications"
                                },
                                item9: {
                                    isActive: false,
                                    title: "I want weekly list"
                                }
                            }
                        },
                        description: "We take Privacy seriously. Please choose your Unsubscribe settings \nand click Save. You can change your mind and revisit your choices at \nanytime by returning to this site.",
                        depth: "1"
                    },
                    side_bar_title: "Unsubscribed Settings",
                    view_id: "unsubscribed_settings"
                }
            }
        },
        title: "Preferences",
        form_link: "https://silogapyll.execute-api.us-east-1.amazonaws.com/dev/admin/pref/form"
    }
};
function printJSON(jsonObj) {
    console.log(JSON.stringify(jsonObj, null, 4));
}
exports.printJSON = printJSON;
var ConfigurationPreferences = /** @class */ (function () {
    function ConfigurationPreferences(cf) {
        this.cf = cf;
    }
    ConfigurationPreferences.prototype.findView = function (viewId) {
        // TODO: VIVEK: To implement error handling.
        return this.cf.views.entities[viewId];
    };
    ConfigurationPreferences.prototype.changeSideBarTitle = function (viewId, newTitle) {
        this.findView(viewId).side_bar_title = newTitle;
    };
    return ConfigurationPreferences;
}());
exports.ConfigurationPreferences = ConfigurationPreferences;
