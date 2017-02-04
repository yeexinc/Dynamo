
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

function constructLibraryItem(layoutElement: LayoutElement): LibraryItem {

    let result = new LibraryItem(layoutElement.text);
    result.iconName = layoutElement.iconName;
    result.itemType = layoutElement.elementType;

    // Construct all child library items from child layout elements.
    for (let i = 0; i < layoutElement.childElements.length; i++) {
        let childLayoutElement = layoutElement.childElements[i];
        result.appendChild(constructLibraryItem(childLayoutElement));
    }

    return result;
}

/**
 * Combine a data type tree and layout element tree to produce the resulting
 * library item tree.
 * 
 * @param {TypeTreeNode[]} typeTreeNodes
 * A tree of hierarchical data type identifiers. This tree is constructed 
 * based entirely on the loaded data types and their fully qualified names.
 * See TypeTreeNode for more information.
 * 
 * @param {LayoutElement[]} layoutElements
 * A tree serving as layout specifications from which library item tree is 
 * constructed. The specifications also contain information of how a given 
 * data type is merged into the resulting library item tree node.
 * 
 * @returns
 * Returns the resulting library item tree containing nodes merged from the 
 * type tree. The merging operation is done through the specifications of 
 * layout element tree.
 */
export function convertToLibraryTree(
    typeTreeNodes: TypeTreeNode[],
    layoutElements: LayoutElement[]): LibraryItem[]
{
    let results: LibraryItem[] = []; // Resulting tree of library items.

    // Generate the resulting library item tree before merging data types.
    for (let i = 0; i < layoutElements.length; i++) {

        let layoutElement = layoutElements[i];
        results.push(constructLibraryItem(layoutElement));
    }

    // Traverse through library item tree to merge loaded data types in.
    for (let i = 0; i < results.length; i++) {

        let libraryItem = results[i];
    }

    return results;
}
