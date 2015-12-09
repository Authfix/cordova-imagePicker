//  JavaScript
var cordova = require('cordova'),
  ImagePickerPlugin = require('./ImagePickerPlugin');

module.exports = {

  getPictures: function (successCallback, errorCallback, strInput) {

    // Create the picker object and set options
    var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
    openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
    openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.picturesLibrary;
    // Users expect to have a filtered view of their folders depending on the scenario.
    // For example, when choosing a documents folder, restrict the filetypes to documents for your application.
    openPicker.fileTypeFilter.replaceAll([".png", ".jpg", ".jpeg"]);

    // Open the picker for the user to pick a file
    openPicker.pickMultipleFilesAsync().then(function (files) {
      if (file) {
        successCallback(files);
      }
    });
  }
};
require("cordova/exec/proxy").add("ImagePickerPlugin", module.exports);