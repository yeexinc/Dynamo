/// <reference path="../../node_modules/@types/node/index.d.ts" />

import * as fs from "fs";
import * as React from "react";
import { LibraryItem, ItemData } from "./LibraryItem";

declare var boundContainer: any;

export interface LibraryContainerProps { }

export class LibraryContainer extends React.Component<LibraryContainerProps, undefined> {
    render() {

        try {
            if (!boundContainer) {
                return this.renderFromOfflineContents();
            }

            let index = 0;
            const rootNode = JSON.parse(boundContainer.getLoadedTypesJson());
            const childItems = rootNode.childItems;
            const listItems = childItems.map((item : ItemData) => (<LibraryItem key={ index++ } data={ item } />));

            return (<div>{ listItems }</div>);
        }
        catch(exception) {
            return (<div>{ exception.message }</div>);
        }

    }

    renderFromOfflineContents() {
        return (<div>test</div>);
    }
}
