
using CefSharp;
using Dynamo.Wpf.Interfaces;
using System;
using System.Collections.Generic;
using System.Windows.Controls;

namespace Dynamo.HostedContents
{
    /// <summary>
    /// Interaction logic for LibraryContainer.xaml
    /// </summary>
    public partial class LibraryContainer : UserControl, ILibraryContainer
    {
        private bool browserLoaded = false;
        private string loadedTypesJson = String.Empty;

        public LibraryContainer()
        {
            InitializeComponent();

            refreshButton.Click += (sender, e) => webBrowser.Reload(true); // Force refresh.
            webBrowser.RegisterJsObject("boundContainer", this);
            webBrowser.FrameLoadEnd += OnWebBrowserFrameLoadEnd;
        }

        private void RefreshButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            throw new NotImplementedException();
        }

        #region Public ILibraryContainer Members

        public event EventHandler WebBrowserLoaded;

        public void SetLoadedTypesJson(string loadedTypesJson)
        {
            this.loadedTypesJson = loadedTypesJson;
        }

        #endregion

        #region Gateway Methods: from JavaScript to .NET (public methods)

        public string GetLoadedTypesJson()
        {
            return loadedTypesJson;
        }

        #endregion

        #region Event Handlers

        private void OnWebBrowserFrameLoadEnd(object sender, FrameLoadEndEventArgs e)
        {
            browserLoaded = true;

            var loadEventHandler = WebBrowserLoaded;
            if (loadEventHandler != null) loadEventHandler(this, new EventArgs());

            if (e.Frame.IsMain)
            {

            }
        }

        #endregion
    }
}
