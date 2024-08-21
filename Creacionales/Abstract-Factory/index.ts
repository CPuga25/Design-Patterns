import {AdminUIFactory} from "./AdminUIFactory";
import { InstructorUIFactory } from "./InstructorUIFactory";
import { StudentUIFactory } from "./StudentUIFactory";
import { UIManager } from "./UIManager";

const uiFactory = new AdminUIFactory();
const uiManager = new UIManager(uiFactory);

const uiFactory2 = new InstructorUIFactory();
const uiManager2 = new UIManager(uiFactory2);

const uiFactory3 = new StudentUIFactory();
const uiManager3 = new UIManager(uiFactory3);

const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

const instructorUI = uiManager2.createUI('instructor');
instructorUI.button.render();
instructorUI.dialog.show();

const studentUI = uiManager3.createUI('student');
studentUI.button.render();
studentUI.dialog.show();