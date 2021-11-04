import React, { useState } from "react"
import slugify from 'slugify'
import "./styles.scss"

const Particle = ({ mujeres }) => {    
    const [clicked, setClicked] = useState(null);
    const handleClick = (link) => {
        //mobile
        if(window.innerWidth < 600) {
          if (clicked && clicked === link) {
            window.location.href = link
          } else {
            setClicked(link)
          }
        // desktop
        } else {
          window.location.href = link
        }
    }
    return (
        <div className="sky">
            {
                 mujeres.map(({node: { title, page } }) => {
                   if (page) {
                    const link = `/mujer/${slugify(title)}`;
                      return ( 
                        <React.Fragment key={title}>
                            <div className="dot" onClick={() => handleClick(link)}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_d_509:1403)">
                                <path d="M14.0165 18C13.8919 17.551 13.7814 17.1431 13.6638 16.7376C13.5895 16.4414 13.4912 16.1516 13.37 15.8713C13.2006 15.5158 12.9545 15.2023 12.6495 14.9533C12.3444 14.7043 11.9879 14.526 11.6056 14.4314L10.1528 14.0353C10.114 14.0247 10.0752 14.0106 10 13.9871C10.382 13.8836 10.7288 13.7896 11.0755 13.6932C11.494 13.5757 11.9242 13.4922 12.3015 13.2618C12.6133 13.0799 12.8862 12.8384 13.1046 12.551C13.323 12.2636 13.4827 11.936 13.5745 11.5868C13.7026 11.1167 13.8343 10.6465 13.9647 10.1704C13.9765 10.1269 13.9918 10.0846 14.0188 10C14.1105 10.3268 14.1928 10.6171 14.2727 10.9063C14.3385 11.1413 14.4008 11.3764 14.4666 11.6115C14.6355 12.2398 15.0253 12.7861 15.5645 13.1502C15.9512 13.4193 16.3991 13.551 16.8575 13.6638C17.2395 13.7579 17.618 13.8695 18 13.9988L16.9962 14.2751C16.7153 14.3538 16.4273 14.4161 16.1557 14.5207C15.744 14.6681 15.3748 14.9143 15.0805 15.2377C14.7862 15.5611 14.5758 15.9518 14.4678 16.3756C14.315 16.9057 14.1728 17.4323 14.0165 18Z" fill="#FFF"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_509:1403" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_509:1403"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_509:1403" result="shape"/>
                                </filter>
                                </defs>
                              </svg>

                              <span className="text has-text-white">{title}</span>
                            </div>
                        </React.Fragment>
                      )
                    }
                   }
                )
            }
        </div>
    )         
}

export default Particle
