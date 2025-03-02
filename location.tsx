import BottomNavigation from "@/components/bottom-navigation"
import LocationDetails from "@/components/location-details"

export default function LocationPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col">
      <LocationDetails id={params.id} />
      <BottomNavigation activeTab="search" />
    </main>
  )
}

