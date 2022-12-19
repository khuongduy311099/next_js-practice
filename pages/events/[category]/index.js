import Image from "next/image";
import Link from "next/link";

function EventsCategoryPage({data, pageName}) {
    return (
        <div>
            <h1>Event in {pageName}</h1>
            {data.map((ev) => (
                <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
                    <h1>{ev.title}</h1>
                    <p>{ev.description}</p>
                    <Image
                        width={300}
                        height={300}
                        alt={ev.id}
                        src={ev.image}
                    />
                </Link>
            ))}
            <Link href="/events/event1">Event 1</Link>
            <Link href="/events/event2">Event 2</Link>
            <Link href="/events/event3">Event 3</Link>
            <Link href="/events/event4">Event 4</Link>
            <Link href="/events/event5">Event 5</Link>
            <Link href="/events/event6">Event 6</Link>
        </div>
    );
}

export default EventsCategoryPage;
export async function getStaticPaths() {
    const {events_categories} = await import("../../../data/data.json");
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                category: ev.id.toString(),
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.category;
    const {allEvents} = await import("../../../data/data.json");
    const data = allEvents.filter((ev) => ev.city === id);
    return {
        props: {data, pageName: id},
    };
}
