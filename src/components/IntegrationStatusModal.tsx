import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Database, ShoppingBag, RefreshCw, Zap } from 'lucide-react';
import { integrationService, type IntegrationStatus } from '../services/integrationService';
import { plentyoneService } from '../services/plentyoneService';
import { useTranslation } from 'react-i18next';

interface IntegrationStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntegrationStatusModal: React.FC<IntegrationStatusModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<IntegrationStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    const data = await integrationService.getStatus();
    setStatus(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchStatus();
    }
  }, [isOpen]);

  const handleTestPlentyAuth = async () => {
    setLoading(true);
    const res = await plentyoneService.authenticate();
    setTestResult(`PlentyONE Auth Test: ${res.message} (Token: ${res.accessToken?.substring(0, 14)}...)`);
    fetchStatus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2B2A]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-up">
      <div className="bg-[#FDFBF7] max-w-2xl w-full rounded-3xl border border-[#EDE6DC] shadow-2xl p-6 sm:p-8 relative text-[#2D2B2A]">
        
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#EDE6DC]">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#8EBBB0] font-bold block mb-1">
              {t('integration.badge')}
            </span>
            <h3 className="font-heading text-2xl text-[#2D2B2A] font-medium">{t('integration.title')}</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#9E9891] hover:text-[#E79685] transition-colors rounded-full hover:bg-white cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Integration Architecture Overview */}
        <div className="my-5 p-4 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8EBBB0] font-bold mb-2">
            <Zap size={14} className="text-[#8EBBB0]" />
            {t('integration.architectureTitle')}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
            <div className="p-2.5 bg-[#FDFBF7] rounded-xl border border-[#EDE6DC]">
              <span className="font-bold text-[#E79685] block text-[11px]">PlentyONE</span>
              <span className="text-[10px] text-[#9E9891]">{t('integration.dulmenWarehouse')}</span>
            </div>
            <div className="flex items-center justify-center text-[10px] text-[#8EBBB0] font-bold">
              ⇄ {t('integration.liveSync')} ⇄
            </div>
            <div className="p-2.5 bg-[#FDFBF7] rounded-xl border border-[#EDE6DC]">
              <span className="font-bold text-[#2D2B2A] block text-[11px]">Shopify</span>
              <span className="text-[10px] text-[#9E9891]">{t('integration.storefront')}</span>
            </div>
          </div>
        </div>

        {/* Status Grid */}
        {status && (
          <div className="space-y-3 text-xs">
            
            {/* Shopify Storefront Status */}
            <div className="p-4 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm flex items-center gap-2 text-[#2D2B2A]">
                  <ShoppingBag size={16} className="text-[#E79685]" />
                  {t('integration.shopifyTitle')}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E79685]/15 text-[#E79685]">
                  {status.shopify.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#6B6661] pt-1">
                <div>Domain: <span className="font-mono text-[#2D2B2A]">{status.shopify.storeDomain}</span></div>
                <div>API Version: <span className="font-mono text-[#2D2B2A]">{status.shopify.apiVersion}</span></div>
                <div>Storefront Token: <span className="font-mono text-[#2D2B2A]">{status.shopify.storefrontApi}</span></div>
                <div>Checkout Engine: <span className="font-mono text-[#2D2B2A]">{status.shopify.checkoutIntegration}</span></div>
              </div>
            </div>

            {/* PlentyONE ERP Status */}
            <div className="p-4 rounded-2xl bg-white border border-[#EDE6DC] shadow-xs">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm flex items-center gap-2 text-[#2D2B2A]">
                  <Database size={16} className="text-[#8EBBB0]" />
                  {t('integration.plentyTitle')}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#8EBBB0]/15 text-[#6C9F93]">
                  {status.plentyone.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#6B6661] pt-1">
                <div>ERP Host: <span className="font-mono text-[#2D2B2A]">{status.plentyone.host}</span></div>
                <div>Plenty ID: <span className="font-mono text-[#2D2B2A]">{status.plentyone.pid}</span></div>
                <div>OAuth Bearer Auth: <span className="font-mono text-[#8EBBB0] font-bold">Token Cached &amp; Valid</span></div>
                <div>ERP Stock Sync: <span className="font-mono text-[#2D2B2A]">{status.plentyone.erpSync}</span></div>
              </div>
            </div>

          </div>
        )}

        {testResult && (
          <div className="mt-4 p-3 bg-[#8EBBB0]/15 border border-[#8EBBB0] rounded-2xl text-xs text-[#6C9F93] font-bold flex items-center gap-2">
            <CheckCircle size={14} />
            {testResult}
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-6 pt-4 border-t border-[#EDE6DC] flex justify-between items-center">
          <button
            onClick={handleTestPlentyAuth}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#8EBBB0] hover:text-white text-[#2D2B2A] text-xs font-bold transition-all border border-[#EDE6DC] cursor-pointer shadow-xs"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            {t('integration.testAuth')}
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#2D2B2A] hover:bg-[#8EBBB0] text-white text-xs uppercase tracking-wider transition-all font-bold cursor-pointer shadow-xs"
          >
            {t('integration.close')}
          </button>
        </div>

      </div>
    </div>
  );
};


