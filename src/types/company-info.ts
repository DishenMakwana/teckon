interface CompanyPhoneInfo {
  main: string;
  mainRaw: string;
  alpesh: string;
  alpeshRaw: string;
  jc: string;
  jcRaw: string;
}

interface CompanyAddressInfo {
  line1: string;
  line2: string;
  full: string;
  mapsUrl: string;
}

interface CompanySocialInfo {
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
  headline?: string;
  subTagline?: string;
  wholesalerBrands?: string[];
  url: string;
  founded: number;
  email: string;
  phones: CompanyPhoneInfo;
  whatsapp: string;
  address: CompanyAddressInfo;
  social: CompanySocialInfo;
  certifications: string[];
}
