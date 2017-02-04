
// This documentation makes use of naming convention outlined in Google JSON Style Guide:
//
//   https://google.github.io/styleguide/jsoncstyleguide.xml
// 

let loadedDataTypeSchema = 
{
    loadedDataTypes: [
        {
            text: "Autodesk",
            childNodes: [
                {
                    text: "DesignScript",
                    childNodes: [
                        {
                            text: "Geometry",
                            childNodes: [
                                {
                                    text: "BoundingBox",
                                    iconName: "Autodesk.DesignScript.Geometry.BoundingBox.png",
                                    childNodes: [
                                        {
                                            text: "ByGeometry",
                                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.png",
                                            itemType: "creation"
                                        },
                                        {
                                            text: "Intersects",
                                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.Intersects.png",
                                            itemType: "action"
                                        },
                                        {
                                            text: "MinPoint",
                                            iconName: "Autodesk.DesignScript.Geometry.BoundingBox.MinPoint.png",
                                            itemType: "query"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]

        },
        {
            text: "Core",
            childNodes: [
                {
                    text: "Color",
                    childNodes: [
                        {
                            text: "Color",
                            childNodes: [
                                {
                                    text: "Range",
                                    iconName: "...png",
                                    itemType: "action"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "List",
                    childNodes: [
                        {
                            text: "Sequence",
                            iconName: "...png",
                            itemType: "action"
                        }
                    ]
                }
            ]
        },
        {
            text: "BuiltIn",
            childNodes: [
                {
                    text: "Map",
                    iconName: "...png",
                    itemType: "query",
                    creationName: "Map@double,double,double"
                }
            ]
        },
        {
            text: "Operator",
            childNodes: [
                {
                    text: "+",
                    iconName: "...png",
                    itemType: "action"
                }
            ]
        }
    ]
};

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

