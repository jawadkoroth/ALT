"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";
import { ArrowRight } from "lucide-react";

interface TravelGuideItem {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  imageUrl: string;
  category: "destination" | "custom" | "tip";
}

interface TravelGuideSectionProps {
  title?: {
    en: string;
    ar: string;
  };
  subtitle?: {
    en: string;
    ar: string;
  };
  items?: TravelGuideItem[];
}

const defaultItems: TravelGuideItem[] = [
  {
    id: 1,
    title: {
      en: "Dubai - City of Gold",
      ar: "دبي - مدينة الذهب",
    },
    description: {
      en: "Experience the luxury and grandeur of Dubai with its iconic skyscrapers, pristine beaches, and world-class shopping.",
      ar: "استمتع بفخامة وعظمة دبي بناطحات السحاب الشهيرة والشواطئ النقية والتسوق العالمي.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    category: "destination",
  },
  {
    id: 2,
    title: {
      en: "Abu Dhabi - Cultural Capital",
      ar: "أبو ظبي - العاصمة الثقافية",
    },
    description: {
      en: "Discover the rich heritage and modern marvels of Abu Dhabi, from the Sheikh Zayed Grand Mosque to the Louvre Abu Dhabi.",
      ar: "اكتشف التراث الغني والعجائب الحديثة في أبو ظبي، من مسجد الشيخ زايد الكبير إلى متحف اللوفر أبو ظبي.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1542315426-e9259d0e3f8f?w=800&q=80",
    category: "destination",
  },
  {
    id: 3,
    title: {
      en: "Local Customs & Etiquette",
      ar: "العادات المحلية وآداب السلوك",
    },
    description: {
      en: "Learn about important cultural norms and practices to respect during your visit to the UAE, including dress codes and social customs.",
      ar: "تعرف على المعايير والممارسات الثقافية المهمة لاحترامها أثناء زيارتك للإمارات، بما في ذلك قواعد اللباس والعادات الاجتماعية.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=800&q=80",
    category: "custom",
  },
  {
    id: 4,
    title: {
      en: "Desert Safari Adventures",
      ar: "مغامرات سفاري الصحراء",
    },
    description: {
      en: "Experience the thrill of dune bashing, camel riding, and traditional entertainment under the stars in the Arabian desert.",
      ar: "استمتع بإثارة التنقل بين الكثبان الرملية وركوب الجمال والترفيه التقليدي تحت النجوم في الصحراء العربية.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80",
    category: "tip",
  },
  {
    id: 5,
    title: {
      en: "Sharjah - Cultural Hub",
      ar: "الشارقة - مركز ثقافي",
    },
    description: {
      en: "Explore the cultural heart of the UAE with Sharjah's museums, heritage sites, and traditional souks.",
      ar: "استكشف القلب الثقافي للإمارات مع متاحف الشارقة ومواقع التراث والأسواق التقليدية.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
    category: "destination",
  },
  {
    id: 6,
    title: {
      en: "Travel Tips & Weather",
      ar: "نصائح السفر والطقس",
    },
    description: {
      en: "Essential information about the best times to visit, what to pack, and how to navigate the UAE comfortably and safely.",
      ar: "معلومات أساسية حول أفضل الأوقات للزيارة، وما يجب إحضاره، وكيفية التنقل في الإمارات بشكل مريح وآمن.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=800&q=80",
    category: "tip",
  },
];

const TravelGuideSection = ({
  title = {
    en: "UAE Travel Guide",
    ar: "دليل السفر إلى الإمارات",
  },
  subtitle = {
    en: "Discover the beauty and wonders of the United Arab Emirates",
    ar: "اكتشف جمال وعجائب دولة الإمارات العربية المتحدة",
  },
  items = defaultItems,
}: TravelGuideSectionProps) => {
  const { language, translate } = useLanguage();

  const handleLearnMore = () => {
    // Redirect to WhatsApp Business chat
    window.open(
      "https://wa.me/1234567890?text=I'm%20interested%20in%20learning%20more%20about%20UAE%20travel",
      "_blank",
    );
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {language === "en" ? title.en : title.ar}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "en" ? subtitle.en : subtitle.ar}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white"
            >
              <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={language === "en" ? item.title.en : item.title.ar}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#3a86ff] text-white">
                    {language === "en"
                      ? item.category === "destination"
                        ? translate("guide.destination")
                        : item.category === "custom"
                          ? translate("guide.localCustom")
                          : translate("guide.travelTip")
                      : item.category === "destination"
                        ? translate("guide.destination")
                        : item.category === "custom"
                          ? translate("guide.localCustom")
                          : translate("guide.travelTip")}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {language === "en" ? item.title.en : item.title.ar}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {language === "en"
                    ? item.description.en
                    : item.description.ar}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleLearnMore}
                  className="w-full bg-[#3a86ff] hover:bg-[#2a76ef] text-white transition-colors"
                >
                  {language === "en" ? "Learn More" : "معرفة المزيد"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGuideSection;
