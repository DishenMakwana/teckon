export interface CompanyPhoneInfo {
  main: string;
  mainRaw: string;
  alpesh: string;
  alpeshRaw: string;
  jc: string;
  jcRaw: string;
}

export interface CompanyAddressInfo {
  line1: string;
  line2: string;
  full: string;
}

export interface CompanySocialInfo {
  facebook: string;
  linkedin: string;
  instagram: string;
}

/**
 * Company info metadata for Shreeji Hydraulics / Teckon.
 */
export interface CompanyInfo {
  name: string;
  brand: string;
  brandFull: string;
  tagline: string;
  url: string;
  founded: number;
  email: string;
  phones: CompanyPhoneInfo;
  whatsapp: string;
  address: CompanyAddressInfo;
  social: CompanySocialInfo;
  certifications: string[];
}
