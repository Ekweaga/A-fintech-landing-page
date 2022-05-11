import React ,{useState,useEffect} from 'react'
import bg from './images/bg-intro-desktop.svg';
import './navbar.css';
import closes from './images/icon-close.svg'
import ham from './images/icon-hamburger.svg'

function Navbar() {
    const [toggle,settoogle] = useState(false);
  const [close,setclose] = useState(true);
  const [open,setopen] = useState(false);
  const [screenwidth, setscreenwidth] = useState(window.innerWidth)
  const tooglenav=()=>{
    settoogle(true)
    setclose(false)
    setopen(true)
  }
  const toogleclose = ()=>{
    settoogle(false);
    setclose(true)
    setopen(false)
  }
  useEffect(()=>{
    const changewidth = ()=>{
      setscreenwidth(window.innerWidth)
    }
    window.addEventListener('resize',changewidth)
  },[])
  return (
    <>
       
        <nav>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'50px'}}>
            <img src={bg} style={{width:'30px'}}/>GoBank
        </div>
          {(toggle || screenwidth > 500) && (<ul>
            <li style={{textDecoration:'none'}}>
           Home
            </li>
            <li style={{textDecoration:'none'}}>
              Services
            </li>
            <li style={{textDecoration:'none'}}>
              Contact
            </li>
            <li>
            Blog 
            </li>
         
          </ul>)}
        {open &&(<button className='ham' onClick={toogleclose}><img src={closes} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)}  
        {close &&(<button className='close' onClick={tooglenav}> <img src={ham} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)} 
          </nav>
       
  
   </>
      
  )
}

export default Navbar;