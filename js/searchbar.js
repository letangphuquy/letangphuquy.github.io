const generic_search = (searchboxID, itemsListID, itemSelector) => {
    const searchbox = document.getElementById(searchboxID).value.toUpperCase()
    const itemsList = document.getElementById(itemsListID)
    const item = document.querySelectorAll(itemSelector)
    const productname = itemsList.getElementsByTagName("h3")

    let countMatch = 0;
    for(var i = 0; i < productname.length; i++) {
        let content = item[i].getElementsByTagName('h3')[0];

        if (content) {
            let textValue = content.textContent || content.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1) {
                item[i].style.display = "";
                ++countMatch;
            } else {
                item[i].style.display = "none";
            }
        }
    }
    console.log(countMatch);
    let noMatch = document.getElementById("no-result");
    if (countMatch == 0) {
        noMatch.style.display = "block";
        document.documentElement.style.background = "var(--bg-color)";
    }
    else {
        noMatch.style.display = "none";
        document.documentElement.style.background = "var(--curtain-color)";
    }
}

const search = () => {
    generic_search("search-item", "blog-container", ".blog-box");
}

const search_shop = () => {
    generic_search("search-item-shop", "products-list", "#products-list .product");
}