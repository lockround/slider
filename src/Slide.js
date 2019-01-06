import React, {useState,useEffect} from 'react';

function Slide({title,content,img}){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        document.title = width;
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[width]);
    return <div style={{
                backgroundImage:`url(${img})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                height:'500px',
                color:'white'
            }}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
}

export default Slide;