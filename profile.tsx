import BottomNavigation from "@/components/bottom-navigation"
import ProfileScreen from "@/components/profile-screen"

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ProfileScreen />
      <BottomNavigation activeTab="profile" />
    </main>
  )
}

