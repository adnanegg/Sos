export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <img src="/logo.svg" alt="logo2" />
          <p>
            SOS Rabat Ambulance est un service spécialisé dans le transport sanitaire des patients nécessitant des soins et un transport adapté à leur état de santé. Que ce soit en urgence ou pour des consultations médicales, nous offrons un transport médicalisé sécurisé grâce à une flotte d'ambulances et de VSL (véhicules sanitaires légers).
          </p>
        </div>

        <div className="right">
          <h3>
            {" "}
            All Rights Reserved <a href="https://www.ambulancerabatsale.com/" target="_self">Ambulance Rabat/Salé</a> ©
          </h3>
          <h3>
            {" "}
            Developed and Maintained By <a href="https://webinadigital.com/" target="_blank">Webina Digital</a> ©
          </h3>
        </div>
      </div>
    </footer>
  );
}


