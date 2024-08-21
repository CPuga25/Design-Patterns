import {AdminUIFactory} from "./AdminUIFactory";
import { UIManager } from "./UIManager";

const uiFactory = new AdminUIFactory();
const uiManager = new UIManager(uiFactory);

const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();