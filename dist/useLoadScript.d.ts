import { LoadScriptUrlOptions } from './utils/make-load-script-url';
export interface UseLoadScriptOptions extends LoadScriptUrlOptions {
    id?: string;
    nonce?: string;
    preventGoogleFontsLoading?: boolean;
}
export declare function useLoadScript({ id, version, nonce, googleMapsApiKey, googleMapsClientId, language, region, libraries, preventGoogleFontsLoading, channel, }: UseLoadScriptOptions): {
    isLoaded: boolean;
    loadError: Error | undefined;
    url: string;
};
