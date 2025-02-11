# Juego de Sorteo de Amigos

Este es un pequeño juego interactivo en JavaScript que permite agregar nombres de amigos a una lista, y luego realizar un sorteo de manera aleatoria para elegir a un "amigo invisible". El juego evita que se repitan nombres y se reinicia automáticamente una vez que todos los nombres han sido sorteados.

## Funcionalidades

1. **Agregar Amigos**:
    - Los usuarios pueden agregar nombres a la lista de amigos ingresándolos en un campo de texto y presionando un botón.
    - Si el nombre ya está en la lista, se muestra un mensaje de alerta y el campo de texto se limpia para que el usuario ingrese otro nombre.
    - Si el nombre es válido, se agrega a la lista y el campo de texto se limpia automáticamente.

2. **Sorteo de Amigos**:
    - Al hacer clic en el botón de "Sorteo", el juego selecciona aleatoriamente un nombre de la lista de amigos que aún no haya sido sorteado.
    - El nombre sorteado se muestra en un área de resultados en la página.
    - El nombre sorteado se marca como "sorteado" para evitar que se repita en futuros sorteos.

3. **Finalización del Juego**:
    - Cuando todos los nombres hayan sido sorteados, se muestra un mensaje indicando que el juego ha terminado.
    - El juego se reinicia automáticamente: la lista de amigos y la lista de nombres sorteados se limpian, permitiendo que el usuario comience de nuevo.

4. **Reinicio del Juego**:
    - Después de que todos los amigos han sido sorteados, el juego se reinicia automáticamente, permitiendo a los usuarios ingresar nuevos nombres y comenzar un nuevo ciclo de sorteos.

## Tecnologías utilizadas

- **HTML**: Estructura de la página.
- **CSS**: Estilos básicos para la presentación visual (puedes agregar tus propios estilos si lo deseas).
- **JavaScript**: Lógica del juego (agregar amigos, sortear aleatoriamente, y gestionar el flujo del juego).

## Instrucciones de uso

1. Abre el archivo HTML en tu navegador.
2. Ingresa nombres en el campo de texto y presiona el botón "Agregar amigo" para añadirlos a la lista.
3. Cuando todos los nombres hayan sido ingresados, haz clic en el botón "Sortear amigo" para elegir aleatoriamente un nombre.
4. El juego se reiniciará automáticamente cuando todos los nombres hayan sido sorteados.

## Características adicionales

- Evita nombres repetidos: El sistema previene que un nombre se agregue varias veces.
- Interactividad: El juego responde rápidamente a las interacciones del usuario y actualiza la lista de amigos en la interfaz.

## Futuras mejoras

- **Interfaz de usuario más elaborada**: Mejorar el diseño visual con más estilos CSS.
- **Incluir temporizadores o animaciones**: Para hacer más entretenido el proceso de sorteo.
- **Guardar lista de amigos**: Permitir que los usuarios guarden y carguen listas de amigos.
