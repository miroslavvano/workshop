/**
import useFetch from './useFetch.solution';
 * Implement a custom React hook that fetches data from a given URL. 
 * The hook must handle loading, success, and error states.
 * 
 * Requirements
 * 1. The hook should accept a URL and optional fetch options as arguments.
 * 2. Generic Type for Data: The hook should use a generic type for the data it returns.
 * 3. Async/Await: You must use async/await for handling asynchronous operations.
 * 4. Unknown for Error: The hook should use unknown for the error type 
 *    and setError state to Error message with type safety.
 * 
 * Optional
 * 5.Implement onSuccess, which has access to fetched data, and onError callbacks.
 */

type FetchResult = {
  //
};

type UseFetchArgs = {
  //
};

//TESTING - GET method
//https://catfact.ninja/fact - should return CatFactApiResponse type
//https://api.coindesk.com/v1/bpi/currentprice.json - should return BitcoinApiResponse type
//https://api.nationalize.io?name=nathaniel - should return NationalizeNameApiResponse type
const useFetch = () => {
  //
};
