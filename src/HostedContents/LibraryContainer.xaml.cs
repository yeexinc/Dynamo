
using Dynamo.Wpf.Interfaces;
using System.Windows.Controls;
using System.Collections.Generic;

namespace Dynamo.HostedContents
{
    /// <summary>
    /// Interaction logic for LibraryContainer.xaml
    /// </summary>
    public partial class LibraryContainer : UserControl, ILibraryContainer
    {
        public LibraryContainer()
        {
            InitializeComponent();
        }

        public void OnLibraryDataPopulated(IEnumerable<string> typeNames)
        {
        }
    }
}
