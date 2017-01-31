/*
      ClusterViewContainer
    +-----------------------------------------------------+
    |  ClusterLeftPane     ClusterRightPane               |
    | +-----------------+ +-----------------------------+ |
    | |    ClusterIcon  | | LibraryItemContainerXxx     | |
    | |       +-------+ | | +-------------------------+ | |
    | |       |       | | | | ...                     | | |
    | |       |       | | | +-------------------------+ | |
    | |       +-------+ | | +-------------------------+ | |
    | |                 | | | ...                     | | |
    | |                 | | +-------------------------+ | |
    | |                 | | +-------------------------+ | |
    | |                 | | | ...                     | | |
    | |                 | | +-------------------------+ | |
    | +-----------------+ +-----------------------------+ |
    +-----------------------------------------------------+
*/

import * as React from "react";

export interface ClusterViewProps { iconPath: string }

export class ClusterView extends React.Component<ClusterViewProps, undefined> {

    render() {
        return (<div></div>);
    }

}
