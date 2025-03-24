import { Award, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import NumberTicker from "~/components/ui/number-ticker";

const cardData = [
  {
    title: "Users",
    value: 55000,
    icon: Users,
    color: "blue",
    description: "users reached",
  },
  {
    title: "Extracurricular",
    value: 600,
    icon: Award,
    color: "amber",
    prefix: "Over",
    suffix: "+",
    description: "ECs have been posted",
  },
];

const colorMap: Record<
  "blue" | "amber",
  { light: string; dark: string }
> = {
  blue: { light: "#DBEAFE", dark: "#2563EB" },
  amber: { light: "#FEF3C7", dark: "#F59E0B" },
};

export default function ImprovedInfoCard() {
  return (
    <>
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
          style={
            {
              "--card-bg-from":
                colorMap[card.color as keyof typeof colorMap].light,
              "--card-bg-to": "white",
              "--card-border":
                colorMap[card.color as keyof typeof colorMap].dark,
              background:
                "linear-gradient(to bottom right, var(--card-bg-from), var(--card-bg-to))",
              borderColor: "var(--card-border)",
            } as React.CSSProperties
          }
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">
              {card.title}
            </CardTitle>
            <card.icon
              className="size-5"
              style={{
                color: colorMap[card.color as keyof typeof colorMap].dark,
              }}
            />
          </CardHeader>
          <CardContent>
            <div
              className="text-2xl font-bold text-gray-800"
              style={{
                color: colorMap[card.color as keyof typeof colorMap].dark,
              }}
            >
              {card.prefix && (
                <span className="mr-1 text-lg">{card.prefix}</span>
              )}
              <NumberTicker
                value={card.value}
                className="inline-block"
                style={{
                  color: colorMap[card.color as keyof typeof colorMap].dark,
                }}
              />
              {card.suffix}
            </div>
            <p className="mt-1 text-xs text-gray-500">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
