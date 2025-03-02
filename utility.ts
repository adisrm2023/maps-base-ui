import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mockLocations = [
  {
    id: "1",
    name: "Central Park Café",
    category: "Café",
    distance: "0.3 mi",
    rating: 4.5,
    address: "123 Park Avenue, New York, NY",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.7812,
    lng: -73.9665,
    reviews: [
      { user: "Alex", rating: 5, comment: "Great coffee and atmosphere!" },
      { user: "Jamie", rating: 4, comment: "Nice place to work from." },
    ],
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: "2",
    name: "Downtown Mall",
    category: "Shopping",
    distance: "1.2 mi",
    rating: 4.2,
    address: "456 Main Street, New York, NY",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.758,
    lng: -73.9855,
    reviews: [
      { user: "Taylor", rating: 4, comment: "Great selection of stores." },
      { user: "Jordan", rating: 5, comment: "Modern and clean mall." },
    ],
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: "3",
    name: "Riverside Park",
    category: "Park",
    distance: "0.8 mi",
    rating: 4.8,
    address: "789 Riverside Drive, New York, NY",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.801,
    lng: -73.972,
    reviews: [
      { user: "Casey", rating: 5, comment: "Beautiful views of the river!" },
      { user: "Riley", rating: 5, comment: "Great place for a morning run." },
    ],
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
  {
    id: "4",
    name: "City Gas Station",
    category: "Gas Station",
    distance: "1.5 mi",
    rating: 3.9,
    address: "101 Avenue A, New York, NY",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.7235,
    lng: -73.9865,
    reviews: [
      { user: "Morgan", rating: 4, comment: "Clean and well-maintained." },
      { user: "Sam", rating: 3, comment: "A bit pricey but convenient." },
    ],
    photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
  },
  {
    id: "5",
    name: "First National ATM",
    category: "ATM",
    distance: "0.4 mi",
    rating: 4.0,
    address: "202 Broadway, New York, NY",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.7128,
    lng: -74.006,
    reviews: [
      { user: "Quinn", rating: 4, comment: "Always working and no fees." },
      { user: "Pat", rating: 4, comment: "Convenient location." },
    ],
    photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
  },
  {
    id: "6",
    name: "Midtown Restaurant",
    category: "Restaurant",
    distance: "1.0 mi",
    rating: 4.7,
    address: "303 5th Avenue, New York, NY",
    image: "/placeholder.svg?height=200&width=300",
    lat: 40.7484,
    lng: -73.9857,
    reviews: [
      { user: "Jesse", rating: 5, comment: "Amazing food and service!" },
      { user: "Avery", rating: 4, comment: "Great ambiance, slightly pricey." },
    ],
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  },
]

export const categories = [
  { name: "Restaurants", icon: "🍽️" },
  { name: "Gas Stations", icon: "⛽" },
  { name: "ATMs", icon: "💰" },
  { name: "Hotels", icon: "🏨" },
  { name: "Parking", icon: "🅿️" },
  { name: "Pharmacies", icon: "💊" },
]

export const savedLocations = [
  { id: "home", name: "Home", address: "123 Home Street, New York, NY" },
  { id: "work", name: "Work", address: "456 Office Avenue, New York, NY" },
  { id: "gym", name: "Gym", address: "789 Fitness Road, New York, NY" },
]

export const navigationSteps = [
  "Head north on Park Avenue for 0.2 miles",
  "Turn right onto 42nd Street",
  "Continue straight for 0.5 miles",
  "Turn left onto Broadway",
  "Your destination will be on the right in 0.1 miles",
]


