import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sun, Moon, Sparkles, ShoppingBag } from 'lucide-react';
import type { Product } from '../types';

interface Carpet3DStudioProps {
  onAddToCart: (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string
  ) => void;
}

export const Carpet3DStudio: React.FC<Carpet3DStudioProps> = ({ onAddToCart }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Customizer State
  const [pattern, setPattern] = useState<'geometric' | 'terracotta-wave' | 'sage-texture' | 'minimal-plain'>('geometric');
  const [colorScheme, setColorScheme] = useState<{ name: string; primary: string; secondary: string; hex: string }>({
    name: 'Sage & Soft Linen',
    primary: '#69705A',
    secondary: '#EFE7DC',
    hex: '#69705A',
  });
  const [weaveType, setWeaveType] = useState<'loop' | 'flatweave' | 'shag'>('loop');
  const [lighting, setLighting] = useState<'daylight' | 'sunset' | 'cozy'>('daylight');
  const [customWidth, setCustomWidth] = useState<number>(200);
  const [customLength, setCustomLength] = useState<number>(300);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const carpetMeshRef = useRef<THREE.Mesh | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);

  // Helper to generate procedural texture canvas
  const generateTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // Base background
    ctx.fillStyle = colorScheme.secondary;
    ctx.fillRect(0, 0, 1024, 1024);

    // Draw weave pattern
    ctx.fillStyle = colorScheme.primary;

    if (pattern === 'geometric') {
      ctx.lineWidth = 14;
      ctx.strokeStyle = colorScheme.primary;
      for (let i = 0; i < 1024; i += 128) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 128, 128);
        ctx.lineTo(i, 256);
        ctx.lineTo(i + 128, 384);
        ctx.lineTo(i, 512);
        ctx.lineTo(i + 128, 640);
        ctx.lineTo(i, 768);
        ctx.lineTo(i + 128, 896);
        ctx.lineTo(i, 1024);
        ctx.stroke();
      }
    } else if (pattern === 'terracotta-wave') {
      ctx.lineWidth = 24;
      ctx.strokeStyle = colorScheme.primary;
      for (let y = 50; y < 1024; y += 120) {
        ctx.beginPath();
        for (let x = 0; x < 1024; x += 10) {
          ctx.lineTo(x, y + Math.sin(x * 0.02) * 35);
        }
        ctx.stroke();
      }
    } else if (pattern === 'sage-texture') {
      for (let i = 0; i < 240; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const r = Math.random() * 25 + 5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Minimal plain with subtle weave noise
      ctx.fillStyle = colorScheme.primary;
      ctx.globalAlpha = 0.15;
      for (let x = 0; x < 1024; x += 8) {
        ctx.fillRect(x, 0, 4, 1024);
      }
      ctx.globalAlpha = 1.0;
    }

    // Add organic fiber noise overlay
    ctx.fillStyle = '#2B2B2B';
    ctx.globalAlpha = 0.04;
    for (let i = 0; i < 8000; i++) {
      ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 2);
    }
    ctx.globalAlpha = 1.0;

    return canvas;
  };

  // Initialize Three.js 3D Canvas
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#F4EEE6');

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 4.5, 5.5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    dirLight.position.set(5, 8, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // Floor shadow receiver
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.05;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Initial Carpet Mesh
    const canvas = generateTexture();
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const carpetGeo = new THREE.BoxGeometry(3.2, 0.08, 2.2);
    const carpetMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.85,
      metalness: 0.05,
    });
    const carpetMesh = new THREE.Mesh(carpetGeo, carpetMat);
    carpetMesh.castShadow = true;
    carpetMesh.receiveShadow = true;
    scene.add(carpetMesh);
    carpetMeshRef.current = carpetMesh;

    // Mouse Drag Rotation State
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !carpetMeshRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      carpetMeshRef.current.rotation.y += deltaX * 0.008;
      carpetMeshRef.current.rotation.x += deltaY * 0.008;

      // Clamp rotation x
      carpetMeshRef.current.rotation.x = Math.max(-0.5, Math.min(0.8, carpetMeshRef.current.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !carpetMeshRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      carpetMeshRef.current.rotation.y += deltaX * 0.008;
      carpetMeshRef.current.rotation.x += deltaY * 0.008;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    domElement.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (autoRotate && carpetMeshRef.current && !isDragging) {
        carpetMeshRef.current.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Texture & Geometry when parameters change
  useEffect(() => {
    if (!carpetMeshRef.current) return;
    const canvas = generateTexture();
    const newTexture = new THREE.CanvasTexture(canvas);
    newTexture.wrapS = THREE.RepeatWrapping;
    newTexture.wrapT = THREE.RepeatWrapping;

    const mat = carpetMeshRef.current.material as THREE.MeshStandardMaterial;
    mat.map = newTexture;

    // Weave thickness & roughness
    if (weaveType === 'shag') {
      mat.roughness = 0.95;
      carpetMeshRef.current.scale.set(customWidth / 200, 1.8, customLength / 300);
    } else if (weaveType === 'flatweave') {
      mat.roughness = 0.65;
      carpetMeshRef.current.scale.set(customWidth / 200, 0.6, customLength / 300);
    } else {
      mat.roughness = 0.85;
      carpetMeshRef.current.scale.set(customWidth / 200, 1.0, customLength / 300);
    }

    mat.needsUpdate = true;
  }, [pattern, colorScheme, weaveType, customWidth, customLength]);

  // Update Lighting Mood
  useEffect(() => {
    if (!dirLightRef.current || !ambientLightRef.current) return;
    if (lighting === 'sunset') {
      dirLightRef.current.color.setHex(0xffaa66);
      dirLightRef.current.intensity = 2.2;
      ambientLightRef.current.color.setHex(0xffeacc);
    } else if (lighting === 'cozy') {
      dirLightRef.current.color.setHex(0xffddaa);
      dirLightRef.current.intensity = 1.4;
      ambientLightRef.current.color.setHex(0xddccbb);
    } else {
      dirLightRef.current.color.setHex(0xfff5ea);
      dirLightRef.current.intensity = 1.8;
      ambientLightRef.current.color.setHex(0xffffff);
    }
  }, [lighting]);

  // Price Calculation based on dimensions
  const calculatedPrice = Math.round((customWidth * customLength * 1.8) / 100) * 10;

  const colorOptions = [
    { name: 'Sage & Soft Linen', primary: '#69705A', secondary: '#EFE7DC', hex: '#69705A' },
    { name: 'Terracotta & Burnt Clay', primary: '#B96A3C', secondary: '#F4EEE6', hex: '#B96A3C' },
    { name: 'Warm Sand & Taupe', primary: '#96714D', secondary: '#EFE7DC', hex: '#96714D' },
    { name: 'Deep Olive & Cream', primary: '#505744', secondary: '#FAF8F5', hex: '#505744' },
  ];

  const handleOrder3DCarpet = () => {
    const customProduct: Product = {
      id: `3d-custom-${Date.now()}`,
      name: `Bespoke 3D ${colorScheme.name} Carpet`,
      category: 'carpets',
      categoryLabel: 'Custom 3D Loom Build',
      price: calculatedPrice,
      rating: 5.0,
      reviewsCount: 1,
      primaryImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop',
      secondaryImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
      galleryImages: [],
      material: `Hand-knotted Organic Wool (${weaveType} weave)`,
      availableMaterials: ['Hand-knotted Organic Wool'],
      sizes: [`${customWidth} x ${customLength} cm`],
      colors: [{ name: colorScheme.name, hex: colorScheme.hex }],
      roomCategory: 'living-room',
      description: `Bespoke 3D-loomed carpet generated interactively with pattern "${pattern}" and custom ${customWidth}x${customLength} cm sizing.`,
      careInstructions: ['Professional wool cleaning recommended.'],
      shippingInfo: 'Custom loomed in Copenhagen studio (3-4 weeks delivery).',
    };

    onAddToCart(
      customProduct,
      `${customWidth} x ${customLength} cm`,
      { name: colorScheme.name, hex: colorScheme.hex },
      `Organic Wool (${weaveType})`
    );
  };

  return (
    <section className="py-24 bg-[#FAF8F5] border-b border-[#ECE8E2] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#69705A] font-semibold mb-2">
            <Sparkles size={14} />
            <span>Interactive 3D Loom Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B]">
            Interactive 3D Carpet Object Viewer
          </h2>
        </div>
        <p className="text-xs text-[#666666] tracking-widest uppercase max-w-sm font-light">
          Drag in 3D to rotate • Customize weave height, colorways, and dimensions in real time.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4EEE6] rounded-[4px] p-6 lg:p-8 border border-[#ECE8E2]">
          
          {/* 3D WebGL Canvas Viewport */}
          <div className="lg:col-span-7 relative aspect-[4/3] bg-[#FAF8F5] rounded-[2px] overflow-hidden border border-[#ECE8E2] group">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Viewport Overlay Controls */}
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-full backdrop-blur-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  autoRotate ? 'bg-[#69705A] text-white' : 'bg-white/80 text-[#2B2B2B]'
                }`}
                title="Toggle Auto Rotation"
              >
                <RotateCw size={14} className={autoRotate ? 'animate-spin' : ''} />
                <span className="text-[10px] uppercase tracking-wider hidden sm:inline">3D Rotation</span>
              </button>
            </div>

            {/* Lighting Mood Switcher Overlay */}
            <div className="absolute top-4 right-4 flex gap-1.5 bg-white/80 backdrop-blur-md p-1 rounded-full border border-[#ECE8E2] z-10">
              <button
                onClick={() => setLighting('daylight')}
                className={`p-1.5 rounded-full transition-colors ${lighting === 'daylight' ? 'bg-[#B96A3C] text-white' : 'text-[#666666]'}`}
                title="Daylight"
              >
                <Sun size={14} />
              </button>
              <button
                onClick={() => setLighting('sunset')}
                className={`p-1.5 rounded-full transition-colors ${lighting === 'sunset' ? 'bg-[#B96A3C] text-white' : 'text-[#666666]'}`}
                title="Sunset Golden Hour"
              >
                <Sparkles size={14} />
              </button>
              <button
                onClick={() => setLighting('cozy')}
                className={`p-1.5 rounded-full transition-colors ${lighting === 'cozy' ? 'bg-[#B96A3C] text-white' : 'text-[#666666]'}`}
                title="Cozy Evening"
              >
                <Moon size={14} />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-[#8B8B8B] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-[2px] pointer-events-none">
              Click &amp; Drag 3D Canvas to Orbit
            </div>
          </div>

          {/* 3D Customizer Controls Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Pattern Switcher */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#666666] font-medium block mb-2">
                1. Architectural Weave Pattern
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'geometric', label: 'Astrid Geometric' },
                  { id: 'terracotta-wave', label: 'Malmö Wave' },
                  { id: 'sage-texture', label: 'Hague Organic' },
                  { id: 'minimal-plain', label: 'Minimal Plain' },
                ].map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setPattern(pt.id as any)}
                    className={`text-xs p-3 rounded-[2px] border text-left transition-all ${
                      pattern === pt.id
                        ? 'border-[#B96A3C] bg-[#FAF8F5] text-[#2B2B2B] font-semibold'
                        : 'border-[#ECE8E2] bg-white text-[#666666] hover:border-[#BBA68B]'
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#666666] font-medium block mb-2">
                2. Natural Colorway Palette
              </span>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((opt) => (
                  <button
                    key={opt.name}
                    onClick={() => setColorScheme(opt)}
                    className={`flex items-center gap-2 p-2 rounded-[2px] border transition-all text-xs ${
                      colorScheme.name === opt.name
                        ? 'border-[#69705A] bg-[#69705A] text-white font-medium'
                        : 'border-[#ECE8E2] bg-white text-[#2B2B2B]'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: opt.hex }} />
                    <span>{opt.name.split('&')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Weave Texture Pile Height */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#666666] font-medium block mb-2">
                3. Tactile Pile Height
              </span>
              <div className="flex gap-2">
                {[
                  { id: 'loop', label: 'High-Low Loop' },
                  { id: 'flatweave', label: 'Flatweave Jute' },
                  { id: 'shag', label: 'Plush Shag' },
                ].map((wv) => (
                  <button
                    key={wv.id}
                    onClick={() => setWeaveType(wv.id as any)}
                    className={`flex-1 text-xs py-2 px-3 rounded-[2px] border text-center transition-all ${
                      weaveType === wv.id
                        ? 'border-[#B96A3C] bg-[#B96A3C] text-white font-medium'
                        : 'border-[#ECE8E2] bg-white text-[#666666]'
                    }`}
                  >
                    {wv.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Dimensions */}
            <div className="space-y-2 pt-2 border-t border-[#ECE8E2]">
              <div className="flex justify-between text-xs text-[#2B2B2B] font-medium">
                <span>Custom Size: {customWidth} x {customLength} cm</span>
                <span className="text-[#B96A3C] font-serif text-lg font-normal">${calculatedPrice.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-[#8B8B8B] uppercase block mb-1">Width (cm)</label>
                  <input
                    type="range"
                    min="140"
                    max="350"
                    step="10"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    className="w-full accent-[#B96A3C]"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#8B8B8B] uppercase block mb-1">Length (cm)</label>
                  <input
                    type="range"
                    min="200"
                    max="450"
                    step="10"
                    value={customLength}
                    onChange={(e) => setCustomLength(Number(e.target.value))}
                    className="w-full accent-[#B96A3C]"
                  />
                </div>
              </div>
            </div>

            {/* Add Custom 3D Carpet to Cart */}
            <button
              onClick={handleOrder3DCarpet}
              className="w-full bg-[#B96A3C] hover:bg-[#A75D36] text-white py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-[4px] flex items-center justify-center gap-3 transition-colors shadow-sm"
            >
              <ShoppingBag size={16} />
              <span>Order Custom 3D Build — ${calculatedPrice.toLocaleString()}</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
