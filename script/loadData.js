//wishList
const wishList = ['idd68', 'idd69', 'idd70', 'idd71',];
//cart
    const cartList = [
        {
            id: 'idd023',
            count: 1
        },
        {
            id: 'idd024',
            count: 2
        },
        {
            id: 'idd025',
            count: 4
        },
    ];

export const loadData = () => {
    //First step of search
    if (location.search){
        //Decode link name into readable format 
        const search = decodeURI(location.search);
        console.log(search);
        //Divide search on before equal sign and after
        const prop = search.split('=')[0];
        
        const value = search.split('=')[1];
    }
    //Second step of search
    if (location.hash){
        console.log('hash');
    }
    //Third day of search
    if (location.pathname.includes('cart')){
        console.log('cart');
    }
};

