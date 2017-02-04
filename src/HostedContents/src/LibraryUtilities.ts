
type ItemType = "none" | "creation" | "action" | "query";

class TypeIdentifier {

    iconName: string = "";
    creationName: string = "";
    itemType: ItemType = "none";

    constructor(public text: string) {
    }

}
