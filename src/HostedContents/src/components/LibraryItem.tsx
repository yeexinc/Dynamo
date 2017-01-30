/*
      LibraryItemContainer
    +---------------------------------------------------+
    |   LibraryItemHeader                               |
    | +-----------------------------------------------+ |
    | | +-----------------+ +-----------------------+ | |
    | | | LibraryItemIcon | | LibraryItemText       | | |
    | | +-----------------+ +-----------------------+ | |
    | +-----------------------------------------------+ |
    |   LibraryItemBody                                 |
    | +-----------------------------------------------+ |
    | |                                               | |
    | |                                               | |
    | +-----------------------------------------------+ |
    +---------------------------------------------------+

*/

import * as React from "react";

export interface LibraryItemProps { iconPath: string, displayText: string }

export class LibraryItem extends React.Component<LibraryItemProps, undefined> {
    render() {

        var iconPath = "/src/resources/icons/" + this.props.iconPath + ".Small.png";

        return (
            <div className={ "LibraryItemContainer" }>
                <div className={ "LibraryItemHeader" }>
                    <img src={ iconPath } className={ "LibraryItemIcon" } />
                    <div className={ "LibraryItemText" }>{ this.props.displayText }</div>
                </div>
            </div>
        );
    }
}
