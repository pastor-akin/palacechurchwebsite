import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    id: "1",
    title: "See What's Next",
    subtitle: "Tap to view upcoming events",
    image: "/images/connect-card-1.jpg",
    href: "/#events",
  },
  {
    id: "2",
    title: "Join a Group",
    subtitle: "Tap to find a group near you",
    image: "/images/connect-card-2.jpg",
    href: "/#groups",
  },
  {
    id: "3",
    title: "Worship With Us",
    subtitle: "Tap to watch the worship reel",
    image: "/images/connect-card-3.jpg",
    href: "/ministries/worship",
  },
  {
    id: "4",
    title: "Give Online",
    subtitle: "Tap to give",
    image: "/images/connect-card-4.jpg",
    href: "/give",
  },
];

export default function ConnectCarousel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Discover more ways to connect
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
          There are always new ways to participate in what God is doing
          through our church, including events, groups, worship, and so much
          more.
        </p>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:justify-center sm:px-10">
        {CARDS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="group relative aspect-[4/3] w-72 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-surface-border sm:w-80"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-left">
              <p className="text-lg font-semibold text-white">{card.title}</p>
              <p className="mt-1 text-sm text-white/80">{card.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
