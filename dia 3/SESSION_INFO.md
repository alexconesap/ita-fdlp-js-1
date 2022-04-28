# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

> IT Academy - Barcelona Activa

## Sessió 3

- Exercicis 1 - 4 (9:00 - 12:15)

- CADENES

  - `You have selected ${expressio} option(s).`

- Events

- Separació (no VUE/React/...) de responsabilitats dels programadors: HTML / Scripting

```HTML
<input id="boto" type="button" onclick='la_meva_funcio' value="Executar">

<script>
  function la_meva_funcio() {
    alert("Hello World");
  }
</script>
```

Vs: "separation of concerns"

```HTML
<input id="boto" type="button" value="Executar">
```

```javascript
<script>
  let boto = document.getElementById("boto");
  boto.addEventListener("click", la_meva_funcio);

  function la_meva_funcio() {
    alert("Hello World");
  }
</script>
```

## Exercicis

- https://docs.google.com/presentation/d/1OPdaO5lH3GfiR5DvMrsQpuTcv1WgHNAldjfieublWqU/edit#slide=id.p
