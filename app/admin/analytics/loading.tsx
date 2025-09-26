import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function AnalyticsLoading() {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-96 bg-white/10 rounded animate-pulse" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-40 bg-white/10 rounded animate-pulse" />
          <div className="h-10 w-32 bg-white/10 rounded animate-pulse" />
          <div className="h-10 w-24 bg-white/10 rounded animate-pulse" />
        </div>
      </div>

      {/* KPI cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-6 w-16 bg-white/10 rounded animate-pulse mb-2" />
              <div className="h-3 w-12 bg-white/10 rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main chart skeleton */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <div className="h-6 w-48 bg-white/10 rounded animate-pulse mb-2" />
          <div className="h-4 w-72 bg-white/10 rounded animate-pulse" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-32 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-12 bg-white/10 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom cards skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <div className="h-6 w-48 bg-white/10 rounded animate-pulse mb-2" />
              <div className="h-4 w-64 bg-white/10 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="p-3 rounded-lg bg-white/5">
                    <div className="h-4 w-full bg-white/10 rounded animate-pulse mb-2" />
                    <div className="h-3 w-3/4 bg-white/10 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
