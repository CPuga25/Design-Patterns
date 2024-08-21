import{UIFactory} from "./UIFactory";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";
import { StudentButton } from "./UIObjects/StudentButton";
import { StudentDialog } from "./UIObjects/StudentDialog";

export class StudentUIFactory implements UIFactory {
    public createButton(): IButton {
        return new StudentButton();
    }

    public createDialog(): IDialog {
        return new StudentDialog();
    }
}