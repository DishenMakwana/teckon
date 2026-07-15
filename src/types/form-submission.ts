export type InquiryActionErrorType =
  | "VALIDATION_ERROR"
  | "CONFIGURATION_ERROR"
  | "DELIVERY_ERROR"
  | "SYSTEM_ERROR";

/**
 * Response structure for the sendInquiryAction server action.
 */
export interface SendInquiryActionResponse {
  success: boolean;
  error?: InquiryActionErrorType;
  id?: string;
}

export interface ContactInquiryData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  subject: string;
  message: string;
}
