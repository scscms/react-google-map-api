/// <reference types="googlemaps" />
import * as React from 'react';
interface StreetViewPanoramaState {
    streetViewPanorama: google.maps.StreetViewPanorama | null;
}
export interface StreetViewPanoramaProps {
    options?: google.maps.StreetViewPanoramaOptions;
    /** This event is fired when the close button is clicked. */
    onCloseclick?: (event: google.maps.MouseEvent) => void;
    /** This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a pano_changed. */
    onPanoChanged?: () => void;
    /** This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually. */
    onPositionChanged?: () => void;
    /** This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes. */
    onPovChanged?: () => void;
    /** Developers should trigger this event on the panorama when its div changes size: google.maps.event.trigger(panorama, 'resize'). */
    onResize?: () => void;
    /** This event is fired after every panorama lookup by id or location, via setPosition() or setPano(). */
    onStatusChanged?: () => void;
    /** This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or setVisible() is called. */
    onVisibleChanged?: () => void;
    /** This event is fired when the panorama's zoom level changes. */
    onZoomChange?: () => void;
    /** This callback is called when the streetViewPanorama instance has loaded. It is called with the streetViewPanorama instance. */
    onLoad?: (streetViewPanorama: google.maps.StreetViewPanorama) => void;
    /** This callback is called when the component unmounts. It is called with the streetViewPanorama instance. */
    onUnmount?: (streetViewPanorama: google.maps.StreetViewPanorama) => void;
}
export declare class StreetViewPanorama extends React.PureComponent<StreetViewPanoramaProps, StreetViewPanoramaState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: StreetViewPanoramaState;
    setStreetViewPanoramaCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: StreetViewPanoramaProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default StreetViewPanorama;
