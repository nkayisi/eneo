"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Building,
  Calculator,
  Home,
  MapPin,
  Search,
  TrendingUp
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [activeTab, setActiveTab] = useState("acheter");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 20, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const acheterRef = useRef<HTMLButtonElement>(null);
  const louerRef = useRef<HTMLButtonElement>(null);
  const estimerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const currentRef = 
        activeTab === "acheter" ? acheterRef.current :
        activeTab === "louer" ? louerRef.current :
        estimerRef.current;
      
      if (currentRef && tabsRef.current) {
        const tabsRect = tabsRef.current.getBoundingClientRect();
        const currentRect = currentRef.getBoundingClientRect();
        const left = currentRect.left - tabsRect.left;
        const width = currentRect.width;
        
        setIndicatorStyle({ left, width });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  return (
    <section className="w-full flex flex-col">
      <div className="bg-[url('/images/hero_bg.jpg')] bg-cover bg-center w-full p-4 sm:p-8 flex flex-col justify-center relative rounded-3xl">
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/20 rounded-3xl" />

        <div className="relative z-10 w-full max-w-3xl mx-auto">
          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:text-center">
            Heureux de vous revoir sur Eneo Immo !
          </h1>
          <p className="text-white text-md mb-4 sm:text-center">
            Comparez les prix, estimez la valeur réelle, et achetez ou vendez en
            toute sérénité, rapidement et en toute confiance.
          </p>

          {/* Interface de recherche avec shadcn/ui Tabs */}
          <div className="bg-transparent rounded-2xl py-4 sm:p-6">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full gap-0"
            >
              <div className="relative">
                <TabsList ref={tabsRef} className="grid w-full sm:w-max grid-cols-3 gap-3 border-none bg-white !mb-0 h-auto rounded-4xl rounded-b-none px-5 py-4 relative overflow-hidden">
                  {/* Indicateur animé en arrière-plan avec positionnement précis */}
                  <div 
                    className="absolute top-4 bottom-4 bg-black rounded-full transition-all duration-300 ease-in-out z-0"
                    style={{
                      left: `${indicatorStyle.left}px`,
                      width: `${indicatorStyle.width}px`
                    }}
                  />
                  
                  <TabsTrigger
                    ref={acheterRef}
                    value="acheter"
                    className="flex items-center gap-2 cursor-pointer py-2.5 rounded-full relative z-10 data-[state=active]:bg-transparent data-[state=active]:text-white transition-colors duration-300 ease-in-out hover:bg-gray-100 data-[state=active]:hover:bg-transparent"
                  >
                    <Home className="w-4 h-4" />
                    Acheter
                  </TabsTrigger>
                  <TabsTrigger 
                    ref={louerRef}
                    value="louer" 
                    className="flex items-center gap-2 cursor-pointer py-2.5 rounded-full relative z-10 data-[state=active]:bg-transparent data-[state=active]:text-white transition-colors duration-300 ease-in-out hover:bg-gray-100 data-[state=active]:hover:bg-transparent"
                  >
                    <MapPin className="w-4 h-4" />
                    Louer
                  </TabsTrigger>
                  <TabsTrigger
                    ref={estimerRef}
                    value="estimer"
                    className="flex items-center gap-2 cursor-pointer py-2.5 rounded-full relative z-10 data-[state=active]:bg-transparent data-[state=active]:text-white transition-colors duration-300 ease-in-out hover:bg-gray-100 data-[state=active]:hover:bg-transparent"
                  >
                    <Calculator className="w-4 h-4" />
                    Estimer
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="acheter" className="mt-0">
                <SearchForm placeholder="Rechercher un bien à acheter..." />
              </TabsContent>
              <TabsContent value="louer" className="mt-0">
                <SearchForm placeholder="Rechercher un bien à louer..." />
              </TabsContent>
              <TabsContent value="estimer" className="mt-0">
                <div className="flex flex-col gap-4 p-5 items-center bg-white rounded-b-4xl rounded-tl-none rounded-tr-none sm:rounded-tr-4xl sm:rounded-b-4xl shadow-sm transition-all duration-500 ">
                  <p>
                    Estimer gratuitement votre bien et découvrez sa valeur en moins de 2 minutes
                  </p>
                  <Button variant="default" className="rounded-full" size="lg">
                    Estimer votre bien
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Services dédiés en bas */}
        <div className="relative mt-8">
          <div className="max-w-max mx-auto">
            <p className="text-white mb-4 text-left">
              Nos services dédiés :
            </p>
            <div className="flex flex-wrap justify-start gap-3">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 cursor-pointer backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Estimer votre bien
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 cursor-pointer backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white"
              >
                <Home className="w-4 h-4 mr-2" />
                Déposer une annonce
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 cursor-pointer backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Carte des prix de l&apos;immo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant de formulaire de recherche simplifié pour l'immobilier
function SearchForm({ placeholder }: { placeholder: string }) {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fermer l'overlay quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveField(null);
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFieldFocus = () => {
    setActiveField("destination");
    setIsExpanded(true);
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Champ de recherche principal */}
      <div
        className={`flex items-center bg-white rounded-b-4xl rounded-tl-none rounded-tr-none sm:rounded-tr-full sm:rounded-b-full shadow-sm transition-all duration-500 ${
          isExpanded ? "bg-gray-50" : ""
        }`}
      >
        {/* Destination */}
        <div
          className={`flex-1 px-6 py-2.5 cursor-pointer transition-all duration-200 ${
            activeField === "destination"
              ? "shadow-lg rounded-l-full"
              : ""
          }`}
          onClick={handleFieldFocus}
        >
          <label className="block text-xs font-semibold text-gray-900 mb-1">
            Destination
          </label>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 no-ios-zoom"
            onFocus={handleFieldFocus}
          />
        </div>

        {/* Bouton de recherche */}
        <div className="pr-2">
          <Button
            size="sm"
            className={`h-12 bg-black text-white flex items-center justify-center transition-all duration-400 ease-out ${
              isExpanded
                ? "sm:px-6 w-12 sm:w-auto rounded-full sm:min-w-[120px]"
                : "w-12 p-0 rounded-full"
            }`}
          >
            <Search className="w-4 h-4 sm:ml-1.5 transition-all duration-400 ease-out" />
            <span
              className={`text-sm hidden sm:block font-medium whitespace-nowrap overflow-hidden transition-all duration-400 ease-out 
                ${
                isExpanded
                  ? "ml-2 opacity-100 max-w-[100px] translate-x-0"
                  : "ml-0 opacity-0 max-w-0 -translate-x-2"
              }
              `}
            >
              {isExpanded ? "Rechercher" : ""}
            </span>
          </Button>
        </div>
      </div>

      {/* Overlay dynamique */}
      <div
        className={`absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-2xl border border-gray-200 sm:p-8 p-4 z-50 transition-all duration-400 ease-out ${
          isExpanded
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="max-h-[calc(100vh-15rem)] overflow-y-auto scrollbar-hide">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Recherches récentes
            </h3>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Paris 15ème</div>
                <div className="text-sm text-gray-500">
                  Appartements • Recherche récente
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Suggestions de lieux
            </h3>
            <div className="space-y-2">
              {[
                {
                  name: "À proximité",
                  desc: "Découvrez les biens à proximité",
                  icon: MapPin,
                  color: "blue",
                },
                {
                  name: "Paris, Île-de-France",
                  desc: "Appartements et maisons • Centre-ville",
                  icon: Building,
                  color: "purple",
                },
                {
                  name: "Lyon, Rhône-Alpes",
                  desc: "Biens immobiliers • Presqu'île",
                  icon: Building,
                  color: "green",
                },
                {
                  name: "Marseille, PACA",
                  desc: "Propriétés • Vieux-Port et alentours",
                  icon: Building,
                  color: "orange",
                },
                {
                  name: "Nice, Côte d'Azur",
                  desc: "Immobilier de prestige • Front de mer",
                  icon: Building,
                  color: "red",
                },
              ].map((dest) => (
                <div
                  key={dest.name}
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 bg-${dest.color}-100 rounded-lg flex items-center justify-center`}
                  >
                    <dest.icon className={`w-6 h-6 text-${dest.color}-600`} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {dest.name}
                    </div>
                    <div className="text-sm text-gray-500">{dest.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
