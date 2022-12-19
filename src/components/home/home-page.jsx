import Image from "next/image";
import Link from "next/link";

function HomePage({data}) {
    return (
        <main>
            <h1>Events</h1>
            <div className="main_body">
                {data.map((ev) => (
                    <Link
                        className="card"
                        key={ev.id}
                        href={`/events/${ev.id}`}
                    >
                        <Image
                            width={200}
                            height={100}
                            src={ev.image}
                            alt={ev.id}
                        ></Image>
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default HomePage;
