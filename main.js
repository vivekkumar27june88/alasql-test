const prefConf = require("./data/conf-pref.json");
const alasql = require("alasql");

var prefConfDB = new alasql.Database("pref_conf_db");

prefConfDB.exec(
  "CREATE TABLE configure_preferences (filter_link STRING, link STRING, view_id STRING, title STRING, form_link STRING)"
);

pref