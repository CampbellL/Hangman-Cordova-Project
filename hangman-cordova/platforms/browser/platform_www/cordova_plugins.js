cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
        "id": "com.rjfun.cordova.httpd.CorHttpd",
        "pluginId": "com.rjfun.cordova.httpd",
        "clobbers": [
            "cordova.plugins.CorHttpd"
        ]
    },
    {
        "file": "plugins/cordova-plugin-cleartext/www/CordovaPluginsCleartext.js",
        "id": "cordova-plugin-cleartext.CordovaPluginsCleartext",
        "pluginId": "cordova-plugin-cleartext",
        "clobbers": [
            "cordova.plugins.CordovaPluginsCleartext"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "cordova-plugin-wkwebviewxhrfix": "0.1.0",
    "com.rjfun.cordova.httpd": "0.9.2",
    "cordova-plugin-cleartext": "1.0.0"
}
// BOTTOM OF METADATA
});