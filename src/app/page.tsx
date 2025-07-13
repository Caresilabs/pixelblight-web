import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Users, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/gameCard";
import { siteInfo } from "./config";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        {/* Local organic blight clouds */}
        <div className="absolute top-10 left-1/4 w-64 h-32 bg-purple-600/30 rounded-full blur-2xl transform rotate-12"></div>
        <div className="absolute top-20 right-1/3 w-48 h-24 bg-yellow-500/20 rounded-full blur-xl transform -rotate-6"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-40 bg-orange-500/15 rounded-full blur-3xl transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-64 bg-purple-500/35 rounded-full blur-2xl transform -rotate-12"></div>

        {/* Local pixelated corruption */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-16 left-16 w-4 h-4 bg-yellow-400/70 blur-sm animate-pulse"></div>
          <div className="absolute top-24 left-32 w-2 h-2 bg-purple-500/90"></div>
          <div className="absolute top-32 left-24 w-3 h-3 bg-orange-400/80 blur-sm"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/70 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-4 h-4 bg-yellow-500/60 blur-sm"></div>
          <div className="absolute bottom-24 left-1/3 w-3 h-3 bg-purple-600/80"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow-2xl">
            Welcome to {siteInfo.company}
            <br />
            <span className="text-4xl md:text-6xl opacity-90">Experiences</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-lg">
            {siteInfo.welcomeMessage}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#games">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 border border-yellow-400/30"
              >
                <Play className="mr-2 h-5 w-5" />
                Play Our Games
              </Button>
            </Link>

            <Link href="#about">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400/60 text-purple-300 hover:bg-purple-500/20 hover:text-white px-8 py-3 rounded-full bg-black/20 backdrop-blur-sm border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section id="games" className="py-20 px-4 relative">
        {/* Section-specific blight atmosphere */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-0 right-1/6 w-64 h-32 bg-orange-500/20 rounded-full blur-2xl transform -rotate-30"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-80 bg-yellow-500/10 rounded-full blur-3xl transform rotate-45"></div>

        {/* Scattered corruption pixels */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-purple-500/80 blur-sm"></div>
          <div className="absolute top-64 right-1/4 w-2 h-2 bg-yellow-400/70 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-orange-500/60 blur-sm"></div>
          <div className="absolute bottom-64 right-1/3 w-2 h-2 bg-purple-400/80"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-xl">
              Our Games
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-lg">
              Discover our collection of immersive games. We hope you have a
              great time playing!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game 1 - Featured */}
            <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border-purple-400/40 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 relative">
              {/* Card corruption effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/60 blur-sm animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500/50 blur-sm"></div>

              <div className="relative h-48 flex items-center ">
                {/* <Image
                  src="/placeholder.svg?height=300&width=600"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}

                <iframe
                  className="w-full "
                  src="https://store.steampowered.com/widget/2788740/"
                  height="190"
                ></iframe>
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
              </div>

              <Badge className="absolute top-2 left-4 border-none bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold shadow-lg">
                Featured
              </Badge>

              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center justify-between drop-shadow-lg">
                  Phantom Bound
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Everhollow is in danger! Fight the haunted halls with your
                  arsenal of gadgets, discover new upgrades and abilities, and
                  unravel the dark secrets of Shadowthorne Manor in this cozy
                  horror, Metroidvania-like ghost hunting adventure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Single Player / Couch Co-op
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      2025
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-600/30 text-green-400 border-green-600/40 shadow-sm ml-2"
                  >
                    Available Now
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="https://store.steampowered.com/app/2788740/Phantom_Bound/"
                    className="flex-1 "
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Steam
                    </Button>
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=jkpa4QPVu9k"
                    className=""
                  >
                    <Button
                      variant="outline"
                      className="border-purple-400/60 text-purple-400 hover:bg-purple-400/20 hover:text-white bg-transparent backdrop-blur-sm transition-all duration-300"
                    >
                      Trailer
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <GameCard
              description="Upcoming Project."
              title="Badge 13"
              releaseDate=""
              badgeText=""
              buttonHref={""}
              buttonText="TBA"
              imageUrl={"/PixelBlightBackground.png"}
              imageAlt={"Badge 13"}
            />
          </div>

          <div className="text-center m-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-xl">
              From Caresi Labs
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto drop-shadow-lg">
              Discover some of our games we developed under our previous name,
              Caresi Labs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GameCard
              title="The Adventures In Terralands"
              description="Your sister gets kidnapped by the evil Raven and you will do anything to get her back! Join the adventure through three chapters packed with fun puzzles and unique environments."
              releaseDate="2017"
              badgeText=""
              buttonHref={
                "https://play.google.com/store/apps/details?id=com.caresilabs.adventure.android"
              }
              buttonText="View on Google Play"
              imageUrl={
                "https://old.caresilabs.com/wp-content/uploads/2017/02/feature-1024x450.png"
              }
              imageAlt={"The Adventures In Terralands"}
            />

            <GameCard
              title="Zero Out"
              description="Zero Out is a puzzle game that can be played by anyone, anywhere and at any time! Swipe the tiles and match two of the same numbers to score and boost your streak."
              releaseDate="2015"
              badgeText=""
              buttonHref={
                "https://play.google.com/store/apps/details?id=com.caresilabs.zeroout.android"
              }
              buttonText="View on Google Play"
              imageUrl={
                "https://old.caresilabs.com/wp-content/uploads/2016/02/feature-1024x450.png"
              }
              imageAlt={"Zero Out"}
            />

            <GameCard
              title="Wheeljoy"
              description="It's your job to jump, dodge & collect stars in this challenging and fun game!"
              releaseDate="2013"
              badgeText=""
              buttonHref={
                "https://play.google.com/store/apps/details?id=com.caresilabs.wheeljoy.free"
              }
              buttonText="View on Google Play"
              imageUrl={
                "https://old.caresilabs.com/wp-content/uploads/2016/02/wheeljoy.png"
              }
              imageAlt={"Wheeljoy"}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        {/* Section blight atmosphere */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl transform rotate-30"></div>
        <div className="absolute top-0 left-1/6 w-64 h-48 bg-purple-600/20 rounded-full blur-2xl transform -rotate-45"></div>
        <div className="absolute top-1/3 right-1/2 w-48 h-24 bg-orange-500/15 rounded-full blur-xl transform rotate-12"></div>

        {/* Corruption pixels */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-24 left-1/3 w-3 h-3 bg-yellow-400/70 blur-sm animate-pulse"></div>
          <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-purple-500/80"></div>
          <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-orange-400/60 blur-sm"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-xl">
                About {siteInfo.company}
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed drop-shadow-lg">
                {siteInfo.aboutDescription}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-black/20 rounded-lg backdrop-blur-sm border border-purple-500/30 shadow-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
                    5
                  </div>
                  <div className="text-gray-400">Games Released</div>
                </div>
                <div className="text-center p-4 bg-black/20 rounded-lg backdrop-blur-sm border border-purple-500/30 shadow-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
                    50K+
                  </div>
                  <div className="text-gray-400">Total Downloads</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400/60 blur-sm animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500/80"></div>
              <Image
                src="/Agatha_Standalone.png"
                alt="Game development team"
                width={400}
                height={300}
                className="relative z-10 rounded-2xl shadow-2xl border border-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
