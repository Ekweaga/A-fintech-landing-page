import React ,{useState,useEffect} from 'react'
import bg from './images/bg-intro-desktop.svg';
import './navbar.css';
import close from './images/icon-close.svg'
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
    <div className='nav'>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={bg} style={{width:'30px'}}/>GoBank
        </div>
        <nav>{/*(toggle || screenwidth > 500) && (<ul>
            <li style={{color:'white',textDecoration:'none'}}>
           Home
            </li>
            <li style={{color:'white',textDecoration:'none'}}>
              Services
            </li>
            <li style={{color:'white',textDecoration:'none'}}>
              Contact
            </li>
            <li>
            Blog 
            </li>
         
          </ul>)}
        {close &&(<button className='ham' onClick={tooglenav}><img src={close} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)}  
        {open &&(<button className='close' onClick={toogleclose}> <img src={ham} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)*/} 
          </nav>
       
    </div>
      
  )
}

export default Navbar;