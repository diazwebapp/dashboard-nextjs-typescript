import { WP_POST } from '../interfaces/wp_posts'
import Link from 'next/link'
import Image from 'next/image'

type Props={
    posts:WP_POST[]
}
export const Blog_grid = ({posts}:Props)=>{
    
    return (
        <div className="blog_grid">
            {
                posts.map((post,i:number)=>{
                    return(
                        <Link key={i} href={post.link.replace(`${process.env.API}`,`${process.env.DOMAIN}`).replace("/todos","")}>
                            <a href={post.link.replace(`${process.env.API}`,`${process.env.DOMAIN}`).replace("/todos","")} title={post.title.rendered}>
                                
                                    <Image layout='fixed' 
                                        alt={post.title.rendered}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAB5JREFUOE9jZKAQMFKon2HUAIbRMAAmotF0MBjCAAAmmAARpxPWkQAAAABJRU5ErkJggg=="
                                        width={300} 
                                        height={300} 
                                        src={post._embedded['wp:featuredmedia']?post._embedded['wp:featuredmedia'][0].source_url:'/logo512.png'}
                                    />
                                <span>
                                  <h2>{post.title.rendered}</h2> 
                                  <p>{post.excerpt.rendered.replace("<p>","").replace("</p>","")}</p> 
                                </span>                                
                            </a>
                        </Link>
                    )
                })
            }
            <style jsx  >
                {
                    `div{
                        display:grid;
                        grid-template-columns:1fr;
                        grid-auto-rows:240px;
                        gap:3px;
                        background:rgba(0,0,0, .4);
                        padding:3px;
                    }
                    div a{
                        width:100%;
                        height:100%;
                        position:relative;
                        background:var(--secondary-color);
                        overflow:hidden;
                    }
                    div h2{
                        padding:5px;
                        text-transform:capitalize;
                        font-weight:bold;
                        max-height:80px;
                        overflow:hidden;
                        font-size:24px;
                    }
                    div p{
                        padding:10px 10px 5px 10px;
                    }
                    div a span{
                        position:absolute;
                        top:65%;
                        left:0;
                        right:0;
                        bottom:0;
                        background:rgba(0,0,0, .8);
                    }
                    div a:hover span{
                        top:0;
                    }
                    
                    @media(min-width:640px){
                        div{
                            grid-template-columns:repeat(2,1fr);
                        }
                    }
                    @media(min-width:820px){
                        div{
                            grid-template-columns:${posts.length > 2?'repeat(3,1fr)':'repeat(2,1fr)'};
                        }
                    }
                    @media(min-width:960px){
                        div{
                            grid-template-columns:${posts.length > 2?'repeat(4,1fr)':'repeat(2,1fr)'};
                        }
                        div a {
                            max-width:500px;
                            margin:auto;
                        }
                    }
                    `
                }
            </style>
        </div>
    )
}