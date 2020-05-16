<template>
    <header class="header header--primary">
        <div class="header__title">
            <a href="#" class="header__link">{{ title }}</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    }
}
</script>

<style lang='scss'>
.header {
    @include flex($justify: center, $align: center);

    margin-bottom: 25px;
    height: $header__heigth;
}

.header--primary {
    background-color: $bg-color__primary;
}

.header__title {
    @include general();
    @include font(30, bold);
    
    padding-left: 15px;
}

.header__link {
    color: $color__primary;
    text-decoration: none;
}

.header__link:active {
    color: $color__primary;
}
</style>