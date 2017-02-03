import * as React from "react";
import { LibraryItem, ItemData } from "./LibraryItem";

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
