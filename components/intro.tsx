import Image from 'next/image'

type Props={
    title:string,
    url_logo:string
    text1:string
    text2?:string
}
export const Intro = ({title,url_logo,text1,text2}:Props)=>{
    
    return (
        <div className="intro">
            
            <div className="bg_intro" >
                <Image layout="responsive" width="200" height="200" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAB5JREFUOE9jZKAQMFKon2HUAIbRMAAmotF0MBjCAAAmmAARpxPWkQAAAABJRU5ErkJggg==" src='/img/api.svg' alt={title} />
            </div>
            
            <h1 itemProp="name" >{title}</h1>

            <div className="container_img">
                <Image className="image_intro" width={250} height={200} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAB5JREFUOE9jZKAQMFKon2HUAIbRMAAmotF0MBjCAAAmmAARpxPWkQAAAABJRU5ErkJggg=="  src={url_logo} alt={title} />
            
            </div>

            <div>
                <p dangerouslySetInnerHTML={{__html:text1}} >
                </p>
                <p dangerouslySetInnerHTML={{__html:text2?text2:''}} >
                </p>
            </div>
            <style jsx  >
                {
                    `
                    .intro{
                        display: grid;
                        grid-template-columns:1fr;
                        place-content:center;
                        place-items:center;
                        position:relative;
                        padding:30px 0;
                    }
                    .bg_intro{
                        z-index:-2;
                        opacity:0.2;
                        position:absolute;
                        width:200px;
                        height:200px;
                    }
                    .intro > h1{
                        margin:20px auto;
                        color:var(--primary-color);

                    }
                    .container_img,.intro > h1,p{
                        text-align: center;
                    }
                    p{
                        padding:10px;
                        margin:10px auto;
                        font-size:1.2em;
                    }
                    
                    @media(min-width:810px){
                        .intro{
                            grid-template-columns:260px 1fr;
                        }
                        .intro > h1{
                            grid-column:1 / span 2;
                        }
                    }
                    @media(min-width:1080px){
                        .intro{
                            grid-template-columns:300px 1fr;
                        }
                    }
                    `
                }
            </style>
        </div>
    )
}