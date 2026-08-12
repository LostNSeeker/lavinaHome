import React, { useState, useEffect } from 'react';
import { X, User as UserIcon, Lock, Mail, CheckCircle, LogOut, Package, ArrowRight, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';
import { authService } from '../services/authService';
import type { User } from '../types';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<'signin' | 'register'>('signin');
  const [currentUser, setCurrentUser] = useState<User | null>(authService.getCurrentUser());
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('Denmark');
  const [postalCode, setPostalCode] = useState('');

  useEffect(() => {
    const unsub = authService.subscribe((user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  if (!isOpen) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const res = await authService.login(email, password);
    setLoading(false);

    if (res.success) {
      setSuccessMessage(t('auth.welcomeBackMsg'));
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } else {
      setErrorMessage(res.message || t('auth.invalidCreds'));
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const res = await authService.register({
      name,
      email,
      password,
      phone,
      address,
      city,
      country,
      postalCode
    });
    setLoading(false);

    if (res.success) {
      setSuccessMessage(t('auth.accountCreated'));
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } else {
      setErrorMessage(res.message || t('auth.registrationFailed'));
    }
  };

  const handleLogout = () => {
    authService.logout();
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2B2A]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-up">
      <div className="bg-[#FDFBF7] max-w-lg w-full rounded-3xl border border-[#EDE6DC] shadow-2xl relative p-6 sm:p-10 my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 text-[#2D2B2A] hover:text-[#E79685] transition-colors rounded-full hover:bg-white cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {currentUser ? (
          /* Logged In Profile Dashboard */
          <div className="space-y-6">
            <div className="text-center pb-5 border-b border-[#EDE6DC]">
              <img
                src="/Logo Levinahome Kids.png"
                alt="Levinahome"
                className="h-16 w-auto object-contain mx-auto mb-4"
              />
              <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold block mb-1">
                {t('auth.parentClubProfile')}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium">
                {currentUser.name}
              </h2>
              <span className="text-xs text-[#9E9891] font-normal block mt-0.5">
                {currentUser.email}
              </span>
            </div>

            {/* Profile Information Box */}
            <div className="bg-white p-4 rounded-2xl border border-[#EDE6DC] space-y-3 text-xs shadow-xs">
              <div className="flex items-center justify-between text-[#9E9891] uppercase tracking-wider text-[10px] font-bold border-b border-[#EDE6DC]/60 pb-2">
                <span>{t('auth.nurserySpecs')}</span>
                <span className="text-[#8EBBB0] flex items-center gap-1">
                  <ShieldCheck size={12} /> {t('auth.kidSafeVerified')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[#2D2B2A]">
                <div>
                  <span className="text-[#9E9891] block text-[11px]">{t('auth.contactPhone')}</span>
                  <span className="font-semibold">{currentUser.phone || '+45 20 12 34 56'}</span>
                </div>
                <div>
                  <span className="text-[#9E9891] block text-[11px]">{t('auth.nurseryHub')}</span>
                  <span className="font-semibold">Dülmen / Copenhagen</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#9E9891] block text-[11px]">{t('auth.deliveryAddress')}</span>
                  <span className="font-semibold">
                    {currentUser.address || 'Amagertorv 14, 2nd Floor'}, {currentUser.city || 'Copenhagen'} {currentUser.postalCode || '1160'}, {currentUser.country || 'Denmark'}
                  </span>
                </div>
              </div>
            </div>

            {/* Order History Summary */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-[#2D2B2A] font-bold flex items-center gap-1.5">
                <Package size={14} className="text-[#E79685]" />
                <span>{t('auth.recentOrders')}</span>
              </h4>
              <div className="bg-white p-3.5 rounded-2xl border border-[#EDE6DC] text-xs flex justify-between items-center shadow-xs">
                <div>
                  <strong className="text-[#2D2B2A] block font-heading">Order #LK-2026-8492</strong>
                  <span className="text-[11px] text-[#6B6661]">Cloud Wool Playmat &amp; Oak Chair</span>
                </div>
                <span className="text-[10px] bg-[#8EBBB0]/15 text-[#8EBBB0] font-bold px-2.5 py-1 rounded-full">
                  {t('auth.dispatchedFromDulmen')}
                </span>
              </div>
            </div>

            {/* Logout Button */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-[#2D2B2A] text-white py-3.5 text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#8EBBB0] transition-colors cursor-pointer"
              >
                {t('auth.continueBrowsing')}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-3.5 border border-[#EDE6DC] hover:border-red-300 text-red-700 bg-white rounded-full text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title={t('auth.signOut')}
              >
                <LogOut size={14} />
                <span className="hidden sm:inline font-bold">{t('auth.signOut')}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Sign In & Registration Form */
          <div>
            {/* Header Tabs */}
            <div className="text-center pb-4 mb-6 border-b border-[#EDE6DC]">
              <img
                src="/Logo Levinahome Kids.png"
                alt="Levinahome"
                className="h-20 sm:h-24 w-auto object-contain mx-auto mb-3"
              />
              <h2 className="font-heading text-2xl sm:text-3xl text-[#2D2B2A] font-medium">
                {mode === 'signin' ? t('auth.welcomeBack') : t('auth.createAccount')}
              </h2>
              
              <div className="flex justify-center gap-4 mt-4 text-xs tracking-wider uppercase font-bold">
                <button
                  onClick={() => {
                    setMode('signin');
                    setErrorMessage('');
                  }}
                  className={`py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                    mode === 'signin'
                      ? 'text-white bg-[#E79685] shadow-pillowy-coral'
                      : 'text-[#9E9891] hover:text-[#2D2B2A]'
                  }`}
                >
                  {t('auth.signIn')}
                </button>
                <button
                  onClick={() => {
                    setMode('register');
                    setErrorMessage('');
                  }}
                  className={`py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                    mode === 'register'
                      ? 'text-white bg-[#E79685] shadow-pillowy-coral'
                      : 'text-[#9E9891] hover:text-[#2D2B2A]'
                  }`}
                >
                  {t('auth.register')}
                </button>
              </div>
            </div>

            {/* Notification messages */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-2xl animate-fade-up">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="mb-4 p-3 bg-[#8EBBB0]/15 border border-[#8EBBB0] text-[#6C9F93] text-xs rounded-2xl flex items-center gap-2 font-bold animate-fade-up">
                <CheckCircle size={14} />
                <span>{successMessage}</span>
              </div>
            )}

            {mode === 'signin' ? (
              /* Sign In Form */
              <form onSubmit={handleSignIn} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.parentEmail')}</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sophia@example.com"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-3 pl-9 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                    <Mail size={15} className="absolute left-3.5 top-3.5 text-[#9E9891]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[#6B6661] font-semibold">{t('auth.password')}</label>
                    <button
                      type="button"
                      onClick={() => alert('Password reset link sent to your registered email address.')}
                      className="text-[11px] text-[#E79685] hover:underline cursor-pointer"
                    >
                      {t('auth.forgotPassword')}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-3 pl-9 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                    <Lock size={15} className="absolute left-3.5 top-3.5 text-[#9E9891]" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-3.5 text-xs uppercase tracking-wider font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-pillowy-coral hover:scale-105 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <RefreshCw size={15} className="animate-spin" />
                        <span>{t('auth.verifying')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('auth.signInBtn')}</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2 text-[11px] text-[#9E9891]">
                  {t('auth.demoCreds')}
                </div>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.parentFullName')}</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Sophia Andersen"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 pl-9 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                    <UserIcon size={15} className="absolute left-3.5 top-3 text-[#9E9891]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.emailAddress')}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sophia@example.com"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.createPassword')}</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 8 characters"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.phoneNumber')}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+45 20 12 34 56"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.city')}</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Copenhagen"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.postalCode')}</label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="1160"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.country')}</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Denmark"
                      className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#6B6661] mb-1 font-semibold">{t('auth.deliveryStreetAddress')}</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Amagertorv 14, 2nd Floor"
                    className="w-full bg-white border border-[#EDE6DC] px-3.5 py-2.5 rounded-full outline-none focus:border-[#E79685] text-[#2D2B2A]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#8EBBB0] hover:bg-[#6C9F93] text-white py-3.5 text-xs uppercase tracking-wider font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-pillowy-sage hover:scale-105 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <RefreshCw size={15} className="animate-spin" />
                        <span>{t('auth.creatingMembership')}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>{t('auth.joinClubBtn')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};


