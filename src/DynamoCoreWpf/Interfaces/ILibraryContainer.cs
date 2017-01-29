
using System;
using System.Collections.Generic;

namespace Dynamo.Wpf.Interfaces
{
    /// <summary>
    /// An interface to be implemented by the actual library container control. Through
    /// the implementation of this interface, Dynamo view interacts with the underlying
    /// library container object.
    /// </summary>
    public interface ILibraryContainer
    {
        /// <summary>
        /// This event is raised when the underlying web browser has completely loaded.
        /// After this event it will be safe to invoke methods that call into JavaScript.
        /// </summary>
        event EventHandler WebBrowserLoaded;

        /// <summary>
        /// Dynamo view calls this method to pass on loaded types to the library 
        /// container control.
        /// </summary>
        /// <param name="typeNames">A list of type names to show.</param>
        void OnLibraryDataPopulated(IEnumerable<string> typeNames);
    }
}
