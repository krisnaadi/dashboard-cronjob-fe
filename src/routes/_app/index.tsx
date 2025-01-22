import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="space-y-4">
      <h3>Cronjob List</h3>
    </div>
  )
}
