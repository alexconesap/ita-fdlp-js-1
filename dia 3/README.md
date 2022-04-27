# FONAMENTS DE LA PROGRAMACIÓ AMB JAVASCRIPT

> IT Academy - Barcelona Activa

## Sessió 3

- Exercicis 1 - 4 (9:00 - 12:15)

- CADENES

  - `You have selected ${expressio} option(s).`

- Events

- Separació de responsabilitats: HTML / Scripting

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

- Condicionals més a fons

  - https://itacademy.barcelonactiva.cat/course/view.php?id=78&section=2

  - https://github.com/AraManjon/fdlp-2/blob/master/estructures-condicionals/condicionals-bones-practiques.md

- Estructures repetitives i arrays

  - https://itacademy.barcelonactiva.cat/course/view.php?id=78&section=3

## Exercicis

- https://docs.google.com/presentation/d/1OPdaO5lH3GfiR5DvMrsQpuTcv1WgHNAldjfieublWqU/edit#slide=id.p
