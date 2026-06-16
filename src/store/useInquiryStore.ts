import { create } from "zustand";

export type InquiryTopic = "route" | "checkup" | "tcm" | "other";

export interface InquiryDraft {
  name: string;
  phone: string;
  email: string;
  topic: InquiryTopic;
  message: string;
}

interface InquiryState {
  draft: InquiryDraft;
  lastSubmittedId: string | null;
  setDraft: (patch: Partial<InquiryDraft>) => void;
  reset: () => void;
  submit: () => Promise<string>;
}

const emptyDraft: InquiryDraft = {
  name: "",
  phone: "",
  email: "",
  topic: "route",
  message: "",
};

export const useInquiryStore = create<InquiryState>((set, get) => ({
  draft: { ...emptyDraft },
  lastSubmittedId: null,
  setDraft: (patch) => set({ draft: { ...get().draft, ...patch } }),
  reset: () => set({ draft: { ...emptyDraft }, lastSubmittedId: null }),
  submit: async () => {
    const { draft } = get();
    // Stand-in for backend POST /api/inquiry
    const id = `INQ-${Date.now().toString(36).toUpperCase()}`;
    console.info("[inquiry submitted]", { id, ...draft });
    set({ lastSubmittedId: id, draft: { ...emptyDraft } });
    return id;
  },
}));
