import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function AssessmentsLoading() {
  return (
    <div className="space-y-6">
      {/* Summary Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="h-4 bg-white/20 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-white/20 rounded animate-pulse mb-2" />
              <div className="h-3 bg-white/20 rounded animate-pulse w-24" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <div className="h-6 bg-white/20 rounded animate-pulse mb-2" />
          <div className="h-4 bg-white/20 rounded animate-pulse w-64" />
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 h-10 bg-white/20 rounded animate-pulse" />
            <div className="w-40 h-10 bg-white/20 rounded animate-pulse" />
            <div className="w-48 h-10 bg-white/20 rounded animate-pulse" />
            <div className="w-32 h-10 bg-white/20 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="h-6 bg-white/20 rounded animate-pulse mb-2" />
                <div className="h-4 bg-white/20 rounded animate-pulse w-32 mb-2" />
                <div className="h-3 bg-white/20 rounded animate-pulse w-48" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
