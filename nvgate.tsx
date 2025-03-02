import NavigationUI from "@/components/navigation-ui"

export default function NavigatePage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col">
      <NavigationUI id={params.id} />
    </main>
  )
}

