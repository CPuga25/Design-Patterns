import{UIFactory} from "./UIFactory";
import { IButton } from "./UIObjects/IButton";
import {AdminButton} from "./UIObjects/AdminButton";
import {AdminDialog} from "./UIObjects/AdminDialog";
import { IDialog } from "./UIObjects/IDialog";

export class AdminUIFactory implements UIFactory{
    public createButton(): IButton {
        return new AdminButton();
    }

    public createDialog(): IDialog {
        return new AdminDialog();
    }
}