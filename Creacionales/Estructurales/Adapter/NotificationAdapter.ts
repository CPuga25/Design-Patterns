import { INotificationService } from "./INotificationService";
import { ExternalNotificationService } from "./ExternalNotificationService";

export class NotificationAdapter implements INotificationService{
    private external:ExternalNotificationService
    constructor(external: ExternalNotificationService){
        this.external = new ExternalNotificationService()
    }
    sendNotification(message: string, recipient: string): void {
        this.external.notifyExternalTelegram(recipient,message)
    }
}
