/// <reference types="googlemaps" />
import * as React from 'react';
import { Clusterer } from '@react-google-maps/marker-clusterer';
interface MarkerState {
    marker: google.maps.Marker | null;
}
export interface MarkerProps {
    options?: google.maps.MarkerOptions;
    /** Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in null will cause any animation to stop. */
    animation?: google.maps.Animation;
    /** If true, the marker receives mouse and touch events. Default value is true. */
    clickable?: boolean;
    /** Mouse cursor to show on hover */
    cursor?: string;
    /** If true, the marker can be dragged. Default value is false. */
    draggable?: boolean;
    /** Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. */
    icon?: string | google.maps.Icon | google.maps.Symbol;
    /** Adds a label to the marker. The label can either be a string, or a MarkerLabel object. */
    label?: string | google.maps.MarkerLabel;
    /** The marker's opacity between 0.0 and 1.0. */
    opacity?: number;
    /** Marker position. */
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    /** Image map region definition used for drag/click. */
    shape?: google.maps.MarkerShape;
    /** Rollover text */
    title?: string;
    /** If true, the marker is visible */
    visible?: boolean;
    /** All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen. */
    zIndex?: number;
    /** Render prop that handles clustering markers */
    clusterer?: Clusterer;
    /** Clusters are redrawn when a Marker is added unless noClustererRedraw? is set to true. */
    noClustererRedraw?: boolean;
    /** This event is fired when the marker icon was clicked. */
    onClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the marker's clickable property changes. */
    onClickableChanged?: () => void;
    /** This event is fired when the marker's cursor property changes. */
    onCursorChanged?: () => void;
    /** This event is fired when the marker's animation property changes. */
    onAnimationChanged?: () => void;
    /** This event is fired when the marker icon was double clicked. */
    onDblClick?: (e: google.maps.MouseEvent) => void;
    /** This event is repeatedly fired while the user drags the marker. */
    onDrag?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the user stops dragging the marker. */
    onDragEnd?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the marker's draggable property changes. */
    onDraggableChanged?: () => void;
    /** This event is fired when the user starts dragging the marker. */
    onDragStart?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the marker's flat property changes. */
    onFlatChanged?: () => void;
    /** This event is fired when the marker icon property changes. */
    onIconChanged?: () => void;
    /** This event is fired for a mousedown on the marker. */
    onMouseDown?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the mouse leaves the area of the marker icon. */
    onMouseOut?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the mouse enters the area of the marker icon. */
    onMouseOver?: (e: google.maps.MouseEvent) => void;
    /** This event is fired for a mouseup on the marker. */
    onMouseUp?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the marker position property changes. */
    onPositionChanged?: () => void;
    /** This event is fired for a rightclick on the marker. */
    onRightClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the marker's shape property changes. */
    onShapeChanged?: () => void;
    /** This event is fired when the marker title property changes. */
    onTitleChanged?: () => void;
    /** This event is fired when the marker's visible property changes. */
    onVisibleChanged?: () => void;
    /** This event is fired when the marker's zIndex property changes. */
    onZindexChanged?: () => void;
    /** This callback is called when the marker instance has loaded. It is called with the marker instance. */
    onLoad?: (marker: google.maps.Marker) => void;
    /** This callback is called when the component unmounts. It is called with the marker instance. */
    onUnmount?: (marker: google.maps.Marker) => void;
}
export declare class Marker extends React.PureComponent<MarkerProps, MarkerState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: MarkerState;
    setMarkerCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MarkerProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default Marker;
