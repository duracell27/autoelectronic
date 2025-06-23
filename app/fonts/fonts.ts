// fonts/fonts.ts
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"], // Додаємо cyrillic для української мови
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", '800', '900'], // Визначаємо потрібні ваги
  display: "swap",
});