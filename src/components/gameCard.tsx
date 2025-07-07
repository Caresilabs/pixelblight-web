import { Calendar, ExternalLink, Users } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  badgeText?: string;
  badgeClassName?: string;
  playerMode?: string;
  releaseDate?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function GameCard({
  title,
  description,
  imageUrl,
  imageAlt,
  badgeText,
  badgeClassName,
  playerMode = "Single Player",
  releaseDate,
  buttonText = "Wishlist on Steam",
  buttonHref,
}: GameCardProps) {
  let releaseBadgeText = releaseDate || "TBA";
  let releaseBadgeClassName =
    "bg-orange-600/30 text-orange-400 border-orange-600/40 shadow-sm";
  const isReleased = releaseDate ? new Date(releaseDate) <= new Date() : false;

  if (isReleased) {
    releaseBadgeClassName =
      "bg-green-600/30 text-green-400 border-green-600/40 shadow-sm";
    releaseBadgeText = "Available Now";
  }

  // Default onButtonClick if not provided
  return (
    <Card className="bg-gradient-to-br from-purple-950/80 to-indigo-950/80 border-purple-300/50 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:shadow-purple-400/30 relative">
      <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400/80 blur-sm"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-violet-800/70 animate-pulse"></div>

      <div className="relative">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badgeText && (
          <Badge
            className={`absolute top-4 left-4 ${badgeClassName ?? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"}`}
          >
            {badgeText}
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center justify-between drop-shadow-lg">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {playerMode}
              </span>
              {!!releaseDate && (
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {releaseDate}
                </span>
              )}
            </div>
            <Badge
              variant="secondary"
              className={
                releaseBadgeClassName ??
                "bg-orange-600/30 text-orange-400 border-orange-600/40 shadow-sm"
              }
            >
              {releaseBadgeText}
            </Badge>
          </div>
          <Link href={buttonHref || "#"}>
            <Button
              className={
                !buttonHref
                  ? "w-full bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-slate-500/25 transition-all duration-300"
                  : "w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              }
            >
              {Boolean(buttonHref) && <ExternalLink className="mr-2 h-4 w-4" />}
              {buttonText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
