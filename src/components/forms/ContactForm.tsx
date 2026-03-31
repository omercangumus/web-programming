import React, { useState, type FormEvent } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'İsim boş bırakılamaz.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'İsim en az 2 karakter olmalıdır.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta boş bırakılamaz.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj boş bırakılamaz.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (validate()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); 
        
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Bana Ulaşın</h3>
      
      {submitSuccess && (
        <div className="mb-6">
          <Alert variant="success">
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
          </Alert>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="name"
            name="name"
            label="İsim Soyisim"
            placeholder="Adınız Soyadınız"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            disabled={isSubmitting}
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="E-posta Adresi"
            placeholder="ornek@email.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            disabled={isSubmitting}
          />
        </div>

        <Input
          id="subject"
          name="subject"
          label="Konu (Opsiyonel)"
          placeholder="Mesajınızın konusu"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          disabled={isSubmitting}
        />

        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Mesajınızı buraya yazın..."
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow resize-none`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
