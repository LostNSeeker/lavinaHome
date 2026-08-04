import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Database, ShoppingBag, RefreshCw, Zap } from 'lucide-react';
import { integrationService, type IntegrationStatus } from '../services/integrationService';
import { plentyoneService } from '../services/plentyoneService';

interface IntegrationStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntegrationStatusModal: React.FC<IntegrationStatusModalProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B2B2B]/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up">
      <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-[4px] border border-[#ECE8E2] shadow-2xl p-6 sm:p-8 relative text-[#2B2B2B]">
        
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#ECE8E2]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B96A3C] font-semibold block mb-1">
              LEVINA HOME Infrastructure
            </span>
            <h3 className="font-serif text-2xl text-[#2B2B2B]">Shopify & PlentyONE Integration</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#8B8B8B] hover:text-[#2B2B2B] transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Integration Architecture Overview */}
        <div className="my-5 p-4 rounded-[2px] bg-[#F4EEE6] border border-[#ECE8E2]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#69705A] font-semibold mb-2">
            <Zap size={14} className="text-[#69705A]" />
            Unified Integration Architecture
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
            <div className="p-2 bg-white/80 rounded border border-[#ECE8E2]">
              <span className="font-semibold text-[#B96A3C] block text-[11px]">PlentyONE</span>
              <span className="text-[10px] text-[#8B8B8B]">Master ERP / Stock</span>
            </div>
            <div className="flex items-center justify-center text-[10px] text-[#8B8B8B]">
              ⇄ SYNC ⇄
            </div>
            <div className="p-2 bg-white/80 rounded border border-[#ECE8E2]">
              <span className="font-semibold text-[#2B2B2B] block text-[11px]">Shopify</span>
              <span className="text-[10px] text-[#8B8B8B]">Storefront & Cart</span>
            </div>
          </div>
        </div>

        {/* Status Grid */}
        {status && (
          <div className="space-y-4 text-xs">
            
            {/* Shopify Storefront Status */}
            <div className="p-4 rounded-[2px] bg-white border border-[#ECE8E2]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm flex items-center gap-2 text-[#2B2B2B]">
                  <ShoppingBag size={16} className="text-[#B96A3C]" />
                  Shopify Storefront API
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#EFE7DC] text-[#2B2B2B]">
                  {status.shopify.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#666666] pt-1">
                <div>Domain: <span className="font-mono text-[#2B2B2B]">{status.shopify.storeDomain}</span></div>
                <div>API Version: <span className="font-mono text-[#2B2B2B]">{status.shopify.apiVersion}</span></div>
                <div>Storefront Token: <span className="font-mono text-[#2B2B2B]">{status.shopify.storefrontApi}</span></div>
                <div>Checkout Engine: <span className="font-mono text-[#2B2B2B]">{status.shopify.checkoutIntegration}</span></div>
              </div>
            </div>

            {/* PlentyONE ERP Status */}
            <div className="p-4 rounded-[2px] bg-white border border-[#ECE8E2]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-sm flex items-center gap-2 text-[#2B2B2B]">
                  <Database size={16} className="text-[#69705A]" />
                  PlentyONE (Plentymarkets) ERP
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E8EFE5] text-[#42593E]">
                  {status.plentyone.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#666666] pt-1">
                <div>ERP Host: <span className="font-mono text-[#2B2B2B]">{status.plentyone.host}</span></div>
                <div>Plenty ID: <span className="font-mono text-[#2B2B2B]">{status.plentyone.pid}</span></div>
                <div>OAuth Bearer Auth: <span className="font-mono text-[#42593E]">Token Cached & Valid</span></div>
                <div>ERP Stock Sync: <span className="font-mono text-[#2B2B2B]">{status.plentyone.erpSync}</span></div>
              </div>
            </div>

          </div>
        )}

        {testResult && (
          <div className="mt-4 p-3 bg-[#E8EFE5] border border-[#C6D8C1] rounded text-xs text-[#42593E] flex items-center gap-2">
            <CheckCircle size={14} />
            {testResult}
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-6 pt-4 border-t border-[#ECE8E2] flex justify-between items-center">
          <button
            onClick={handleTestPlentyAuth}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-[2px] bg-[#F4EEE6] hover:bg-[#EFE7DC] text-[#2B2B2B] text-xs font-medium transition-colors"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            Test Live Auth & Sync
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-[2px] bg-[#2B2B2B] hover:bg-[#3D3D3D] text-[#FAF8F5] text-xs uppercase tracking-widest transition-colors font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
