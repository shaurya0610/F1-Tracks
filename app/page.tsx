import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Home() {

  const res = await fetch('http://localhost:3000/api/tracks', {
    cache: 'no-store' // optional: disables static caching
  });

  const tracks = await res.json();

  return (
    <>

      <h1 className="text-4xl font-bold text-center mt-8 mb-4">
        Where are we racing in 2025?
      </h1>

      {tracks.map((track: { track: string; gp: string; layout: string; dates: string }, index: number) => (
        <div key={index} className="mt-4 ml-4 max-w-79 inline-block">
          <Card>
            <CardHeader>
              <CardTitle>{track.track}</CardTitle>
              <CardDescription>{track.gp}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={track.layout} alt={`Layout of the ${track.track}`} className="h-56" />
            </CardContent>
            <CardFooter>
              {track.dates}
            </CardFooter>
          </Card>
        </div>
      ))}

    </>
  );
}
