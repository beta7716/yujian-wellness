// Utility: build a text_to_image URL with URL-encoded prompt.
const API_BASE = "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image";

export type ImageSize =
  | "square_hd"
  | "square"
  | "portrait_4_3"
  | "portrait_16_9"
  | "landscape_4_3"
  | "landscape_16_9";

export function img(prompt: string, size: ImageSize = "landscape_16_9"): string {
  return `${API_BASE}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(value: number): string {
  return `¥${value.toLocaleString("zh-CN")}`;
}
