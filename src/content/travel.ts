export type TravelEntry = {
  id: string
  destination: string
  date: string
  story: string
  image?: {
    src: string
    alt: string
  }
}

// Placeholder entries — replace with real destinations, dates, stories and
// photos (add images to /public/images/travel/ and set `image`).
export const travelEntries: TravelEntry[] = [
  {
    id: "trip-1",
    destination: "Add a destination",
    date: "Add the date",
    story: "What you saw, tasted or learned here — one or two sentences.",
  },
  {
    id: "trip-2",
    destination: "Add a destination",
    date: "Add the date",
    story: "A moment from this place worth remembering.",
  },
  {
    id: "trip-3",
    destination: "Add a destination",
    date: "Add the date",
    story: "The small detail you'd want someone else to notice.",
  },
  {
    id: "trip-4",
    destination: "Add a destination",
    date: "Add the date",
    story: "Why this place stayed with you.",
  },
]
