import React, { useRef, useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
// import "../../Products/ProductList.css";
import Help from "./Help";
const ModelViewer = ({ item, addToWishlist, removeFromWishlist, wishlist }) => {
  const [display, setDisplay] = useState(false);
  const [ARSupported, setARSupported] = useState(false);
  const [annotate, setAnnotate] = useState(false);
  
  let modelViewer1 = {
    backgroundColor: " #ecf0f3",
    overflowX: "hidden",
    posterColor: "#eee",
    width: "100%",
    height: ARSupported ? "85%" : "75%",
    borderRadius: 15,
  };
  
  // Accessing product for full screen start
  const model = useRef();

  // Accessing varient selections element
  const varient = useRef(null);

  console.log(item)

  function toggle() {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
  }
  // Full screen code end


  const handleAnnotateClick = (annotation) => {
    const { target, position } = annotation;
    model.current.cameraTarget = position;
    model.current.orbit = target
  }

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setARSupported(true);
    }
  }, []);

  useEffect(() => {
    // set up event listeners
    const modelViewer = model.current
    modelViewer &&
    modelViewer.addEventListener('load', () => {
      console.log('loaded')
      const availableVariants = modelViewer?.availableVariants;
      console.log(availableVariants)
      for (const variant of availableVariants) {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        varient?.current?.appendChild(option);
      }

      // Adding a default option
      const defaultOption = document.createElement('option');
      defaultOption.value = 'Default';
      defaultOption.textContent = 'Default';
      varient?.current?.appendChild(defaultOption);
    });

    varient?.current?.addEventListener('input', (event) => {
      modelViewer.variantName = event.target.value === 'Default' ? null : event.target.value;
    });
  }, []);
   
  useEffect(() => {
  }, [item, wishlist]);

  return (
    <div className="model-view">
      <model-viewer
        key={item.id}
        ref={model}
        style={modelViewer1}
        src={item.modelSrc}
        ios-src={item.iOSSrc}
        alt="A 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate

      >

        {ARSupported && (
          <button slot="ar-button" className="arbutton">
            View in your space
          </button>
        )}

        <button className="fullscreen-btn" onClick={toggle}>
          &#x26F6;<span>full screen</span>
        </button>
        {display ? (
          <>
            <button
              className={document.fullscreenElement ? "close fz" : "close"}
              onClick={() => setDisplay(false)}
            >
              &#10006;
            </button>
            <Help />
          </>
        ) : (
          <>
            <button className="help-btn" onClick={() => setDisplay(true)}>
              ?<span>help</span>
            </button>
          </>
        )}
        
        <button className="annotate-btn" onClick={() => setAnnotate((prevState) => !prevState)}>
          i
        </button>

        {annotate && item.annotations.map((annotate, idx) => (
          <button
            key={idx}
            class="Hotspot"
            slot={annotate.slot}
            data-position={annotate.position}
            data-normal={annotate.normal}
            data-orbit={annotate.orbit}
            data-target={annotate.target}
            data-visibility-attribute="visible"
            onClick={() => handleAnnotateClick(annotate)}
          >
            <div class="HotspotAnnotation">{annotate.title}</div>
          </button>
        ))}
        
        <div class="controls variant_div">
          <select ref={varient} id="variant"></select>
        </div>

      </model-viewer>
        
      <LazyLoad>
        {/* Card content below the model-viewer */}
        <div className="qr-sec">
          <div className="product-details">
            <div>
              <div className="pname">{item.name}</div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ModelViewer;
