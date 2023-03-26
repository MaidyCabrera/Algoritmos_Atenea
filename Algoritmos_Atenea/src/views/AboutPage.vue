<template>
  <section class="navbar">
    <div style="padding-right: 100px; padding-bottom: 60px">
      <a href="https://www.linkedin.com/in/maidycabrera/" target="_blank"
        ><i class="fa fa-fw fa-home"></i>Home
      </a>
      <a href="#"><i class="fa fa-fw fa-search"></i> Contact</a>
      <a href="#"><i class="fa fa-fw fa-user"></i> About</a>
      <a
        href="https://www.instagram.com/maidycabrera/"
        class="fa fa-instagram"
        target="_blank"
      ></a>
      <a
        href="https://www.facebook.com/maidy.cabrera/"
        target="_blank"
        class="fa fa-facebook"
      ></a>
      <a
        href="https://github.com/MaidyCabrera/"
        target="_blank"
        class="fa fa-github"
      ></a>
      <a
        href="https://www.linkedin.com/in/maidycabrera/"
        target="_blank"
        class="fa fa-linkedin"
      ></a>
    </div>
  </section>

  <header class="header">
    <section class="header-name">
      <div class="header-name-content">
        <h1 style="font-size: 64px">Maidy <br />Cabrera Penna</h1>
        <br />
        <h5
          style="
            font-size: 20px;
            font-family: Verdana;
            font-weight: normal;
            padding-button: 0px;
          "
        >
          MSc. Student, Electronics Engineering | Physical Engineer <br />
          Frontend Developer | Software Engineer | Web Developer
        </h5>
        <h6 style="font-size: 18px; font-weight: normal">
          Bogotá, DC, Colombia .
        </h6>
      </div>
    </section>

    <section class="header-imagen">
      <img
        :src="yo"
        alt="Mi imagen"
        style="max-width: 500px; heigkt:500px;"
      />
    </section>
  </header>

  <hr class="separator separator--dots" />

  <section class="" style="background: #ffe0e9">
    <div class="button-content">
      <div class="menu" style="background: white; weigth: 100%">
        <button
          class="menu__item"
          @click="openPage('Page1', $event, 'white')"
          :class="{ active: activeTab === 'Page1' }"
        >
          Experience
        </button>

        <button
          class="menu__item"
          @click="openPage('Page2', $event, 'white')"
          :class="{ active: activeTab === 'Page2' }"
        >
          About Me
        </button>

        <button
          class="menu__item"
          style="--bgColorItem: #4343f5"
          @click="openPage('Page3', $event, 'white')"
          :class="{ active: activeTab === 'Page3' }"
        >
          Education
        </button>
      </div>
    </div>

    <div
      id="Page1"
      class="tabcontent"
      :style="{ display: activeTab === 'Page1' ? 'block' : 'none' }"
    >
      <div>
        <div class="boxInformations">
          <div class="containerBox">
            <img
              src="https://www.comparapps.com/wp-content/uploads/2020/01/Logo-Siigo.png"
              alt="Avatar"
              style="width: 90px"
            />
            <p>
              <span style="font-weight: bold">Front End Developer</span> <br />
              Siigo · Full-time
            </p>
            <p>dec. 2021, up to now</p>
            <p>
              <span style="font-weight: bold; font-size: 16px">Skills</span
              >stencil · Azure DevOps · TypeScript · Agile Methodologies · JIRA
              · AngularJS · React.js · Git · GitHub · JavaScript
            </p>
          </div>
        </div>

        <div class="boxInformations">
          <div class="containerBox">
            <img
              src="https://play-lh.googleusercontent.com/Tw_9rpatp1Tt2brBTz24eiiQjRN0fPjQXVS6MvxpCfBVU5v4EmbBGL9Sy59Lz03Z8UQ"
              alt="Avatar"
              style="width: 90px"
            />
            <p>
              <span style="font-weight: bold">Graduate Teaching Assistant</span>
              <br />
              University of the Andes · Part-time
            </p>
            <p>jan. 2020 - Dec. 2021</p>
            <p>
              <span style="font-weight: bold; font-size: 16px">Skills</span
              >Electronic Engineering · Microelectronics · Teaching · LaTeX
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="Page2"
      class="tabcontent"
      :style="{ display: activeTab === 'Page2' ? 'block' : 'none' }"
    >
      <div style="font-size: 18px; font-weight: normal">
        <div>
          <div
            class="boxInformations"
            style="
              margin-left: 20px;
              margin-right: 250px;
              padding: 50px;
              gap: 30px;
            "
          >
            <div class="width:60%;">
              <span
                >I am an engineer with a passion for software engineering and
                microelectronics.
              </span>
              <br />
              <br />
              <span>
                I have a strong knowledge of programming languages such as HTML,
                CSS, and JavaScript, as well as skills in tools like TypeScript,
                Angular and Git.
              </span>
            </div>
            <div class="width:40%; border-radius:20%">
              <img
                :src="dos"
                alt="Mi imagen"
                style="width: 200px; height:180px; border-radius: 50%"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            class="boxInformations"
            style="
              margin-left: 250px;
              margin-right: 20px;
              padding: 50px;
              gap: 30px;
            "
          >
            <div class="width:40%; border-radius:20%">
              <img
                src="https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/304784182_10216719258933688_7786996967170551248_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tHH0skhQoTQAX8HlMEb&_nc_ht=scontent.fbog3-2.fna&oh=00_AfDg7pampI6vbKGXLjlIMQnio_6gusjPwnXbfTc__kfskg&oe=641BA668"
                alt="Avatar"
                style="width: 200px; border-radius: 50%"
              />
            </div>
            <div class="width:60%;">
              <span>Lover of life, friends, nature, and animals. </span>
            </div>
          </div>
        </div>

        <div>
          <div
            class="boxInformations"
            style="
              margin-left: 20px;
              margin-right: 250px;
              padding: 50px;
              gap: 30px;
            "
          >
            <div class="width:60%;">
              <span
                >I am highly skilled in interpersonal abilities and can work
                effectively in interdisciplinary teams. I have a great
                analytical capacity and can learn quickly, which allows me to
                stay up-to-date with the latest technological advances and
                development tools.
              </span>
            </div>
            <div class="width:40%; border-radius:20%">
              <img
                :src="one"
                alt="Mi imagen"
                style="width: 250px; height: 250px; border-radius: 50%"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            class="boxInformations"
            style="
              margin-left: 250px;
              margin-right: 20px;
              padding: 50px;
              gap: 30px;
            "
          >
            <div class="width:40%; border-radius:20%">
              <img
                :src="tres"
                alt="Mi imagen"
                style="width: 200px; height:200px; border-radius: 50%"
              />
            </div>
            <div class="width:60%;">
              <span>
                I am passionate about acquiring new skills and knowledge and am
                always looking for opportunities to grow professionally and
                contribute to the success of challenging projects.
              </span>
            </div>
          </div>
        </div>

        <div>
          <div
            class="boxInformations"
            style="
              margin-left: 20px;
              margin-right: 250px;
              padding: 50px;
              gap: 30px;
            "
          >
            <div class="width:60%;">
              <span>
                My experience also includes managing and developing projects in
                various areas, which are available on my
                <a href="https://github.com/MaidyCabrera">GitHub repository</a>.
              </span>
            </div>
            <div class="width:40%; border-radius:20%">
              <img
                :src="siete"
                alt="Mi imagen"
                style="width: 200px; height:200px; border-radius: 50%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div
      id="Page3"
      class="tabcontent"
      :style="{ display: activeTab === 'Page3' ? 'block' : 'none' }"
    >
      <div>
        <div class="boxInformations">
          <div class="containerBox">
            <img
              src="https://play-lh.googleusercontent.com/Tw_9rpatp1Tt2brBTz24eiiQjRN0fPjQXVS6MvxpCfBVU5v4EmbBGL9Sy59Lz03Z8UQ"
              alt="Avatar"
              style="width: 100px; height: 100px"
            />
            <p>
              <span style="font-weight: bold"
                >Master's, Electronic and Computer Engineering</span
              >
              <br />
              University of the Andes
            </p>
            <p>jan. 2020 - sep. 2023</p>
          </div>
        </div>

        <div class="boxInformations">
          <div class="containerBox">
            <img
              src="https://www.masfamilia.org/wp-content/uploads/2021/12/Certificado-en-conciliacion-Universidad-Javeriana.jpg"
              alt="Avatar"
              style="width: 100px; height: 100px"
            />
            <p>
              <span style="font-weight: bold">
                Diploma Back End Web Developer</span
              >
              <br />
              Javeriana Pontifical University
            </p>
            <p>feb. 2023, sep. 2023</p>
            <router-link to="/ejercicios">Ejercicios</router-link>
            <router-link to="/calculadora">Calculadora</router-link>
          </div>
        </div>

        <div class="boxInformations">
          <div class="containerBox">
            <img
              src="https://www.udea.edu.co/wps/wcm/connect/udea/ec2cedfa-9646-4397-9e09-ecc7548c996c/5/Logos%C3%ADmbolo-vertical.jpg?MOD=AJPERES"
              alt="Avatar"
              style="width: 100px; height: 100px"
            />
            <p>
              <span style="font-weight: bold">
                Programming Skill Training Program</span
              >
              <br />
              University of Antioquia
            </p>
            <p>jan. 2021, dec. 2021</p>
          </div>
        </div>

        <div class="boxInformations">
          <div class="containerBox">
            <img
              src="http://portal.unicauca.edu.co/versionP/sites/default/files/images/ESCUDO2.jpg"
              alt="Avatar"
              style="width: 100px; height: 100px"
            />
            <p>
              <span style="font-weight: bold">
                Bachelor's Degree Physical Engineering</span
              >
              <br />
              University of Cauca
            </p>
            <p>aug. 2013, jun. 2019</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="column1" style="background-color: black; color: white">
      <div class="about">
        <h3 style="padding-left: 30px">WEBSITE CREDITS</h3>
        <h4 style="padding-left: 30px; margin-bottom: 1px">
          Elaboration of the website
        </h4>
        <p style="padding-left: 30px; margin-top: 1px; font-size: 12px">
          Maidy Lucila Cabrera Penna <br />
          m.cabrerap@uniandes.edu.co -
          <a
            href="https://www.linkedin.com/in/maidycabrera/"
            target="_blank"
            class="fa fa-linkedin"
            style="color: white"
            >&nbsp;&nbsp;LinkedIn
          </a>
        </p>

        <h6 style="padding-left: 30px; margin-bottom: 1px">
          Icons and documentation:
        </h6>
        <p
          style="
            padding-left: 30px;
            font-size: 12px;
            margin-top: 1px;
            margin-bottom: 1px;
          "
        >
          The icons are from
          <a
            href="https://fontawesome.com/license"
            target="_blank"
            rel="noopener"
            >Font Awesome</a
          >
        </p>
        <p style="padding-left: 30px; font-size: 12px; margin-top: 1px">
          Documentation Based in
          <a href="https://www.w3schools.com" target="_blank" rel="noopener"
            >W3Schools</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>


<script>
import miImagen from "@/assets/mi-imagen.jpg";
import one from "@/assets/1.jpeg";
import dos from "@/assets/2.jpg";
import tres from "@/assets/3.jpg";
import cuatro from "@/assets/4.jpg";
import cinco from "@/assets/5.jpg";
import siete from "@/assets/7.jpg";
import yo from "@/assets/Yo.jpg";

export default {
  name: "MiComponente",
  data() {
    return {
      miImagen: miImagen,
      one: one,
      dos: dos,
      tres: tres,
      cuatro: cuatro,
      cinco: cinco,
      siete: siete,
      yo: yo,
      activeTab: "Page2",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.openPage(
        this.activeTab,
        document.getElementById("defaultOpen"),
        "red"
      );
    });
  },
  methods: {
    openPage(pageName, event, color) {
      // Hide all elements with class="tabcontent" by default
      const tabcontents = document.getElementsByClassName("tabcontent");
      for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
      }

      // Remove the background color of all tablinks/buttons
      const tablinks = document.getElementsByClassName("tablink");
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }

      // Show the specific tab content
      const pageElement = document.getElementById(pageName);
      if (pageElement) {
        pageElement.style.display = "block";
      }

      // Add the specific color to the button used to open the tab content
      event.target.style.backgroundColor = color;

      // Update the active tab
      this.activeTab = pageName;
    },
  },
};
</script>

<style>
* {
  font-family: Sans-serif;
}

.navbar {
  width: 100%;
  background-color: white;
  overflow: auto;
}

.navbar a {
  float: right;
  padding-left: 30px;
  padding: 14px;
  color: #555;
  text-decoration: none;
  font-size: 17px;
  align-content: center;
}

.navbar a:hover {
  background-color: pink;
}

.active {
  background-color: pink;
}

@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}

.header {
  display: flex;
  width: 100%;
  height: 500px;
  background: white;
  margin: 0px;
}

.header-imagen {
  display: flex;
  width: 50%;
  justify-content: center;
  padding: 15px;
}

.header-name {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 50px;
}

.header-name-content {
  display: block;
}

hr {
  margin: 12px 0;
  border: 0;
  text-align: center;
  color: pink;
}

hr::before {
  content: "\2022 \2022 \2022";
  font-size: 50px;
}

.button-content {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 22px;
}

.menu {
  width: 600px;
  margin: 0;
  display: flex;
  /* Works well with 100% width  */
  font-size: 20px;
  /* position: relative; */
  align-items: center;
  justify-content: center;
  background-color: var(--bgColorMenu);
  margin-left: 50px;
  margin-right: 50px;
}

.menu__item {
  background: white;
  all: unset;
  flex-grow: 1;
  z-index: 100;
  display: flex;
  cursor: pointer;
  position: relative;
  /* border-radius: 50%; */
  align-items: center;
  will-change: transform;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  transition: transform var(--timeOut, var(--duration));
}

.menu__item.active {
  transform: translate3d(0, -0.8em, 0);
  font-weight: bold;
}

.menu__item.active::before {
  transform: scale(1);
  background-color: var(--bgColorItem);
}

@keyframes strok {
  100% {
    stroke-dashoffset: 400;
  }
}

.menu__border {
  left: 0;
  bottom: 99%;
  width: 10.9em;
  height: 2.4em;
  position: absolute;
  clip-path: url(#menu);
  will-change: transform;
  background-color: var(--bgColorMenu);
  transition: transform var(--timeOut, var(--duration));
}

@media screen and (max-width: 50em) {
  .menu {
    font-size: 0.8em;
  }
}

.containerBox {
  width: 80%;
  border-bottom: 2px solid pink;
  background-color: #ffe0e9;
  border-radius: 5px;
  padding: 24px;
  margin: 30px 0;
}

.containerBox::after {
  content: "";
  clear: both;
  display: table;
}

.containerBox img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}

.containerBox span {
  font-size: 20px;
  margin-right: 15px;
}

@media (max-width: 500px) {
  .containerBox {
    text-align: center;
  }
  .containerBox img {
    margin: auto;
    float: none;
    display: block;
  }
}

.boxInformations {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>