
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';

const inscriptionService = new EnrollmentService();
const billingServiceInstance = new BillingService();
const contactEmail = 'Camilla.Puga@axity.com';

inscriptionService.enrollStudent(contactEmail);
billingServiceInstance.notifyPaymentDue(contactEmail);

