/*
      LibraryItemContainerXxx(Category/Group/None)
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

        let iconPath = "/src/resources/icons/" + this.props.data.iconName + ".Small.png";

        let nestedElements = this.getNestedElements();

        return (
            <div className={ this.getLibraryItemContainerStyle() }>
                <div className={ "LibraryItemHeader" }>
                    <img className={ "LibraryItemIcon" } src={ iconPath } />
                    <div className={ "LibraryItemText" }>{ this.props.data.text }</div>
                </div>
                { nestedElements }
            </div>
        );
    }

    getLibraryItemContainerStyle() {

        switch(this.props.data.itemType) {
            case "category":
                return "LibraryItemContainerCategory";

            case "group":
                return "LibraryItemContainerGroup";

            case "none":
            case "creation":
            case "action":
            case "query":
                return "LibraryItemContainerNone";
        }

        return "LibraryItemContainerNone";
    }

    getNestedElements() {

        let nestedElements = null;
        if (this.props.data.childItems) {
            nestedElements = (
                <div className={ "LibraryItemBody" }>
                {
                    this.props.data.childItems.map((item: ItemData) => {
                        return (<LibraryItem data={ item } />);
                    })
                }
                </div>
            );
        }

        return nestedElements;
    }
}
