/// <reference types="googlemaps" />
import * as React from 'react';
interface CircleState {
    circle: google.maps.Circle | null;
}
export interface CircleProps {
    options?: google.maps.CircleOptions;
    /** sets the center of the circle */
    center: google.maps.LatLng | google.maps.LatLngLiteral;
    /** Sets the radius of this circle (in meters) */
    radius: number;
    /** If set to true, the user can drag this circle over the map */
    draggable?: boolean;
    /** If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle. */
    editable?: boolean;
    /** Hides this circle if set to false. */
    visible?: boolean;
    /** This event is fired when the DOM dblclick event is fired on the circle. */
    onDblClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the user stops dragging the circle. */
    onDragEnd?: (e: google.maps.MouseEvent) => void;
    /**  This event is fired when the user starts dragging the circle. */
    onDragStart?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mousedown event is fired on the circle. */
    onMouseDown?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mousemove event is fired on the circle. */
    onMouseMove?: (e: google.maps.MouseEvent) => void;
    /** This event is fired on circle mouseout. */
    onMouseOut?: (e: google.maps.MouseEvent) => void;
    /** This event is fired on circle mouseover. */
    onMouseOver?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the DOM mouseup event is fired on the circle. */
    onMouseUp?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the circle is right-clicked on. */
    onRightClick?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the circle's center is changed. */
    onCenterChanged?: () => void;
    /** This event is fired when the DOM click event is fired on the circle. */
    onClick?: (e: google.maps.MouseEvent) => void;
    /** This event is repeatedly fired while the user drags the circle. */
    onDrag?: (e: google.maps.MouseEvent) => void;
    /** This event is fired when the circle's radius is changed. */
    onRadiusChanged?: () => void;
    /** This callback is called when the circle instance has loaded. It is called with the circle instance. */
    onLoad?: (circle: google.maps.Circle) => void;
    /** This callback is called when the component unmounts. It is called with the circle instance. */
    onUnmount?: (circle: google.maps.Circle) => void;
}
export declare class Circle extends React.PureComponent<CircleProps, CircleState> {
    static contextType: React.Context<google.maps.Map<Element> | null>;
    registeredEvents: google.maps.MapsEventListener[];
    state: CircleState;
    setCircleCallback: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: CircleProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Circle;
