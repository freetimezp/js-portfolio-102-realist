import './Socials.css';

import { socialHandles } from '../../sources';

const Socials = () => {
    return (
        <div className='handles-container'>
            {socialHandles.map((handle, index) => (
                <a href={handle.link} key={index} className='flex-center icon-wrapper'>
                    {handle.icon}
                </a>
            ))}
        </div>
    )
}

export default Socials;






















