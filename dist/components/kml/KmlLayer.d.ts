/// <reference types="googlemaps" />
import { PureComponent } from 'react';
interface KmlLayerState {
    kmlLayer: google.maps.KmlLayer | null;
}
export interface KmlLayerProps {
    options?: google.maps.KmlLayerOptions;
    /** The URL of the KML document to display. */
    url?: string;
    /** The z-index of the layer. */
    zIndex?: number;
    /** This event is fired when a feature in the layer is clicked. */
    onClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the KML layers default viewport has changed. */
    onDefaultViewportChanged?: () => void;
    /** This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully. */
    onStatusChanged?: () => void;
    /** This callback is called when the kmlLayer instance has loaded. It is called with the kmlLayer instance. */
    onLoad: (kmlLayer: google.maps.KmlLayer) => void;
    /** This callback is called when the component unmounts. It is called with the kmlLayer instance. */
    onUnmount: (kmlLayer: google.maps.KmlLayer) => void;
}
export declare class KmlLayer extends PureComponent<KmlLayerProps, KmlLayerState> {
    static contextType: import("react").Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: KmlLayerState;
    setKmlLayerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: KmlLayerProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default KmlLayer;
