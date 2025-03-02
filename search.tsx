import BottomNavigation from "@/components/bottom-navigation"
import SearchResults from "@/components/search-results"

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SearchResults />
      <BottomNavigation activeTab="search" />
    </main>
  )
}

