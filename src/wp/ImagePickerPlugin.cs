using System;
using System.Linq;
using Windows.Storage.Pickers;

namespace WPCordovaClassLib.Cordova.Commands
{
    public class ImagePicker : BaseCommand
    {

        public async void getPictures(string options)
        {
            var openPicker = new FileOpenPicker();
            openPicker.SuggestedStartLocation = PickerLocationId.PicturesLibrary;
            openPicker.ViewMode = PickerViewMode.Thumbnail;
            openPicker.FileTypeFilter.Add(".jpg");
            openPicker.FileTypeFilter.Add(".jpeg");
            openPicker.FileTypeFilter.Add(".png");

            var storageFiles = await openPicker.PickMultipleFilesAsync();

            var storageFilesPath = storageFiles.Select(file => file.Path).ToList();

            var result = new PluginResult(PluginResult.Status.OK, storageFilesPath);

            DispatchCommandResult(result);
        }
    }
}