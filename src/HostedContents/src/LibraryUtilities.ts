
type MemberType = "none" | "creation" | "action" | "query";
type ElementType = "none" | "category" | "group";
type ItemType = "none" | "category" | "group";

class TypeTreeNode {

    iconName: string = "";
    creationName: string = "";
    memberType: MemberType = "none";
    childNodes: TypeTreeNode[] = [];

    constructor(public text: string) {
    }

    appendChild(childNode: TypeTreeNode) {
        this.childNodes.push(childNode);
    }

}

class LayoutElement {

    iconName: string = "";
    elementType: ElementType = "none";
    include: string[] = [];
    childElements: LayoutElement[] = [];

    constructor(public text: string) {
    }

    appendChild(childElement: LayoutElement) {
        this.childElements.push(childElement);
    }
}

class LibraryItem {

    iconName: string = "";
    creationName: string = "";
    itemType: ItemType = "none";
    childItems: LibraryItem[] = [];

    constructor(public text: string) {
    }

    appendChild(childItem: LibraryItem) {
        this.childItems.push(childItem);
    }
}

function convertToLibraryTree(
    typeTreeNodes: TypeTreeNode[],
    layoutElements: LayoutElement[]): LibraryItem[]
{
    return [];
}
