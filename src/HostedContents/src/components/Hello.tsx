import * as React from "react";

declare var boundContainer: any;

export interface HelloProps { compiler: string, framework: string }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        var a = boundContainer;
        return (
            <div>
                <h1>Hello from { this.props.compiler } and { this.props.framework }!</h1>
                <h2>Type names = { boundContainer.getTypeNamesJson() }</h2>
            </div>);
    }
}
