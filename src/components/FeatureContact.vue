<script>
/* eslint-disable */
export default {
    name: 'FeatureContact'
}
</script>

<template>
    <div class="feature-container">
        <div class="left">
            <i class="fa-regular fa-comments"></i>
        </div>
        <div class="right">
            <h3>Communication</h3>
            <p>Since the project is open source, you can not only contribute to the project but also quickly communicate
                with me whenever you want. You can also exchange ideas for future projects.</p>
        </div>
    </div>
</template>

<style scoped>
.feature-container {
    display: flex;
    border: none;
    border-radius: 2.5rem;
    background: rgba(255, 255, 255, .2);
    height: 75%;
    width: 100%;
}

.feature-container:hover {
    box-shadow: 0 0 2rem var(--colorBlue);
}

.feature-container:hover i {
    color: var(--colorBlue);
}

.feature-container:hover h3 {
    color: var(--colorBlue);
}

.feature-container:hover p {
    color: #fff;
}

.left {
    flex: 0 40%;
    display: flex;
    justify-content: center;
    align-self: center;
}

@media screen and (max-width:600px) {
    .left {
        flex: 0 20%;
        height: 100%;
        width: 100%;
        padding: .5rem 0 0;
    }
}


i {
    font-size: 10rem;
    color: #fff;
    transition: all .4s ease-in;
}

i:hover {
    color: var(--colorBlue);
    scale: 1.2;
}

.right {
    flex: 1;
    padding: 1.5rem .5rem 0 0;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem
}

@media screen and (max-width:600px) {
    .right {
        padding: 0 .5rem;
        justify-content: center;
        align-items: center
    }
}

h3 {
    color: #fff;
    font-size: 3rem
}

p {
    color: #89878f;
    font-size: 1.5rem;
    letter-spacing: 1px;
}
</style>