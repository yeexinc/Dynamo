
using System.Collections.Generic;

namespace Dynamo.Wpf.Interfaces
{
    public interface ILibraryContainer
    {
        void OnLibraryDataPopulated(IEnumerable<string> typeNames);
    }
}
