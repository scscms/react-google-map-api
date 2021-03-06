/// <reference types="googlemaps" />
import * as React from 'react';
interface PolylineState {
    polyline: google.maps.Polyline | null;
}
export interface PolylineProps {
    options?: google.maps.PolylineOptions;
    /** If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. */
    draggable?: boolean;
    /** If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. */
    editable?: boolean;
    /** Hides this poly if set to false. */
    visible?: boolean;
    /** Sets the path. The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of LatLngs, or an MVCArray of LatLngs. Note that if you pass a simple array, it will be converted to an MVCArray Inserting or removing LatLngs in the MVCArray will automatically update the polyline on the map. */
    path?: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[];
    /** This event is fired when the DOM dblclick event is fired on the Polyline. */
    onDblClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the user stops dragging the polyline. */
    onDragEnd?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the user starts dragging the polyline. */
    onDragStart?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mousedown event is fired on the Polyline. */
    onMouseDown?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mousemove event is fired on the Polyline. */
    onMouseMove?: (e: google.maps.MouseEvent) => void;
    /** This event is fired on Polyline mouseout. */
    onMouseOut?: (e: google.maps.MouseEvent) => void;
    /** This event is fired on Polyline mouseover. */
    onMouseOver?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mouseup event is fired on the Polyline. */
    onMouseUp?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the Polyline is right-clicked on. */
    onRightClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM click event is fired on the Polyline. */
    onClick?: (e: google.maps.MouseEvent) => void;
    /** This event is repeatedly fired while the user drags the polyline. */
    onDrag?: (e: google.maps.MouseEvent) => void;
    /** This callback is called when the polyline instance has loaded. It is called with the polyline instance. */
    onLoad?: (polyline: google.maps.Polyline) => void;
    /** This callback is called when the component unmounts. It is called with the polyline instance. */
    onUnmount?: (polyline: google.maps.Polyline) => void;
}
export declare class Polyline extends React.PureComponent<PolylineProps, PolylineState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: PolylineState;
    setPolylineCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PolylineProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default Polyline;
