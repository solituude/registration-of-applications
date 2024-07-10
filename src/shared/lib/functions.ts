import redIcon from "shared/lib/icons/redPoint.svg";
import orangeIcon from "shared/lib/icons/orangePoint.svg";
import greenIcon from "shared/lib/icons/greenPoint.svg";
import blueIcon from "shared/lib/icons/bluePoint.svg";

export const getIcon = (priority: string) => {
    switch (priority) {
        case "1":
            return redIcon;
        case "2":
            return orangeIcon;
        case "3":
            return greenIcon;
        case "4":
            return blueIcon;
        default:
            return redIcon;
    }
}