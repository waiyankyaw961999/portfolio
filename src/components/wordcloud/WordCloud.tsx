import * as React from "react";
import { Cloud, renderSimpleIcon, ICloud } from "react-icon-cloud";
const allIcons = require("simple-icons");

export default function WordCloud() {
  const [background, setBackground] = React.useState("#fff");

  const options: ICloud["options"] = {
    // activateAudio: string
    // activeCursor: string
    // altImage: boolean
    // animTiming: 'Smooth' | 'Linear'
    // audioIcon: boolean
    // audioIconDark: boolean
    // audioIconSize: number
    // audioIconThickness: number
    // audioVolume: number
    // bgColor: null | string
    // bgOutlineThickness: number
    // bgRadius: number
    // centreFunc: any
    // centreImage: any
    clickToFront: 500,
    // decel: number
    depth: 1,
    // dragControl: boolean
    // dragThreshold: number
    // fadeIn: number
    // freezeActive: boolean
    // freezeDecel: boolean
    // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 2,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.1, -0.1],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    // maxSpeed: number
    // minBrightness: number
    // minSpeed: number
    // minTags: 0 - 200
    // noMouse: boolean
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: "#0000",
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    // pinchZoom: boolean
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: number
    // radiusY: number
    // radiusZ: number
    // repeatTagsTags: 0 - 64
    reverse: true,
    // scrollPause: boolean
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
    // shuffleTags: boolean
    // splitWidth: number
    // stretchX: number
    // stretchY: number
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    tooltip: "native", // null | 'div'
    // tooltipClass: string
    tooltipDelay: 0,
    // txtOpt: boolean
    // txtScale: number
    // weight: boolean
    // weightFrom: any
    // weightGradient: any
    // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
    // weightSize: number
    // weightSizeMax: number | null
    // weightSizeMin: number | null
    wheelZoom: false,
    // zoom: number
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
  };
  const toggleBg = () => {
    if (background === "#fff") {
      setBackground("#000");
      return;
    }
    setBackground("#fff");
  };

  const containerProps: ICloud["containerProps"] = {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  };

  const IconATags = [
    "typescript",
    "php",
    "laravel",
    "python",
    "javascript",
    "react",
    "html5",
    "css3",
    "postgresql",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "mysql",
    "sqlite",
    "wordpress",
    "bootstrap",
    "ubuntu",
  ].map((s) =>
    renderSimpleIcon({
      icon: allIcons.Get(s),
      minContrastRatio: 1.2,
      bgHex: "#ffffff",
      size: 42,
      fallbackHex: "#000",
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    })
  );
  // const rootStyle: React.CSSProperties = {
  //   background,
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   height: "100vh",
  //   position: "absolute",
  // };

  const canvasProps: ICloud["canvasProps"] = {};

  // https://www.goat1000.com/tagcanvas-options.php

  console.log("WordCloud Render");

  return (
    <Cloud
      containerProps={containerProps}
      canvasProps={canvasProps}
      options={options}
    >
      {IconATags}
    </Cloud>
  );
}
