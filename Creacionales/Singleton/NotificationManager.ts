
import { INotificationService } from './INotificationService';
import { EmailNotificationService } from './EmailNotificationService';
import { SMSNotificationService } from './SMSNotificationService';

export class NotificationManager {
    private emailService: INotificationService;
    private smsService: INotificationService;
    private static uniqueInstance: NotificationManager;


    private constructor() {
        this.emailService = new EmailNotificationService();
        this.smsService = new SMSNotificationService();
    }

    public static getSingleInstance():NotificationManager{

        if(!NotificationManager.uniqueInstance){

            NotificationManager.uniqueInstance = new NotificationManager();
        }
        return NotificationManager.uniqueInstance;

    }

    public notifyByEmail(message: string, recipient: string): void {
        this.emailService.sendNotification(message, recipient);
    }

    public notifyBySMS(message: string, recipient: string): void {
        this.smsService.sendNotification(message, recipient);
    }
}
