import React from "react"
import slugify from 'slugify'
import "./styles.scss"

const Particle = ({ mujeres }) => {
    const handleClick = (link) => {
        window.location.href = link
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
                              <span className="text has-text-white"><span className="is-uppercase has-text-weight-bold">{title}</span></span>
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
