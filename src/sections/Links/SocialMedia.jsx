import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
 const contactIcon =[
    {
        id: 1, Link: 'https://www.instagram.com/bene_tesla/', icon: <AiOutlineInstagram className='social-icon' />
    },
    {
        id: 2, Link: 'https://twitter.com/BenevanioS', icon: <AiOutlineTwitter className='social-icon' />
    },
    {
        id: 3, Link: 'https://www.linkedin.com/in/bene-tesla/', icon: <AiOutlineLinkedin className='social-icon' />
    },
    {
        id: 4, Link: 'https://github.com/benetesla' , icon: <AiFillGithub className='social-icon' />
    },
    {
        id: 5, Link: 'https://wa.me/551999529851', icon: <BsWhatsapp className='social-icon' />
    },
]
export default contactIcon