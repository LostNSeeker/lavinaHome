import React, { useState } from 'react';
import type { Product } from '../types';
import { Search, X, ShoppingBag } from 'lucide-react';

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

  const popularSearches = ['Wool Carpet', 'Terracotta Rug', 'Oak Lounge Chair', 'French Flax Linen', 'Stoneware Vessel'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B2B2B]/60 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-up">
      <div className="bg-[#FAF8F5] max-w-3xl w-full rounded-[4px] border border-[#ECE8E2] shadow-2xl p-6 sm:p-8 relative">
        
        {/* Search Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#ECE8E2]">
          <Search size={22} className="text-[#8B8B8B]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search luxury carpets, furniture, materials..."
            autoFocus
            className="w-full bg-transparent text-lg sm:text-xl font-serif text-[#2B2B2B] placeholder-[#8B8B8B] outline-none"
          />
          <button onClick={onClose} className="p-2 text-[#2B2B2B] hover:text-[#B96A3C] transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Popular searches suggestions */}
        {!query.trim() && (
          <div className="pt-6 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8B8B8B] font-medium block">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="text-xs px-3.5 py-1.5 rounded-[2px] bg-[#F4EEE6] hover:bg-[#EFE7DC] text-[#2B2B2B] font-light transition-colors"
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
            <span className="text-xs uppercase tracking-[0.2em] text-[#8B8B8B] font-medium block">
              Search Results ({filteredProducts.length})
            </span>

            {filteredProducts.length === 0 ? (
              <p className="text-sm text-[#666666] font-light py-8 text-center">
                No matching pieces found for "{query}". Try searching for wool, terracotta, oak, or linen.
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
                    className="flex gap-4 p-3 rounded-[2px] bg-[#F4EEE6]/70 hover:bg-[#EFE7DC] cursor-pointer transition-colors border border-[#ECE8E2]"
                  >
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      className="w-16 h-20 object-cover rounded-[2px] bg-[#EFE7DC]"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#8B8B8B] font-medium block">
                          {product.categoryLabel}
                        </span>
                        <h4 className="font-serif text-base text-[#2B2B2B] truncate">
                          {product.name}
                        </h4>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-[#B96A3C]">
                          ${product.price.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-[#69705A] uppercase tracking-wider font-medium flex items-center gap-1">
                          <ShoppingBag size={10} />
                          View →
                        </span>
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
