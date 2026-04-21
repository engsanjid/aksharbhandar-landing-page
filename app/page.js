"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const scrollToOrder = () => {
    document.getElementById("order-form").scrollIntoView({ behavior: "smooth" });
  };

  const [toast, setToast] = useState(null);
  const showToast = () => {
    setToast({ leaving: false });
    setTimeout(() => setToast(t => t ? { ...t, leaving: true } : null), 3200);
    setTimeout(() => setToast(null), 3600);
  };

  return (
    <main style={{ background: "#0a0a0f", color: "#fff", minHeight: "100vh", fontFamily: "'Hind Siliguri', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Hind Siliguri',sans-serif}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}
        .pulse{animation:pulse 2s ease-in-out infinite}
        @keyframes glow{0%,100%{box-shadow:0 0 10px rgba(250,204,21,.3)}50%{box-shadow:0 0 24px rgba(250,204,21,.7)}}
        .glow{animation:glow 2s ease-in-out infinite}
        @keyframes strikethrough{0%{width:0}100%{width:100%}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes popIn{0%{transform:scale(0.5);opacity:0}70%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes slideDown{from{transform:translateX(-50%) translateY(-80px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}
        @keyframes slideUp{from{transform:translateX(-50%) translateY(0);opacity:1}to{transform:translateX(-50%) translateY(-80px);opacity:0}}
        @keyframes timerBar{from{width:100%}to{width:0%}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .toast-in{animation:slideDown .4s cubic-bezier(.34,1.56,.64,1) forwards}
        .toast-out{animation:slideUp .3s ease forwards}
      `}</style>

      {/* ── TOAST ── */}
      {toast && (
        <div className={toast.leaving ? "toast-out" : "toast-in"} style={{
          position: "fixed", top: "20px", left: "50%",
          transform: "translateX(-50%)", zIndex: 9999,
          background: "#13131f", border: "1px solid #facc15",
          borderRadius: "16px", padding: "16px 20px",
          display: "flex", alignItems: "center", gap: "12px",
          boxShadow: "0 8px 32px rgba(250,204,21,.25)",
          minWidth: "300px", maxWidth: "90vw",
        }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(250,204,21,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>✅</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#facc15", margin: 0 }}>অর্ডার সফল হয়েছে!</p>
            <p style={{ fontSize: "12px", color: "#9ca3af", margin: "3px 0 8px" }}>আমরা শীঘ্রই যোগাযোগ করব 📞</p>
            <div style={{ height: "3px", background: "rgba(250,204,21,.2)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "100%", background: "#facc15", borderRadius: "2px", animation: "timerBar 3.2s linear forwards" }} />
            </div>
          </div>
          <button onClick={() => setToast(null)} style={{ background: "none", border: "none", color: "#6b7280", fontSize: "18px", cursor: "pointer", flexShrink: 0, padding: "4px" }}>✕</button>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(160deg,#0f0f20 0%,#0a0a0f 100%)", padding: "60px 24px 52px", textAlign: "center", borderBottom: "1px solid rgba(250,204,21,.15)" }}>
        <span style={{ display: "inline-block", background: "rgba(250,204,21,.12)", color: "#facc15", fontSize: "16px", fontWeight: 700, padding: "5px 16px", borderRadius: "20px", border: "1px solid rgba(250,204,21,.3)", letterSpacing: "1px" }}>
           🔥 ​ বেস্ট  সেলিং জিওপলিটিক্স কম্বো ৬৫% ডিসকাউন্টে🔥
        </span>
        <h1 style={{ fontSize: "clamp(30px,8vw,46px)", fontWeight: 700, lineHeight: 1.3, margin: "20px 0 12px" }}>
          বিশ্ব রাজনীতির রহস্য উন্মোচন করুন
        </h1>
        <HeroPriceReveal />
        <p style={{ fontSize: "16px", color: "#9ca3af", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.8 }}>
          টিম মার্শালের বিশ্বখ্যাত <strong style={{ color: "#e5e7eb" }}>'জিওগ্রাফি ট্রিলজি'</strong> — এখন আপনার হাতের মুঠোয়। পাহাড়, নদী আর সমুদ্র কীভাবে পৃথিবীর ভাগ্য গড়ে দেয়, তা জানুন এই ৩টি মাস্টারপিস বইয়ে।
        </p>

        <div style={{
          width: "95%", maxWidth: "700px", margin: "0 auto 20px auto",
          position: "relative", aspectRatio: "16/9", borderRadius: "16px",
          overflow: "hidden", border: "2px solid rgba(250,204,21,0.3)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(250,204,21,0.2)",
          cursor: "pointer", transition: "transform 0.5s ease"
        }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Image
            src="/image/WhatsApp Image 2026-04-20 at 11.38.01 PM.jpeg"
            alt="বইয়ের কভার ডিজাইন" fill style={{ objectFit: "cover" }} priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.9), transparent 60%)' }}></div>
        </div>

        <button className="pulse glow" onClick={scrollToOrder} style={{ background: "#facc15", color: "#111", fontWeight: 700, fontSize: "17px", padding: "16px 36px", borderRadius: "50px", cursor: "pointer", border: "none" }}>
          🛒 অর্ডার করতে চাই
        </button>
        <p style={{ marginTop: "14px", fontSize: "13px", color: "#6b7280" }}>📞 01851937465 </p>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ background: "#facc15", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "17px", fontWeight: 600, color: "#111", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
          "কেন কিছু দেশ শক্তিশালী আর কিছু দেশ চিরকাল যুদ্ধে লিপ্ত? উত্তর লুকিয়ে আছে পৃথিবীর মানচিত্রে।"
        </p>
      </section>

      {/* ── BOOKS ── */}
      <section style={{ background: "#0f0f18", padding: "56px 24px" }}>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#facc15", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>৩টি মাস্টারপিস</p>
          <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>প্যাকেজে যা যা থাকছে</h2>
          <BookList />
        </div>
      </section>

      {/* ── TRUST ── */}
      <section style={{ background: "#13131f", padding: "56px 24px" }}>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#facc15", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>কেন আমরা?</p>
          <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>আমাদের কাছ থেকে অর্ডার করুন</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {[
              { icon: "💰", title: "সেরা অফার মূল্য", sub: "৩টি বই মাত্র ৪৯০ টাকায়" },
              { icon: "📦", title: "উন্নত বাঁধাই", sub: "আরামদায়ক পড়ার অভিজ্ঞতা" },
              { icon: "🚚", title: "দ্রুত ডেলিভারি", sub: "সারাদেশে হোম ডেলিভারি" },
              { icon: "✅", title: "বিশ্বস্ত স্টোর", sub: "হাজারো সন্তুষ্ট পাঠক" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0f0f18", border: "1px solid rgba(250,204,21,.12)", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#facc15", marginBottom: "6px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOTLINE ── */}
      <section style={{ background: "#0a0a0f", padding: "40px 24px", textAlign: "center", borderTop: "1px solid rgba(250,204,21,.08)" }}>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "#facc15", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>সরাসরি যোগাযোগ করুন</p>
          <a href="tel:+8801851937465" style={{ textDecoration: "none" }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(250,204,21,.12), rgba(250,204,21,.06))",
              border: "1px solid rgba(250,204,21,.35)", borderRadius: "20px",
              padding: "24px 28px", display: "flex", alignItems: "center",
              justifyContent: "center", gap: "16px", cursor: "pointer", transition: "all .3s",
            }}
              onMouseOver={e => e.currentTarget.style.background = "rgba(250,204,21,.18)"}
              onMouseOut={e => e.currentTarget.style.background = "linear-gradient(135deg, rgba(250,204,21,.12), rgba(250,204,21,.06))"}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#facc15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0, boxShadow: "0 0 20px rgba(250,204,21,.4)" }}>📞</div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 4px" }}>হটলাইন নম্বর</p>
                <p style={{ fontSize: "24px", fontWeight: 700, color: "#facc15", margin: 0, letterSpacing: "1px" }}>01851937465</p>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "4px 0 0" }}>ট্যাপ করুন · সরাসরি কল করুন</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#13131f", padding: "56px 24px" }}>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#facc15", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>সাধারণ প্রশ্ন</p>
          <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: 700, marginBottom: "32px" }}>আপনার প্রশ্নের উত্তর</h2>
          <FaqSection />
        </div>
      </section>

      {/* ── PRICE ── */}
      <section style={{ background: "#facc15", padding: "56px 24px", textAlign: "center" }}>
        <PriceReveal />
        <button className="pulse" onClick={scrollToOrder} style={{ background: "#111", color: "#facc15", fontWeight: 700, fontSize: "16px", padding: "15px 32px", borderRadius: "50px", cursor: "pointer", border: "none", marginTop: "28px" }}>
          🛒 এখনই অর্ডার করুন
        </button>
      </section>

      {/* ── ORDER FORM ── */}
      <section id="order-form" style={{ background: "#0f0f18", padding: "56px 24px" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <div style={{ background: "#13131f", border: "1px solid rgba(250,204,21,.25)", borderRadius: "20px", padding: "32px" }}>
            <p style={{ textAlign: "center", fontSize: "12px", color: "#facc15", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>অর্ডার করুন</p>
            <h2 style={{ textAlign: "center", fontSize: "22px", fontWeight: 700, marginBottom: "28px" }}>অর্ডার ফর্ম পূরণ করুন</h2>
            <OrderForm showToast={showToast} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#080810", textAlign: "center", padding: "28px 24px", borderTop: "1px solid rgba(250,204,21,.08)" }}>
        <p style={{ fontSize: "14px", color: "#facc15", fontWeight: 600, marginBottom: "6px" }}>📞 01851937465</p>
        <p style={{ fontSize: "13px", color: "#4b5563" }}>© {new Date().getFullYear()} Aksharbhandar · সর্বস্বত্ব সংরক্ষিত</p>
      </footer>
    </main>
  );
}

/* ── Hero Price Reveal ── */
function HeroPriceReveal() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);
  return (
    <div style={{ marginBottom: "16px", minHeight: "90px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}>
      <div style={{ position: "relative", display: "inline-block", height: "28px" }}>
        <p style={{ fontSize: "18px", color: step >= 1 ? "#9ca3af" : "transparent", fontWeight: 500, transition: "color .4s", margin: 0 }}>
          রেগুলার প্রাইস: ১,৪০০ টাকা
        </p>
        {step >= 2 && (
          <span style={{ position: "absolute", left: 0, top: "50%", height: "3px", background: "#ef4444", borderRadius: "2px", animation: "strikethrough .5s ease forwards" }} />
        )}
      </div>
      {step >= 3 ? (
        <h2 style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 700, color: "#facc15", margin: 0, animation: "popIn .5s cubic-bezier(.36,.07,.19,.97) forwards" }}>
          মাত্র ৪৯০ টাকায়! 🎉
        </h2>
      ) : (
        <h2 style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 700, color: "transparent", margin: 0 }}>
          মাত্র ৪৯০ টাকায়!
        </h2>
      )}
    </div>
  );
}

/* ── Price Section Reveal (scroll triggered) ── */
function PriceReveal() {
  const [step, setStep] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === 0) {
          const t1 = setTimeout(() => setStep(1), 100);
          const t2 = setTimeout(() => setStep(2), 600);
          const t3 = setTimeout(() => setStep(3), 1100);
          return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [step]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <p style={{ fontSize: "22px", fontWeight: 700, color: step >= 1 ? "#78350f" : "transparent", transition: "color .4s ease", margin: 0, animation: step >= 1 ? "fadeInUp .4s ease forwards" : "none" }}>
          রেগুলার প্রাইস: ১,৪০০ টাকা
        </p>
        {step >= 2 && (
          <span style={{ position: "absolute", left: 0, top: "52%", height: "4px", background: "#7f1d1d", borderRadius: "2px", display: "block", animation: "strikethrough .4s ease forwards" }} />
        )}
      </div>
      {step >= 2 && (
        <span style={{ display: "inline-block", background: "#7f1d1d", color: "#fef2f2", fontSize: "13px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px", animation: "fadeInUp .3s ease forwards" }}>
          🔥 বিশেষ ছাড়!
        </span>
      )}
      <div style={{ minHeight: "80px", display: "flex", alignItems: "center" }}>
        {step >= 3 ? (
          <p style={{ fontSize: "clamp(52px,10vw,80px)", fontWeight: 900, color: "#111", lineHeight: 1, margin: 0, animation: "popIn .5s cubic-bezier(.36,.07,.19,.97) forwards" }}>
            ৪৯০ টাকা
          </p>
        ) : (
          <p style={{ fontSize: "clamp(52px,10vw,80px)", fontWeight: 900, color: "transparent", lineHeight: 1, margin: 0 }}>৪৯০ টাকা</p>
        )}
      </div>
      <p style={{ fontSize: "14px", color: "#92400e", fontWeight: 600, margin: 0 }}>ধামাকা অফার — স্টক সীমিত!</p>
    </div>
  );
}

/* ── Book Gallery Modal ── */
function BookList() {
  const [modal, setModal] = useState(null);
  const books = [
    {
      num: "০১", title: "প্রিজনার্স অব জিওগ্রাফি",
      desc: "একটি দেশের ভৌগোলিক সীমানা কীভাবে তার ভাগ্য, অর্থনীতি ও আন্তর্জাতিক সম্পর্ক নির্ধারণ করে দেয় — ইতিহাসের নেপথ্যে প্রকৃতির ভূমিকা বুঝুন।",
      imgs: ["/book/1 প্রিজনার্স আব জিওগ্রাফি/IMG_0999.png",
         "/book/1 প্রিজনার্স আব জিওগ্রাফি/img2.jpeg",
          "/book/1 প্রিজনার্স আব জিওগ্রাফি/img3.jpeg",
           "/book/1 প্রিজনার্স আব জিওগ্রাফি/img4.jpeg"],
    },
    {
      num: "০২", title: "দ্য পাওয়ার অব জিওগ্রাফি",
      desc: "অস্ট্রেলিয়া থেকে ইরান — ১০টি কৌশলগত অঞ্চলের ভবিষ্যৎ বিশ্লেষণ। আগামীর বিশ্ব রাজনীতি কোন দিকে মোড় নেবে, তার অনবদ্য গাইড।",
      imgs: ["/book/2 দ্যা পাওয়ার আব জিওগ্রাফি/IMG_0998.png",
         "/book/2 দ্যা পাওয়ার আব জিওগ্রাফি/img2.jpeg",
          "/book/2 দ্যা পাওয়ার আব জিওগ্রাফি/img3.jpeg",
           "/book/2 দ্যা পাওয়ার আব জিওগ্রাফি/img4.jpeg"],
    },
    {
      num: "০৩", title: "দ্য ফিউচার অব জিওগ্রাফি",
      desc: "মহাকাশ দখলের প্রতিযোগিতা ও আগামীর 'স্পেস পলিটিক্স' নিয়ে টিম মার্শালের লেটেস্ট মাস্টারপিস।",
      imgs: ["/book/ফিউচার অব জিওগ্রাফি/IMG_0997.png",
         "/book/ফিউচার অব জিওগ্রাফি/img2.jpeg",
          "/book/ফিউচার অব জিওগ্রাফি/img3.jpeg",
           "/book/ফিউচার অব জিওগ্রাফি/img4.jpeg"],
    },
  ];
  const closeModal = () => setModal(null);
  const prevImg = () => setModal(m => ({ ...m, imgIndex: (m.imgIndex - 1 + books[m.bookIndex].imgs.length) % books[m.bookIndex].imgs.length }));
  const nextImg = () => setModal(m => ({ ...m, imgIndex: (m.imgIndex + 1) % books[m.bookIndex].imgs.length }));
  return (
    <>
      {books.map((book, bi) => (
        <div key={book.num} style={{ background: "#13131f", border: "1px solid rgba(250,204,21,.13)", borderRadius: "16px", padding: "22px", marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "18px" }}>
            <div style={{ minWidth: "50px", height: "50px", background: "rgba(250,204,21,.1)", border: "1px solid rgba(250,204,21,.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 700, color: "#facc15", flexShrink: 0 }}>{book.num}</div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "16px", color: "#facc15", marginBottom: "8px" }}>{book.title}</p>
              <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.75 }}>{book.desc}</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
            {book.imgs.map((img, ii) => (
              <div key={ii} onClick={() => setModal({ bookIndex: bi, imgIndex: ii })} style={{ position: "relative", aspectRatio: "3/4", borderRadius: "8px", overflow: "hidden", cursor: "pointer", border: "1px solid rgba(250,204,21,.15)" }}>
                <Image src={img} alt={`${book.title} ছবি ${ii + 1}`} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity .2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <span style={{ fontSize: "22px" }}>🔍</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "10px", textAlign: "right" }}>ছবিতে ক্লিক করে বড় করে দেখুন 👆</p>
        </div>
      ))}
      {modal !== null && (
        <div onClick={closeModal} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: "480px", borderRadius: "16px", overflow: "hidden", background: "#13131f", border: "1px solid rgba(250,204,21,.2)" }}>
            <button onClick={closeModal} style={{ position: "absolute", top: "12px", right: "12px", zIndex: 10, background: "rgba(0,0,0,.6)", border: "none", color: "#fff", fontSize: "20px", width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer" }}>✕</button>
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
              <Image src={books[modal.bookIndex].imgs[modal.imgIndex]} alt="বইয়ের ছবি" fill style={{ objectFit: "contain" }} />
            </div>
            <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button onClick={prevImg} style={{ background: "rgba(250,204,21,.15)", border: "1px solid rgba(250,204,21,.3)", color: "#facc15", fontSize: "18px", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}>‹</button>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#facc15", margin: 0 }}>{books[modal.bookIndex].title}</p>
                <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{modal.imgIndex + 1} / {books[modal.bookIndex].imgs.length}</p>
              </div>
              <button onClick={nextImg} style={{ background: "rgba(250,204,21,.15)", border: "1px solid rgba(250,204,21,.3)", color: "#facc15", fontSize: "18px", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}>›</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── FAQ ── */
function FaqSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "ডেলিভারি কতদিনে পাবো?", a: "ঢাকার ভেতরে 1-2 কার্যদিবস এবং ঢাকার বাইরে 2-3 কার্যদিবসের মধ্যে ডেলিভারি দেওয়া হয়।" },
    { q: "পেমেন্ট কীভাবে করব?", a: "সম্পূর্ণ ক্যাশ অন ডেলিভারি। বই হাতে পেয়ে টাকা দিন। কোনো আগাম পেমেন্ট নেই।" },
    { q: "বইগুলো কি বাংলায়?", a: "হ্যাঁ, তিনটি বইই বাংলা অনুবাদে পাওয়া যাচ্ছে। সহজ ও প্রাঞ্জল ভাষায় অনুবাদ করা হয়েছে।" },
    { q: "অর্ডার বাতিল করা যাবে?", a: "অর্ডার করার ২৪ ঘণ্টার মধ্যে আমাদের নম্বরে কল করে অর্ডার বাতিল করতে পারবেন।" },
    { q: "বইয়ের মান কেমন?", a: "উন্নত মানের কাগজ ও বাঁধাই ব্যবহার করা হয়েছে। পড়ার সময় যাতে আরামদায়ক অনুভূতি হয় তা নিশ্চিত করা হয়েছে।" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ background: "#0f0f18", border: `1px solid ${open === i ? "rgba(250,204,21,.4)" : "rgba(250,204,21,.1)"}`, borderRadius: "14px", overflow: "hidden", cursor: "pointer" }} onClick={() => setOpen(open === i ? null : i)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#e5e7eb" }}>{faq.q}</p>
            <span style={{ color: "#facc15", fontSize: "22px", fontWeight: 700, flexShrink: 0, marginLeft: "12px" }}>{open === i ? "−" : "+"}</span>
          </div>
          {open === i && (
            <div style={{ padding: "0 20px 18px" }}>
              <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Order Form ── */
function OrderForm({ showToast }) {
  const [shipping, setShipping] = useState("outside");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const bookPrice = 490;
  const shippingCost = shipping === "outside" ? 100 : 50;
  const total = bookPrice * qty + shippingCost;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const shippingLabel = shipping === "outside" ? "ঢাকার বাইরে (১০০ টাকা)" : "ঢাকার ভিতরে (৫০ টাকা)";
    const invoiceName = "বেস্ট সেলিং জিওপলিটিক্স কম্বো";
    const orderNo = "ORD-" + Date.now().toString().slice(-6);

    let ipAddress = "";
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      ipAddress = ipData.ip;
    } catch {}

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwfSTmz0HTIH7hwBKHFTy3Ufpp56KOo6UOmQCS6Gx_yAIbGVfsgvCmeBGC5tai5EfEI/exec", {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: new Date().toLocaleString("bn-BD"), orderNo, name, phone, qty, price: total, address, invoice: invoiceName, ip: ipAddress }),
      });
    } catch (err) { console.error("Sheet error:", err); }

    setLoading(false);
    showToast();
    e.target.reset();
    setShipping("outside");
    setQty(1);
  };

  const inputStyle = {
    width: "100%", background: "#0a0a0f",
    border: "1px solid #374151", borderRadius: "10px",
    padding: "13px 14px", color: "#fff", fontSize: "15px",
    outline: "none", marginTop: "8px",
  };
  const labelStyle = { fontSize: "13px", color: "#9ca3af", fontWeight: 600, display: "block" };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <label style={labelStyle}>আপনার নাম *</label>
        <input required name="name" placeholder="পূর্ণ নাম লিখুন" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>মোবাইল নম্বর *</label>
        <input required type="tel" name="phone" placeholder="01XXXXXXXXX" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>সম্পূর্ণ ঠিকানা *</label>
        <textarea required rows={3} name="address" placeholder="বাড়ি নং, রাস্তা, এলাকা, জেলা" style={{ ...inputStyle, resize: "none" }} />
      </div>

      {/* ── QUANTITY SELECTOR ── */}
      <div>
        <label style={labelStyle}>কতটি কম্বো নিতে চান?</label>
        <div style={{ display: "flex", alignItems: "center", marginTop: "8px", background: "#0a0a0f", border: "1px solid #374151", borderRadius: "10px", overflow: "hidden" }}>
          <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))}
            style={{ width: "52px", height: "50px", background: qty === 1 ? "#0a0a0f" : "rgba(250,204,21,.1)", border: "none", color: qty === 1 ? "#4b5563" : "#facc15", fontSize: "22px", cursor: qty === 1 ? "not-allowed" : "pointer", fontWeight: 700, transition: "all .2s" }}>
            −
          </button>
          <div style={{ flex: 1, textAlign: "center", fontSize: "18px", fontWeight: 700, color: "#facc15" }}>
            {qty}
            <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 400, display: "block", lineHeight: 1.2 }}>বেস্ট সেলিং জিওপলিটিক্স কম্বো</span>
          </div>
          <button type="button" onClick={() => setQty(q => q + 1)}
            style={{ width: "52px", height: "50px", background: "rgba(250,204,21,.1)", border: "none", color: "#facc15", fontSize: "22px", cursor: "pointer", fontWeight: 700, transition: "all .2s" }}>
            +
          </button>
        </div>
      </div>

      {/* ── SHIPPING ── */}
      <div>
        <label style={labelStyle}>শিপিং এলাকা *</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
          {[
            { value: "outside", label: "ঢাকার বাইরে", cost: "১০০ টাকা" },
            { value: "inside", label: "ঢাকার ভিতরে", cost: "৫০ টাকা" },
          ].map((option) => (
            <label key={option.value} onClick={() => setShipping(option.value)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: shipping === option.value ? "rgba(250,204,21,.08)" : "#0a0a0f", border: shipping === option.value ? "1px solid rgba(250,204,21,.5)" : "1px solid #374151", borderRadius: "10px", padding: "13px 16px", cursor: "pointer", transition: "all .2s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: shipping === option.value ? "5px solid #facc15" : "2px solid #374151", flexShrink: 0, transition: "all .2s" }} />
                <span style={{ fontSize: "14px", color: "#e5e7eb", fontWeight: 600 }}>{option.label}</span>
              </div>
              <span style={{ fontSize: "14px", color: "#facc15", fontWeight: 700 }}>{option.cost}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ── ORDER SUMMARY ── */}
      <div style={{ background: "#0a0a0f", border: "1px solid #1f2937", borderRadius: "14px", padding: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#9ca3af", marginBottom: "8px" }}>
          <span>বেস্ট সেলিং জিওপলিটিক্স কম্বো × {qty}</span>
          <span>{bookPrice * qty} টাকা</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#9ca3af", marginBottom: "12px" }}>
          <span>ডেলিভারি চার্জ</span>
          <span>{shippingCost} টাকা</span>
        </div>
        <div style={{ borderTop: "1px solid #1f2937", paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: 700, color: "#facc15" }}>
          <span>মোট</span><span>{total} টাকা</span>
        </div>
        <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>💵 ক্যাশ অন ডেলিভারি</p>
      </div>

      <button type="submit" disabled={loading} style={{
        width: "100%", background: loading ? "#a38800" : "#facc15",
        color: "#111", fontWeight: 700, fontSize: "16px",
        padding: "18px", borderRadius: "14px",
        cursor: loading ? "not-allowed" : "pointer",
        border: "none", display: "flex", alignItems: "center",
        justifyContent: "center", gap: "10px", transition: "background .2s",
      }}>
        {loading ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
              <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="3" strokeDasharray="40 20" />
            </svg>
            অর্ডার পাঠানো হচ্ছে...
          </>
        ) : (
          <>✅ অর্ডার নিশ্চিত করুন — {total} টাকা</>
        )}
      </button>
    </form>
  );
}