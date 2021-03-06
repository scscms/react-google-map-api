/// <reference types="googlemaps" />
import * as React from 'react';
interface RectangleState {
    rectangle: google.maps.Rectangle | null;
}
export interface RectangleProps {
    options?: google.maps.RectangleOptions;
    /** Sets the bounds of this rectangle. */
    bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
    /** If set to true, the user can drag this rectangle over the map. */
    draggable?: boolean;
    /** If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. */
    editable?: boolean;
    /** Hides this rectangle if set to false. */
    visible?: boolean;
    /** Indicates whether this Rectangle handles mouse events. Defaults to true. */
    clickable?: boolean;
    /** This event is fired when the DOM dblclick event is fired on the rectangle. */
    onDblClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the user stops dragging the rectangle. */
    onDragEnd?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the user starts dragging the rectangle. */
    onDragStart?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mousedown event is fired on the rectangle. */
    onMouseDown?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mousemove event is fired on the rectangle. */
    onMouseMove?: (e: google.maps.MouseEvent) => void;
    /** This event is fired on rectangle mouseout. */
    onMouseOut?: (e: google.maps.MouseEvent) => void;
    /** This event is fired on rectangle mouseover. */
    onMouseOver?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mouseup event is fired on the rectangle. */
    onMouseUp?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the rectangle is right-clicked on. */
    onRightClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM click event is fired on the rectangle. */
    onClick?: (e: google.maps.MouseEvent) => void;
    /** This event is repeatedly fired while the user drags the rectangle. */
    onDrag?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the rectangle's bounds are changed. */
    onBoundsChanged?: () => void;
    /** This callback is called when the rectangle instance has loaded. It is called with the rectangle instance. */
    onLoad?: (rectangle: google.maps.Rectangle) => void;
    /** This callback is called when the component unmounts. It is called with the rectangle instance. */
    onUnmount?: (rectangle: google.maps.Rectangle) => void;
}
export declare class Rectangle extends React.PureComponent<RectangleProps, RectangleState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: RectangleState;
    setRectangleCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RectangleProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default Rectangle;
