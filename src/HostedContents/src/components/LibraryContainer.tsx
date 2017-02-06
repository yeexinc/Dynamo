/// <reference path="../../node_modules/@types/node/index.d.ts" />
/// <reference path="../../node_modules/@types/whatwg-fetch/index.d.ts" />

import * as React from "react";
import { LibraryItem, ItemData } from "./LibraryItem";

declare var boundContainer: any;

export interface LibraryContainerProps { }
export interface LibraryContainerStates {
    libraryContentsLoaded: boolean
}

export class LibraryContainer extends React.Component<LibraryContainerProps, LibraryContainerStates> {

    libraryTreeJson: any = null;

    constructor(props: LibraryContainerProps) {

        super(props);
        this.state = { libraryContentsLoaded: false };

        this.downloadAndProcessTypeData();
    }

    render() {

        if (!this.state.libraryContentsLoaded) {
            return (<div>Downloading contents...</div>);
        }

        // if (boundContainer) {
        //     this.libraryTreeJson = JSON.parse(boundContainer.getLoadedTypesJson());
        // }

        try {
            
            let index = 0;
            const childItems = this.libraryTreeJson.childItems;
            const listItems = childItems.map((item : ItemData) => (<LibraryItem key={ index++ } data={ item } />));

            return (<div>{ listItems }</div>);
        }
        catch(exception) {
            return (<div>Exception thrown: { exception.message }</div>);
        }
    }

    downloadAndProcessTypeData() {

        let thisObject = this;

        // Download the locally hosted data type json file.
        fetch("tempData")
            .then(function(response: Response) {
                return response.text();
            }).then(function(jsonString) {
                thisObject.libraryTreeJson = JSON.parse(jsonString);
                thisObject.setState({ libraryContentsLoaded: true });
            });
    }
}
