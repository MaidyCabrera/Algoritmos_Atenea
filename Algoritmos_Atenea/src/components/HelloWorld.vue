<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
  </div>
  <div>
    <div style="background: #99ccff; padding: 10px">
      <h4>¿Quieres ser saludado por mi?</h4>
      <form>
        <section class="columna-izquierda">
          <h3>Escribe aqui tu nombre:</h3>
          <input type="text" id="nombre" />
        </section>

        <section class="columna-derecha">
          <button @click="saludo()">Saludar</button>
          <br />
          <span id="mensaje"></span>
        </section>
      </form>
    </div>
  </div>
  <br />
  <div>
    <div style="background: #fff3ff; padding: 10px">
      <h4>Media de 3 números</h4>
      <form>
        <section class="columna-izquierda">
          <h6>Ingrese su primer número</h6>
          <input type="text" id="x" />
          <br />
          <h6>Ingrese su segundo número</h6>
          <input type="text" id="y" />
          <br />
          <h6>Ingrese su tercer número</h6>
          <input type="text" id="z" />
          <br />
        </section>

        <section class="columna-derecha">
          <input type="button" value="Calcular resultado" @click="media" />
          <br />
          <input type="text" id="resultado" />
          <br />
        </section>
      </form>
    </div>
  </div>
  <br />
  <div>
    <div style="background: #ccc; padding: 10px">
      <h4>Ejercicio de fìsica</h4>
      <span>Dos vehículos viajan a diferentes velocidades (v1 y v2) y están
        distanciados por una distancia d. El que está detrás viaja a una
        velocidad mayor. Se pide hacer un algoritmo para ingresar la distancia
        entre los dos vehículos (km) y sus respectivas velocidades (km/h) y con
        esto determinar y mostrar en qué tiempo (minutos) alcanzará el vehículo
        más rápido al otro.</span>
      <form>
        <section class="columna-izquierda">
          <h6>Ingrese la velocidad del vehículo 1 (km/h)</h6>
          <input type="text" id="v1" />
          <br />
          <h6>Ingrese la velocidad del vehículo 2 (km/h)</h6>
          <input type="text" id="v2" />
          <br />
          <h6>Distancia (km)</h6>
          <input type="text" id="d" />
          <br />
        </section>

        <section class="columna-derecha">
          <h6>
            El tiempo (min) en que alcanzará el vehículo más rápido al otro es:
          </h6>
          <input type="button" value="Calcular" @click="velocidad" />
          <br />
          <input type="text" id="tiempo_final_resultado" />
          <br />
        </section>
      </form>
    </div>
  </div>
  <br />

  <br>
  <div>
    <div style="background: #aaa; padding: 10px">
      <h4>Factorial</h4>
      <span>Calcula el factorial de un nùmero.</span>
      <form>
        <section class="columna-izquierda">
          <h6>Ingrese el número al que desea calcularle su factorial</h6>
          <input type="text" name="n" id="n" />
          <br />
          <button @click="factorial"> Calcular</button>
        </section>
      </form>
      <section class="columna-derecha">
        <h6>
          El resultado es:
        </h6>
        <br />
        <input type="text" id="factorial" />
        <br />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    saludo() {
      let nombre = document.getElementById("nombre").value;
      document.getElementById("mensaje").innerHTML = "¡Hola " + nombre + "!";
    },
    media() {
      let x = parseFloat(document.getElementById("x").value);
      let y = parseFloat(document.getElementById("y").value);
      let z = parseFloat(document.getElementById("z").value);

      let promedio = (x + y + z) / 3;
      document.getElementById("resultado").value = promedio.toFixed(2);
    },
    velocidad() {
      let velocidad_1 = parseFloat(document.getElementById("v1").value);
      let velocidad_v2 = parseFloat(document.getElementById("v2").value);
      let distancia = parseFloat(document.getElementById("d").value);

      let tiempo = distancia / (velocidad_1 - velocidad_v2);
      let tiempo_final = tiempo * 60;

      document.getElementById("factorial").value =
        tiempo_final.toFixed(2);
    },
    factorial() {
      let n = parseInt(document.getElementById('n').value);
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      document.getElementById("factorial").value = factorial;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

h4 {
  font: 1.5em/1.5em "handwriting", cursive, sans-serif;
}

h6 {
  margin-bottom: 3px;
}

h3,
h6,
input {
  font: 1em/1.5em "handwriting", cursive, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
}

section {
  width: 50%;
  display: inline-block;
}

.columna-izquierda {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.columna-derecha {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

input,
h6 {
  text-align: left;
}
</style>
