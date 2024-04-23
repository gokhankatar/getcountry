/* eslint-disable */
const fetchData = {
    data() {
        return {
            name: '',
            dataList: [],
            isLoading: false,
            isError: false,
            isActiveInfo: false,
        };
    },
    methods: {
        async onKeyUpData() {
            this.isActiveInput = true;
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 500);

            try {
                const result = await (await fetch('https://restcountries.com/v3.1/all')).json();

                const filteredCountries = result.filter((item) => {
                    const countryName = item.name.common.toLowerCase();
                    return countryName.startsWith(this.name.toLowerCase());
                });

                if ((this.name.trim() === '') || (this.name.trim().length < 2)) {
                    this.dataList = [];
                } else if (filteredCountries && filteredCountries.length > 0) {
                    filteredCountries.forEach((item) => {
                        if (!this.dataList.some((existingItem) => existingItem.name.common === item.name.common)) {
                            this.dataList.push(item);
                        }
                    });
                } else {
                    this.dataList = [];
                    this.isError = false;
                }
            } catch (error) {
                this.isError = true;
            } finally {
                this.isLoading = false;
            }
        },

    },
};

export default fetchData;
