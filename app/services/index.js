function Services(){{
    this.arr = [];

    this.getListProductsApi = function(){{
        return axios({
            url: "https://628b9962667aea3a3e32d1df.mockapi.io/API/tabula",
            method: "GET",
        });


    }};

    this.deleteProductApi = function(id){
        return axios({
            url: `https://628b9962667aea3a3e32d1df.mockapi.io/API/tabula/${id}`,
            method: "DELETE",
        });
    };


    this.addProductApi = function(product){
        return axios({
            url: "https://628b9962667aea3a3e32d1df.mockapi.io/API/tabula",
            method: "POST",
            data: product,
        });
    };
          

    this.getProductById = function(id){
        return axios({
        url: `https://628b9962667aea3a3e32d1df.mockapi.io/API/tabula/${id}`,
        method: "GET",
        });
    };

    this.updateProductApi = function(product){
        return axios({
            url: `https://628b9962667aea3a3e32d1df.mockapi.io/API/tabula/${product.id}`,
            method: "PUT",
            data: product,
        })
    }
    
}}