import React, { useState } from 'react';
import type { Product } from '../types';
import { Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = [
    t('search.popularQueries.woolCarpet'),
    t('search.popularQueries.lionPlaymat'),
    t('search.popularQueries.montessoriTable'),
    t('search.popularQueries.moonLamp'),
    t('search.popularQueries.cloudQuilt'),
    t('search.popularQueries.snackSet'),
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2B2A]/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-up">
      <div className="bg-[#FDFBF7] max-w-3xl w-full rounded-3xl border border-[#EDE6DC] shadow-2xl p-6 sm:p-8 relative">
        
        {/* Search Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#EDE6DC]">
          <Search size={22} className="text-[#8EBBB0]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            autoFocus
            className="w-full bg-transparent text-lg sm:text-xl font-heading text-[#2D2B2A] placeholder-[#9E9891] outline-none"
          />
          <button onClick={onClose} className="p-2 text-[#2D2B2A] hover:text-[#E79685] transition-colors rounded-full hover:bg-white cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Popular searches suggestions */}
        {!query.trim() && (
          <div className="pt-6 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#8EBBB0] font-bold block">
              {t('search.popularTitle')}
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="text-xs px-4 py-2 rounded-full bg-white hover:bg-[#8EBBB0] hover:text-white text-[#2D2B2A] font-medium border border-[#EDE6DC] transition-all cursor-pointer shadow-xs"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query.trim() && (
          <div className="pt-6 space-y-4 max-h-[60vh] overflow-y-auto">
            <span className="text-xs uppercase tracking-wider text-[#8EBBB0] font-bold block">
              {t('search.resultsTitle', { count: filteredProducts.length })}
            </span>

            {filteredProducts.length === 0 ? (
              <p className="text-sm text-[#6B6661] font-normal py-8 text-center">
                {t('search.noResults', { query })}
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex gap-4 p-3.5 rounded-2xl bg-white hover:bg-[#F7F3EB] cursor-pointer transition-all border border-[#EDE6DC] shadow-xs"
                  >
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      className="w-16 h-20 object-cover rounded-xl bg-[#F7F3EB]"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#8EBBB0] font-bold block">
                          {product.categoryLabel}
                        </span>
                        <h4 className="font-heading text-base text-[#2D2B2A] truncate font-medium">
                          {product.name}
                        </h4>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-[#E79685]">
                          ${product.price.toLocaleString()}
                        </span>
                        <span className="text-[#8EBBB0] font-bold">{t('search.view')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

