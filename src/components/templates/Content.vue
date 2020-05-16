<template>
    <div class="content">
        <Main />
    </div>
</template>

<script>
import Main from '../Main/Main'

export default {
    name: 'Content',
    components: {
        Main
    }
}
</script>

<style lang='scss'>
.content {
    @include flex($justify: center);
    text-align: center;
}
</style>