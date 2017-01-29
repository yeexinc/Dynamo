import * as React from "react";

declare var boundContainer: any;

export interface LibraryContainerProps { }

export class LibraryContainer extends React.Component<LibraryContainerProps, undefined> {
    render() {

        try {
            const rootNode = JSON.parse(boundContainer.getLoadedTypesJson());
            const childNodes = rootNode.childNodes;
            const listItems = childNodes.map((childNode : any) => 
                <div>{ childNode.name }</div>
            );

            return (<div><div>Hey: </div>{ listItems }</div>);
        }
        catch(exception) {
            return (<div>{ exception.message }</div>);
        }

    }
}
