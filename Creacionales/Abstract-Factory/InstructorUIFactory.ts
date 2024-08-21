import{UIFactory} from "./UIFactory";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";
import { InstructorButton } from "./UIObjects/InstructorButton";
import { InstructorDialog } from "./UIObjects/InstructorDialog";

export class InstructorUIFactory implements UIFactory {
    public createButton(): IButton {
        return new InstructorButton();
    }

    public createDialog(): IDialog {
        return new InstructorDialog();
    }
}