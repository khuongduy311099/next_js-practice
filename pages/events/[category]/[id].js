import Image from "next/image";

function EventPage({data}) {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <Image src={data.image} width={2560} height={800} alt={data.id} />
        </div>
    );
}

export default EventPage;

export async function getStaticPaths() {
    const data = await import("../../../data/data.json");
    const allEvents = data.allEvents;
    console.log(data);
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                category: path.city,
                id: path.id,
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const {allEvents} = await import("../../../data/data.json");
    const eventData = allEvents.find((ev) => id === ev.id);
    return {
        props: {data: eventData},
    };
}
