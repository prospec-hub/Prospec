"use client";

interface PlaceholderProps {
  title: string;
  description: string;
}

export function PlaceholderContent({ title, description }: PlaceholderProps) {
  return (
    <div className="p-4 md:p-8 pb-12 space-y-6 md:space-y-8 bg-background/50">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="bg-card rounded-xl p-12 border border-border card-shadow text-center">
        <div className="inline-block p-4 rounded-lg bg-primary/10 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          This section is being prepared with rich features and functionality. Check back soon!
        </p>
      </div>
    </div>
  );
}
