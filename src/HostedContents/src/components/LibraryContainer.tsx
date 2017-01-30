import * as React from "react";
import { LibraryItem, ItemData } from "./LibraryItem";

let itemSchema = 
{
    text: "Geometry",
    iconName: "GeometryCategory.png",
    expanded: true,
    itemType: "category",
    childItems: [
        {
            text: "Abstract", // Group
            iconName: "AbstractGroup.png",
            expanded: true,
            itemType: "group",
            childItems: [
                {
                    text: "BoundingBox", // Class
                    iconName: "Autodesk.DesignScript.Geometry.BoundingBox.png",
                    expanded: true,
                    itemType: "none",
                    childItems: [
                        {
                            text: "ByCorners", // Method
                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.ByCorners.png",
                            expanded: false,
                            itemType: "none"
                        },
                        {
                            text: "Intersects", // Method
                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.Intersects.png",
                            expanded: false,
                            itemType: "none"
                        },
                    ]
                },
            ]
        },
    ]
};

declare var boundContainer: any;

export interface LibraryContainerProps { }

export class LibraryContainer extends React.Component<LibraryContainerProps, undefined> {
    render() {

        try {
            const rootNode = JSON.parse(boundContainer.getLoadedTypesJson());
            const childItems = rootNode.childItems;
            const listItems = childItems.map((item : ItemData) => (<LibraryItem data={ item } />));

            return (<div>{ listItems }</div>);
        }
        catch(exception) {
            return (<div>{ exception.message }</div>);
        }

    }
}
