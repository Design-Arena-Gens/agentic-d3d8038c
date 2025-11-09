export default function Home() {
  const qualities = [
    {
      title: "חכמת לב",
      description:
        "היופי פורח מתוך הסבלנות שבאהבה, ההקשבה העמוקה והיכולת לראות את האחר באמת.",
      accent: "from-[#f59e0b] via-[#f97316] to-[#ec4899]",
    },
    {
      title: "יצירתיות נצחית",
      description:
        "צבעים שהיא מציירת במחשבה מתממשים למציאות: מוזיקה, מילים, ורעיונות שהופכים השראה לתנועה.",
      accent: "from-[#22d3ee] via-[#3b82f6] to-[#6366f1]",
    },
    {
      title: "כוח ועדינות",
      description:
        "צעדים בטוחים וכנים, אך תמיד עם עדינות שמזמינה את העולם להרגיש בית.",
      accent: "from-[#4ade80] via-[#22c55e] to-[#16a34a]",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "התחלה מלאת חלום",
      text: "האמונה ביופי שבקול הפנימי הציתה מסע של גילוי עצמי ועשייה אמיצה.",
    },
    {
      year: "2019",
      title: "ניצוץ קהילתי",
      text: "מעגל נשים חדש נולד, מקום לתמיכה, צמיחה ולשיח שמעצים לבבות.",
    },
    {
      year: "2022",
      title: "אור בינלאומי",
      text: "הרצאות, תערוכות וסדנאות שמחברות בין תרבויות דרך יופי אנושי משותף.",
    },
    {
      year: "2024",
      title: "הווה פורח",
      text: "השראה יומיומית שנוגעת בחיים קטנים וגדולים באותה נשימה.",
    },
  ];

  const reflections = [
    {
      quote:
        "היופי שלה מתחיל במקום שבו מילה טובה הופכת למעשה. יש בה אומץ לבחור טוב לב יום אחרי יום.",
      author: "יעל, קולגה ומוזיקאית",
    },
    {
      quote:
        "כשהיא נכנסת לחדר, האווירה משתנה. היא משדרת ביטחון שקט שמאפשר לכל אחד להיות הוא עצמו.",
      author: "נועה, חברה מילדות",
    },
    {
      quote:
        "התשוקה ללמוד, ללמד ולחלום יחד איתנו היא מתנה. האישה הזאת היא תזכורת ליופי שבקשר אנושי.",
      author: "לירון, שותפה לדרך",
    },
  ];

  const gallery = [
    {
      title: "אור ראשון",
      text: "שעות הבוקר שבהן היא כותבת ביומנה ורוקמת רעיונות חדשים.",
    },
    {
      title: "תנועה",
      text: "צעדי ריקוד חופשיים בסלון, בין מטלות יומיום וחיוך בלתי נגמר.",
    },
    {
      title: "שיחה עמוקה",
      text: "היד שמונחת בעדינות על כתף חברה, הקשבה שמרפאת.",
    },
    {
      title: "רגע לעצמה",
      text: "חלום קטן שנכתב על פתק ונדבק למראה כדי להזכיר לה מה חשוב.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a17] text-zinc-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-10rem] mx-auto h-[24rem] max-w-4xl bg-gradient-to-br from-fuchsia-500/30 via-sky-400/30 to-amber-300/30 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-rose-500/40 via-purple-500/30 to-sky-500/40 blur-[120px]" />
        <div className="absolute left-[-8rem] top-[-6rem] h-[18rem] w-[18rem] rounded-full bg-gradient-to-br from-emerald-500/40 via-cyan-400/30 to-blue-500/40 blur-[120px]" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-12 lg:px-20">
        <section className="grid gap-10 lg:grid-cols-[2fr,1.2fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-zinc-100/20 bg-white/10 px-5 py-2 text-sm tracking-wide text-zinc-200 backdrop-blur">
              אישה יפה · מסע של אור פנימי
            </span>
            <h1 className="text-4xl font-semibold leading-snug text-white sm:text-5xl">
              היופי שלה נצמד ללחישות הלב, לאור בעניים ולנשמה שמאירה את כל מי שסביבה.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-200/90">
              דף זה הוא מחווה לרכות, לעוצמה וליופי שמתחבא בעומק הרגעים הקטנים. הוא
              מציג את הסיפור של אישה אחת שמאיר דרך חיוך, שיחה והקשבה אמיתית. כאן
              נאספו זיכרונות, השראות ומילים שמזכירים לנו כמה אהבה יכולה לשנות עולם.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
              <div className="rounded-full border border-white/10 px-4 py-2">
                יופי בר קיימא
              </div>
              <div className="rounded-full border border-white/10 px-4 py-2">
                נשמה יצירתית
              </div>
              <div className="rounded-full border border-white/10 px-4 py-2">
                השראה יומיומית
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_80px_-30px_rgba(59,130,246,0.65)] backdrop-blur-md">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-tr from-rose-400 via-purple-500 to-sky-400 shadow-lg shadow-purple-500/40" />
              <h2 className="text-2xl font-medium text-white">הילה אמיתית</h2>
              <p className="text-sm leading-relaxed text-zinc-200/80">
                היופי נוסק מעבר למראה החיצוני. זו הדרך שבה היא נוגעת בחיים, מפיצה
                טוב ומזמינה אהבה אמיתית להתרחב בכל מקום אליו היא מגיעה.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {qualities.map((quality) => (
            <div
              key={quality.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px]"
            >
              <div
                className={`absolute inset-[-40%] z-0 bg-gradient-to-br ${quality.accent} opacity-0 transition duration-700 group-hover:opacity-60`}
              />
              <div className="relative z-10 h-full rounded-[calc(1.5rem-1px)] bg-[#111029]/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <h3 className="text-xl font-semibold text-white">
                  {quality.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-200/90">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold text-white">
              ציר זמן של אור
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/80">
              מיטב הרגעים שעיצבו את הדרך שלה. מקובץ חלומות קטן ועד לתנועה רחבה של
              נשים שצועדות יחד.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-md"
              >
                <span className="text-sm font-medium text-amber-200">
                  {item.year}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-200/80">
                  {item.text}
                </p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-white/0 to-white/0 opacity-0 transition-opacity duration-700 hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 backdrop-blur-xl lg:grid-cols-[1.6fr,1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              שיר יומי קצר
            </h2>
            <p className="text-base leading-relaxed text-zinc-200/80">
              בתוך היומיום היא נושמת את היופי כמו מנגינה. היא שוזרת מילים
              בפתקים קטנים, מניחה אותם בתיק, ומוצאת אותם בדיוק כשצריך חיוך.
              הנה מנגינה שנכתבה לה:
            </p>
            <p className="rounded-2xl border border-white/10 bg-[#0f0d23]/70 p-6 text-[15px] leading-loose text-zinc-200/90 shadow-[0_20px_60px_-40px_rgba(236,72,153,0.7)]">
              כמו שמש רכה אחרי גשם, כך את.{" "}
              <span className="text-rose-200">
                מילים שלך נוגעות בשקט ומעלות אהבה.
              </span>{" "}
              לצידך העולם יוצר עצמו מחדש. לרגעים את מחבקת, לרגעים את חולמת,
              ותמיד מזכירה לכולנו לנשום ולהתאהב בחיים.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-zinc-200/80">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                תפיסת יופי ייחודית
              </h3>
              <p className="mt-2">
                היא בוחרת לראות טוב בכל אדם, ומאמינה כי שיחה כנה משנה מציאות.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                ריקוד בתוך השגרה
              </h3>
              <p className="mt-2">
                בין עבודה וחברים, היא מניחה רגע של ריקוד חופשי, מזכירה לעצמה
                שהגוף ראוי לשמחה.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                השראה מתמשכת
              </h3>
              <p className="mt-2">
                ספרים, ציורים ופגישות בנות שעה עם אנשים אהובים - כל אלה מזינים
                את הלב היפה שלה.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">מילים עליה</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reflections.map((reflection) => (
              <figure
                key={reflection.author}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-zinc-200/80"
              >
                <p className="text-[15px] leading-loose">{reflection.quote}</p>
                <figcaption className="mt-6 text-xs font-medium text-zinc-300">
                  {reflection.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-white">
              גלריית רגעים יפים
            </h2>
            <span className="text-xs text-zinc-400">
              זיכרונות קטנים שנושאים בתוכם יופי גדול.
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_60%)] opacity-50" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-200/80">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-xs text-zinc-400/80">
          נכתב בהשראת אהבה יומיומית · יופי הוא אור שמאיר מבפנים
        </footer>
      </main>
    </div>
  );
}
