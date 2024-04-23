<script>
/* eslint-disable */
import fetchData from "@/mixins/fetchData";

export default {
    name: 'BigDataCountry',
    props: ['country'],
    mixins: [fetchData],
}
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="left">
                <img :src="country.flags.png" id="flag">
            </div>
            <div class="right">
                <p><strong>Name : </strong> {{ country.name.common }}</p>
                <p><strong>Capital : </strong> {{ country.capital[0] }}</p>
                <p><strong>Timezone : </strong> {{ country.timezones[0] }}</p>
                <p><strong>Region : </strong> {{ country.region }}</p>
                <p><strong>Population : </strong>{{ country.population }}</p>
                <ul><strong>Neighboring countries : </strong>
                    <li v-for="item of country.borders" :key="item">{{ item }}</li>
                </ul>
                <ul><strong>Languages : </strong>
                    <li v-for="item of country.languages" :key="item">{{ item }}</li>
                </ul>
                <ul><strong>Currencies : </strong>
                    <li v-for="item of country.currencies" :key="item">{{ item.name }} <strong>{{ item.symbol ?
                        item.symbol
                        : ''
                            }}</strong></li>
                </ul>
                <p><strong>Area : </strong>{{ country.area }}</p>
                <p><strong>Vehicles drive on the : </strong>{{ country.car.side }}</p>
                <p><strong>The day the week starts : </strong>{{ country.startOfWeek }}</p>
                <p class="coats"><strong>Coat of arm : </strong> <img :src="country.coatOfArms.png" id="coat"> </p>
                <a :href="country.maps.googleMaps" target="_blank" class="link"><strong>See on google maps</strong></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    height: 100vh;
    padding-top: 12rem;
}

.container {
    width: 100%;
    padding: 0 1.5rem;
    height: 80vh;
    display: flex;
    flex-direction: row;
}

@media screen and (max-width:1000px) {
    .container {
        flex-direction: column;
        padding-top: 10rem;
    }
}

strong {
    text-wrap: nowrap;
}

.left {
    flex: 0 40%;
    height: 55%;
    border: none;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
}

@media screen and (max-width:1550px) {
    .left {
        height: 40%;
    }
}

#flag {
    height: 100%;
    border-radius: 1.5rem;
    box-shadow: 0 0 1.5rem var(--colorPrimary);
}

@media screen and (max-width:1550px) {
    #flag {
        width: 89%;
    }
}

@media screen and (max-width:951px) {
    #flag {
        width: 100%;
    }
}

@media screen and (max-width:600px) {
    #flag {
        height: 70%;
    }
}

@media screen and (max-width:500px) {
    #flag {
        height: 75%;
    }
}

.right {
    flex: 0 29%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: var(--colorPrimary);
}

@media screen and (max-width:951px) {
    .right {
        width: 90%;
    }
}

@media screen and (max-width:951px) {
    p {
        font-size: 1.5rem;
    }
}

ul {
    display: flex;
    list-style-type: none;
}

li {
    margin: 0 .5rem;
}

@media screen and (max-width:951px) {
    li {
        font-size: 1.5rem;
    }

    strong {
        font-size: 1.5rem;
    }
}

.link {
    text-decoration: none;
    color: var(--colorPrimary);
    transition: all .2s ease-in;
    text-decoration: none;
}

.link:hover {
    text-decoration: none;
    color: var(--colorBlue);
}

.coats {
    display: flex;
    align-items: center;
    gap: .5rem;
}

#coat {
    width: 2.5rem;
}
</style>