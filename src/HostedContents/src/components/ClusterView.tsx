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
import { LibraryItem, ItemData } from "./LibraryItem";

export interface ClusterViewProps { iconPath: string, childItems: ItemData[] }

export class ClusterView extends React.Component<ClusterViewProps, undefined> {

    render() {
        return (
            <div className={ "ClusterViewContainer" }>
                <div className={ "ClusterLeftPane" }>
                    <div className={ "ClusterIcon" }>
                        test
                    </div>
                </div>
                <div className={ "ClusterRightPane" }>
                    { this.getNestedElements() }
                </div>
            </div>
        );
    }

    getNestedElements() {

        return this.props.childItems.map((item: ItemData) => {
            return (<LibraryItem data={ item } />);
        });
    }

}
