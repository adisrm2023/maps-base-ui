import BottomNavigation from "@/components/bottom-navigation"
import SavedLocations from "@/components/saved-locations"

export default function SavedPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SavedLocations />
      <BottomNavigation activeTab="saved" />
    </main>
  )
}

