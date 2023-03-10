import Image from 'next/image'
import dwa_image from './img/logo.png'

type Props={
    color?:string,
    width?:number,
    height?:number
}
export const Icon_Menu = ({width,height,color}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><title>ionicons-v5-j</title><line x1="80" y1="160" x2="432" y2="160" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeMiterlimit:10,strokeWidth:'32px'}}/><line x1="80" y1="256" x2="432" y2="256" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeMiterlimit:10,strokeWidth:'32px'}}/><line x1="80" y1="352" x2="432" y2="352" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeMiterlimit:10,strokeWidth:'32px'}}/></svg>
    )
}

export const Arrow_circle = ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><title>ionicons-v5-a</title><polyline points="176 262.62 256 342 336 262.62" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><line x1="256" y1="330.97" x2="256" y2="170" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill:'none',stroke:color?color:'white',strokeMiterlimit:10,strokeWidth:'32px'}}/></svg>
    )
}

export const Icon_Code_Slash = ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><title>ionicons-v5-m</title><polyline points="160 368 32 256 160 144" style={{fill:'none',stroke:color?color:'rgb(80, 95, 228)',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><polyline points="352 368 480 256 352 144" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><line x1="304" y1="96" x2="208" y2="416" style={{fill:'none',stroke:color?color:'rgb(80, 95, 228)',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
    )
}

export const Icon_Blog = ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><title>ionicons-v5-l</title><rect x="96" y="48" width="320" height="416" rx="48" ry="48" style={{fill:'none',stroke:color?color:'white',strokeLinejoin:'round',strokeWidth:'32px'}}/><line x1="176" y1="128" x2="336" y2="128" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><line x1="176" y1="208" x2="336" y2="208" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><line x1="176" y1="288" x2="256" y2="288" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
    )
}

export const Facebook = ({color,width,height}:Props)=>{
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} x="0px" y="0px" viewBox="0 0 512 512" >
        <path style={{fillRule:'evenodd',clipRule:'evenodd',fill:color?color:'white',}} d="M480,257.35c0-123.7-100.3-224-224-224s-224,100.3-224,224
            c0,111.8,81.9,204.47,189,221.29V322.12h-56.89v-64.77H221v-49.36c0-56.13,33.45-87.16,84.61-87.16c24.51,0,50.15,4.38,50.15,4.38
            v55.13h-28.26c-27.81,0-36.51,17.26-36.51,35v42.02h62.12l-9.92,64.77h-52.2v156.53C398.1,461.85,480,369.18,480,257.35L480,257.35z
            "/>
        </svg>
    )
}

export const Instagram = ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><path style={{fill:color?color:'white'}} d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/><path style={{fill:color?color:'white'}} d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/><path style={{fill:color?color:'white'}} d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/></svg>
    )
}
export const Mail = ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" style={{fill:'none',stroke:color?color:"white",strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><polyline points="112 160 256 272 400 160" style={{fill:'none',stroke:color?color:"white",strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
    )
}
export const Mobile = ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" style={{fill:"none",stroke:color?color:"white",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/><path d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24" style={{fill:"none",stroke:color?color:"white",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/></svg>
    )
}
export const Pwa = ({color,height,width}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><path style={{fill:color?color:'white'}} d="M330.7,352l77.72-192H356.9L303.74,284.07,265.93,160H226.32L185.74,284.07l-28.63-56.53L131.21,307l26.3,45h50.7l36.68-111.27,35,111.27Z"/><path style={{fill:color?color:'white'}} d="M48.79,286.09H80.44a93.39,93.39,0,0,0,25.62-3.21l8.18-25.19,22.88-70.39a55.75,55.75,0,0,0-6-7.82Q113.54,160,79.59,160H0V352H48.79Zm41.9-81.92q6.89,6.92,6.88,18.52t-6,18.53q-6.64,7.62-24.44,7.61H48.79V197.25H67.21q16.59,0,23.48,6.92ZM376.85,317.61l14.79-37.25h42.69l-20.26-56.51L439.41,160,512,352H458.47l-12.4-34.39Z"/></svg>
    )
}
export const Cube= ({width,height,color}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><path d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z" style={{fill:'none',stroke:color?color:"white",strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><polyline points="69 153.99 256 263.99 443 153.99" style={{fill:'none',stroke:color?color:"white",strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><line x1="256" y1="463.99" x2="256" y2="263.99" style={{fill:'none',stroke:color?color:"white",strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
    )
}


export const Home= ({color,width,height}:Props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><title>ionicons-v5-i</title><path d="M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><path d="M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/><polyline points="400 179 400 64 352 64 352 133" style={{fill:'none',stroke:color?color:'white',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}/></svg>
    )
}
export const IconDwa = ({width,height}:Props)=>{
    return (
        <Image placeholder={width && width>41?"blur":"empty"} width={width?width:100} height={height?height:100} src={dwa_image} alt="Diaz web app" />
    )
}
export const IconHTML5 = ({width,height,color}:Props)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={width?width:24} height={height?height:24} viewBox="0 0 512 512"><path style={{fill:color?color:'white'}} d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z"/></svg>
    )
}