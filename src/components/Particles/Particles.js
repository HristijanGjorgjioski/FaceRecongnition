import Particles from 'react-particles-js'

import './Particles.css'

const particleParams = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500,
      },
    },
  },
}

const ParticleComponent = () => {
    return <Particles className="particles" params={particleParams} />
}

export default ParticleComponent
