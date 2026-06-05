/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageType = 'about' | 'capabilities' | 'solutions' | 'products' | 'contact';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  badge: string;
  specs?: { label: string; value: string }[];
}

export interface ServiceCapability {
  id: string; // "01", "02", etc.
  title: string;
  description: string;
  bulletPoints?: string[];
  isHighlighted?: boolean;
}

export interface InquiryForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
