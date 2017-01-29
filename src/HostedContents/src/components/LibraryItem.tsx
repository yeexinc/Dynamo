import * as React from "react";
import { LibraryItemContainer, LibraryItemIcon, LibraryCategory } from "./LibraryStyles";

export interface LibraryItemProps { iconPath: string, displayText: string }

export class LibraryItem extends React.Component<LibraryItemProps, undefined> {
    render() {

        return (<div style={ LibraryItemContainer }>
            <img src={ this.props.iconPath } style={ LibraryItemIcon } />
            <div style={ LibraryCategory }>{ this.props.displayText }</div>
        </div>);
    }
}
