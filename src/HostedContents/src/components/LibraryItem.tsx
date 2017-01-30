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

export class ItemData {
    text: string;
    iconName: string;
    expanded: boolean;
    itemType: string;
    childItems: any;
}

export interface LibraryItemProps { data: ItemData }

export class LibraryItem extends React.Component<LibraryItemProps, undefined> {
    render() {

        var iconPath = "/src/resources/icons/" + this.props.data.iconName + ".Small.png";

        return (
            <div className={ "LibraryItemContainer" }>
                <div className={ "LibraryItemHeader" }>
                    <img className={ "LibraryItemIcon" } src={ iconPath } />
                    <div className={ "LibraryItemText" }>{ this.props.data.text }</div>
                </div>
            </div>
        );
    }
}
