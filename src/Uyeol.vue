<template>
    <div>
        <uyeol/>
        <footer1/>
    </div>
</template>

<script>
import uyeol from "./components/uyeol.vue"
import footer1 from "./components/footer1.vue"

export default {
    name:"app",
    components: {
        uyeol,
        footer1
    }

}
</script>