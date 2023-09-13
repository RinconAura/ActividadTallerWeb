<script setup>
//export default{
 //   props: {//definir los atributos o propiedades
//        numero:Object
//    }
//}
const props = defineProps({
    numero: Object
});
</script>
<template>
    <p>Numero: {{ numero }}</p>
</template>
