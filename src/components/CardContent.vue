<script>
/* eslint-disable */
import MoreInfo from "./MoreInfo.vue";

export default {
    name: 'CountryContent',
    props: ['item', 'cName', 'cCapital', 'cTime', 'cRegion', 'cPop'],
    components: { MoreInfo }
}
</script>

<template>
    <div class="card-content">
        <p><strong>Name : </strong> {{ cName }}</p>
        <p><strong>Capital : </strong> {{ cCapital }}</p>
        <p><strong>Timezone : </strong> {{ cTime }}</p>
        <p><strong>Region : </strong> {{ cRegion }}</p>
        <p><strong>Population : </strong>{{ cPop }}</p>
    </div>
    <MoreInfo :item="item" />
</template>

<style>
.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: .2rem;

    padding: .5rem 1rem;
    font-size: .9rem;
    color: var(--colorPrimary);
}

@media screen and (max-width:600px) {
    .card-content {
        font-size: 1.2rem;
        gap: .5rem;
    }
}

@media screen and (max-width:480px) {
    .card-content {
        justify-content: center;
        align-items: center;
    }
}
</style>