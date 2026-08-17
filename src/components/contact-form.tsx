"use client";

import { useId, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { sendContactEmail } from "@/app/actions/contact";

interface FormState {
  name: string;
  email: string;
  phone: string;
  pet: string;
  message: string;
  security: string;
}

const EMPTY: FormState = { name: "", email: "", phone: "", pet: "", message: "", security: "" };
const SECURITY_ANSWER = "7"; // "What is 3 + 4?"

export function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const baseId = useId();

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  function validate(v: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!v.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = "Enter a valid email address.";
    if (v.message.trim().length < 10) next.message = "Please add a little more detail (10+ characters).";
    if (v.security.trim() !== SECURITY_ANSWER) next.security = "Please answer the security question.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    startTransition(async () => {
      const result = await sendContactEmail(values);
      if (result.ok) {
        setSubmitted(true);
        setValues(EMPTY);
      } else {
        setSubmitError(result.error);
      }
    });
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-sky p-10 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-blue text-white shadow-[var(--shadow-blue)]">
          <Icon name="CheckCircle2" className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl tracking-tight text-navy">Message sent!</h3>
        <p className="mt-2 max-w-sm text-slate">
          Thank you for reaching out to Union Vet. Our team will get back to you shortly.
          For anything urgent, please call us right away.
        </p>
        <Cta onClick={() => setSubmitted(false)} variant="outline" size="md" icon="ArrowRight" className="mt-6">
          Send another message
        </Cta>
      </div>
    );
  }

  const fieldClass = (key: keyof FormState) =>
    errors[key] ? "border-red focus-visible:ring-red/40" : "";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-hairline bg-white p-7 shadow-[var(--shadow-card)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${baseId}-name`}>Full name *</Label>
          <Input id={`${baseId}-name`} value={values.name} onChange={set("name")} placeholder="Jane Doe" className={fieldClass("name")} aria-invalid={!!errors.name} autoComplete="name" />
          {errors.name && <FieldError>{errors.name}</FieldError>}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${baseId}-email`}>Email *</Label>
          <Input id={`${baseId}-email`} type="email" value={values.email} onChange={set("email")} placeholder="jane@email.com" className={fieldClass("email")} aria-invalid={!!errors.email} autoComplete="email" />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${baseId}-phone`}>Phone</Label>
          <Input id={`${baseId}-phone`} type="tel" value={values.phone} onChange={set("phone")} placeholder="(718) 000-0000" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${baseId}-pet`}>Pet&apos;s name</Label>
          <Input id={`${baseId}-pet`} value={values.pet} onChange={set("pet")} placeholder="Bella" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${baseId}-message`}>How can we help? *</Label>
        <Textarea id={`${baseId}-message`} value={values.message} onChange={set("message")} rows={5} placeholder="Tell us a little about your pet and what you need…" className={fieldClass("message")} aria-invalid={!!errors.message} />
        {errors.message && <FieldError>{errors.message}</FieldError>}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor={`${baseId}-security`}>Security question: what is 3 + 4? *</Label>
        <Input id={`${baseId}-security`} inputMode="numeric" value={values.security} onChange={set("security")} placeholder="Enter the number" className={`max-w-[12rem] ${fieldClass("security")}`} aria-invalid={!!errors.security} />
        {errors.security && <FieldError>{errors.security}</FieldError>}
      </div>

      {submitError && (
        <p className="mt-5 flex items-center gap-2 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-700">
          <Icon name="X" className="size-4 shrink-0" strokeWidth={3} />
          {submitError}
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Cta type="submit" variant="primary" size="lg" icon={isPending ? undefined : "ArrowRight"}>
          {isPending ? "Sending…" : "Send message"}
        </Cta>
        <p className="text-xs text-mutegray">
          We&apos;ll never share your details. For emergencies, please call us.
        </p>
      </div>
    </form>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-1.5 text-xs font-medium text-red">
      <Icon name="X" className="size-3.5" strokeWidth={3} />
      {children}
    </p>
  );
}
