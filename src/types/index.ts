export type CatFactApiResponse = {
  fact: string;
  length: number;
};

export type Time = {
  updated: string;
  updatedISO: string;
  updateduk: string;
};

export type Currency = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};

export type Bpi = {
  USD: Currency;
  GBP: Currency;
  EUR: Currency;
};

export type BitcoinApiResponse = {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
};

export type Country = {
  country_id: string;
  probability: number;
};

export type NationalizeNameApiResponse = {
  count: number;
  name: string;
  country: Country[];
};
