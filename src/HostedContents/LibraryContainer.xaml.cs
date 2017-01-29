
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

        public LibraryContainer()
        {
            InitializeComponent();
            webBrowser.RegisterJsObject("boundContainer", this);
            webBrowser.FrameLoadEnd += OnWebBrowserFrameLoadEnd;
        }

        #region Public ILibraryContainer Members

        public event EventHandler WebBrowserLoaded;

        public void OnLibraryDataPopulated(IEnumerable<string> typeNames)
        {
            if (!browserLoaded) return; // Not ready for call right now.
            SetTypeNames(typeNames);
        }

        #endregion

        #region Gateway Methods: from .NET to JavaScript (private methods)

        private void SetTypeNames(IEnumerable<string> typeNames)
        {
            var mainFrame = webBrowser.GetMainFrame();
            if (mainFrame == null) return;

            mainFrame.ExecuteJavaScriptAsync(@"sendAlertNative('Hahaha');");
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
