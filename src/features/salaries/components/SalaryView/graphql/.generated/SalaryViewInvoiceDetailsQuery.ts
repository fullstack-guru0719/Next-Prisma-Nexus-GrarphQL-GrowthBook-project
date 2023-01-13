/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WhereUniqueInputArgs, InvoiceStatusEnum, CustomerTypeEnum } from "./../../../../../../.generated/globalTypes";

// ====================================================
// GraphQL query operation: SalaryViewInvoiceDetailsQuery
// ====================================================

export interface SalaryViewInvoiceDetailsQuery_invoice_user {
  __typename: "User";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Users displayable name, using first name, last name or email to create this
   */
  displayName: string;
}

export interface SalaryViewInvoiceDetailsQuery_invoice_customer_address {
  __typename: "Address";
  /**
   * Street address
   */
  address: string;
  /**
   * City of the address
   */
  city: string;
  /**
   * Postal code of the address
   */
  postalCode: string;
}

export interface SalaryViewInvoiceDetailsQuery_invoice_customer {
  __typename: "Customer";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Customer name
   */
  name: string;
  /**
   * Customer email
   */
  email: string;
  /**
   * Type of customer
   */
  type: CustomerTypeEnum;
  /**
   * Customer address
   */
  address: SalaryViewInvoiceDetailsQuery_invoice_customer_address;
}

export interface SalaryViewInvoiceDetailsQuery_invoice_jobType {
  __typename: "JobType";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Name of the job in English
   */
  name_en: string;
  /**
   * Name of the job in Danish
   */
  name_da: string;
}

export interface SalaryViewInvoiceDetailsQuery_invoice_task {
  __typename: "Task";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Short description of the job
   */
  title: string;
}

export interface SalaryViewInvoiceDetailsQuery_invoice_lines {
  __typename: "InvoiceLine";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Description of item
   */
  description: string;
  /**
   * Unit name
   */
  unit: string | null;
  /**
   * Number of units
   */
  quantity: number;
  /**
   * Price per unit
   */
  unitPrice: number;
  /**
   * Index of the line in relation to other lines for the same invoice
   */
  index: number;
  /**
   * Discount in percent for the line
   */
  discountPercentage: number | null;
  /**
   * Total price of the line
   */
  totalPrice: number;
}

export interface SalaryViewInvoiceDetailsQuery_invoice {
  __typename: "Invoice";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * User-centric identifier
   */
  visibleId: any | null;
  /**
   * Status enum
   */
  status: InvoiceStatusEnum;
  /**
   * Invoice reference
   */
  reference: string | null;
  /**
   * Invoice note
   */
  note: string | null;
  /**
   * When item were created
   */
  createdDate: any;
  /**
   * When item last were updated
   */
  updatedDate: any;
  /**
   * Invoiced currency
   */
  currency: string;
  /**
   * Is VAT applied to invoice
   */
  includeVat: boolean;
  overdue: boolean;
  dueDate: any;
  /**
   * Should this invoice set aside some of the value to vacation payments
   */
  vacationPayment: boolean;
  /**
   * Days due for this invoice
   */
  paymentDueDays: number;
  /**
   * Hours worked - insurance wise
   */
  hoursWorked: number;
  customerContact: string;
  customerEmail: string;
  customerAddress: string;
  customerCity: string;
  customerPostalCode: string;
  sendInvoiceCopyTo: string | null;
  /**
   * Owner of the invoice
   */
  user: SalaryViewInvoiceDetailsQuery_invoice_user;
  /**
   * Customer of the invoice - see also customerCopy
   */
  customer: SalaryViewInvoiceDetailsQuery_invoice_customer;
  /**
   * Job type of the invoice
   */
  jobType: SalaryViewInvoiceDetailsQuery_invoice_jobType | null;
  /**
   * Date when invoiced
   */
  invoiceDate: any;
  /**
   * Date when the work started
   */
  startDate: any | null;
  /**
   * Date when the work end
   */
  endDate: any | null;
  /**
   * Invoice terms accepted
   */
  termsAccepted: boolean;
  /**
   * Id of task
   */
  taskId: any | null;
  /**
   * Task based on this invoice
   */
  task: SalaryViewInvoiceDetailsQuery_invoice_task | null;
  totalPrice: number;
  totalPriceWithVat: number;
  vatAmount: number;
  /**
   * Percentage of vat
   */
  vatPercentage: number;
  /**
   * Invoice lines
   */
  lines: SalaryViewInvoiceDetailsQuery_invoice_lines[];
}

export interface SalaryViewInvoiceDetailsQuery {
  invoice: SalaryViewInvoiceDetailsQuery_invoice | null;
}

export interface SalaryViewInvoiceDetailsQueryVariables {
  where: WhereUniqueInputArgs;
}
