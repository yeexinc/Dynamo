import * as React from "react";
import { LibraryItem } from "./LibraryItem";

declare var boundContainer: any;

export interface LibraryContainerProps { }

export class LibraryContainer extends React.Component<LibraryContainerProps, undefined> {
    render() {

        try {
            const rootNode = JSON.parse(boundContainer.getLoadedTypesJson());
            const childNodes = rootNode.childNodes;
            const listItems = childNodes.map((childNode : any) => 
                <LibraryItem displayText={ childNode.name } iconPath={ "src/components/icon.png" } />
            );

            return (<div>{ listItems }</div>);
        }
        catch(exception) {
            return (<div>{ exception.message }</div>);
        }

    }
}
