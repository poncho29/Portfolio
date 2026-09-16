'use client';

import { useEffect, useState } from 'react';

import { MapPin } from 'lucide-react';

import { Alert, AlertDescription, Button, Card, Input, Label, Textarea } from '@/components/ui';
import { SectionHeading, SocialLinks } from '@/components/common';

import { IContactFormData, IContactFormErrors } from '@/interfaces';
import { sendContactForm } from '@/actions';

import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';

interface Props {
  lang: Locale;
}

export const ContactFormSection = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  const [formData, setFormData] = useState<IContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<IContactFormErrors>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (submitSuccess || errors.submit) {
      setShowAlert(true);

      // 6s (not the previous 2s) gives assistive tech and human readers
      // enough time to perceive the message before it disappears.
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 6000)

      return () => clearTimeout(timer)
    }
  }, [submitSuccess, errors.submit])

  const validateField = (name: keyof IContactFormData, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : dict.contactForm.errors.nameRequired
      case 'email':
        return value.trim()
          ? (/\S+@\S+\.\S+/.test(value) ? '' : dict.contactForm.errors.emailInvalid)
          : dict.contactForm.errors.emailRequired
      case 'message':
        return value.trim() ? '' : dict.contactForm.errors.messageRequired
      default:
        return ''
    }
  }

  const validateForm = (): boolean => {
    const newErrors: IContactFormErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const error = validateField(key as keyof IContactFormData, formData[key as keyof IContactFormData])
      if (error) {
        newErrors[key as keyof IContactFormErrors] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    const error = validateField(name as keyof IContactFormData, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name as keyof IContactFormData, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setErrors({});

    if (validateForm()) {
      const response = await sendContactForm({ body: formData })

      if (!response.success) {
        setErrors({ ...errors, submit: dict.contactForm.errorMessage });
      } else {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="my-16 scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-brand/10 via-muted/30 to-transparent p-6 sm:p-8">
          <SectionHeading eyebrow={dict.sections.eyebrow.contact} heading={dict.sections.contact} />

          <p className="max-w-md text-muted-foreground">
            {dict.contactForm.contactIntro}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" focusable="false" className="h-4 w-4 shrink-0 text-brand" />
            <span>{dict.contactForm.contactLocation}</span>
          </div>

          <div className="mt-6">
            <SocialLinks linkedinLabel="LinkedIn" githubLabel="GitHub" className="-ml-2" />
          </div>
        </div>

        <Card className="p-6 sm:p-8">
          {/* Always-present live region: screen readers pick up updates to
              its content (the alert appearing/disappearing) without the
              container itself needing to mount/unmount. */}
          <div aria-live="polite" aria-atomic="true" className="empty:hidden">
            <div className="mb-4 space-y-3">
              {showAlert && submitSuccess && (
                <Alert className="border-brand/40 bg-brand/10 text-foreground">
                  <AlertDescription>{dict.contactForm.successMessage}</AlertDescription>
                </Alert>
              )}

              {showAlert && errors.submit && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.submit}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className='font-semibold'>{dict.contactForm.nameLabel}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={dict.contactForm.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className='font-semibold'>{dict.contactForm.emailLabel}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={dict.contactForm.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className='font-semibold'>{dict.contactForm.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={dict.contactForm.messagePlaceholder}
                className="min-h-[150px]"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? dict.contactForm.submittingButton : dict.contactForm.submitButton}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
