import { environment } from "../../../environments/environment";
export const AUTOCOMPLETER = 'AUTOCOMPLETER';
export const SEARCH_PROVIDER = 'SEARCH_PROVIDER';
export const CITY_ZIP_AUTOCOMPLETER = 'CITY_ZIP_AUTOCOMPLETER';
export const COMPARE_PROVIDER = 'COMPARE_PROVIDER';
export const ClientEndPoint = (type: string) => {

  const endpoints = {
    [AUTOCOMPLETER]: 'physiciansByName',
    [SEARCH_PROVIDER]: 'physicians',
    [CITY_ZIP_AUTOCOMPLETER]: 'locations',
    [COMPARE_PROVIDER]: 'physicianscompare'
  };


  return environment.API_ROOT + endpoints[type];
};
