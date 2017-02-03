
let itemSchema = 
{
    text: "Geometry",
    iconName: "GeometryCategory.png",
    itemType: "category",
    childItems: [
        {
            text: "Abstract", // Group
            iconName: "AbstractGroup.png",
            itemType: "group",
            childItems: [
                {
                    text: "BoundingBox", // Class
                    iconName: "Autodesk.DesignScript.Geometry.BoundingBox.png",
                    itemType: "none",
                    childItems: [
                        {
                            text: "ByCorners", // Method
                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.ByCorners.png",
                            itemType: "none|creation|action|query"
                        },
                        {
                            text: "Intersects", // Method
                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.Intersects.png",
                            itemType: "none|creation|action|query"
                        },
                    ]
                },
            ]
        },
    ]
};

