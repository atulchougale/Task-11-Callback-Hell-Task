var contanier = document.getElementById('container')
setTimeout(() => {
    contanier.innerHTML = `<p style=" color: #ff5e00;">10</p>`;
    setTimeout(() => {
        contanier.innerHTML = `<p style=" color: #ff5e00;">9</p>`;
        setTimeout(() => {
            contanier.innerHTML = `<p style=" color: #ff5e00;">8</p>`;
            setTimeout(() => {
                contanier.innerHTML = `<p style=" color: white;">7</p>`;
                setTimeout(() => {
                    contanier.innerHTML = `<p style="  color:blue;">6</p>`;
                    setTimeout(() => {
                        contanier.innerHTML = `<p style=" color: white;">5</p>`;
                        setTimeout(() => {
                            contanier.innerHTML = `<p style=" color:green;">4</p>`;
                            setTimeout(() => {
                                contanier.innerHTML = `<p style=" color:green;">3</p>`;
                                setTimeout(() => {
                                    contanier.innerHTML = `<p style=" color:green;">2</p>`;
                                    setTimeout(() => {
                                        contanier.innerHTML = `<p style=" color: #ff5e00;">1</p>`;
                                        setTimeout(() => {
                                            contanier.innerHTML = `<p style="font-size:80px ;font-weight:900; "><span style="color: #ff5e00;">HAPPY</span>  <span style="color:white;">INDEP<span style="color:blue;">END</span>ENCE</span>  <span style="color:green;">DAY</span> </p>`;
                                            
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},0);



