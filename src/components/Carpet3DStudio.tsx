import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { 
  RotateCw, 
  Sun, 
  Moon, 
  Sparkles, 
  ShoppingBag, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  CheckCircle2, 
  RefreshCw, 
  Box, 
  Layers,
  Scissors,
  Shield,
  Feather
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../types';

interface Carpet3DStudioProps {
  products?: Product[];
  isLoading?: boolean;
  selectedProductFor3D?: Product | null;
  onAddToCart: (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    material: string
  ) => void;
}

export const Carpet3DStudio: React.FC<Carpet3DStudioProps> = ({
  products = [],
  isLoading = false,
  selectedProductFor3D = null,
  onAddToCart,
}) => {
  const { t } = useTranslation();
  const mountRef = useRef<HTMLDivElement>(null);

  // Filter authentic carpet and rug products from store catalog
  const carpetProducts = useMemo(() => {
    const list = products.filter(
      (p) =>
        p.category !== 'naturfelle' &&
        p.category !== 'accessories' &&
        (p.category === 'carpets' ||
          p.category === 'rugs' ||
          (p.name || '').toLowerCase().includes('teppich') ||
          (p.name || '').toLowerCase().includes('shaggy') ||
          (p.categoryLabel || '').toLowerCase().includes('teppich'))
    );
    if (list.length > 0) return list;
    const nonFell = products.filter((p) => p.category !== 'naturfelle' && p.category !== 'accessories');
    if (nonFell.length > 0) return nonFell;
    return products;
  }, [products]);

  // Selected product for texture projection
  const [activeProduct, setActiveProduct] = useState<Product | null>(
    selectedProductFor3D || carpetProducts[0] || null
  );

  // Weave & 3D Dimensions
  const [weaveType, setWeaveType] = useState<'plush' | 'loop' | 'washable'>('plush');
  const [lighting, setLighting] = useState<'daylight' | 'sunset' | 'cozy'>('daylight');
  const [customWidth, setCustomWidth] = useState<number>(160);
  const [customLength, setCustomLength] = useState<number>(230);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isLoadingTexture, setIsLoadingTexture] = useState<boolean>(false);

  // 3D Artisan Detailing Toggles (User Requested Features)
  // 1. The Fringe / Tassels (Warp threads)
  const [enableFringe, setEnableFringe] = useState<boolean>(true);
  // 2. Binding / Serging (The wrapped fabric border / whipping)
  const [enableSerging, setEnableSerging] = useState<boolean>(true);
  // 3. Fluffing / Sprouting (Tiny loose vertical wool fibers)
  const [enableSprouting, setEnableSprouting] = useState<boolean>(true);

  // References for Three.js scene & sub-meshes
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const carpetGroupRef = useRef<THREE.Group | null>(null);
  const topMeshRef = useRef<THREE.Mesh | null>(null);
  const bodyMeshRef = useRef<THREE.Mesh | null>(null);
  const fringeGroupRef = useRef<THREE.Group | null>(null);
  const sergingGroupRef = useRef<THREE.Group | null>(null);
  const sproutingMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const currentTextureRef = useRef<THREE.Texture | null>(null);

  // Sync external selectedProductFor3D prop
  useEffect(() => {
    if (selectedProductFor3D) {
      setActiveProduct(selectedProductFor3D);
    }
  }, [selectedProductFor3D]);

  // Set initial product when products load
  useEffect(() => {
    if ((!activeProduct || !carpetProducts.some((p) => p.id === activeProduct.id)) && carpetProducts.length > 0) {
      setActiveProduct(carpetProducts[0]);
    }
  }, [carpetProducts, activeProduct]);

  // Generate Bump Map for Tactile Wool Tufts
  const generateBumpTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 30000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const val = Math.floor(Math.random() * 90) + 110;
      ctx.fillStyle = `rgb(${val},${val},${val})`;
      ctx.fillRect(x, y, 2.5, 2.5);
    }
    return canvas;
  };

  // Generate Serging Spiral Whip-Stitch Normal/Bump Texture
  const generateSergingBumpTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);

    // Draw repeating diagonal whip-stitching threads
    ctx.strokeStyle = '#D0D0D0';
    ctx.lineWidth = 8;
    for (let x = -256; x < 512; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 256, 256);
      ctx.stroke();
    }

    ctx.strokeStyle = '#404040';
    ctx.lineWidth = 3;
    for (let x = -256; x < 512; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x + 12, 0);
      ctx.lineTo(x + 268, 256);
      ctx.stroke();
    }

    return canvas;
  };

  // Fallback vector canvas texture
  const generateFallbackCanvas = (productName: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.strokeStyle = '#8EBBB0';
    ctx.lineWidth = 20;
    for (let y = 140; y < 1024; y += 180) {
      ctx.beginPath();
      for (let x = 0; x <= 1024; x += 64) {
        const peak = (x / 64) % 2 === 0 ? -45 : 45;
        if (x === 0) ctx.moveTo(x, y + peak);
        else ctx.lineTo(x, y + peak);
      }
      ctx.stroke();
    }

    ctx.fillStyle = '#2D2B2A';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(productName, 512, 512);

    return canvas;
  };

  // Helper to resolve CORS-safe URL
  const getCORSFriendlyUrl = (rawUrl: string): string => {
    if (!rawUrl) return '';
    const url = rawUrl.trim();
    if (url.startsWith('/') || url.startsWith('data:') || url.startsWith('blob:')) {
      return url;
    }
    return `/api/proxy/image?url=${encodeURIComponent(url)}`;
  };

  // Robust Texture Loader
  const applyProductTexture = useCallback((product: Product) => {
    if (!topMeshRef.current) return;
    setIsLoadingTexture(true);

    const rawImageUrl = product.primaryImage || product.secondaryImage;
    const proxyUrl = getCORSFriendlyUrl(rawImageUrl);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin('anonymous');

    const loadDirectImageCanvas = (imgSrc: string) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        if (!topMeshRef.current) return;
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || 1024;
          canvas.height = img.naturalHeight || 1024;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const canvasTex = new THREE.CanvasTexture(canvas);
            canvasTex.colorSpace = THREE.SRGBColorSpace;
            canvasTex.needsUpdate = true;

            if (currentTextureRef.current) {
              currentTextureRef.current.dispose();
            }
            currentTextureRef.current = canvasTex;

            const mat = topMeshRef.current.material as THREE.MeshStandardMaterial;
            mat.map = canvasTex;
            mat.color.setHex(0xffffff);
            mat.needsUpdate = true;
          }
        } catch (e) {
          console.warn('[3D Studio] Canvas drawing note:', e);
        } finally {
          setIsLoadingTexture(false);
        }
      };
      img.onerror = () => {
        if (topMeshRef.current) {
          const canvas = generateFallbackCanvas(product.name);
          const fallbackTex = new THREE.CanvasTexture(canvas);
          fallbackTex.colorSpace = THREE.SRGBColorSpace;
          const mat = topMeshRef.current.material as THREE.MeshStandardMaterial;
          mat.map = fallbackTex;
          mat.needsUpdate = true;
        }
        setIsLoadingTexture(false);
      };
      img.src = imgSrc;
    };

    textureLoader.load(
      proxyUrl,
      (tex) => {
        if (!topMeshRef.current) return;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
        tex.needsUpdate = true;

        if (currentTextureRef.current) {
          currentTextureRef.current.dispose();
        }
        currentTextureRef.current = tex;

        const mat = topMeshRef.current.material as THREE.MeshStandardMaterial;
        mat.map = tex;
        mat.color.setHex(0xffffff);
        mat.needsUpdate = true;

        setTimeout(() => {
          setIsLoadingTexture(false);
        }, 100);
      },
      undefined,
      (err) => {
        console.warn('[3D Studio] Proxy texture loader error:', err, 'Falling back to direct image canvas...');
        loadDirectImageCanvas(rawImageUrl || proxyUrl);
      }
    );
  }, []);

  // Three.js Scene Setup
  useEffect(() => {
    if (!mountRef.current || carpetProducts.length === 0) return;
    const container = mountRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#FDFBF7');

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3.6, 4.6);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xfffbf0, 1.9);
    dirLight.position.set(5, 8, 4);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // Floor Shadow Receiver
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.05;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // 3D Carpet Group Container
    const carpetGroup = new THREE.Group();
    scene.add(carpetGroup);
    carpetGroupRef.current = carpetGroup;

    // Textures
    const bumpCanvas = generateBumpTexture();
    const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
    bumpTexture.wrapS = THREE.RepeatWrapping;
    bumpTexture.wrapT = THREE.RepeatWrapping;
    bumpTexture.repeat.set(4, 4);

    const sergingBumpCanvas = generateSergingBumpTexture();
    const sergingBumpTexture = new THREE.CanvasTexture(sergingBumpCanvas);
    sergingBumpTexture.wrapS = THREE.RepeatWrapping;
    sergingBumpTexture.wrapT = THREE.RepeatWrapping;
    sergingBumpTexture.repeat.set(12, 1);

    // ==========================================
    // 1. BASE BODY UNDERLAY BOX (Woven foundation)
    // ==========================================
    const bodyGeo = new THREE.BoxGeometry(3.0, 0.08, 2.0);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xF2EDE4,
      roughness: 0.92,
      metalness: 0.01,
      bumpMap: bumpTexture,
      bumpScale: 0.02,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    carpetGroup.add(bodyMesh);
    bodyMeshRef.current = bodyMesh;

    // ==========================================
    // 2. TOP SURFACE PLANE (2D Image Projection)
    // ==========================================
    const topGeo = new THREE.PlaneGeometry(2.98, 1.98, 32, 32);
    const topMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.88,
      metalness: 0.02,
      bumpMap: bumpTexture,
      bumpScale: 0.028,
    });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.rotation.x = -Math.PI / 2;
    topMesh.position.y = 0.041;
    topMesh.receiveShadow = true;
    carpetGroup.add(topMesh);
    topMeshRef.current = topMesh;

    // ==========================================
    // 3. BINDING / SERGING (Edge Whipping Frame)
    // ==========================================
    const sergingGroup = new THREE.Group();
    carpetGroup.add(sergingGroup);
    sergingGroupRef.current = sergingGroup;

    const sergingMat = new THREE.MeshStandardMaterial({
      color: 0x4D3F33,
      roughness: 0.86,
      metalness: 0.03,
      bumpMap: sergingBumpTexture,
      bumpScale: 0.045,
    });

    const railRadius = 0.022;
    // Top & Bottom Serging Rails (along X)
    const tbRailGeo = new THREE.CylinderGeometry(railRadius, railRadius, 3.0, 16);
    const topRail = new THREE.Mesh(tbRailGeo, sergingMat);
    topRail.rotation.z = Math.PI / 2;
    topRail.position.set(0, 0.042, -1.0);
    topRail.castShadow = true;
    sergingGroup.add(topRail);

    const bottomRail = new THREE.Mesh(tbRailGeo, sergingMat);
    bottomRail.rotation.z = Math.PI / 2;
    bottomRail.position.set(0, 0.042, 1.0);
    bottomRail.castShadow = true;
    sergingGroup.add(bottomRail);

    // Left & Right Serging Rails (along Z)
    const lrRailGeo = new THREE.CylinderGeometry(railRadius, railRadius, 2.0, 16);
    const leftRail = new THREE.Mesh(lrRailGeo, sergingMat);
    leftRail.rotation.x = Math.PI / 2;
    leftRail.position.set(-1.5, 0.042, 0);
    leftRail.castShadow = true;
    sergingGroup.add(leftRail);

    const rightRail = new THREE.Mesh(lrRailGeo, sergingMat);
    rightRail.rotation.x = Math.PI / 2;
    rightRail.position.set(1.5, 0.042, 0);
    rightRail.castShadow = true;
    sergingGroup.add(rightRail);

    // 4 Rounded Corner Caps
    const cornerGeo = new THREE.SphereGeometry(railRadius, 16, 16);
    [
      [-1.5, -1.0],
      [1.5, -1.0],
      [-1.5, 1.0],
      [1.5, 1.0],
    ].forEach(([cx, cz]) => {
      const cornerMesh = new THREE.Mesh(cornerGeo, sergingMat);
      cornerMesh.position.set(cx, 0.042, cz);
      sergingGroup.add(cornerMesh);
    });

    // ==========================================
    // 4. THE FRINGE / TASSELS (Warp Threads on ends)
    // ==========================================
    const fringeGroup = new THREE.Group();
    carpetGroup.add(fringeGroup);
    fringeGroupRef.current = fringeGroup;

    const tasselMat = new THREE.MeshStandardMaterial({
      color: 0xF8F5EE,
      roughness: 0.94,
      metalness: 0.01,
    });

    const strandCount = 48;
    const strandLength = 0.16;
    const strandGeo = new THREE.CylinderGeometry(0.003, 0.0015, strandLength, 6);
    const knotGeo = new THREE.SphereGeometry(0.005, 8, 8);

    // Create fringes on both Left (-X) and Right (+X) ends
    [-1.5, 1.5].forEach((endX) => {
      const isRight = endX > 0;
      const endDir = isRight ? 1 : -1;

      // Header woven tape running along the end
      const headerGeo = new THREE.BoxGeometry(0.02, 0.015, 2.02);
      const headerMesh = new THREE.Mesh(headerGeo, tasselMat);
      headerMesh.position.set(endX + endDir * 0.01, 0.038, 0);
      fringeGroup.add(headerMesh);

      for (let i = 0; i < strandCount; i++) {
        const t = (i / (strandCount - 1)) * 2.0 - 1.0; // from -1.0 to 1.0 along Z
        const jitterZ = (Math.random() - 0.5) * 0.015;
        const jitterLen = 0.85 + Math.random() * 0.3;
        const jitterRot = (Math.random() - 0.5) * 0.15;

        // Knot at base
        const knot = new THREE.Mesh(knotGeo, tasselMat);
        knot.position.set(endX + endDir * 0.02, 0.036, t + jitterZ);
        fringeGroup.add(knot);

        // Hanging thread strand drooping naturally toward the floor
        const strand = new THREE.Mesh(strandGeo, tasselMat);
        strand.scale.set(1, jitterLen, 1);
        strand.position.set(endX + endDir * (0.02 + strandLength * 0.45 * jitterLen), 0.02, t + jitterZ);
        strand.rotation.z = isRight ? -Math.PI / 2.3 : Math.PI / 2.3;
        strand.rotation.y = jitterRot;
        strand.castShadow = true;
        fringeGroup.add(strand);
      }
    });

    // ==========================================
    // 5. FLUFFING / SPROUTING (Micro-Fiber Tufts)
    // ==========================================
    const fiberCount = 1800;
    const fiberGeo = new THREE.CylinderGeometry(0.0016, 0.0006, 0.038, 4);
    const fiberMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.98,
      metalness: 0.0,
    });

    const sproutingMesh = new THREE.InstancedMesh(fiberGeo, fiberMat, fiberCount);
    sproutingMesh.castShadow = true;
    sproutingMesh.receiveShadow = true;
    carpetGroup.add(sproutingMesh);
    sproutingMeshRef.current = sproutingMesh;

    const dummy = new THREE.Object3D();
    for (let i = 0; i < fiberCount; i++) {
      const rx = (Math.random() - 0.5) * 2.9;
      const rz = (Math.random() - 0.5) * 1.9;
      const tiltX = (Math.random() - 0.5) * 0.35;
      const tiltZ = (Math.random() - 0.5) * 0.35;
      const scaleY = 0.6 + Math.random() * 0.8;

      dummy.position.set(rx, 0.05, rz);
      dummy.rotation.set(tiltX, Math.random() * Math.PI, tiltZ);
      dummy.scale.set(1, scaleY, 1);
      dummy.updateMatrix();
      sproutingMesh.setMatrixAt(i, dummy.matrix);
    }
    sproutingMesh.instanceMatrix.needsUpdate = true;

    // Load initial texture immediately
    const prodToLoad = activeProduct || carpetProducts[0];
    if (prodToLoad) {
      applyProductTexture(prodToLoad);
    }

    // Mouse & Touch Drag Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !carpetGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      carpetGroupRef.current.rotation.y += deltaX * 0.008;
      carpetGroupRef.current.rotation.x += deltaY * 0.008;
      carpetGroupRef.current.rotation.x = Math.max(-0.5, Math.min(0.8, carpetGroupRef.current.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !carpetGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      carpetGroupRef.current.rotation.y += deltaX * 0.008;
      carpetGroupRef.current.rotation.x += deltaY * 0.008;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (autoRotate && carpetGroupRef.current && !isDragging) {
        carpetGroupRef.current.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

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
  }, [isLoading, carpetProducts.length, applyProductTexture]);

  // When activeProduct changes, apply texture
  useEffect(() => {
    if (activeProduct && topMeshRef.current) {
      applyProductTexture(activeProduct);
    }
  }, [activeProduct, applyProductTexture]);

  // Handler to select and switch product in 3D studio
  const handleSelectProduct = (prod: Product) => {
    if (activeProduct?.id === prod.id) return;
    setIsLoadingTexture(true);
    setActiveProduct(prod);
  };

  // Sync 3D Detailing Toggles (Fringe, Serging, Sprouting)
  useEffect(() => {
    if (fringeGroupRef.current) {
      fringeGroupRef.current.visible = enableFringe;
    }
    if (sergingGroupRef.current) {
      sergingGroupRef.current.visible = enableSerging;
    }
    if (sproutingMeshRef.current) {
      sproutingMeshRef.current.visible = enableSprouting;
    }
  }, [enableFringe, enableSerging, enableSprouting]);

  // Update Weave Material & Scale
  useEffect(() => {
    if (!carpetGroupRef.current || !topMeshRef.current || !bodyMeshRef.current) return;
    const topMat = topMeshRef.current.material as THREE.MeshStandardMaterial;
    const bodyMat = bodyMeshRef.current.material as THREE.MeshStandardMaterial;

    if (weaveType === 'plush') {
      topMat.roughness = 0.95;
      topMat.bumpScale = 0.045;
      bodyMat.roughness = 0.95;
      carpetGroupRef.current.scale.set(customWidth / 160, 1.4, customLength / 230);
    } else if (weaveType === 'washable') {
      topMat.roughness = 0.7;
      topMat.bumpScale = 0.015;
      bodyMat.roughness = 0.7;
      carpetGroupRef.current.scale.set(customWidth / 160, 0.8, customLength / 230);
    } else {
      topMat.roughness = 0.88;
      topMat.bumpScale = 0.03;
      bodyMat.roughness = 0.88;
      carpetGroupRef.current.scale.set(customWidth / 160, 1.0, customLength / 230);
    }

    topMat.needsUpdate = true;
    bodyMat.needsUpdate = true;
  }, [weaveType, customWidth, customLength]);

  // Update Lighting Atmosphere
  useEffect(() => {
    if (!dirLightRef.current || !ambientLightRef.current) return;
    if (lighting === 'sunset') {
      dirLightRef.current.color.setHex(0xffb87a);
      dirLightRef.current.intensity = 2.0;
      ambientLightRef.current.color.setHex(0xffedd6);
    } else if (lighting === 'cozy') {
      dirLightRef.current.color.setHex(0xffd59e);
      dirLightRef.current.intensity = 1.4;
      ambientLightRef.current.color.setHex(0xe8dcd0);
    } else {
      dirLightRef.current.color.setHex(0xfffbf0);
      dirLightRef.current.intensity = 1.9;
      ambientLightRef.current.color.setHex(0xffffff);
    }
  }, [lighting]);

  // Zoom controls
  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const factor = direction === 'in' ? 0.85 : 1.15;
    cameraRef.current.position.multiplyScalar(factor);
    cameraRef.current.position.clampLength(2.4, 9.5);
    cameraRef.current.updateProjectionMatrix();
  };

  // Reset 3D camera
  const handleResetCamera = () => {
    if (!cameraRef.current || !carpetGroupRef.current) return;
    cameraRef.current.position.set(0, 3.6, 4.6);
    cameraRef.current.lookAt(0, 0, 0);
    carpetGroupRef.current.rotation.set(0, 0, 0);
  };

  // Price Calculation based on dimensions & active product
  const basePrice = activeProduct ? activeProduct.price : 280;
  const calculatedPrice = Math.round((basePrice * (customWidth * customLength)) / (160 * 230));

  const handleOrder3DCarpet = () => {
    if (!activeProduct) return;

    const detailsSummary: string[] = [];
    if (enableFringe) detailsSummary.push('Warp Fringe / Tassels');
    if (enableSerging) detailsSummary.push('Edge Binding / Serging');
    if (enableSprouting) detailsSummary.push('Wool Sprouting / Fluffing');

    const customProduct: Product = {
      ...activeProduct,
      id: `3d-projected-${activeProduct.id}-${Date.now()}`,
      name: `3D Custom: ${activeProduct.name}`,
      price: calculatedPrice,
      sizes: [`${customWidth} x ${customLength} cm`],
      material: `${activeProduct.material} (${weaveType} weave, ${detailsSummary.join(', ') || 'Standard finish'})`,
      description: `3D-customized nursery & living rug based on "${activeProduct.name}". Dimensions ${customWidth}x${customLength} cm with ${weaveType} finish. Handcrafted details: ${detailsSummary.join(' + ') || 'Standard'}.`,
    };

    onAddToCart(
      customProduct,
      `${customWidth} x ${customLength} cm`,
      activeProduct.colors?.[0] || { name: 'Natural Wool', hex: '#FAF8F5' },
      `Organic Wool (${weaveType})`
    );
  };

  // Full Skeleton / Loader State while products are fetching (only if no products exist yet)
  if (isLoading && carpetProducts.length === 0) {
    return (
    <section id="carpet-3d-studio" className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-bold mb-2 bg-[#8EBBB0]/15 px-3.5 py-1 rounded-full">
            <RefreshCw size={13} className="animate-spin text-[#8EBBB0]" />
            <span>Synchronizing PlentyONE 3D Studio...</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-medium text-[#2D2B2A]">
            {t('studio3D.title')}
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 lg:p-8 border-2 border-dashed border-[#8EBBB0]/30 shadow-pillowy">
            <div className="lg:col-span-7 aspect-[4/3] bg-[#F7F3EB] rounded-2xl animate-pulse flex flex-col items-center justify-center gap-3 border border-[#EDE6DC]">
              <div className="w-12 h-12 rounded-2xl bg-[#8EBBB0]/20 flex items-center justify-center text-[#8EBBB0]">
                <Box size={24} className="animate-bounce" />
              </div>
              <p className="text-xs font-bold text-[#2D2B2A]">{t('studio3D.loadingStudio')}</p>
              <p className="text-[11px] text-[#9E9891]">{t('studio3D.loadingWarehouse')}</p>
            </div>

            <div className="lg:col-span-5 space-y-4 animate-pulse">
              <div className="h-6 bg-[#EDE6DC] rounded-lg w-1/2" />
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <div key={n} className="aspect-square bg-[#EDE6DC] rounded-xl" />
                ))}
              </div>
              <div className="h-10 bg-[#EDE6DC] rounded-xl w-full mt-4" />
              <div className="h-12 bg-[#EDE6DC] rounded-full w-full mt-4" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="carpet-3d-studio" className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8EBBB0] font-semibold mb-2 bg-[#8EBBB0]/15 px-3.5 py-1 rounded-full">
            <Sparkles size={14} className="text-[#8EBBB0]" />
            <span>{t('studio3D.badge')}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2D2B2A]">
            {t('studio3D.title')}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6B6661] max-w-md font-normal leading-relaxed">
          {t('studio3D.subtitle')}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-5 sm:p-8 border-2 border-dashed border-[#8EBBB0]/40 shadow-pillowy">
          
          {/* 3D WebGL Canvas Viewport */}
          <div className="lg:col-span-7 relative aspect-[4/3] bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#EDE6DC] group">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Loading Indicator when changing product images */}
            {isLoadingTexture && (
              <div className="absolute inset-0 bg-[#FDFBF7]/80 backdrop-blur-xs flex flex-col items-center justify-center gap-3 z-20 animate-fade-in">
                <div className="w-12 h-12 rounded-2xl bg-[#8EBBB0]/20 flex items-center justify-center text-[#8EBBB0] shadow-xs">
                  <RefreshCw size={22} className="animate-spin text-[#E79685]" />
                </div>
                <div className="text-center bg-white px-5 py-2.5 rounded-full border border-[#EDE6DC] shadow-md space-y-0.5">
                  <p className="text-xs font-bold text-[#2D2B2A] line-clamp-1">
                    {t('studio3D.projecting', { name: activeProduct?.name })}
                  </p>
                  <p className="text-[10px] text-[#8EBBB0] font-semibold tracking-wide">
                    {t('studio3D.mapping')}
                  </p>
                </div>
              </div>
            )}

            {/* Viewport Top Controls (Orbit, Zoom, Reset) */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 px-3 rounded-full backdrop-blur-md text-xs font-medium flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                  autoRotate ? 'bg-[#8EBBB0] text-white shadow-pillowy-sage' : 'bg-white/90 text-[#2D2B2A] hover:bg-white'
                }`}
                title={t('studio3D.autoOrbit')}
              >
                <RotateCw size={13} className={autoRotate ? 'animate-spin' : ''} />
                <span className="text-[11px] font-medium hidden sm:inline">{t('studio3D.autoOrbit')}</span>
              </button>

              <button
                onClick={() => handleZoom('in')}
                className="p-2 bg-white/90 hover:bg-white text-[#2D2B2A] rounded-full transition-all shadow-xs cursor-pointer"
                title={t('studio3D.zoomIn')}
              >
                <ZoomIn size={14} />
              </button>

              <button
                onClick={() => handleZoom('out')}
                className="p-2 bg-white/90 hover:bg-white text-[#2D2B2A] rounded-full transition-all shadow-xs cursor-pointer"
                title={t('studio3D.zoomOut')}
              >
                <ZoomOut size={14} />
              </button>

              <button
                onClick={handleResetCamera}
                className="p-2 bg-white/90 hover:bg-white text-[#2D2B2A] rounded-full transition-all shadow-xs cursor-pointer"
                title={t('studio3D.resetCamera')}
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Lighting Mood Switcher Overlay */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#EDE6DC] shadow-xs z-10">
              <button
                onClick={() => setLighting('daylight')}
                className={`p-1.5 px-2.5 rounded-full text-xs flex items-center gap-1 transition-all cursor-pointer ${
                  lighting === 'daylight' ? 'bg-[#8EBBB0] text-white font-medium shadow-xs' : 'text-[#6B6661] hover:text-[#2D2B2A]'
                }`}
                title={t('studio3D.daylight')}
              >
                <Sun size={14} />
                <span className="text-[10px] hidden md:inline">{t('studio3D.daylight')}</span>
              </button>
              <button
                onClick={() => setLighting('sunset')}
                className={`p-1.5 px-2.5 rounded-full text-xs flex items-center gap-1 transition-all cursor-pointer ${
                  lighting === 'sunset' ? 'bg-[#E5B769] text-white font-medium shadow-xs' : 'text-[#6B6661] hover:text-[#2D2B2A]'
                }`}
                title={t('studio3D.sunset')}
              >
                <Sparkles size={14} />
                <span className="text-[10px] hidden md:inline">{t('studio3D.sunset')}</span>
              </button>
              <button
                onClick={() => setLighting('cozy')}
                className={`p-1.5 px-2.5 rounded-full text-xs flex items-center gap-1 transition-all cursor-pointer ${
                  lighting === 'cozy' ? 'bg-[#B098BA] text-white font-medium shadow-xs' : 'text-[#6B6661] hover:text-[#2D2B2A]'
                }`}
                title={t('studio3D.nightlight')}
              >
                <Moon size={14} />
                <span className="text-[10px] hidden md:inline">{t('studio3D.nightlight')}</span>
              </button>
            </div>

            {/* Interactive Badge at Bottom */}
            <div className="absolute bottom-4 left-4 text-[11px] text-[#6B6661] bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#EDE6DC] pointer-events-none flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#8EBBB0] animate-ping" />
              <span>{t('studio3D.dragHint')}</span>
            </div>
          </div>

          {/* 3D Customizer Controls Panel */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. STORE PRODUCTS SELECTOR */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#6B6661] font-bold flex items-center gap-1.5">
                  <Layers size={14} className="text-[#8EBBB0]" />
                  <span>{t('studio3D.step1', { count: carpetProducts.length })}</span>
                </span>
                <span className="text-[11px] font-bold text-[#E79685]">
                  €{activeProduct?.price.toLocaleString()}
                </span>
              </div>

              {/* Active Product Name Banner */}
              {activeProduct && (
                <div className="p-3 bg-[#F7F3EB] rounded-2xl border border-[#EDE6DC] flex items-center gap-3">
                  <img
                    src={activeProduct.primaryImage}
                    alt={activeProduct.name}
                    className="w-12 h-12 rounded-xl object-contain p-1 bg-white border border-[#EDE6DC] shadow-xs shrink-0"
                  />
                  <div className="text-xs min-w-0">
                    <p className="font-bold text-[#2D2B2A] truncate">{activeProduct.name}</p>
                    <p className="text-[11px] text-[#8EBBB0] font-semibold mt-0.5">{activeProduct.material}</p>
                    <p className="text-[10px] text-[#9E9891]">{t('studio3D.step1Hint')}</p>
                  </div>
                </div>
              )}

              {/* Product Thumbnail Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 max-h-44 overflow-y-auto pr-1 no-scrollbar">
                {carpetProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod)}
                    className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer group bg-[#F7F3EB] ${
                      activeProduct?.id === prod.id
                        ? 'border-[#E79685] ring-2 ring-[#E79685]/30 scale-105 shadow-xs'
                        : 'border-[#EDE6DC] opacity-75 hover:opacity-100 hover:border-[#8EBBB0]'
                    }`}
                    title={prod.name}
                  >
                    <img
                      src={prod.primaryImage}
                      alt={prod.name}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                    {activeProduct?.id === prod.id && (
                      <div className="absolute top-1.5 right-1.5 bg-[#E79685] text-white p-0.5 rounded-full shadow-xs">
                        <CheckCircle2 size={12} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. WEAVE TEXTURE & SOFTNESS */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#6B6661] font-bold block mb-1.5">
                {t('studio3D.step2')}
              </span>
              <div className="flex gap-2">
                {[
                  { id: 'plush', label: t('studio3D.weavePlush') },
                  { id: 'loop', label: t('studio3D.weaveLoop') },
                  { id: 'washable', label: t('studio3D.weaveWashable') },
                ].map((wv) => (
                  <button
                    key={wv.id}
                    onClick={() => setWeaveType(wv.id as any)}
                    className={`flex-1 text-xs py-2 px-1.5 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      weaveType === wv.id
                        ? 'border-[#E79685] bg-[#E79685] text-white font-bold shadow-pillowy-coral'
                        : 'border-[#EDE6DC] bg-white text-[#6B6661] hover:border-[#E79685]'
                    }`}
                  >
                    {wv.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. ARTISAN 3D DETAILING (FRINGE, SERGING, SPROUTING) */}
            <div className="space-y-2 pt-2 border-t border-[#EDE6DC]">
              <span className="text-xs uppercase tracking-wider text-[#6B6661] font-bold block">
                {t('studio3D.detailsTitle', '3. Handwerks-Details & Haptik')}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* A. The Fringe / Tassels Toggle */}
                <button
                  onClick={() => setEnableFringe(!enableFringe)}
                  className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    enableFringe
                      ? 'bg-[#FAF8F5] border-[#E79685] shadow-xs'
                      : 'bg-white border-[#EDE6DC] opacity-70 hover:opacity-100'
                  }`}
                  title={t('studio3D.fringeDesc', 'Echte lose Fransen an den Enden')}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-lg bg-[#E79685]/15 flex items-center justify-center text-[#E79685]">
                      <Scissors size={13} />
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${enableFringe ? 'bg-[#E79685] text-white' : 'bg-gray-200 text-gray-600'}`}>
                      {enableFringe ? t('studio3D.enabled', 'Aktiv') : t('studio3D.disabled', 'Aus')}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2D2B2A] block leading-tight">
                      {t('studio3D.fringeTitle', 'Fransen (Tassels)')}
                    </span>
                    <span className="text-[10px] text-[#9E9891] line-clamp-1">
                      {t('studio3D.fringeDesc', 'Offene Kettfäden')}
                    </span>
                  </div>
                </button>

                {/* B. Binding / Serging Toggle */}
                <button
                  onClick={() => setEnableSerging(!enableSerging)}
                  className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    enableSerging
                      ? 'bg-[#FAF8F5] border-[#8EBBB0] shadow-xs'
                      : 'bg-white border-[#EDE6DC] opacity-70 hover:opacity-100'
                  }`}
                  title={t('studio3D.sergingDesc', 'Dicht umwickelte Bordüre')}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-lg bg-[#8EBBB0]/15 flex items-center justify-center text-[#8EBBB0]">
                      <Shield size={13} />
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${enableSerging ? 'bg-[#8EBBB0] text-white' : 'bg-gray-200 text-gray-600'}`}>
                      {enableSerging ? t('studio3D.enabled', 'Aktiv') : t('studio3D.disabled', 'Aus')}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2D2B2A] block leading-tight">
                      {t('studio3D.sergingTitle', 'Kettelung (Serging)')}
                    </span>
                    <span className="text-[10px] text-[#9E9891] line-clamp-1">
                      {t('studio3D.sergingDesc', 'Schutzkante')}
                    </span>
                  </div>
                </button>

                {/* C. Fluffing / Sprouting Toggle */}
                <button
                  onClick={() => setEnableSprouting(!enableSprouting)}
                  className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    enableSprouting
                      ? 'bg-[#FAF8F5] border-[#E5B769] shadow-xs'
                      : 'bg-white border-[#EDE6DC] opacity-70 hover:opacity-100'
                  }`}
                  title={t('studio3D.sproutingDesc', 'Fühlbare 3D-Wollfasern & Mikroflusen')}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-lg bg-[#E5B769]/15 flex items-center justify-center text-[#E5B769]">
                      <Feather size={13} />
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${enableSprouting ? 'bg-[#E5B769] text-white' : 'bg-gray-200 text-gray-600'}`}>
                      {enableSprouting ? t('studio3D.enabled', 'Aktiv') : t('studio3D.disabled', 'Aus')}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2D2B2A] block leading-tight">
                      {t('studio3D.sproutingTitle', 'Flor-Sprouting')}
                    </span>
                    <span className="text-[10px] text-[#9E9891] line-clamp-1">
                      {t('studio3D.sproutingDesc', '3D-Mikrofasern')}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* 4. CUSTOM DIMENSIONS */}
            <div className="space-y-2 pt-2 border-t border-[#EDE6DC]">
              <div className="flex justify-between items-center text-xs text-[#2D2B2A] font-medium">
                <span>{t('studio3D.dimensionsTitle')} <strong>{customWidth} x {customLength} cm</strong></span>
                <span className="text-[#E79685] font-heading text-xl font-bold">€{calculatedPrice.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#6B6661] font-semibold block mb-1">{t('studio3D.width')}: {customWidth} cm</label>
                  <input
                    type="range"
                    min="100"
                    max="260"
                    step="10"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    className="w-full accent-[#8EBBB0] cursor-pointer"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#6B6661] font-semibold block mb-1">{t('studio3D.length')}: {customLength} cm</label>
                  <input
                    type="range"
                    min="140"
                    max="350"
                    step="10"
                    value={customLength}
                    onChange={(e) => setCustomLength(Number(e.target.value))}
                    className="w-full accent-[#8EBBB0] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* ADD CUSTOM 3D CARPET TO CART */}
            <button
              onClick={handleOrder3DCarpet}
              className="w-full bg-[#E79685] hover:bg-[#D47B68] text-white py-3.5 text-xs uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2.5 transition-all shadow-pillowy-coral hover:scale-[1.02] cursor-pointer"
            >
              <ShoppingBag size={16} />
              <span>{t('studio3D.orderButton', { price: `€${calculatedPrice.toLocaleString()}` })}</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
