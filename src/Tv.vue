<template>
    <div>
        <tv/>
        <footer1/>
    </div>
</template>


<script>
import tv from "./components/tv.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        tv,
        footer1
    }

}
</script>