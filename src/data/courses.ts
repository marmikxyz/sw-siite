export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  students: string;
  duration: string;
  price: string;
  originalPrice?: string;
  banner?: string;
  facultyName: string;
  facultyImage: string;
};

const F = {
  gagan: "https://selectionwayserver.hranker.com/faculty/Gagan%20Sir.png",
  radhika:
    "https://selectionwayserver.hranker.com/faculty/ChatGPT%20Image%20Jul%209,%202026,%2001_18_12%20PM%20(1).png",
  aman: "https://selectionwayserver.hranker.com/faculty/Copy%20of%20Copy%20of%20Untitled%20(12).png",
  varun: "https://selectionwayserver.hranker.com/faculty/Varun%20sir.png",
  balram: "https://selectionwayserver.hranker.com/faculty/Copy%20of%20Copy%20of%20Untitled%20(13).png",
  jeet: "https://selectionwayserver.hranker.com/faculty/Copy%20of%20Copy%20of%20Untitled%20(14).png",
  banking: "https://selectionwayserver.hranker.com/faculty/dfy9kw6-9eae5674-71b3-4bec-98a9-dd3ffaabadd8.png",
  harish: "https://selectionwayserver.hranker.com/faculty/Copy%20of%20Copy%20of%20Untitled%20(7).png",
  shubham: "https://selectionwayserver.hranker.com/faculty/Shubham%20Sir.png",
};

const B = "https://selectionwayserver.hranker.com/courses/banners/";

export const courses: Course[] = [
  { id: "6a4e376d5bac0ae4bab5a040", title: "Railway Foundation 6.0", category: "Railway", description: "RRB NTPC, Group D, ALP, JE, Technician Grade I & III, RPF Constable & SI, RRB Section Controller, RRB Paramedical (Non-Tech)", students: "5 Students", duration: "2 years", price: "₹799", originalPrice: "₹2999", banner: B + "1783519308781-railway_app_banner.png", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a4e35315bac0ae4bab52444", title: "Science special Foundation Batch", category: "Railway", description: "RRB NTPC, Group D, ALP, JE, Technician Grade I & III, RPF Constable & SI, RRB Section Controller, RRB Paramedical (Non-Tech)", students: "5 Students", duration: "2 years", price: "₹399", originalPrice: "₹1599", banner: B + "1783519274879-scince_special_app_banner_updated.png", facultyName: "Radhika Ma'am", facultyImage: F.radhika },
  { id: "6a462e62b927c1a84a8b7879", title: "Selection Batch - 10", category: "SSC Coaching", description: "Useful for SSC, Railways, Banking and other state exams", students: "5 Students", duration: "2 years", price: "₹1599", originalPrice: "₹4999", banner: B + "1782998901258-4_IMG_BANNER_APP_10.0.png", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a462e5db927c1a84a8b7858", title: "Maths Special - 10", category: "SSC Coaching", description: "For All Competitive Exams", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1782998940337-gagan_sir_app_banner_10.0.png", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a462e56b927c1a84a8b7852", title: "English Special - 10", category: "SSC Coaching", description: "Dedicated for SSC & Defense Exams. Useful for Banking & other Exams.", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1782998958566-aman_sir_app_banner_10.0.png", facultyName: "Aman Sir", facultyImage: F.aman },
  { id: "6a462e4eb927c1a84a8b784c", title: "GS Special - 10", category: "GS", description: "Helpful for SSC, Defence, Banking and other state exams.", students: "5 Students", duration: "2 years", price: "₹499", originalPrice: "₹1999", banner: B + "1782998979360-varun_sir_app_banner_10.0.png", facultyName: "Varun Awasthi", facultyImage: F.varun },
  { id: "6a462e48b927c1a84a8b7846", title: "Reasoning Special - 10", category: "SSC Coaching", description: "Useful for SSC, Defence, Banking & other state exams.", students: "5 Students", duration: "2 years", price: "₹499", originalPrice: "₹1999", banner: B + "1782999000282-balram_sir_app_banner_10.0.png", facultyName: "Balram Sir", facultyImage: F.balram },
  { id: "6a3fe6b8b927c1a84a453df2", title: "Maths संपूर्ण Batch 30 days", category: "SSC", description: "Dedicated for SSC CGL exam", students: "5 Students", duration: "3 months", price: "₹1999", banner: B + "1782585708067-1000379783.jpg", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a268ce8b927c1a84a018468", title: "SSC Special 5000 MCQ Batch", category: "GS", description: "Helpful for all SSC exams", students: "5 Students", duration: "1 year", price: "₹489", originalPrice: "₹1999", banner: B + "1781272200302-1000365154.png", facultyName: "Jeet Rana Sir", facultyImage: F.jeet },
  { id: "6a268a36b927c1a84afff936", title: "Selection Batch - 9", category: "SSC Coaching", description: "Useful for SSC, Railways, Banking and other state exams", students: "5 Students", duration: "2 years", price: "₹1599", banner: B + "1780919072441-Selection_Batch_9.0_app_banner.png", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a268a30b927c1a84afff930", title: "Maths Special - 9", category: "SSC Coaching", description: "For All Competitive Exams", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1780918935651-gagan_sir_app_banner_png_9.0.png", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a268a2bb927c1a84afff927", title: "English Special - 9", category: "SSC Coaching", description: "Dedicated for SSC & Defense Exams. Useful for Banking & other Exams.", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1780918918785-aman_sir_app_banner_9.0_png.png", facultyName: "Aman Sir", facultyImage: F.aman },
  { id: "6a268a23b927c1a84afff921", title: "GS Special - 9", category: "GS", description: "Helpful for SSC, Defence, Banking and other state exams.", students: "5 Students", duration: "2 years", price: "₹499", banner: B + "1780918901941-varun_sir_app_banner_9.0_png.png", facultyName: "Varun Awasthi", facultyImage: F.varun },
  { id: "6a268a1bb927c1a84afff91b", title: "Reasoning Special - 9", category: "SSC Coaching", description: "Useful for SSC, Defence, Banking & other state exams.", students: "5 Students", duration: "2 years", price: "₹499", originalPrice: "₹1999", banner: B + "1780918884572-balram_sir_app_banner.png", facultyName: "Balram Sir", facultyImage: F.balram },
  { id: "6a1fe6bbb927c1a84abc606f", title: "CGL Rapid Batch", category: "SSC", description: "Helpful for all SSC exams", students: "5 Students", duration: "1 year", price: "₹699", originalPrice: "₹1599", banner: B + "1781272290562-1000365153.png", facultyName: "Jeet Rana Sir", facultyImage: F.jeet },
  { id: "6a1fe6b8b927c1a84abc6051", title: "Banking Special Maths 1.0", category: "Banking", description: "Helpful for RRB, IBPS, SBI, RBI (Pre + Mains)", students: "5 Students", duration: "1 year", price: "₹999", originalPrice: "₹3999", facultyName: "Banking Team", facultyImage: F.banking },
  { id: "6a1fe6b6b927c1a84abc604b", title: "English Special VOD 3.0", category: "SSC", description: "English special VOD batch", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1781618105489-eNGLISH_3.0.png", facultyName: "Aman Sir", facultyImage: F.aman },
  { id: "6a1fe6b3b927c1a84abc6046", title: "Maths Special VOD 5.0", category: "SSC", description: "Maths special VOD batch", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1781618130322-MATHS_5.0.png", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a1fe6acb927c1a84abc603d", title: "Selection Batch VOD 3.0", category: "SSC", description: "Helpful for all SSC and other competitive exams", students: "5 Students", duration: "2 years", price: "₹1599", originalPrice: "₹3999", banner: B + "1781618150772-photo_2026-06-16_19-14-03.jpg", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "6a1d6b27b927c1a84a934528", title: "Railway Foundation Batch - 5", category: "Railway", description: "RRB NTPC, Group D, ALP, JE, Technician Grade I & III, RPF Constable & SI, RRB Section Controller, RRB Paramedical (Non-Tech)", students: "5 Students", duration: "2 years", price: "₹999", originalPrice: "₹2999", banner: B + "1780559293421-1000358287.jpg", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "69ad2434a2b1ae0433673e61", title: "आरम्भ Batch", category: "SSC", description: "For SSC Exams 2025–26, from basics to advanced.", students: "5 Students", duration: "1 year", price: "₹999", banner: B + "1781678451762-1000371320.jpg", facultyName: "Gagan Pratap Sir", facultyImage: F.gagan },
  { id: "698487d5fdd21a8a2d1a5270", title: "GS संपूर्ण Batch", category: "SSC Coaching", description: "Complete GS for SSC", students: "5 Students", duration: "1 year", price: "₹2999", banner: B + "1772698858563-courses_banners_1770294764728-shubham_sir..png", facultyName: "Shubham Gupta Sir", facultyImage: F.shubham },
  { id: "69b3caab9d14466cd0cb01f6", title: "BSE for ALP CBT 2", category: "Railway", description: "Dedicated batch for ALP CBT 2", students: "5 Students", duration: "1 year", price: "₹199", originalPrice: "₹999", facultyName: "Harish Sir", facultyImage: F.harish },
];