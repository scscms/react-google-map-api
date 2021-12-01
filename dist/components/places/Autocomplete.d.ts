/// <reference types="googlemaps" />
import * as React from 'react';
interface AutocompleteState {
    autocomplete: google.maps.places.Autocomplete | null;
}
export interface AutocompleteProps {
    children: React.ReactChild;
    /** The area in which to search for places. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
    /** The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country. */
    restrictions?: google.maps.places.ComponentRestrictions;
    /** Fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see PlaceResult. Nested fields can be specified with dot-paths (for example, "geometry.location"). */
    fields?: string[];
    options?: google.maps.places.AutocompleteOptions;
    /** The types of predictions to be returned. For a list of supported types, see the developer's guide. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the 'geocode' and 'establishment' types, but note that this will have the same effect as specifying no types. */
    types?: string[];
    /** This event is fired when a PlaceResult is made available for a Place the user has selected. If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place Details request fails, the PlaceResult contains the user input in the name property, with no other properties defined. */
    onPlaceChanged?: () => void;
    /** This callback is called when the autocomplete instance has loaded. It is called with the autocomplete instance. */
    onLoad?: (autocomplete: google.maps.places.Autocomplete) => void;
    /** This callback is called when the component unmounts. It is called with the autocomplete instance. */
    onUnmount?: (autocomplete: google.maps.places.Autocomplete) => void;
    className?: string;
}
export declare class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    containerElement: React.RefObject<HTMLDivElement>;
    state: AutocompleteState;
    setAutocompleteCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: AutocompleteProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default Autocomplete;
