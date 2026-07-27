import {
  getCountries,
  getCountryCallingCode,
  Country,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { validatePhoneNumberLength, getExampleNumber } from "libphonenumber-js";
import mobileExamples from "libphonenumber-js/mobile/examples";

export interface CountryCallingCodeInfo {
  iso: Country;
  name: string;
  code: string;
  label: string;
}

const POPULAR_ISO_CODES: Country[] = [
  "IN", // India
  "AE", // United Arab Emirates
  "SA", // Saudi Arabia
  "US", // United States
  "GB", // United Kingdom
  "CN", // China
  "NP", // Nepal
  "BD", // Bangladesh
];

export const getFormattedCountryList = (): {
  popularCountries: CountryCallingCodeInfo[];
  allCountries: CountryCallingCodeInfo[];
} => {
  const regionNames =
    typeof Intl !== "undefined" && Intl.DisplayNames
      ? new Intl.DisplayNames(["en"], { type: "region" })
      : null;

  const rawCountries = getCountries();
  const countryMap = new Map<Country, CountryCallingCodeInfo>();

  for (const iso of rawCountries) {
    const callingCode = `+${getCountryCallingCode(iso)}`;
    let name: string = iso;
    if (regionNames) {
      try {
        name = regionNames.of(iso) || iso;
      } catch {
        name = iso;
      }
    }
    countryMap.set(iso, {
      iso,
      name,
      code: callingCode,
      label: `${name} (${callingCode})`,
    });
  }

  const popularCountries: CountryCallingCodeInfo[] = POPULAR_ISO_CODES.map(
    (iso) => countryMap.get(iso)
  ).filter((item): item is CountryCallingCodeInfo => Boolean(item));

  const allCountries: CountryCallingCodeInfo[] = Array.from(
    countryMap.values()
  ).sort((a, b) => a.name.localeCompare(b.name));

  return { popularCountries, allCountries };
};

export const getMaxPhoneLengthForCountry = (iso: Country): number => {
  if (iso === "IN") return 10;
  if (!iso) return 10;
  try {
    const example = getExampleNumber(iso, mobileExamples);
    if (example && example.nationalNumber) {
      return example.nationalNumber.length;
    }
  } catch {
    // fallback
  }

  for (let len = 1; len <= 15; len++) {
    const dummy = "9".repeat(len);
    const res = validatePhoneNumberLength(dummy, iso);
    if (res === "TOO_LONG") {
      return Math.min(len - 1, 12);
    }
  }
  return 10;
};

export const validatePhoneInput = (
  phone: string,
  iso: Country
): string | true => {
  const digits = phone.replace(/[^0-9]/g, "");
  if (!digits) {
    return "Please enter your phone number";
  }

  const maxLen = getMaxPhoneLengthForCountry(iso);

  if (iso === "IN" && digits.length !== 10) {
    return "Phone number must be exactly 10 digits";
  }

  if (digits.length > maxLen) {
    return `Phone number cannot exceed ${maxLen} digits`;
  }

  const lengthResult = validatePhoneNumberLength(digits, iso);
  if (lengthResult === "TOO_SHORT") {
    return "Phone number is too short for selected country";
  }
  if (lengthResult === "TOO_LONG") {
    return "Phone number is too long for selected country";
  }
  if (lengthResult === "INVALID_COUNTRY") {
    return "Invalid country selected";
  }
  if (lengthResult === "NOT_A_NUMBER") {
    return "Please enter valid digits only";
  }

  const callingCode = `+${getCountryCallingCode(iso)}`;
  const fullNumber = `${callingCode}${digits}`;

  if (!isPossiblePhoneNumber(fullNumber) && !isValidPhoneNumber(fullNumber)) {
    return "Please enter a valid phone number";
  }

  return true;
};
