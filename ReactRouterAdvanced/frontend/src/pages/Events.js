import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function Events() {
    const data = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={data.events}>
                {(events) => <EventsList events={events} />}
            </Await>
        </Suspense>
    );
}

export default Events;

async function loadEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw json({ message: "Could not fetch events" }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents(),
    });
}
