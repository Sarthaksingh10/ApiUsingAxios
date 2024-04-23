const express = require('express');


const app= express();

app.get('/api/products', (req,res)=>{

     const products=[
        {name: "Apple", Image: "https://www.pexels.com/photo/red-and-orange-apple-fruit-102104/", price: "$1", id: 1  },
        {name: "Dragonfruit", Image: "https://www.pexels.com/photo/woman-holding-dragonfruit-14641773/", price: "$1", id: 2  },
        {name: "Passionfruit", Image: "https://www.pexels.com/photo/passionfruit-ice-creams-5060432/", price: "$2", id: 3  },
        {name: "Spinach", Image: "https://www.pexels.com/photo/bowl-of-spinach-2325843/", price: "$2", id: 4 },
        {name: "Pumpkin", Image: "https://www.pexels.com/photo/abundance-of-halloween-pumpkins-9969267/", price: "$4", id: 5 },
        {name: "Peas", Image: "https://www.pexels.com/photo/green-peas-768090/", price: "$1", id: 6  }
      ]

      if (req.query.search) {
        const filterproducts=products.filter(products=>
            products.name.includes(req.query.search))
            res.send(filterproducts)
            return;   
         }
    setTimeout(() => {
        res.send(products)
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});