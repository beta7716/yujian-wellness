import { useState } from "react";
import { useInquiryStore, type InquiryTopic } from "@/store/useInquiryStore";
import { Check, Loader2, Send } from "lucide-react";
import { useT } from "@/i18n/language-hooks";

interface InquiryFormProps {
  compact?: boolean;
  defaultTopic?: InquiryTopic;
}

export default function InquiryForm({ compact = false, defaultTopic }: InquiryFormProps) {
  const t = useT();
  const { draft, setDraft, submit, lastSubmittedId, reset } = useInquiryStore();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (defaultTopic && draft.topic !== defaultTopic && !draft.message) {
    setDraft({ topic: defaultTopic });
  }

  const topicOptions: { value: InquiryTopic; label: string }[] = [
    { value: "route", label: t.form.topics.route },
    { value: "checkup", label: t.form.topics.checkup },
    { value: "tcm", label: t.form.topics.tcm },
    { value: "other", label: t.form.topics.other },
  ];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.name || !draft.phone) return;
    setSubmitting(true);
    await submit();
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div
        className={`relative ${compact ? "p-8" : "p-12"} border border-ink-100 bg-smoke-50`}
      >
        <div className="flex items-center gap-3 text-bamboo">
          <Check size={20} />
          <span className="font-serif text-xl text-ink-800">{t.form.successTitle}</span>
        </div>
        <p className="mt-4 text-ink-500 text-sm leading-relaxed">
          {t.form.successBody(lastSubmittedId ?? "")}
        </p>
        <button
          onClick={() => {
            setDone(false);
            reset();
          }}
          className="mt-6 text-[11px] tracking-[0.3em] uppercase text-cinnabar hover:underline"
        >
          {t.form.anotherBtn}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`relative ${compact ? "p-6 md:p-8" : "p-8 md:p-12"} border border-ink-100 bg-smoke-50`}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={t.form.name} value={draft.name} onChange={(v) => setDraft({ name: v })} placeholder="—" required />
        <Field label={t.form.phone} value={draft.phone} onChange={(v) => setDraft({ phone: v })} placeholder="—" type="tel" required />
        <Field
          label={t.form.email}
          value={draft.email}
          onChange={(v) => setDraft({ email: v })}
          placeholder="—"
          type="email"
        />
        <div>
          <label className="block text-[11px] tracking-[0.3em] uppercase text-ink-400 mb-2">
            {t.form.topic}
          </label>
          <div className="flex flex-wrap gap-2">
            {topicOptions.map((opt) => (
              <button
                type="button"
                key={opt.value}
                onClick={() => setDraft({ topic: opt.value })}
                className={`text-xs px-3 py-2 border transition ${
                  draft.topic === opt.value
                    ? "border-ink-800 bg-ink-800 text-smoke-50"
                    : "border-ink-200 text-ink-600 hover:border-ink-800"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-[11px] tracking-[0.3em] uppercase text-ink-400 mb-2">
            {t.form.note}
          </label>
          <textarea
            value={draft.message}
            onChange={(e) => setDraft({ message: e.target.value })}
            placeholder={t.form.notePh}
            rows={compact ? 3 : 4}
            className="field resize-none"
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-ink-400 max-w-sm">{t.form.consent}</p>
        <button
          disabled={submitting}
          type="submit"
          className="group inline-flex items-center gap-3 bg-ink-800 text-smoke-50 px-6 py-3 text-sm tracking-widest hover:bg-cinnabar transition-colors disabled:opacity-60"
        >
          {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          <span>{submitting ? t.cta.sending : t.cta.submit}</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.3em] uppercase text-ink-400 mb-2">
        {label}{required ? " *" : ""}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="field"
        required={required}
      />
    </div>
  );
}
