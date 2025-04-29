"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  imageUrl: string;
  date: string;
}

const blogPosts: Record<string, BlogPost> = {
  dubai: {
    id: "dubai",
    title: {
      en: "Dubai - City of Gold",
      ar: "دبي - مدينة الذهب",
    },
    content: {
      en: `<p>Dubai, often referred to as the "City of Gold," is a dazzling metropolis that has transformed from a humble fishing village into one of the world's most luxurious and futuristic cities.</p>
      <h3>Must-Visit Attractions</h3>
      <ul>
        <li><strong>Burj Khalifa</strong> - The world's tallest building offers breathtaking views from its observation decks.</li>
        <li><strong>Palm Jumeirah</strong> - This man-made island is home to luxury resorts, apartments, and the iconic Atlantis hotel.</li>
        <li><strong>Dubai Mall</strong> - One of the world's largest shopping centers featuring over 1,200 stores, an aquarium, and an indoor ice rink.</li>
        <li><strong>Dubai Marina</strong> - A stunning waterfront development with luxury yachts, restaurants, and skyscrapers.</li>
      </ul>
      <h3>Cultural Experiences</h3>
      <p>Visit the historic Al Fahidi district to explore Dubai's heritage, take an abra (water taxi) across Dubai Creek, and visit the Dubai Museum housed in the Al Fahidi Fort, the oldest existing building in the city.</p>
      <h3>Shopping</h3>
      <p>From traditional gold souks to ultra-modern malls, Dubai is a shopper's paradise. Don't miss the Gold Souk, where you can find intricate jewelry at competitive prices.</p>
      <h3>Best Time to Visit</h3>
      <p>The most pleasant weather is from November to March when temperatures are moderate. Summer months (June to September) can be extremely hot with temperatures exceeding 40°C (104°F).</p>`,
      ar: `<p>دبي، التي غالبًا ما يشار إليها باسم "مدينة الذهب"، هي مدينة مذهلة تحولت من قرية صيد متواضعة إلى واحدة من أكثر المدن فخامة وحداثة في العالم.</p>
      <h3>أماكن يجب زيارتها</h3>
      <ul>
        <li><strong>برج خليفة</strong> - أطول مبنى في العالم يوفر إطلالات خلابة من منصات المراقبة الخاصة به.</li>
        <li><strong>نخلة جميرا</strong> - هذه الجزيرة الاصطناعية هي موطن للمنتجعات الفاخرة والشقق وفندق أتلانتس الشهير.</li>
        <li><strong>دبي مول</strong> - أحد أكبر مراكز التسوق في العالم يضم أكثر من 1200 متجر وحوض أسماك وحلبة تزلج داخلية.</li>
        <li><strong>مرسى دبي</strong> - تطوير مذهل للواجهة البحرية مع اليخوت الفاخرة والمطاعم وناطحات السحاب.</li>
      </ul>
      <h3>تجارب ثقافية</h3>
      <p>قم بزيارة حي الفهيدي التاريخي لاستكشاف تراث دبي، واركب العبرة (تاكسي مائي) عبر خور دبي، وزر متحف دبي الموجود في حصن الفهيدي، أقدم مبنى موجود في المدينة.</p>
      <h3>التسوق</h3>
      <p>من أسواق الذهب التقليدية إلى المولات فائقة الحداثة، دبي هي جنة المتسوقين. لا تفوت سوق الذهب، حيث يمكنك العثور على مجوهرات معقدة بأسعار تنافسية.</p>
      <h3>أفضل وقت للزيارة</h3>
      <p>الطقس الأكثر متعة هو من نوفمبر إلى مارس عندما تكون درجات الحرارة معتدلة. يمكن أن تكون أشهر الصيف (يونيو إلى سبتمبر) حارة للغاية مع درجات حرارة تتجاوز 40 درجة مئوية.</p>`,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    date: "2023-05-15",
  },
  "abu-dhabi": {
    id: "abu-dhabi",
    title: {
      en: "Abu Dhabi - Cultural Capital",
      ar: "أبو ظبي - العاصمة الثقافية",
    },
    content: {
      en: `<p>Abu Dhabi, the capital of the UAE, offers a perfect blend of tradition and modernity with its stunning architecture, cultural institutions, and beautiful landscapes.</p>
      <h3>Cultural Landmarks</h3>
      <ul>
        <li><strong>Sheikh Zayed Grand Mosque</strong> - One of the world's largest mosques, featuring 82 domes, over 1,000 columns, and the world's largest hand-knotted carpet.</li>
        <li><strong>Louvre Abu Dhabi</strong> - The first universal museum in the Arab world, displaying artworks and artifacts from around the globe.</li>
        <li><strong>Qasr Al Watan</strong> - A magnificent palace offering insights into Arab heritage and the UAE's governance.</li>
      </ul>
      <h3>Natural Beauty</h3>
      <p>Explore the Mangrove National Park by kayak, relax on the pristine beaches of Saadiyat Island, or take a desert safari to experience the stunning dunes surrounding the city.</p>
      <h3>Entertainment</h3>
      <p>Visit Yas Island for thrilling attractions including Ferrari World, Warner Bros. World, and Yas Waterworld. The Formula 1 Etihad Airways Abu Dhabi Grand Prix is held annually at the Yas Marina Circuit.</p>
      <h3>Best Time to Visit</h3>
      <p>Like Dubai, the most comfortable time to visit Abu Dhabi is between November and March when temperatures are pleasant for outdoor activities.</p>`,
      ar: `<p>أبوظبي، عاصمة الإمارات العربية المتحدة، تقدم مزيجًا مثاليًا من التقاليد والحداثة مع هندستها المعمارية المذهلة ومؤسساتها الثقافية ومناظرها الطبيعية الجميلة.</p>
      <h3>المعالم الثقافية</h3>
      <ul>
        <li><strong>مسجد الشيخ زايد الكبير</strong> - أحد أكبر المساجد في العالم، يضم 82 قبة وأكثر من 1000 عمود وأكبر سجادة معقودة يدويًا في العالم.</li>
        <li><strong>اللوفر أبوظبي</strong> - أول متحف عالمي في العالم العربي، يعرض أعمالًا فنية وقطعًا أثرية من جميع أنحاء العالم.</li>
        <li><strong>قصر الوطن</strong> - قصر رائع يقدم رؤى حول التراث العربي وحكم الإمارات العربية المتحدة.</li>
      </ul>
      <h3>الجمال الطبيعي</h3>
      <p>استكشف منتزه المانغروف الوطني بالكاياك، واسترخ على الشواطئ النقية لجزيرة السعديات، أو خذ رحلة سفاري صحراوية لتجربة الكثبان الرملية المذهلة المحيطة بالمدينة.</p>
      <h3>الترفيه</h3>
      <p>قم بزيارة جزيرة ياس للاستمتاع بالمعالم المثيرة بما في ذلك عالم فيراري وعالم وارنر براذرز وياس ووتروورلد. يقام سباق جائزة الاتحاد للطيران أبوظبي الكبرى للفورمولا 1 سنويًا في حلبة مرسى ياس.</p>
      <h3>أفضل وقت للزيارة</h3>
      <p>مثل دبي، الوقت الأكثر راحة لزيارة أبوظبي هو بين نوفمبر ومارس عندما تكون درجات الحرارة مناسبة للأنشطة الخارجية.</p>`,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
    date: "2023-06-22",
  },
  "local-customs": {
    id: "local-customs",
    title: {
      en: "Local Customs & Etiquette",
      ar: "العادات المحلية وآداب السلوك",
    },
    content: {
      en: `<p>Understanding and respecting local customs and traditions is essential when visiting the UAE. Here's what you need to know:</p>
      <h3>Dress Code</h3>
      <p>While the UAE is relatively liberal compared to other countries in the region, modest dress is appreciated, especially in public places:</p>
      <ul>
        <li>For women: Shoulders and knees should be covered in public places. When visiting mosques, women should cover their hair, arms, and legs.</li>
        <li>For men: Shorts should be knee-length or longer. Sleeveless shirts are generally acceptable in tourist areas but not in government buildings or mosques.</li>
      </ul>
      <h3>Ramadan Etiquette</h3>
      <p>If you visit during the holy month of Ramadan, be mindful that eating, drinking, and smoking in public during daylight hours is prohibited. Many restaurants will be closed during the day but open after sunset.</p>
      <h3>Greetings and Communication</h3>
      <ul>
        <li>The traditional greeting is "As-salaam alaikum" (peace be upon you), to which the response is "Wa alaikum as-salaam" (and peace be upon you).</li>
        <li>When greeting someone of the opposite gender, wait for them to extend their hand first, as some may prefer not to shake hands for religious reasons.</li>
        <li>Avoid public displays of affection, as they are considered inappropriate.</li>
      </ul>
      <h3>Photography</h3>
      <p>Always ask permission before photographing locals, especially women. Avoid taking pictures of government buildings, military installations, and airports.</p>`,
      ar: `<p>فهم واحترام العادات والتقاليد المحلية أمر ضروري عند زيارة الإمارات العربية المتحدة. إليك ما تحتاج إلى معرفته:</p>
      <h3>قواعد اللباس</h3>
      <p>بينما تعتبر الإمارات العربية المتحدة متحررة نسبيًا مقارنة بدول أخرى في المنطقة، يُقدر اللباس المحتشم، خاصة في الأماكن العامة:</p>
      <ul>
        <li>للنساء: يجب تغطية الكتفين والركبتين في الأماكن العامة. عند زيارة المساجد، يجب على النساء تغطية شعرهن وأذرعهن وأرجلهن.</li>
        <li>للرجال: يجب أن تكون السراويل القصيرة بطول الركبة أو أطول. القمصان بدون أكمام مقبولة عمومًا في المناطق السياحية ولكن ليس في المباني الحكومية أو المساجد.</li>
      </ul>
      <h3>آداب رمضان</h3>
      <p>إذا كنت تزور خلال شهر رمضان المبارك، فكن على دراية بأن الأكل والشرب والتدخين في الأماكن العامة خلال ساعات النهار محظور. ستكون العديد من المطاعم مغلقة خلال النهار ولكنها تفتح بعد غروب الشمس.</p>
      <h3>التحيات والتواصل</h3>
      <ul>
        <li>التحية التقليدية هي "السلام عليكم" (السلام عليكم)، والرد عليها هو "وعليكم السلام" (وعليكم السلام).</li>
        <li>عند تحية شخص من الجنس الآخر، انتظر حتى يمد يده أولاً، لأن البعض قد يفضل عدم المصافحة لأسباب دينية.</li>
        <li>تجنب إظهار المودة العلنية، لأنها تعتبر غير لائقة.</li>
      </ul>
      <h3>التصوير</h3>
      <p>اطلب دائمًا الإذن قبل تصوير السكان المحليين، خاصة النساء. تجنب التقاط صور للمباني الحكومية والمنشآت العسكرية والمطارات.</p>`,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=800&q=80",
    date: "2023-07-10",
  },
  "desert-safari": {
    id: "desert-safari",
    title: {
      en: "Desert Safari Adventures",
      ar: "مغامرات سفاري الصحراء",
    },
    content: {
      en: `<p>A desert safari is one of the most popular and thrilling experiences you can have in the UAE. Here's everything you need to know about this unforgettable adventure:</p>
      <h3>Types of Desert Safaris</h3>
      <ul>
        <li><strong>Morning Safari</strong> - Perfect for those who want to avoid the heat. Activities include dune bashing, sandboarding, and camel riding.</li>
        <li><strong>Evening Safari</strong> - The most popular option, including dune bashing, sunset views, BBQ dinner, and cultural performances.</li>
        <li><strong>Overnight Safari</strong> - Experience sleeping under the stars in traditional Bedouin-style camps.</li>
      </ul>
      <h3>What to Expect</h3>
      <p>A typical evening desert safari includes:</p>
      <ul>
        <li><strong>Dune Bashing</strong> - An exhilarating ride over sand dunes in a 4x4 vehicle.</li>
        <li><strong>Sunset Photography</strong> - Breathtaking views of the sun setting over the golden dunes.</li>
        <li><strong>Camel Riding</strong> - A short ride on the "ship of the desert."</li>
        <li><strong>Cultural Activities</strong> - Henna painting, trying on traditional clothing, and smoking shisha.</li>
        <li><strong>Entertainment</strong> - Belly dancing, Tanoura shows, and fire performances.</li>
        <li><strong>BBQ Dinner</strong> - A buffet of Arabic and international cuisine.</li>
      </ul>
      <h3>What to Wear and Bring</h3>
      <p>Wear comfortable, loose clothing and closed shoes. Bring sunglasses, sunscreen, and a camera. In winter months, bring a light jacket as desert temperatures can drop significantly at night.</p>
      <h3>Booking Tips</h3>
      <p>Book your safari with reputable companies that prioritize safety and have good reviews. Prices typically range from AED 150-500 per person depending on the package and inclusions.</p>`,
      ar: `<p>سفاري الصحراء هي واحدة من أكثر التجارب شعبية وإثارة التي يمكنك الحصول عليها في الإمارات العربية المتحدة. إليك كل ما تحتاج إلى معرفته حول هذه المغامرة التي لا تُنسى:</p>
      <h3>أنواع سفاري الصحراء</h3>
      <ul>
        <li><strong>سفاري الصباح</strong> - مثالية لأولئك الذين يرغبون في تجنب الحرارة. تشمل الأنشطة التنقل بين الكثبان الرملية والتزلج على الرمال وركوب الجمال.</li>
        <li><strong>سفاري المساء</strong> - الخيار الأكثر شعبية، بما في ذلك التنقل بين الكثبان الرملية، ومشاهدة غروب الشمس، وعشاء الشواء، والعروض الثقافية.</li>
        <li><strong>سفاري المبيت</strong> - تجربة النوم تحت النجوم في مخيمات على الطراز البدوي التقليدي.</li>
      </ul>
      <h3>ما يمكن توقعه</h3>
      <p>تشمل سفاري الصحراء المسائية النموذجية:</p>
      <ul>
        <li><strong>التنقل بين الكثبان الرملية</strong> - رحلة مثيرة فوق الكثبان الرملية في سيارة دفع رباعي.</li>
        <li><strong>تصوير غروب الشمس</strong> - مناظر خلابة للشمس وهي تغرب فوق الكثبان الذهبية.</li>
        <li><strong>ركوب الجمال</strong> - رحلة قصيرة على "سفينة الصحراء".</li>
        <li><strong>الأنشطة الثقافية</strong> - رسم الحناء، وتجربة الملابس التقليدية، وتدخين الشيشة.</li>
        <li><strong>الترفيه</strong> - الرقص الشرقي، وعروض التنورة، وعروض النار.</li>
        <li><strong>عشاء الشواء</strong> - بوفيه من المأكولات العربية والعالمية.</li>
      </ul>
      <h3>ما يجب ارتداؤه وإحضاره</h3>
      <p>ارتدِ ملابس مريحة وفضفاضة وأحذية مغلقة. أحضر نظارات شمسية وواقي من الشمس وكاميرا. في أشهر الشتاء، أحضر سترة خفيفة لأن درجات حرارة الصحراء يمكن أن تنخفض بشكل كبير في الليل.</p>
      <h3>نصائح للحجز</h3>
      <p>احجز رحلة السفاري الخاصة بك مع شركات ذات سمعة طيبة تعطي الأولوية للسلامة ولديها تقييمات جيدة. تتراوح الأسعار عادة من 150 إلى 500 درهم إماراتي للشخص الواحد اعتمادًا على الباقة والمشمولات.</p>`,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1547465454-eaae054e1f1c?w=800&q=80",
    date: "2023-08-05",
  },
  sharjah: {
    id: "sharjah",
    title: {
      en: "Sharjah - Cultural Hub",
      ar: "الشارقة - مركز ثقافي",
    },
    content: {
      en: `<p>Sharjah, the cultural capital of the UAE, offers a rich tapestry of heritage, art, and Islamic architecture. Named the Cultural Capital of the Arab World by UNESCO, it's a must-visit for those interested in the region's history and traditions.</p>
      <h3>Cultural Attractions</h3>
      <ul>
        <li><strong>Sharjah Museum of Islamic Civilization</strong> - Houses more than 5,000 artifacts from across the Islamic world.</li>
        <li><strong>Sharjah Art Museum</strong> - The largest art museum in the Gulf, featuring works by Arab artists and international exhibitions.</li>
        <li><strong>Al Noor Mosque</strong> - A stunning example of Ottoman architecture, open to non-Muslim visitors for guided tours.</li>
        <li><strong>Heart of Sharjah</strong> - A historic district being restored to preserve the emirate's cultural heritage.</li>
      </ul>
      <h3>Family Activities</h3>
      <p>Visit the Sharjah Aquarium, Al Montazah Parks, or the Arabian Wildlife Center for family-friendly experiences. The Sharjah Discovery Centre offers interactive exhibits for children to learn about science and technology.</p>
      <h3>Shopping</h3>
      <p>Explore the Blue Souk (Central Market) for gold, jewelry, carpets, and souvenirs. The Souq Al Arsah is one of the oldest markets in the UAE, offering traditional crafts and antiques.</p>
      <h3>Important Note</h3>
      <p>Sharjah follows stricter Islamic laws than other emirates. Alcohol is prohibited, and modest dress is required in all public places.</p>`,
      ar: `<p>الشارقة، العاصمة الثقافية للإمارات العربية المتحدة، تقدم نسيجًا غنيًا من التراث والفن والعمارة الإسلامية. تم تسميتها العاصمة الثقافية للعالم العربي من قبل اليونسكو، وهي وجهة لا بد من زيارتها لأولئك المهتمين بتاريخ المنطقة وتقاليدها.</p>
      <h3>المعالم الثقافية</h3>
      <ul>
        <li><strong>متحف الشارقة للحضارة الإسلامية</strong> - يضم أكثر من 5000 قطعة أثرية من مختلف أنحاء العالم الإسلامي.</li>
        <li><strong>متحف الشارقة للفنون</strong> - أكبر متحف فني في الخليج، يعرض أعمالًا لفنانين عرب ومعارض دولية.</li>
        <li><strong>مسجد النور</strong> - مثال رائع للعمارة العثمانية، مفتوح للزوار غير المسلمين للجولات المصحوبة بمرشدين.</li>
        <li><strong>قلب الشارقة</strong> - حي تاريخي يتم ترميمه للحفاظ على التراث الثقافي للإمارة.</li>
      </ul>
      <h3>أنشطة عائلية</h3>
      <p>قم بزيارة أكواريوم الشارقة، أو منتزهات المنتزه، أو مركز الحياة البرية العربية للحصول على تجارب مناسبة للعائلات. يقدم مركز استكشاف الشارقة معارض تفاعلية للأطفال لتعلم العلوم والتكنولوجيا.</p>
      <h3>التسوق</h3>
      <p>استكشف السوق الأزرق (السوق المركزي) للذهب والمجوهرات والسجاد والهدايا التذكارية. سوق العرصة هو أحد أقدم الأسواق في الإمارات العربية المتحدة، ويقدم الحرف التقليدية والتحف.</p>
      <h3>ملاحظة مهمة</h3>
      <p>تتبع الشارقة قوانين إسلامية أكثر صرامة من الإمارات الأخرى. الكحول محظور، واللباس المحتشم مطلوب في جميع الأماكن العامة.</p>`,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
    date: "2023-09-18",
  },
  "travel-tips": {
    id: "travel-tips",
    title: {
      en: "Travel Tips & Weather",
      ar: "نصائح السفر والطقس",
    },
    content: {
      en: `<p>Planning a trip to the UAE? Here are some essential tips to ensure a smooth and enjoyable experience:</p>
      <h3>Weather and Best Time to Visit</h3>
      <p>The UAE has a desert climate with two distinct seasons:</p>
      <ul>
        <li><strong>Winter (November to March)</strong> - Mild and pleasant with temperatures ranging from 15°C to 28°C (59°F to 82°F). This is the peak tourist season and ideal for outdoor activities.</li>
        <li><strong>Summer (April to October)</strong> - Extremely hot and humid with temperatures often exceeding 40°C (104°F). Indoor activities are recommended during this period.</li>
      </ul>
      <h3>What to Pack</h3>
      <ul>
        <li>Lightweight, modest clothing</li>
        <li>Sunscreen, sunglasses, and a hat</li>
        <li>A light jacket or shawl for air-conditioned places</li>
        <li>Comfortable walking shoes</li>
        <li>Swimwear for beaches and hotel pools</li>
        <li>Power adapter (the UAE uses Type G plugs, 220-240V)</li>
      </ul>
      <h3>Transportation</h3>
      <p>The UAE has excellent transportation options:</p>
      <ul>
        <li><strong>Taxis</strong> - Widely available and relatively affordable.</li>
        <li><strong>Metro</strong> - Dubai has an efficient metro system connecting major attractions and business districts.</li>
        <li><strong>Buses</strong> - Comprehensive bus networks operate in major cities.</li>
        <li><strong>Car Rental</strong> - An excellent option for exploring multiple emirates, with well-maintained highways connecting cities.</li>
      </ul>
      <h3>Money and Payments</h3>
      <p>The local currency is the UAE Dirham (AED). Credit cards are widely accepted in hotels, restaurants, and shopping malls. ATMs are readily available throughout the country.</p>
      <h3>Internet and Communication</h3>
      <p>Purchase a local SIM card upon arrival for affordable data and calls. Free Wi-Fi is available in most hotels, shopping malls, and many public places.</p>`,
      ar: `<p>هل تخطط لرحلة إلى الإمارات العربية المتحدة؟ إليك بعض النصائح الأساسية لضمان تجربة سلسة وممتعة:</p>
      <h3>الطقس وأفضل وقت للزيارة</h3>
      <p>تتمتع الإمارات العربية المتحدة بمناخ صحراوي مع موسمين متميزين:</p>
      <ul>
        <li><strong>الشتاء (نوفمبر إلى مارس)</strong> - معتدل ولطيف مع درجات حرارة تتراوح بين 15 درجة مئوية إلى 28 درجة مئوية. هذا هو موسم الذروة السياحية ومثالي للأنشطة الخارجية.</li>
        <li><strong>الصيف (أبريل إلى أكتوبر)</strong> - حار ورطب للغاية مع درجات حرارة تتجاوز غالبًا 40 درجة مئوية. يوصى بالأنشطة الداخلية خلال هذه الفترة.</li>
      </ul>
      <h3>ما يجب إحضاره</h3>
      <ul>
        <li>ملابس خفيفة ومحتشمة</li>
        <li>واقي من الشمس ونظارات شمسية وقبعة</li>
        <li>سترة خفيفة أو شال للأماكن المكيفة</li>
        <li>أحذية مريحة للمشي</li>
        <li>ملابس سباحة للشواطئ وحمامات السباحة بالفندق</li>
        <li>محول طاقة (تستخدم الإمارات العربية المتحدة مقابس من النوع G، 220-240 فولت)</li>
      </ul>
      <h3>المواصلات</h3>
      <p>تتمتع الإمارات العربية المتحدة بخيارات نقل ممتازة:</p>
      <ul>
        <li><strong>سيارات الأجرة</strong> - متوفرة على نطاق واسع وبأسعار معقولة نسبيًا.</li>
        <li><strong>المترو</strong> - تمتلك دبي نظام مترو فعال يربط المعالم السياحية الرئيسية ومناطق الأعمال.</li>
        <li><strong>الحافلات</strong> - تعمل شبكات حافلات شاملة في المدن الرئيسية.</li>
        <li><strong>تأجير السيارات</strong> - خيار ممتاز لاستكشاف إمارات متعددة، مع طرق سريعة جيدة الصيانة تربط المدن.</li>
      </ul>
      <h3>المال والمدفوعات</h3>
      <p>العملة المحلية هي الدرهم الإماراتي. بطاقات الائتمان مقبولة على نطاق واسع في الفنادق والمطاعم ومراكز التسوق. أجهزة الصراف الآلي متوفرة بسهولة في جميع أنحاء البلاد.</p>
      <h3>الإنترنت والاتصالات</h3>
      <p>اشترِ بطاقة SIM محلية عند الوصول للحصول على بيانات ومكالمات بأسعار معقولة. خدمة الواي فاي المجانية متوفرة في معظم الفنادق ومراكز التسوق والعديد من الأماكن العامة.</p>`,
    },
    imageUrl:
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80",
    date: "2023-10-12",
  },
};

const BlogPage = () => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const { language } = useLanguage();

  // Find the blog post with the matching ID
  const blogPost = blogId && blogPosts[blogId] ? blogPosts[blogId] : null;

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-[#f5f8ff] py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {language === "ar" ? "المقال غير موجود" : "Blog Post Not Found"}
          </h1>
          <p className="text-gray-600 mb-6">
            {language === "ar"
              ? "عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه."
              : "Sorry, we couldn't find the blog post you're looking for."}
          </p>
          <Link href="/">
            <Button className="bg-[#3a86ff] hover:bg-[#3a86ff]/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "ar"
                ? "العودة إلى الصفحة الرئيسية"
                : "Return to Home"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f8ff] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "ar" ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative h-64 md:h-96">
            <img
              src={blogPost.imageUrl}
              alt={language === "en" ? blogPost.title.en : blogPost.title.ar}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-2">
              {new Date(blogPost.date).toLocaleDateString(
                language === "ar" ? "ar-AE" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === "en" ? blogPost.title.en : blogPost.title.ar}
            </h1>

            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{
                __html:
                  language === "en" ? blogPost.content.en : blogPost.content.ar,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
