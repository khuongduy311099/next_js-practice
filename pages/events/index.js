import Image from "next/image";
import Link from "next/link";

function EventsPage({data}) {
    return (
        <div>
            <h1>Events Page</h1>
            {data.map((ev) => (
                <Link key={ev.id} href={`/events/${ev.id}`}>
                    <Image
                        alt={ev.id}
                        src={ev.image}
                        width={200}
                        height={200}
                    />
                    <h2>{ev.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default EventsPage;

export async function getStaticProps() {
    const {events_categories} = await import("/data/data.json");
    return {
        props: {
            data: events_categories,
        },
    };
}
