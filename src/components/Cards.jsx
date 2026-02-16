import Card from "./Card"

import sedanIcon from "../assets/icons/icon-sedans.svg"
import suvIcon from "../assets/icons/icon-suvs.svg"
import luxuryIcon from "../assets/icons/icon-luxury.svg"

function Cards() {
  return (
    <section className="cards">
      <Card
        icon={sedanIcon}
        title="SEDANS"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        color="orange"
      />

      <Card
        icon={suvIcon}
        title="SUVS"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        color="cyan"
      />

      <Card
        icon={luxuryIcon}
        title="LUXURY"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        color="dark"
      />
    </section>
  )
}

export default Cards
