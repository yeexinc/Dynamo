
type MemberType = "none" | "creation" | "action" | "query";
type ElementType = "none" | "category" | "group";
type ItemType = "none" | "category" | "group" | "creation" | "action" | "query";

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

/**
 * Given a type tree and a path, locate the corresponding type tree node.
 * 
 * @param {TypeTreeNode[]} typeTreeNode
 * The type tree from which a particular TypeTreeNode is to be retrieved.
 * An example of the type tree is as followed:
 * 
 * {
 *   text: "DesignScript",
 *   childNodes: [
 *     {
 *       text: "Geometry",
 *       childNodes: [
 *         {
 *           text: "Arc",
 *           childNodes: []
 *         }
 *       ]
 *     }
 *   ]
 * }
 * 
 * @param {string[]} parts
 * The parts of a path to help locate a given TypeTreeNode. For example, 
 * a type with name "DesignScript.Geometry.Arc" can be broken down into 
 * ["Geometry", "DesignScript", "Arc"], and it will locate the TypeTreeNode
 * "Arc" as outlined in the example above.
 * 
 * @returns {TypeTreeNode}
 * Returns a TypeTreeNode if one is found, or null otherwise.
 */
function getTypeTreeNodeFromParts(
    typeTreeNodes: TypeTreeNode[],
    parts: string[]): TypeTreeNode
{
    // Search for the root node with matching text.
    let node: TypeTreeNode = null;
    for (let i = 0; i < typeTreeNodes.length; i++) {
        let typeTreeNode = typeTreeNodes[i];
        if (typeTreeNode.text == parts[0]) {
            node = typeTreeNode;
            break;
        }
    }

    if (!node || (parts.length <= 1)) { // Look no further.
        return node;
    }

    // Remove the first part and continue.
    return getTypeTreeNodeFromParts(node.childNodes, parts.slice(1));
}

/**
 * This method merges a type node (and its immediate sub nodes) under the given
 * library item.
 * 
 * Note that this is not a recursive function by design, it only considers the
 * current TypeTreeNode, and any possible child TypeTreeNode but nothing beyond
 * that depth.
 * 
 * @param {TypeTreeNode} typeTreeNode
 * The type node to be merged under the given library item. Its immediate child 
 * nodes will also be merged under the new library item, but the recursion does 
 * not go beyond that depth.
 * 
 * @param {LibraryItem} libraryItem
 * The library item under which a type node (and its sub nodes) is to be merged.
 */
function mergeTypeNodeUnderLibraryItem(
    typeTreeNode: TypeTreeNode,
    libraryItem: LibraryItem): void
{
    if (!typeTreeNode) return;

    let item = new LibraryItem(typeTreeNode.text);
    libraryItem.appendChild(item); // Create a new child library item.

    item.creationName = typeTreeNode.creationName;
    item.iconName = typeTreeNode.iconName;
    item.itemType = typeTreeNode.memberType;

    for (let i = 0; i < typeTreeNode.childNodes.length; i++) {

        let subNode = typeTreeNode.childNodes[i];
        let subItem = new LibraryItem(subNode.text);
        item.appendChild(subItem);

        subItem.creationName = subNode.creationName;
        subItem.iconName = subNode.iconName;
        subItem.itemType = subNode.memberType;
    }
}

function constructLibraryItem(
    typeTreeNodes: TypeTreeNode[],
    layoutElement: LayoutElement): LibraryItem
{
    let result = new LibraryItem(layoutElement.text);
    result.iconName = layoutElement.iconName;
    result.itemType = layoutElement.elementType;

    // This layout element may or may not have any included path.
    for (let i = 0; i < layoutElement.include.length; i++) {
        let parts = layoutElement.include[i].split(".");
        let typeTreeNode = getTypeTreeNodeFromParts(typeTreeNodes, parts);
        mergeTypeNodeUnderLibraryItem(typeTreeNode, result);
    }

    // Construct all child library items from child layout elements.
    for (let i = 0; i < layoutElement.childElements.length; i++) {
        let childLayoutElement = layoutElement.childElements[i];
        result.appendChild(constructLibraryItem(typeTreeNodes, childLayoutElement));
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
        results.push(constructLibraryItem(typeTreeNodes, layoutElement));
    }

    return results;
}
