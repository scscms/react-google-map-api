/// <reference types="googlemaps" />
import * as React from 'react';
import { noop } from '../../utils/noop';
interface GroundOverlayState {
    groundOverlay: google.maps.GroundOverlay | null;
}
export interface GroundOverlayProps {
    options?: google.maps.GroundOverlayOptions;
    /** The opacity of the overlay, expressed as a number between 0 and 1. Optional. Defaults to 1. */
    opacity?: number;
    /** This event is fired when the DOM dblclick event is fired on the GroundOverlay. */
    onDblClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM click event is fired on the GroundOverlay. */
    onClick?: (e: google.maps.MouseEvent) => void;
    /** The url of the projected image */
    url: string;
    /** The bounds that the image will be scaled to fit */
    bounds: google.maps.LatLngBounds;
    /** This callback is called when the groundOverlay instance has loaded. It is called with the groundOverlay instance. */
    onLoad?: (groundOverlay: google.maps.GroundOverlay) => void;
    /** This callback is called when the component unmounts. It is called with the groundOverlay instance. */
    onUnmount?: (groundOverlay: google.maps.GroundOverlay) => void;
}
export declare class GroundOverlay extends React.PureComponent<GroundOverlayProps, GroundOverlayState> {
    static defaultProps: {
        onLoad: typeof noop;
    };
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: GroundOverlayState;
    setGroundOverlayCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GroundOverlayProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default GroundOverlay;
